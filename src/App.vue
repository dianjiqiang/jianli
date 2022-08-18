<template>
  <div class="App">
    <tab-bar class="tab-bar"></tab-bar>
    <div class="view-content">
      <top-bar class="top-bar"></top-bar>
      <router-view class="views"></router-view>
    </div>
  </div>
</template>

<script setup>
import TabBar from 'components/tab-bar'
import TopBar from 'components/top-bar'
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  top: 0;
}
.view-content {
  padding-left: 200px;
}
.top-bar {
  margin-bottom: 40px;
}
.views {
  padding: 0 20px;
}
</style>
