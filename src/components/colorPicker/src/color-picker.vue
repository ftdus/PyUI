<template>
<div class="py-sketch-content">
    <div class="py-sketch-color-box" @click="show = !show">
        <div :aria-label="`Current color is ${activeColor}`"
             class="py-sketch-active-color"
             :style="{background: activeColor}">
        </div>
    </div>
    <div role="application" aria-label="Sketch color picker"
         :class="['py-sketch', disableAlpha ? 'py-sketch__disable-alpha' : '']"
         v-if="show"
    >
        <div class="py-sketch-saturation-wrap">
        <saturation v-model="colors" @change="childChange"></saturation>
        </div>
        <div class="py-sketch-controls">
        <div class="py-sketch-sliders">
            <div class="py-sketch-hue-wrap">
            <hue v-model="colors" @change="childChange"></hue>
            </div>
            <div class="py-sketch-alpha-wrap" v-if="!disableAlpha">
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
        <div class="py-sketch-field" v-if="!disableFields">
        <!-- rgba -->
        <div class="py-sketch-field--double">
            <ed-in label="hex" :value="hex" @change="inputChange"></ed-in>
        </div>
        <div class="py-sketch-field--single">
            <ed-in label="r" :value="colors.rgba.r" @change="inputChange"></ed-in>
        </div>
        <div class="py-sketch-field--single">
            <ed-in label="g" :value="colors.rgba.g" @change="inputChange"></ed-in>
        </div>
        <div class="py-sketch-field--single">
            <ed-in label="b" :value="colors.rgba.b" @change="inputChange"></ed-in>
        </div>
        <div class="py-sketch-field--single" v-if="!disableAlpha">
            <ed-in label="a" :value="colors.a" :arrow-offset="0.01" :max="1"
            @change="inputChange"></ed-in>
        </div>
        </div>
        <div class="py-sketch-presets" role="group"
             aria-label="A color preset, pick one to set as current color">
        <template v-for="c in presetColors">
            <div
            v-if="!isTransparent(c)"
            class="py-sketch-presets-color"
            :aria-label="'Color:' + c"
            :key="c"
            :style="{background: c}"
            @click="handlePreset(c)">
            </div>
            <div
            v-else
            :key="c"
            :aria-label="'Color:' + c"
            class="py-sketch-presets-color"
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
import saturation from './common/saturation.vue';
import hue from './common/hue.vue';
import alpha from './common/alpha.vue';
import checkboard from './common/check-board.vue';

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
  name: 'Sketch',
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
<style  lang="scss">
.py-sketch-content {
  width: 270px;

  .py-sketch-color-box {
    width: 50px;
    height: 50px;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0 auto;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.15);
    .py-sketch-active-color {
      width: 40px;
      height: 40px;
      position: relative;
      border-radius: 2px;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15),
        inset 0 0 4px rgba(0, 0, 0, 0.15);
      z-index: 2;
    }
  }

  .py-sketch {
    position: absolute;
    width: 250px;
    padding: 10px 10px 0;
    box-sizing: initial;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.15);
    .py-sketch-saturation-wrap {
      width: 100%;
      padding-bottom: 75%;
      position: relative;
      overflow: hidden;
    }

    .py-sketch-controls {
      display: flex;
    }

    .py-sketch-sliders {
      padding: 4px 0;
      flex: 1;
      .py-sketch-hue-wrap {
        position: relative;
        height: 10px;
      }

      .py-sketch-alpha-wrap {
        position: relative;
        height: 10px;
        margin-top: 4px;
        overflow: hidden;
      }
    }

    .py-sketch-sliders .py-hue,
    .py-sketch-sliders .py-alpha-gradient {
      border-radius: 2px;
    }

    .py-sketch-color-wrap {
      width: 24px;
      height: 24px;
      position: relative;
      margin-top: 4px;
      margin-left: 4px;
      border-radius: 3px;
    }

    .py-sketch-color-wrap .py-checkerboard {
      background-size: auto;
    }

    .py-sketch-field {
      display: flex;
      padding-top: 4px;
    }

    .py-sketch-field .py-input__input {
      width: 90%;
      padding: 4px 0 3px 10%;
      border: none;
      box-shadow: inset 0 0 0 1px #ccc;
      font-size: 10px;
    }

    .py-sketch-field .py-input__label {
      display: block;
      text-align: center;
      font-size: 11px;
      color: #222;
      padding-top: 3px;
      padding-bottom: 4px;
      text-transform: capitalize;
    }

    .py-sketch-field--single {
      flex: 1;
      padding-left: 6px;
    }

    .py-sketch-field--double {
      flex: 2;
    }

    .py-sketch-presets {
      margin-right: -10px;
      margin-left: -10px;
      padding-left: 10px;
      padding-top: 10px;
      border-top: 1px solid #eee;
    }

    .py-sketch-presets-color {
      border-radius: 3px;
      overflow: hidden;
      position: relative;
      display: inline-block;
      margin: 0 10px 10px 0;
      vertical-align: top;
      cursor: pointer;
      width: 16px;
      height: 16px;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
    }

    .py-sketch-presets-color .py-checkerboard {
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
      border-radius: 3px;
    }

    .py-sketch__disable-alpha .py-sketch-color-wrap {
      height: 10px;
    }
  }
}
</style>
