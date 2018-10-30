<template>
  <div class='demo-upload'>
    <div class="demo-list">
      <h1>普通上传</h1><br>
      <py-upload
        action='//jsonplaceholder.typicode.com/posts/'
        @beforeSelect='beforeSelect'
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

    <div class="demo-list">
      <h1>拖拽上传</h1><br>
      <py-upload
        action='//jsonplaceholder.typicode.com/posts/'
        @beforeSelect='beforeSelect'
        @on-format-err='onFormatErr'
        @on-error='onError'
        multiple
        type='drap'
        v-model='defaultFileList2'
        @on-size-err='onSizeErr'>
        <py-button>
          <i class="iconfont  icon-addition"></i>
          点击或拖拽上传
        </py-button>
      </py-upload>
    </div>
    <div class="demo-list">
      <h1></h1>
    </div>
  </div>
</template>
<script>
import PyUpload from '@/components/upload';
import PYButton from '../../components/button';

export default {
  name: 'upload',
  components: {
    PyUpload,
    PYButton,
  },
  data() {
    return {
      format: ['jpg', 'png', 'txt', 'pptx'],
      defaultFileList: [
        {
          name: '123.jpg',
          url: 'http://newimg88.b0.upaiyun.com/newimg88/2014/08/repaints-reflows.jpg',
        },
      ],
      defaultFileList2: [],
    };
  },
  methods: {
    // 刚选择上传的文件
    beforeSelect(file, fileList) {
      console.log(file, fileList);
    },
    onFormatErr(format, file, fileList) {
      console.log('上传的格式不对', format, file, fileList);
    },
    onSizeErr(maxSize, file, fileList) {
      console.log('图片太大了，请重试!', maxSize, file, fileList);
    },
    onError(err, file, fileList) {
      console.log(err, file, fileList);
    },
  },
};
</script>
<style>
.demo-upload {
  padding: 20px;
}
.demo-list {
  width: 300px;
  margin-bottom: 30px;
}
</style>
