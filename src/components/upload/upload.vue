<template>
    <div>
      <div style='padding:20px;width:400px;float:left'>
        <py-upload
          action='//jsonplaceholder.typicode.com/posts/'
          @on-select='onSelect'
          @on-format-err='onFormatErr'
          @on-error='onError'
          multiple
          v-model='defaultFileList'
          @on-size-err='onSizeErr'>
          <py-button type="primary">
            <i class="iconfont  icon-addition"></i>
            上传文件
          </py-button>
        </py-upload>
      </div>

      <div style='padding:20px;width:400px;float:left'>
        <py-upload
          action='//jsonplaceholder.typicode.com/posts/'
          @on-select='onSelect'
          @on-format-err='onFormatErr'
          @on-error='onError'
          multiple
          type='drap'
          v-model='defaultFileList'
          @on-size-err='onSizeErr'>
          <py-button type="primary">
            <i class="iconfont  icon-addition"></i>
            上传文件
          </py-button>
        </py-upload>
      </div>
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
      format: ['jpg', 'png', 'txt', 'pptx'],
      defaultFileList: [{
        name: '123.jpg',
        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNTkiIHZpZXdCb3g9IjAgMCA2MyA1OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGcgaWQ9IkNhbnZhcyIgZmlsbD0ibm9uZSI+CjxnIGlkPSJkdW90YWktaWNvbiI+CjxnIGlkPSJSZWN0YW5nbGUiPgo8cmVjdCB3aWR0aD0iNDEuMTQwMiIgaGVpZ2h0PSI0Mi4xNDI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS41OTg3IDE2Ljg1NzEpIiBmaWxsPSIjRkY3MjYyIi8+CjwvZz4KPGcgaWQ9IlZlY3RvciAyIj4KPHBhdGggZD0iTSAwIDI1LjI4NTdMIDIxLjU5ODYgMEwgNDMuMTk3MiAyNS4yODU3TCAwIDI1LjI4NTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMzLjcxNDIpIiBmaWxsPSIjMEFDRjgzIi8+CjwvZz4KPGcgaWQ9IkVsbGlwc2UiPgo8ZWxsaXBzZSBjeD0iMTYuNDU2MSIgY3k9IjE2Ljg1NzIiIHJ4PSIxNi40NTYxIiByeT0iMTYuODU3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4xNDI0OSAwKSIgZmlsbD0iIzFBQkNGRSIvPgo8L2c+CjwvZz4KPC9nPgo8L3N2Zz4KCg=='
      }]
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