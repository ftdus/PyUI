<template>
  <py-menu class="left-nav" :active-name="currentActiveName">
    <template v-for="menu in nav">
      <py-menu-item
        v-if="menu.type === 'first-level'"
        :key="menu.name"
        :name="setMenuName(menu)"
        :class="setMenuClass(menu)"
        :to="setLink(menu.path)"
      >
        {{ menu.name }}
      </py-menu-item>
      <py-menu-group v-else :key="menu.name" :title="menu.name">
        <py-menu-item
          v-for="item in menu.children"
          :key="item.path"
          :name="setMenuName(item)"
          :class="setMenuClass(item)"
          :to="setLink(item.path)"
        >
          {{ item.name }}
        </py-menu-item>
      </py-menu-group>
    </template>
  </py-menu>
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
    currentActiveName() {
      return this.$route.path.split('/').pop();
    },
  },

  methods: {
    setMenuName({ name, path }) {
      const index = path || name;
      return `/component/${index}`;
    },
    setMenuClass({ type, path }) {
      return {
        'first-level': type === 'first-level',
        'group-name': type === 'group',
        active: this.currentActiveName === path,
        disable: !path,
      };
    },
    setLink(path) {
      const link = path || this.currentActiveName;
      return `/component/${link}`;
    },
  },
};
</script>

<style lang="scss">
$primaryColor: #ff9800;
$textColor: #606266;

.left-nav.py-menu {
  height: 100%;
  padding-top: 0;
  color: $textColor;

  .py-menu-item {
    font-size: 14px;
    padding: 12px 24px;
    &:hover,
    &.active {
      color: $primaryColor;
    }

    &.first-level {
      font-weight: 500;
    }

    &.disable {
      cursor: default;
      &:hover,
      &.active {
        color: $textColor;
      }
    }
  }
  .py-menu-item-group-title {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.38);
  }
}
</style>
