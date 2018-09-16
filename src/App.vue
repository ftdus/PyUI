<template>
  <div id="app">
    <div>
      <h1>事件</h1>
      <Input
        :border='b'
        ref="input"
        :value='value'
        :placeholder='"qwe"'
        @on-change='onChange'
        @on-input='onInput'
        @on-focus='onFocus'
        @on-blur='onBlur'></Input>

      <button @click="handleFocus">获取焦点</button>
      <button @click="setValue">改变内容</button>
      <button @click="getValue">获取内容</button>
      <button @click="clearInput">清空内容</button>
    </div>

    <div>
      <h1>页面加载input获取焦点</h1>
      <Input :autofocus='true' ></Input>
    </div>

    <div>
      <h1>禁用</h1>
      <Input :disabled='disabled' :value='789'></Input>
      <button @click="toggleDisabled">toggleDisabled</button>
    </div>

    <div>
      <h1>设置label,自定义style</h1>
      <Input 
        :label='true' 
        :labelValue='"姓名:"' 
        :labelStyle='"width:50px; text-align:right;color: red;"'></Input>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
export default {
  components:{
    Input
  },
  data(){
    return {
      b: true,
      value: '123',
      disabled: true
    }
  },
  methods:{
    toggleDisabled(){
      this.disabled = !this.disabled
    },
    // 写入内容
    setValue(){
      this.value = '新内容'
    },
    // 获取内容
    getValue(){
      var v = this.$refs.input.getValue()
      alert(v)
    },
    // 清空
    clearInput(){
      this.$refs.input.clearInput()
    },
    // 获取焦点
    handleFocus(){
      this.$refs.input.focus()
    },
    // 改变内容后失去焦点
    onChange(e){
      //console.log(e, '改变内容后失去焦点触发')
    },
    onFocus(e){
      //console.log(e,'获取焦点')
    },
    onBlur(e){
      //console.log(e,'失去焦点')
    },
    onInput(v){
      //console.log(v)
    }
  },
  created(){
   // setTimeout(()=>{this.b = false},3000)
    //setTimeout(()=>{this.b = true},5000)
  }
}  
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
