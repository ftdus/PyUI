<template>
  <div class="py-upload_container">
    <div class="py-upload_item" @click.stop="inputClick">
      <input
        type="file"
        ref="input"
        :multiple="multiple"
        :accept="accept"
        @change="fileChange">
      <slot></slot>
    </div>
    <uploadList 
      @on-remove="onRemove"
      @onItem="onItem"
      :on-before-remove="onbeforeRemove"
      :files="fileList"/>
  </div>
</template>

<script>
import ajax from './ajax';
import uploadList from './upload-list.vue';

export default {
  name: 'py-upload',
  data () {
    return {
      fileList: [],
      crrentFile: this.value,
    };
  },
  components: { uploadList },
  watch: {
    crrentFile (fileList) {
      this.$emit('input', fileList)
    },
    value: {
      immediate: true,
      handler () {
        if (this.value.length) {
          this.value.forEach(item => {
            if (item.name && item.url) {
              item = Object.assign(item, {
                percentage: 100,
                status: 'success',
                uid: item.name + Date.now(),
              })
            }
          });
          this.fileList = this.value
        }
      }
    }
  },
  methods: {
    inputClick () {
      this.$refs.input.click();
    },
    // 点击列表中的文件
    onItem (index, item) {
      this.$emit('on-item', index, item, this.fileList)
    },
    // 删除fileList文件
    onRemove (item, index) {
      this.fileList.splice(index, 1);
      this.$emit('on-remove', item, index);
    },
    // 监听文件选择框change事件
    fileChange (e) {
      const Files = e.target.files;
      if (!Files) {
        return false;
      }
      for (let i = 0; i < Files.length; i += 1) {
        const File = {
          status: 'status',
          name: Files[i].name,
          size: Files[i].size,
          percentage: 0,
          uid: Files[i].name + Date.now(),
        };
        this.fileList.push(File);
        this.fileSelect(File, this.fileList);
      }
      this.$refs.input.value = null;
      return null;
    },
    // 选择上传的文件
    fileSelect (file, fileList) {
      this.fileFormat(file, fileList);
      this.$emit('on-select', file, fileList);
    },
    // 验证文件后缀格式
    fileFormat (file, fileList) {
      if (this.format.length <= 0) {
        this.fileMaxSize(file, fileList);
        return false;
      }
      const name = file.name ? file.name.split('.') : [];
      const fileType = name[name.length];
      if (this.format.indexOf(fileType) === -1) {
        this.$emit('on-format-err', file, fileList);
        return false;
      }
      return this.fileMaxSize(file, fileList);
    },
    // 验证文件大小
    fileMaxSize (file, fileList) {
      if (this.maxSize !== undefined) {
        if (file.size > this.maxSize * 1024) {
          this.$emit('on-size-err', file, fileList);
          return false;
        }
      }
      return this.beforeUpload(file, fileList);
    },
    // 上传之前
    beforeUpload (file, fileList) {
      if (!this.onBeforeUpload) {
        return this.fileStart(file);
      }
      return this.fileStart(file, fileList);
    },
    // 开始上传文件
    fileStart (file, fileList) {
      if (!this.action) {
        this.$emit('on-error', '上传地址必填!', file, fileList);
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
    getFile (file) {
      const FileList = this.fileList;
      let target;
      FileList.every(item => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    // 上传中
    handleProgress (e, file) {
      const File = file;
      File.status = 'progress';
      File.percentage = parseInt(e.percent, 10) || 0;
      this.onProgress && this.onProgress(e, File, this.fileList)
    },
    // 上传成功回调response
    handleSuccess (res, file) {
      const File = file;
      File.status = 'success';
      File.percentage = 100;
      this.onSuccess && this.onSuccess(res, File, this.fileList)
      this.crrentFile = this.fileList
      this.$emit('on-success', res, File);
    },
    // 上传失败
    handleError (err, file) {
      const File = file;
      File.status = 'fail';
      File.percentage = 100;
      this.onError && this.onError(err, File, this.fileList)
      this.$emit('on-error', err, File);
    },
  },
  props: {
    accept: [String],
    maxSize: [Number],
    action: [String],
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    value: {
      type: Array,
      default: [],
    },
    onbeforeRemove: {
      type: Function,
      default: () => {},
    },
    onBeforeUpload: Function,
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

<style lang="scss" scoped>
.py-upload_container{
  .py-upload_item{
    input{
      display: none;
    }
  }
}
</style>
