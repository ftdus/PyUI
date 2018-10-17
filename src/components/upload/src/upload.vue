<template>
    <div class="py-warp">
      <div class="py-upload" @click.stop='inputClick'>
      <input 
        type='file' 
        ref='input' 
        :accept='accept'
        @change='fileChange'>
      <slot></slot>
    </div>

    <uploadList :files='fileList'/>
    </div>
</template>

<script>
import ajax from './ajax';
import uploadList from './upload-list'
export default {
  name: "upload",
  data () {
    return {
      fileList: []
    }
  },
  components: { uploadList },
  methods: {
    inputClick () {
      this.$refs.input.click()
    },
    // 监听文件选择框change事件
    fileChange (e) {
      const files = e.target.files;
      if(!files){return false};

      for(let i = 0;i < files.length; i++){
        const _file = {
            status: 'status',
            name: files[i].name,
            size: files[i].size,
            percentage: 0,
            uid: files[i].size + Date.now(),
            showProgress: true
        };

        this.fileList.push(_file)
        this.fileStart(_file)
      } 
      this.$refs.input.value = null
    },
    // 选择上传的文件
    fileSelect (file, fileList) {
      this.$emit('on-select', file, fileList)
      this.fileFormat(file, fileList);
    },
    // 验证文件后缀格式
    fileFormat (file, fileList) {
      if(this.format.length <= 0){return false;}
      const name = file.name ? file.name.split('.') : [];
      const fileType = name[name.length, name.length-1];
      if (this.format.indexOf(fileType) === -1) {
        this.$emit('on-format-err', file, fileList)
        return false;
      }
      this.fileMaxSize(file, fileList);
    },
    // 验证文件大小
    fileMaxSize (file, fileList) {
      if (this.maxSize !== undefined) {
        if(file.size > this.maxSize * 1024){
          this.$emit('on-size-err', file, fileList)
          return false;
        }
      }
      this.beforeUpload(file, fileList)
    },
    // 上传之前
    beforeUpload (file, fileList) {
      if(!this.onBeforeUpload){
        this.fileStart(file)
        return false;
      }
      this.fileStart(file, fileList)
    },
    // 开始上传文件
    fileStart (file, fileList) {
      if (!this.action) {
        this.$emit('on-error', '上传地址必填!', file, fileList);
        return false;
      }
      const _file = this.getFile(file)
      let formData = new FormData();
      formData.append(this.name, file);
      ajax({
        headers: this.headers,
        // cookie
        withCredentials: this.withCredentials,
        file: file,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.handleProgress(e, _file);
        },
        onSuccess: res => {
          //this.handleSuccess(res, _file);
        },
        onError: (err) => {
          //this.handleError(err, _file);
        }
      })
    },
    // 返回数组中同一对象
    getFile (file) {
        const fileList = this.fileList;
        let target;
        fileList.every(item => {
            target = file.uid === item.uid ? item : null;
            return !target;
        });
        return target;
    },
    // 上传中
    handleProgress (e, file) {
      const _file = this.getFile(file);
      _file.percentage = parseInt(e.percent) || 0;
      file.status = 'progress'
      //this.$emit('on-progress', e, file)
    },
    // 上传成功回调
    handleSuccess (res, file) {
      file.status = 'success'
      file.percentage = 100
      this.$emit('on-success', res, file)
    },
    // 上传失败
    handleError (err, file) {
      file.status = 'fail'
      file.percentage = 100
      this.$emit('on-error', err, file)
    }
  },
  props: {
    format: {
      type: Array,
      default: () => [],
    },
    accept: [String],
    maxSize: [Number],
    action: [String],
    headers: {
      type: Object,
      default: () => {}
    },
    withCredentials: {
      type: Boolean,
      default: false,
    },
    data: [Object],
    onBeforeUpload: Function,
    name: {
      type: String,
      default: 'file'
    }
  }
};
</script>

<style lang='scss'>
.py-warp{
  .py-upload{
    input{
      display: none;
    }
  }
}
</style>
