<template>
  <div class="left-nav">
    <py-menu router>
      <py-menu-item
        v-for="menu in nav"
        :key="menu.name"
        :disabled="!menu.path"
        :index="setMenuIndex(menu)"
        :class="{
          'first-level': menu.type === 'first-level',
          'group-name': menu.type === 'group',
          'active': $route.path.split('/').pop() === menu.path,
        }"
      >
        {{menu.name}}
      </py-menu-item>
    </py-menu>
  </div>
</template>

<script>
import nav from '../nav.config';

export default {
  data() {
    return {
      nav,
    };
  },

  computed: {
    navData() {
      return nav.reduce((init, item) => {
        if (item.children) {
          init.push({
            name: item.name,
            type: 'first-level',
          });

          item.children.forEach(({ group, children }) => {
            init.push({ name: group, type: 'group' });
            init.push(...children);
          });
        } else {
          init.push({
            ...item,
            type: 'first-level',
          });
        }

        return init;
      }, []);
    },
  },

  methods: {
    setMenuIndex({ name, path }) {
      const index = path || name;
      return `/component/${index}`;
    },
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: #409eff;
$textColor: #606266;
$bgColor: #fff;

.left-nav {
  display: flex;
  width: 240px;
  height: 100%;

  .py-menu {
    padding-top: 0;
    background: $bgColor;
    color: $textColor;

    &-item {
      cursor: pointer;
      &:hover,
      &.active {
        background: $bgColor;
        color: $primaryColor;
      }

      &.first-level {
        font-weight: 500;
        opacity: 1;
      }

      &.disabled {
        cursor: default;
        &:hover,
        &.active {
          color: $textColor;
        }

        &.group-name {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
