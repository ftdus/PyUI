<template>
    <transition-group name='fade' style='width: 100%;'>
      <li v-for="(item, index) in files" class="py-upload_list" v-show='files.length' :key="index">
        <span class="py-upload_name" @click='onItem(item, index)'>{{item.name}}</span>
        <i v-if="item.percentage === 100" @click='onRemove(item, index)'>x</i>
        <div class="py-list_wrappar" v-if="item.percentage !== 100">
          <div class="py-list_prect">
            <li :style="{width: item.percentage+'%'}"></li>
          </div>
          <span class="upload_del" ref="del" v-if="item.percentage !== 100">{{item.percentage}}%</span>
        </div>
      </li>
    </transition-group>
</template>

<script>

export default {
  name: "upload-list",
  props: {
    files: {
      type: Array,
      default: () => {},
    },
    onBeforeRemove: Function,
  },
  methods: {
    onItem (index, item) {
      this.$emit('on-item', index, item);
    },
    onRemove (item, index) {
      if (this.onBeforeRemove(item, index) === false) {
        return false
      }
      this.$emit('on-remove', item, index);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/base/themes.scss";
.fade-enter-active {
  transition: all .2s ease;
}
.fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to{
  transform: translateY(-40px);
  opacity: 0;
}
.py-upload_list{
  width: 100%;
  border-radius: 3px;
  transition: .3s;
  padding:6px;
  list-style: none;
  &:hover{
    background: rgba(123, 180, 240, 0.1);
  }
  .py-upload_name{
    cursor: pointer;
    transition: .3s;
    font-size: 13px;
    &:hover{
      color: $border-color-hover;
    }
  }
  i{
    float: right;
  }
  .py-list_wrappar{
    height: 3px;
    line-height: 17px;
    display: flex;
    .py-list_prect{
      flex: 1;
      height: 2px;
      background: #ebebeb;
      margin-top: 8px;
      li{
        width: 0%;
        background: linear-gradient(to right, $border-color-hover, $success-color);
        height: 100%;
        padding:0;
        z-index: 2;
        transition: 1s;
      }
    }
  }
  .upload_del{
    width:45px;
    color:$color;
    font-size: 12px;
    text-align: center;
  }
}

</style>
