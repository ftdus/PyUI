<template>
  <div id="app">
    <div style="width:45vw;float:left">
      <div style="width:200px">
        <h3>事件</h3>
        <Input
          :border='b'
          ref="input"
          v-model='value'
          :placeholder='"qwe"'
          @on-keyup='onKeyup'
          @on-keypress='onKeypreess'
          @on-keydown='onKeydown'
          @on-enter='handleEnter'
          @on-focus='onFocus'
          @on-blur='onBlur'></Input>
        <p>keypress: {{keypreeValue}}</p>
        <p>keyup: {{keyupValue}}</p>
        <p>keydown: {{keydownValue}}</p>
        <p>v-model: {{value}}</p>
        <p>文本框中按下回车键 enter</p>
        <button @click="handleFocus">获取焦点</button>
        <button @click="setValue">改变内容</button>
        <button @click="getValue">获取内容</button>
        <button @click="clearInput">清空内容</button>
      </div>

      <h3>页面加载input获取焦点</h3>
      <div style="width:200px">
        <Input :autofocus='true' rows='1'></Input>
      </div>

      <h3>large(大) small（小）</h3>
      <div style="width:200px">
        <Input size='large' placeholder='large'></Input>
        <Input size='small' placeholder='small'></Input>
      </div>

      <h3>禁用</h3>
      <div style="width:200px">
        <Input :disabled='disabled' :value='789'></Input>
        <button @click="toggleDisabled">toggleDisabled</button>
      </div>
    </div>

    <div style="width:40vw;float:left">
      <div style="width:500px">
        <h3>设置type为textarea</h3>
        <Input name="" id="" cols="30" rows="6"
          ref='textarea'
          :value='textValue'
          type='textarea'
          @on-focus='onFocus'
        ></Input>
        <button @click="textareaFocus">获取焦点</button>
        <button @click="textareaValue">改变内容</button>
        <button @click="getTextareaValue">获取内容</button>
        <button @click="cleartextarea">清空内容</button>
      </div>
      <div style="width:500px;">
        <h3>设置row控制行数,仅限textarea</h3>
        <h3>设置form,详见原生form用法</h3>
        <Input type='textarea' :row='3' form='qwe' :placeholder='"row=3,form=qwe"'></Input>
      </div>

      <div style="width:500px;">
        <h3>设置readonly可读状态，disabled禁用状态</h3>
        <Input type='textarea' :placeholder='"disabled=true"' :disabled="textareaDisabled"></Input>
        <button @click='textareaToggleDisabled'>toggle</button>
        {{textareaDisabled}}
      </div>

      <div>
        <h3>自适应高度, autoHeight=true</h3>
        <Input type="textarea" :autoHeight='true'></Input>
      </div>
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
      disabled: true,
      modleData: '1',
      textValue: 'type="textarea"',
      keyupValue: '',
      keypreeValue: '',
      keydownValue: '',
      textareaDisabled: true
    }
  },
  methods:{
    textareaToggleDisabled(){
      this.textareaDisabled = !this.textareaDisabled
    },
    handleEnter(v){
      alert(v)
    },
    //textarea
    textareaFocus(){
      this.$refs.textarea.focus()
    },
    onKeyup(e){
      this.keyupValue = e.target.value
    },
    onKeypreess(e){
      this.keypreeValue = e.target.value
    },
    onKeydown(e){
      this.keydownValue = e.target.value
    },
    textareaValue(){
      this.textValue = '新内容1'
    },
    getTextareaValue(){
      var v = this.$refs.textarea.getValue()
      alert(v)
    },
    cleartextarea(){
      this.textValue = ''
      this.$refs.textarea.clearInput()
    },
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
      this.value = ''
      this.$refs.input.clearInput()
    },
    // 获取焦点
    handleFocus(){
      this.$refs.input.focus()
    },
    // 改变内容后失去焦点
    onChange(e){
      // console.log(e, '改变内容后失去焦点触发')
    },
    onFocus(e){
      //console.log(e,'获取焦点')
    },
    onBlur(e){
      //console.log(e,'失去焦点')
    },
    onInput(v){
      this.modleData = v
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
