<template>
  <div class="m-colorPicker" ref="colorPicker" v-on:click="event => { event.stopPropagation() }">
    <div class="colorBtn"
      v-bind:style="`background-color: ${showColor}`"
      v-on:click="openStatus = !disabled"
      v-bind:class="{ disabled: disabled }"
    ></div>
    <input type="color"
      ref="html5Color"
      v-model="html5Color"
      v-on:change="updataValue(html5Color)">
    <div class="box" v-bind:class="{ open: openStatus }">
      <div class="hd">
        <div class="colorView" v-bind:style="`background-color: ${showPanelColor}`"></div>
        <div class="defaultColor"
          v-on:click="handleDefaultColor"
          v-on:mouseover="hoveColor = defaultColor"
          v-on:mouseout="hoveColor = null"
        >默认颜色</div>
      </div>
      <div class="bd">
        <h3>主题颜色</h3>
        <ul class="tColor">
          <li
            v-for="(color, index) of tColor"
            :key="index"
            v-bind:style="{ backgroundColor: color }"
            v-on:mouseover="hoveColor = color"
            v-on:mouseout="hoveColor = null"
            v-on:click="updataValue(color)"
          ></li>
        </ul>
        <ul class="bColor">
          <li v-for="(item, index) of colorPanel" :key="index">
            <ul>
              <li
                v-for="(color, cindex) of item"
                :key="cindex"
                v-bind:style="{ backgroundColor: color }"
                v-on:mouseover="hoveColor = color"
                v-on:mouseout="hoveColor = null"
                v-on:click="updataValue(color)"
              ></li>
            </ul>
          </li>
        </ul>
        <h3>标准颜色</h3>
        <ul class="tColor">
          <li
            v-for="(color, index) of bColor"
            :key="index"
            v-bind:style="{ backgroundColor: color }"
            v-on:mouseover="hoveColor = color"
            v-on:mouseout="hoveColor = null"
            v-on:click="updataValue(color)"
          ></li>
        </ul>
        <h3 v-on:click="triggerHtml5Color">更多颜色...</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'colorPicker',
}

</script>

<style>

</style>

