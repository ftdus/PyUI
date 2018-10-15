<template>
    <div class="py-upload" @click.stop='inputClick'>
      <input type="file" ref='input' @change="fileChange">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'upload',
  methods: {
    inputClick () {
      this.$refs.input.click()
    },
    // 监听文件选择框change事件
    fileChange () {
      const files = this.$refs.input.files;
      for(let i = 0;i < files.length; i++){
        this.fileSelect(files[i], files)
      }
    },
    // 刚选择上传的文件
    fileSelect (file, fileList) {
      this.$emit('fileSelect', file, fileList)

      this.fileFormat(file);
    },
    // 文件后缀格式验证
    fileFormat (file) {
      const name = file.name ? file.name.split('.') : [];
      const fileType = name[name.length, name.length-1];
      console.log(fileType)
    }
  }
};
</script>

<style lang='scss'>
.py-upload{
  input{
    display: none;
  }
}
</style>
