<template>
    <div :class="classList" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = "py-col";
// Find components upward
function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === "string") {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

export default {
  name: "pyCol",
  props: {
    span: [Number, String],
    order: String,
    push: String,
    pull: String,
    offset: [Number, String],
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
  },
  data() {
    return {
      crevice: 0,
      sizes: ["xs", "sm", "md", "lg"],
    };
  },
  computed: {
    classList() {
      const classses = [
        `${prefixCls}`,
        {
          [`${prefixCls}-span-${this.span}`]: this.span,
          [`${prefixCls}-push-${this.push}`]: this.push,
          [`${prefixCls}-pull-${this.pull}`]: this.pull,
          [`${prefixCls}-offset-${this.offset}`]: this.offset,
        },
      ];
      this.sizes.forEach(size => {
        // if (typeof(size) === "number") {
        //   console.log('number: '+size)
        //   classses.push(`${prefixCls}-span-${size}-${this[size]}`);
        // } else if (typeof(size) === "object") {
        //   console.log('object: '+size)
        // }
        if (typeof this[size] === "number") {
          classses.push(`${prefixCls}-span-${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
          let props = this[size];
          Object.keys(props).forEach(prop => {
            classses.push(prop !== "span" ? `${prefixCls}-${size}-${prop}-${props[prop]}`  : `${prefixCls}-span-${size}-${props[prop]}`);
          });
        }
      });
      return classses;
    },
    styles() {
      let style = {};
      if (this.crevice !== 0) {
        style = {
          paddingLeft: (this.crevice / 2) + "px",
          paddingRight: (this.crevice / 2) + "px"
        };
      }
      if (this.order) {
        style["order"] = this.order;
      }
      return style;
    }
  },
  methods: {
    updatecrevice() {
      const Row = findComponentUpward(this, "pyRow");
      if (Row) {
        Row.uploadCrevice(Row.crevice);
      }
    }
  },
  mounted() {
    this.updatecrevice();
  },
  beforeDestroy() {
    this.updatecrevice();
  }
};
</script>

<style lang="scss" scoped>
$prefixCls: "py-col";

$start: 1;
$end: 24;
$count: 100%/24;
$name: -span-;

.#{$prefixCls} {
  position: relative;
  float: left;
  color: #fff;
  padding: 10px 0;
  text-align: center;

  @for $s from $start to $end {
    // &-span- {
    &#{$name}#{$s} {
      width: $count * $s;
    }
    @media (max-width: 767px) {
      &#{$name}xs-#{$s} {
        display: block;
        width: $count * $s;
      }
      &-xs {
        &-offset-#{$s} {
          margin-left: $count * $s;
        }
      }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
      &#{$name}sm-#{$s} {
        display: block;
        width: $count * $s;
      }
      &-sm {
        &-offset-#{$s} {
          margin-left: $count * $s;
        }
      }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      &#{$name}md-#{$s} {
        display: block;
        width: $count * $s;
      }
      &-md {
        &-offset-#{$s} {
          margin-left: $count * $s;
        }
      }
    }
    @media (min-width: 1200px) {
      &#{$name}lg-#{$s} {
        display: block;
        width: $count * $s;
      }
      &-lg {
        &-offset-#{$s} {
          margin-left: $count * $s;
        }
      }
    }
    // }
    &-offset-#{$s} {
      margin-left: $count * $s;
    }
    &-push-#{$s} {
      left: $count * $s;
    }
    &-pull-#{$s} {
      right: $count * $s;
    }
  }
}
</style>
