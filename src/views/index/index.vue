<template>
  <div class="index">
    <router-link to="/button">button</router-link>
    <router-link to="/input">input</router-link>
    <router-link to="/loadingBar">loadingBar</router-link>
    <router-link to="/card">card</router-link>
    <router-link to="/tabs">tabs</router-link>
    <router-link to="/divider">divider</router-link>
    <router-link to="/slider">slider</router-link>
    <router-link to="/switch">switch</router-link>
    <router-link to="/pagination">pagination</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.index {
  a {
    padding: 0.8em 2em;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 2em;
  }
}
</style>
