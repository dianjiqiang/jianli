<template>
  <div class="top-bar">
    <div class="item left">
      <slot name="left">meant</slot>
    </div>
    <div class="item center cool-text">
      <slot name="center">coder: Keyie</slot>
    </div>
    <div class="item right">
      <slot name="right">meant</slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.top-bar {
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  padding: 0 40px;
}
</style>
