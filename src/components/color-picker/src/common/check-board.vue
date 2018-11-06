<template>
  <div class="py-checkerboard"></div>
</template>

<script>
// const checkboardCache = {};

export default {
  name: 'Checkboard',
  props: {
    size: {
      type: [Number, String],
      default: 8,
    },
    white: {
      type: String,
      default: '#fff',
    },
    grey: {
      type: String,
      default: '#e6e6e6',
    },
  },
  computed: {
    // bgStyle() {
    //   return {
    //     'background-image': `url(${getCheckboard(
    //       this.white,
    //       this.grey,
    //       this.size,
    //     )})`,
    //   };
    // },
  },
};

/**
 * get base 64 data by canvas
 *
 * @param {String} c1 hex color
 * @param {String} c2 hex color
 * @param {Number} size
 */

// function renderCheckboard(c1, c2, size) {
//   // Dont Render On Server
//   if (typeof document === 'undefined') {
//     return null;
//   }
//   const canvas = document.createElement('canvas');
//   canvas.height = size * 2;
//   canvas.width = size * 2;
//   const ctx = canvas.getContext('2d');
//   // If no context can be found, return early.
//   if (!ctx) {
//     return null;
//   }
//   ctx.fillStyle = c1;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = c2;
//   ctx.fillRect(0, 0, size, size);
//   ctx.translate(size, size);
//   ctx.fillRect(0, 0, size, size);
//   return canvas.toDataURL();
// }

/**
 * get checkboard base data and cache
 *
 * @param {String} c1 hex color
 * @param {String} c2 hex color
 * @param {Number} size
 */

// function getCheckboard(c1, c2, size) {
//   const key = `${c1},${c2},${size}`;

//   if (checkboardCache[key]) {
//     return checkboardCache[key];
//   }
//   const checkboard = renderCheckboard(c1, c2, size);
//   checkboardCache[key] = checkboard;
//   return checkboard;
// }
</script>
