<template>
<div class="py-sketch__content">
    <div class="py-sketch__colorbox" @click="show = !show">
        <div :aria-label="`Current color is ${activeColor}`"
             class="py-sketch--active__color"
             :style="{background: activeColor}">
        </div>
    </div>
    <div role="application" aria-label="Sketch color picker"
         :class="['py-sketch', disableAlpha ? 'py-sketch__disable--alpha' : '']"
         v-if="show"
    >
        <div class="py-sketch__saturation--wrap">
        <saturation v-model="colors" @change="childChange"></saturation>
        </div>
        <div class="py-sketch__controls">
        <div class="py-sketch__sliders">
            <div class="py-sketch__hue--wrap">
            <hue v-model="colors" @change="childChange"></hue>
            </div>
            <div class="py-sketch__alpha--wrap" v-if="!disableAlpha">
            <alpha v-model="colors" @change="childChange"></alpha>
            </div>
        </div>
        <!-- <div class="py-sketch-color-wrap">
            <div :aria-label="`Current color is ${activeColor}`"
            class="py-sketch-active-color"
            :style="{background: activeColor}"></div>
            <checkboard></checkboard>
        </div> -->
        </div>
        <div class="py-sketch__field" v-if="!disableFields">
        <!-- rgba -->
        <div class="py-sketch__field--double">
            <ed-in label="hex" :value="hex" @change="inputChange"></ed-in>
        </div>
        <div class="py-sketch__field--single">
            <ed-in label="r" :value="colors.rgba.r" @change="inputChange"></ed-in>
        </div>
        <div class="py-sketch__field--single">
            <ed-in label="g" :value="colors.rgba.g" @change="inputChange"></ed-in>
        </div>
        <div class="py-sketch__field--single">
            <ed-in label="b" :value="colors.rgba.b" @change="inputChange"></ed-in>
        </div>
        <div class="py-sketch__field--single" v-if="!disableAlpha">
            <ed-in label="a" :value="colors.a" :arrow-offset="0.01" :max="1"
            @change="inputChange"></ed-in>
        </div>
        </div>
        <div class="py-sketch__presets" role="group"
             aria-label="A color preset, pick one to set as current color">
        <template v-for="c in presetColors">
            <div
            v-if="!isTransparent(c)"
            class="py-sketch__presets--color"
            :aria-label="'Color:' + c"
            :key="c"
            :style="{background: c}"
            @click="handlePreset(c)">
            </div>
            <div
            v-else
            :key="c"
            :aria-label="'Color:' + c"
            class="py-sketch__presets--color"
            @click="handlePreset(c)">
            <checkboard />
            </div>
        </template>
        </div>
    </div>
</div>
</template>

<script>
import colorMixin from './mixin/color';
import editableInput from './common/editable-input.vue';
import saturation from './common/Saturation.vue';
import hue from './common/Hue.vue';
import alpha from './common/Alpha.vue';
import checkboard from './common/check-board.vue';
// 组件class前缀
// const prefixCls = 'py-color-picker';
const prefixCls = 'py-sketch';

const presetColors = [
  '#D0021B',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
  'rgba(0,0,0,0)',
];

export default {
  name: 'PyColorPicker',
  mixins: [colorMixin],
  components: {
    saturation,
    hue,
    alpha,
    'ed-in': editableInput,
    checkboard,
  },
  data() {
    return {
      show: false,
    };
  },
  props: {
    presetColors: {
      type: Array,
      default() {
        return presetColors;
      },
    },
    disableAlpha: {
      type: Boolean,
      default: false,
    },
    disableFields: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return `${prefixCls}`;
    },
    hex() {
      if (this.colors.a < 1) {
        const { hex8 } = this.colors.hex8;
        const hex = hex8;
        return hex.replace('#', '');
      }
      const { hex } = this.colors;
      return hex.replace('#', '');
    },
    activeColor() {
      const { rgba } = this.colors;
      return `rgba(${[rgba.r, rgba.g, rgba.b, rgba.a].join(',')})`;
    },
  },
  methods: {
    handlePreset(c) {
      this.colorChange({
        hex: c,
        source: 'hex',
      });
    },
    childChange(data) {
      this.colorChange(data);
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data.hex) {
        if (this.isValidHex(data.hex)) {
          this.colorChange({
            hex: data.hex,
            source: 'hex',
          });
        }
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: 'rgba',
        });
      }
    },
  },
};
</script>
