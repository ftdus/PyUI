<template>
  <ul class="py-upload_list" v-if="files.length > 0">
    <li v-for="(item, index) in files" :key="index">
      <span class="py-upload_name">{{item.name}}</span>
      <div class="py-list_wrappar" >
        <div class="py-list_prect">
          <li :style="{width: item.percentage+'%'}"></li>
        </div>
        <span class="upload_del" ref="del">{{item.percentage}}%</span>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  name: "upload-list",
  props: {
    files: {
      type: Array,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/base/themes.scss";
.py-upload_list{
  font-size: 15px;
  padding-top: 7px;
  padding-bottom: 7px;
  display: flex;
  flex-wrap:wrap;
  margin-left: -5px;
  li{
    width: 100%;
    border-radius: 3px;
    transition: .3s;
    padding:6px;
    &:hover{
      background: rgba(123, 180, 240, 0.1);
    }
    .py-list_wrappar{
      height: 20px;
      line-height: 20px;
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
  }
  .name{
    width:100%;
    color:$color;
    font-size: 14px;
  }
  .del{
    width:45px;
    color:$color;
    font-size: 12px;
    text-align: center;
  }
}
</style>
