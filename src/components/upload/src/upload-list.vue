<template>
    <transition-group name='fade' style='width: 100%;'>
      <li v-for="(item, index) in files" class="py-upload_list" v-show='files.length' :key="index">
        <span class="py-upload_name" @click='onItem(item, index)'>
          <i class="pyui-icons py-icon-star-fill"></i>
          <span>{{item.name}}</span>
        </span>
        <i v-if="item.percentage === 100"
          @click='onRemove(item, index)' class="pyui-icons py-icon-start">x</i>
        <div class="py-list_wrappar" v-if="item.showProgress">
          <div class="py-list_prect">
            <li :style="{width: item.percentage+'%'}"></li>
          </div>
          <span class="upload_del" ref="del" v-if="item.showProgress">{{item.percentage}}%</span>
        </div>
      </li>
    </transition-group>
</template>

<script>
export default {
  name: 'upload-list',
  props: {
    files: {
      type: Array,
      default: () => {},
    },
    onBeforeRemove: Function,
  },
  methods: {
    onItem(index, item) {
      this.$emit('on-item', index, item);
    },
    onRemove(item, index) {
      if (this.onBeforeRemove(item, index) === false) {
        return false;
      }
      return this.$emit('on-remove', item, index);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/base/themes.scss';
.fade-enter-active {
  transition: all 0.2s ease;
}
.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
.py-upload_list {
  width: 100%;
  border-radius: 3px;
  transition: 0.3s;
  padding: 6px;
  list-style: none;
  position: relative;
  &:nth-child(1) {
    margin-top: 5px;
  }
  &:hover {
    background: rgba(123, 180, 240, 0.1);
  }
  .py-upload_name {
    cursor: pointer;
    transition: 0.3s;
    font-size: 13px;
    color: $color;
    &:hover {
      color: $border-color-hover;
    }
  }
  i {
    font-size: 14px;
  }
  > i {
    font-family: '\9ED1\4F53' !important;
    font-size: 22px;
    width: 23px;
    height: 20px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    position: absolute;
    right: 5px;
    text-align: center;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 14px;
    cursor: pointer;
    color: $color-hover;
    border-radius: 3px;
    &:hover {
      background: $color-hover;
      color: #fff;
    }
  }
  .py-list_wrappar {
    height: 3px;
    line-height: 17px;
    display: flex;
    .py-list_prect {
      flex: 1;
      height: 2px;
      background: #ebebeb;
      margin-top: 8px;
      li {
        width: 0%;
        background: linear-gradient(
          to right,
          $border-color-hover,
          $success-color
        );
        height: 100%;
        padding: 0;
        z-index: 2;
        transition: 0.9s;
      }
    }
  }
  .upload_del {
    width: 45px;
    color: $color;
    font-size: 12px;
    text-align: center;
  }
}
</style>
