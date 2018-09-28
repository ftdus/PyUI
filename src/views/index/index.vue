<template>
  <div class="index">
    <router-link  to="/button">button</router-link>
    <router-link  to="/input">input</router-link>
    <router-link  to="/loadingBar">loadingBar</router-link>
    <router-link  to="/card">card</router-link>
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
