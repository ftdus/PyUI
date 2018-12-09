<template>
  <div class="container">
    <div class="demo-box">
      <h3 class="demo-box__title">基础用法</h3>
      <div class="container-box">
        <py-radio v-model="value" :label="option1">选项1</py-radio>
        <py-radio v-model="value" :label="option2">选项2</py-radio>
      </div>
    </div>
    <div class="demo-box">
      <h3 class="demo-box__title">禁用状态</h3>
      <div class="container-box">
        <py-radio v-model="value" disabled :label="option1">选项1</py-radio>
        <py-radio v-model="value" disabled :label="option2">选项2</py-radio>
      </div>
    </div>
    <div class="demo-box">
      <h3 class="demo-box__title">group</h3>
      <div class="container-box">
        <py-radio-group v-model="value" @change="changeGorup">
          <py-radio :label="option1">选项1</py-radio>
          <py-radio :label="option2">选项2</py-radio>
          <py-radio :label="option2" disabled>选项3</py-radio>
        </py-radio-group>
      </div>
    </div>
    <div class="demo-box">
      <h3 class="demo-box__title">disabled group</h3>
      <div class="container-box">
        <py-radio-group v-model="value" disabled>
          <py-radio :label="option1">选项1</py-radio>
          <py-radio :label="option2">选项2</py-radio>
        </py-radio-group>
      </div>
    </div>
    <div class="demo-box">
      <h3 class="demo-box__title">vertical group</h3>
      <div class="container-box">
        <py-radio-group v-model="value" :vertical="true">
          <py-radio :label="option1">选项1</py-radio>
          <py-radio :label="option2">选项2</py-radio>
        </py-radio-group>
      </div>
    </div>
    <div class="demo-box">
      <h3 class="demo-box__title">button</h3>
      <div class="container-box">
        <div class="container-box"><py-radio :label="option1" type="button">选项1</py-radio></div>
      </div>
    </div>
    <div class="demo-box">
      <h3 class="demo-box__title">button</h3>
      <div class="container-box">
        <py-radio-group v-model="value" type="button">
          <py-radio :label="option1">选项1</py-radio>
          <py-radio :label="option2">选项2</py-radio>
          <py-radio :label="option2" type="radio">选项2</py-radio>
        </py-radio-group>
      </div>
    </div>
    <div class="demo-box">
      <h3 class="demo-box__title">button</h3>
      <div class="container-box">
        <py-radio-group v-model="value" :vertical="true" type="button">
          <py-radio :label="option1">选项1</py-radio>
          <py-radio :label="option2">选项2</py-radio>
          <py-radio :label="option2" type="radio">选项2</py-radio>
        </py-radio-group>
      </div>
    </div>
    <div class="demo-box">
      <h3 class="demo-box__title">button</h3>
      <div class="container-box">
        <py-radio-group v-model="value" :vertical="true" type="button" disabled>
          <py-radio :label="option1">选项1</py-radio>
          <py-radio :label="option2">选项2</py-radio>
          <py-radio :label="option2" type="radio">选项2</py-radio>
        </py-radio-group>
      </div>
    </div>
    <div class="demo-box">
      <h3 class="demo-box__title">small button</h3>
      <div class="container-box">
        <py-radio-group v-model="value" size="medium" :vertical="true" type="button" disabled>
          <py-radio :label="option1">选项1</py-radio>
          <py-radio :label="option2">选项2</py-radio>
          <py-radio :label="option2" type="radio">选项2</py-radio>
        </py-radio-group>
        <py-radio-group v-model="value" size="small" :vertical="true" type="button" disabled>
          <py-radio :label="option1">选项1</py-radio>
          <py-radio :label="option2">选项2</py-radio>
          <py-radio :label="option2" type="radio">选项2</py-radio>
        </py-radio-group>
        <py-radio-group v-model="value" size="mini" :vertical="true" type="button" disabled>
          <py-radio :label="option1">选项1</py-radio>
          <py-radio :label="option2">选项2</py-radio>
          <py-radio :label="option2" type="radio">选项2</py-radio>
        </py-radio-group>
      </div>
    </div>
  </div>
</template>
<script>
import PyRadio from '../../components/radio';
import PyRadioGroup from '../../components/radio-group';

export default {
  components: {
    'py-radio': PyRadio,
    'py-radio-group': PyRadioGroup,
  },
  data() {
    return {
      value: 'option1',
      option1: 'option1',
      option2: 'option2',
    };
  },
  methods: {
    changeGorup(value) {
      console.log(value);
    },
  },
};
</script>
<style lang="scss" scoped>
.demo-box {
  margin: 30px 0px;
  &__title {
    margin: 10px 0px;
  }
  &__desc {
    margin: 10px 0px;
  }
}
.container-box {
  display: flex;
}
</style>
