<template>
  <div class="py-upload">
    <div
      class="py-upload__item"
      :class="drapClass"
      @click.stop="inputClick"
      @dragover.prevent="drapFile = true;"
      @dragleave.prevent="drapFile = false;"
      @drop.prevent="onDrop"
    >
      <input type="file" ref="input" :multiple="multiple" :accept="accept" @change="fileChange" />
      <slot></slot>
    </div>
    <uploadList
      @on-remove="onRemove"
      :onClickItem="onClickItem"
      :on-before-remove="onbeforeRemove"
      :files="fileList"
    />
  </div>
</template>

<script>
import ajax from './ajax';
import uploadList from './upload-list.vue';

export default {
  name: 'py-upload',
  data() {
    return {
      fileList: [],
      crrentFile: this.value,
      drapFile: false,
      drapClass: '',
    };
  },
  components: { uploadList },
  watch: {
    crrentFile(fileList) {
      this.$emit('input', fileList);
    },
    value: {
      immediate: true,
      handler() {
        if (this.value.length) {
          this.value.map(item => {
            let Item = item;
            if (Item.name && Item.url) {
              Item = Object.assign(Item, {
                percentage: 100,
                status: 'success',
                uid: Item.name + Date.now(),
              });
            }
            return Item;
          });
          this.fileList = this.value;
        } else {
          this.fileList = [];
        }
      },
    },
    drapFile: {
      immediate: true,
      handler() {
        if (this.type !== 'drap') return false;
        this.drapClass = this.drapFile ? 'py-upload__drap py-upload__drapover' : 'py-upload__drap';
        return true;
      },
    },
  },
  methods: {
    inputClick() {
      this.$refs.input.click();
    },
    // 拖拽
    onDrop(e) {
      this.dragOver = false;
      this.fileChange(e.dataTransfer.files);
    },
    // 删除fileList文件
    onRemove(item, index) {
      this.fileList.splice(index, 1);
      this.$emit('on-remove', item, index);
    },
    // 监听文件选择框change事件
    fileChange(e) {
      const Files = e.target ? e.target.files : e;
      if (!Files) {
        return false;
      }
      this.drapFile = false;
      for (let i = 0; i < Files.length; i += 1) {
        const File = {
          status: 'status',
          name: Files[i].name,
          size: Files[i].size,
          percentage: 0,
          uid: Files[i].name + Date.now(),
          showProgress: true,
        };
        this.fileList.push(File);
        this.fileSelect(File, this.fileList);
      }
      this.$refs.input.value = null;
      return null;
    },
    // 选择上传的文件
    fileSelect(file, fileList) {
      if (this.beforeSelect(file, fileList) === false) {
        return false;
      }
      return this.fileFormat(file, fileList);
    },
    // 验证文件后缀格式
    fileFormat(file, fileList) {
      if (this.format.length <= 0) {
        this.fileMaxSize(file, fileList);
        return false;
      }
      const name = file.name ? file.name.split('.') : [];
      const fileType = name[name.length - 1];
      if (this.format.indexOf(fileType) === -1) {
        this.onFormatErr(file, fileList);
        return false;
      }
      return this.fileMaxSize(this.format, file, fileList);
    },
    // 验证文件大小
    fileMaxSize(file, fileList) {
      if (this.maxSize !== undefined) {
        if (file.size > this.maxSize * 1024) {
          this.onSizeErr(file, fileList);
          return false;
        }
      }
      return this.beforeUpload(file, fileList);
    },
    // 上传之前
    beforeUpload(file, fileList) {
      if (!this.onBeforeUpload) {
        return this.fileStart(file);
      }
      const beforeFn = this.onBeforeUpload(file);
      if (beforeFn && beforeFn.then) {
        beforeFn.then(
          processedFile => {
            if (Object.prototype.toString.call(processedFile) === '[object File]') {
              this.fileStart(processedFile, fileList);
            } else {
              this.fileStart(file, fileList);
            }
          },
          err => {
            this.handleError(err, file);
          },
        );
      } else if (beforeFn !== false) {
        this.fileStart(file, fileList);
      } else {
        this.handleError('', file);
      }
      return this.fileStart(file, fileList);
    },
    // 开始上传文件
    fileStart(file, fileList) {
      if (!this.action) {
        this.onError('上传地址必填', file, fileList);
        return false;
      }
      const File = this.getFile(file);
      const formData = new FormData();
      formData.append(this.name, File);
      ajax({
        headers: this.headers,
        // cookie
        withCredentials: this.withCredentials,
        file: File,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.handleProgress(e, File);
        },
        onSuccess: res => {
          this.handleSuccess(res, File);
        },
        onError: err => {
          this.handleError(err, File);
        },
      });
      return true;
    },
    // 返回数组中同一对象
    getFile(file) {
      const FileList = this.fileList;
      let target;
      FileList.every(item => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    // 上传中
    handleProgress(e, file) {
      const File = file;
      File.status = 'progress';
      File.percentage = parseInt(e.percent, 10) || 1;
      this.onProgress(e, File, this.fileList);
    },
    // 上传成功回调response
    handleSuccess(res, file) {
      const File = file;
      File.status = 'success';
      File.percentage = 100;
      this.onSuccess(res, File, this.fileList);
      this.crrentFile = this.fileList;
      setTimeout(() => {
        File.showProgress = false;
      }, 1000);
    },
    // 上传失败
    handleError(err, file) {
      const File = file;
      File.status = 'fail';
      File.percentage = 100;
      this.onError(err, File, this.fileList);
    },
  },
  props: {
    accept: [String],
    maxSize: [Number],
    action: [String],
    beforeSelect: {
      type: Function,
      default: () => {},
    },
    onSizeErr: {
      type: Function,
      default: () => {},
    },
    onFormatErr: {
      type: Function,
      default: () => {},
    },
    onProgress: {
      type: Function,
      default: () => {},
    },
    onSuccess: {
      type: Function,
      default: () => {},
    },
    onError: {
      type: Function,
      default: () => {},
    },
    value: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'select',
    },
    onbeforeRemove: {
      type: Function,
      default: () => {},
    },
    onClickItem: {
      type: Function,
      default: () => {},
    },
    onBeforeUpload: {
      type: Function,
      default: () => {},
    },
    data: [Object],
    format: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    headers: {
      type: Object,
      default: () => {},
    },
    withCredentials: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'file',
    },
  },
};
</script>
