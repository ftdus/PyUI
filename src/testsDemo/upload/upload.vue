<template>
    <div style='padding:20px;'>
        <py-upload
          action='//jsonplaceholder.typicode.com/posts/'
          @on-select='onSelect'
          @on-format-err='onFormatErr'
          @on-error='onError'
          @on-size-err='onSizeErr'>
          <py-button type="primary">
            <i class="iconfont  icon-addition"></i>
            上传文件
          </py-button>
        </py-upload>
    </div>
</template>

<script>
import PyUpload from '@/components/upload';
import PYButton from '../../components/button';

export default {
  name: 'upload',
  components: {
    PyUpload, PYButton,
  },
  data () {
    return {
      format: ['jpg', 'png', 'txt', 'pptx']
    }
  },
  methods: {
    // 刚选择上传的文件
    onSelect (file, fileList) {
      //console.log(file, fileList)
    },
    onFormatErr (file, fileList) {
      console.log('上传的格式不对')
    },
    onSizeErr (file, fileList) {
      console.log('图片太大了，请重试!')
    },
    onError (err, file, fileList) {
      console.log(err)
    }
  }
};
</script>

<style>
</style>
