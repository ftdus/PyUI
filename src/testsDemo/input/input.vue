<template>
  <div style="padding:10px;line-height: 25px;">
    <div style="width:45vw;float:left">
      <div style="width:200px">
        <h3>事件</h3>
        <py-input
          :border='b'
          ref="input"
          v-model='value'
          :placeholder='"qwe"'
          @on-keyup='onKeyup'
          @on-keypress='onKeypreess'
          @on-keydown='onKeydown'
          @on-enter='handleEnter'
          @on-focus='onFocus'
          @on-blur='onBlur' />
        <p>keypress: {{keypreeValue}}</p>
        <p>keyup: {{keyupValue}}</p>
        <p>keydown: {{keydownValue}}</p>
        <p>v-model: {{value}}</p>
        <p>文本框中按下回车键 enter</p>
        <py-button @click="handleFocus">获取焦点</py-button>
        <py-button @click="setValue">改变内容</py-button>
        <py-button @click="getValue">获取内容</py-button>
        <py-button @click="clearInput">清空内容</py-button>
      </div>
      <br>

      <h3>页面加载input获取焦点</h3>
      <div style="width:200px">
        <py-input :autofocus='true'/>
      </div>

      <br>
      <h3>large(大) small（小）</h3>
      <div style="width:200px">
        <py-input size='large' placeholder='large' />
        <py-input size='small' placeholder='small' />
      </div>

      <br>
      <h3>禁用</h3>
      <div style="width:200px">
        <py-input :disabled='disabled' :value='789' />
        <py-button @click="toggleDisabled">toggleDisabled</py-button>
      </div>

      <br>
      <h3>添加前后内容</h3>
      <div style="width:300px">
        <py-input>
          <i class="iconfont  icon-coordinates" slot="before"></i>
        </py-input>
      </div>

      <div style="width:300px">
        <py-input>
          <i class="iconfont  icon-coordinates" slot="after"></i>
        </py-input>
      </div>

      <div style="width:300px">
        <py-input>
          <i class="iconfont  icon-coordinates" slot="before"></i>
          <i class="iconfont  icon-coordinates" slot="after"></i>
        </py-input>
      </div>

      <div style="width:300px">
        <py-input>
          <span slot="before">前置</span>
          <span slot="after">后置</span>
        </py-input>
      </div>

      <h3>large(大) small（小）</h3>
      <div style="width:300px">
        <py-input size='large' placeholder='large' >
          <span slot="before">前置内容</span>
          <span slot="after">后置内容</span>
        </py-input>
        <py-input size='small' placeholder='small'>
          <span slot="before">1231231</span>
          <span slot="after">1qweqew</span>
        </py-input>
      </div>
    </div>

    <div style="width:45vw;float:left">
      <div style="width:500px">
        <h3>设置type为textarea</h3>
        <py-input name="" id="" cols="30" rows="6"
          ref='textarea'
          v-model='textValue'
          type='textarea'
          @on-focus='onFocus'
         />
        <br>
        <py-button @click="textareaFocus">获取焦点</py-button>
        <py-button @click="textareaValue">改变内容</py-button>
        <py-button @click="getTextareaValue">获取内容</py-button>
        <py-button @click="cleartextarea">清空内容</py-button>
      </div>
      <br>
      <div style="width:500px;">
        <h3>设置row控制行数,仅限textarea</h3>
        <h3>设置form,详见原生form用法</h3>
        <py-input type='textarea' :row='3' form='qwe' :placeholder='"row=3,form=qwe"' />
      </div>

      <br>
      <div style="width:500px;">
        <h3>设置readonly可读状态，disabled禁用状态</h3>
        <py-input type='textarea' :placeholder='"disabled=true"' :disabled="textareaDisabled" />
        <br>
        <py-button @click='textareaToggleDisabled'>toggle</py-button>
      </div>

      <br>
      <div>
        <h3>自适应高度, autoHeight=true</h3>
        <py-input type="textarea" :autoHeight='true' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: true,
      value: "123",
      disabled: true,
      modleData: "1",
      textValue: 'type="textarea"',
      keyupValue: "",
      keypreeValue: "",
      keydownValue: "",
      textareaDisabled: true,
    };
  },
  created(){
    console.log(this)
  },
  methods: {
    textareaToggleDisabled() {
      this.textareaDisabled = !this.textareaDisabled;
    },
    handleEnter(v) {
      console.log(v);
    },
    textareaFocus() {
      this.$refs.textarea.focus();
    },
    onKeyup(e) {
      this.keyupValue = e.target.value;
    },
    onKeypreess(e) {
      this.keypreeValue = e.target.value;
    },
    onKeydown(e) {
      this.keydownValue = e.target.value;
    },
    textareaValue() {
      this.textValue = "新内容1";
    },
    getTextareaValue() {
      const v = this.$refs.textarea.getValue();
      console.log(v);
    },
    cleartextarea() {
      this.textValue = "";
      this.$refs.textarea.clearInput();
    },
    toggleDisabled() {
      this.disabled = !this.disabled;
    },
    // 写入内容
    setValue() {
      this.value = "新内容";
    },
    // 获取内容
    getValue() {
      const v = this.$refs.input.getValue();
      console.log(v);
    },
    // 清空
    clearInput() {
      this.value = "";
      this.$refs.input.clearInput();
    },
    // 获取焦点
    handleFocus() {
      this.$refs.input.focus();
    },
    handleFocusS() {
      this.$refs.inputs.focus();
    },
    // 改变内容后失去焦点
    onChange(e) {
      console.log(e, "改变内容后失去焦点触发");
    },
    onFocus(e) {
      console.log(e, "获取焦点");
    },
    onBlur(e) {
      console.log(e, "失去焦点");
    },
    onInput(v) {
      this.modleData = v;
      console.log(v);
    },
  },
};
</script>
