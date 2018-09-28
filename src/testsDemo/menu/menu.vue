<template>
  <div>
    <div class="menu-1">
      <py-menu mode="horizontal">
        <py-menu-item index="1" disabled>菜单项1</py-menu-item>
        <py-menu-item index="2" route="/button">route跳转</py-menu-item>
        <py-submenu index="3">
          <template slot="title">子菜单3</template>
          <py-menu-item index="3-1">子菜单项3-1</py-menu-item>
          <py-submenu index="3-2">
            <template slot="title">子菜单3-2</template>
            <py-menu-item index="3-2-1">子菜单项3-2-1</py-menu-item>
            <py-submenu index="3-2-2">
              <template slot="title">子菜单3-2-2</template>
              <py-menu-item index="3-2-2-1">子菜单项3-2-2-1</py-menu-item>
              <py-menu-item index="3-2-2-2">子菜单项3-2-2-2</py-menu-item>
              <py-menu-item index="3-2-2-3">子菜单项3-2-2-3</py-menu-item>
            </py-submenu>
            <py-menu-item index="3-2-3">子菜单项3-2-3</py-menu-item>
          </py-submenu>
          <py-menu-item index="3-3">子菜单项3-3</py-menu-item>
        </py-submenu>
        <py-menu-item index="4">菜单项4</py-menu-item>
        <py-menu-item index="5">菜单项5</py-menu-item>
      </py-menu>
    </div>
    <div class="menu-2">
      <py-menu mode="vertical" router>
        <py-submenu index="1" disabled>
          <template slot="title">子菜单1</template>
          <py-menu-item index="1-1">子菜单项1-1</py-menu-item>
          <py-menu-item index="1-2">子菜单项1-2</py-menu-item>
          <py-menu-item index="1-3" disabled>子菜单项1-3</py-menu-item>
        </py-submenu>
        <py-menu-item index="/button">index跳转</py-menu-item>
        <py-submenu index="3">
          <template slot="title">子菜单3</template>
          <py-menu-item index="3-1">子菜单项3-1</py-menu-item>
          <py-submenu index="3-2">
            <template slot="title">子菜单3-2</template>
            <py-menu-item index="3-2-1">子菜单项3-2-1</py-menu-item>
            <py-menu-item index="3-2-2">子菜单项3-2-2</py-menu-item>
            <py-menu-item index="3-2-3">子菜单项3-2-3</py-menu-item>
          </py-submenu>
          <py-menu-item index="3-3">子菜单项3-3</py-menu-item>
        </py-submenu>
        <py-menu-item index="4">菜单项4</py-menu-item>
        <py-menu-item index="5">菜单项5</py-menu-item>
      </py-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-demo",
};
</script>

<style scoped>
.menu-1 {
  margin-bottom: 20px;
  height: 30px;
}
.menu-2 {
  width: 150px;
}
</style>
