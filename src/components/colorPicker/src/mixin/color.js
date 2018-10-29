import tinycolor from 'tinycolor2';

function colorChange(data) {
  const alpha = data && data.a;
  let color = '';

  // hsl is better than hex between conversions
  if (data && data.hsl) {
    color = tinycolor(data.hsl);
  } else if (data && data.hex && data.hex.length > 0) {
    color = tinycolor(data.hex);
  } else {
    color = tinycolor(data);
  }

  if (color && (color.a === undefined || color.a === null)) {
    color.setAlpha(alpha || 1);
  }

  const hsl = color.toHsl();
  const hsv = color.toHsv();

  // if (hsl.s === 0) {
  //   hsl.h = data.h || (data.hsl && data.hsl.h) || oldHue || 0;
  //   hsv.h = hsl.h;
  // }

  /* --- comment this block to fix #109, may cause #25 again --- */
  // when the hsv.v is less than 0.0164 (base on test)
  // because of possible loss of precision
  // the result of hue and saturation would be miscalculated
  // if (hsv.v < 0.0164) {
  //   hsv.h = data.h || (data.hsv && data.hsv.h) || 0
  //   hsv.s = data.s || (data.hsv && data.hsv.s) || 0
  // }

  // if (hsl.l < 0.01) {
  //   hsl.h = data.h || (data.hsl && data.hsl.h) || 0
  //   hsl.s = data.s || (data.hsl && data.hsl.s) || 0
  // }
  /* ------ */

  return {
    hsl,
    hex: color.toHexString().toUpperCase(),
    hex8: color.toHex8String().toUpperCase(),
    rgba: color.toRgb(),
    hsv,
    // oldHue: data.h || oldHue || hsl.h,
    // source: data.source,
    // a: data.a || color.getAlpha(),
  };
}

export default {
  props: ['value'],
  data() {
    return {
      val: colorChange(this.value),
    };
  },
  computed: {
    colors: {
      get() {
        return this.val;
      },
      set(newVal) {
        this.val = newVal;
        this.$emit('input', newVal);
      },
    },
  },
  watch: {
    value(newVal) {
      this.val = colorChange(newVal);
    },
  },
  methods: {
    colorChange(data) {
      this.oldHue = this.colors.hsl.h;
      this.colors = colorChange(data);
    },
    isValidHex(hex) {
      return tinycolor(hex).isValid();
    },
    // simpleCheckForValidColor (data) {
    //   const keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
    //   let checked = 0;
    //   let passed = 0;

    //   for (let i = 0; i < keysToCheck.length; i++ ) {
    //     const letter = keysToCheck[i];
    //     if (data[letter]) {
    //       checked += 1;
    //       if (!isNaN(data[letter])) {
    //         passed += 1;
    //       }
    //     }
    //   }

    //   if (checked === passed) {
    //     return data;
    //   }
    // },
    paletteUpperCase(palette) {
      return palette.map(c => c.toUpperCase());
    },
    isTransparent(color) {
      return tinycolor(color).getAlpha() === 0;
    },
  },
};
