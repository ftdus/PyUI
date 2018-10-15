<template>
    <div>
        <py-upload
          :format='format'
          @fileSelect='fileSelect'>
          <py-button>上传文件</py-button>
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
      format: ['jpg', 'png', 'txt']
    }
  },
  methods: {
    // 刚选择上传的文件
    fileSelect (file, fileList) {
      console.log(file, fileList)
    }
  }
};
</script>

<style>
</style>
