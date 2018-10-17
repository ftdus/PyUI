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
      <ul class="file-list" v-if='fileList.length > 0'>
        <li v-for='(item, index) in fileList' :key='index'>
          <span class="name">{{item.name}}</span>
          {{item.percentage}}
          <div class="upload-wrap" >
            <div class="upload-precc">
              <li :style='{width: item.percentage+"%"}'></li>
            </div>
            <span class="del" ref='del'>{{item.percentage}}%</span>
          </div>
          
        </li>
      </ul>
    </div>
</template>

<script>
import ajax from './ajax';
export default {
  name: "upload",
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    inputClick () {
      this.$refs.input.click()
    },
    // 监听文件选择框change事件
    fileChange () {
      const files = this.$refs.input.files;
      for(let i = 0;i < files.length; i++){
        Object.assign(files[i], {
          uid: files[i].size + Date.now(),
          percentage: 0,
          status: 'status'
        })
        this.fileList.push(files[i])
        this.fileStart(files[i])
        //this.fileSelect(files[i], this.fileList)
      }
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
      file.percentage = e.percent || 0
      file.status = 'progress'
      console.log(e.percent)
      //this.$emit('on-progress', e, file)
    },
    // 上传成功回调
    handleSuccess (res, file) {
      file.status = 'success'
      this.$emit('on-success', res, file)
    },
    // 上传失败
    handleError (err, file) {
      file.status = 'fail'
      //file.percentage = 100
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
@import "@/base/themes.scss";
.py-warp{
  .py-upload{
    input{
      display: none;
    }
  }

  .file-list{
      font-size: 15px;
      padding-top: 7px;
      padding-bottom: 7px;
      display: flex;
      flex-wrap:wrap;
      margin-left: -5px;
      li{
        width: 100%;
        border-radius: 3px;
        transition: .3s;
        padding:6px;
        &:hover{
          background: rgba(123, 180, 240, 0.1);
        }
        .upload-wrap{
          height: 20px;
          line-height: 20px;
          transition: .3s;
          display: flex;
          .upload-precc{
            flex: 1;
            height: 2px;
            background: #ebebeb;
            margin-top: 8px;
            li{
              width: 0%;
              background: linear-gradient(to right, $border-color-hover, $success-color);
              height: 100%;
              padding:0;
              z-index: 2;
              transition: 1s;
            }
          }
        }
      }
      .name{
        width:100%;
        color:$color;
        font-size: 14px;
      }
      .del{
        width:45px;
        color:$color;
        font-size: 12px;
        text-align: center;
      }
    }
}

</style>
