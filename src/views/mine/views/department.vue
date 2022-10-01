<template>
  <div class="department">
    <h3 class="title">
      <span>2018.9 - 2019.9</span>
      <span>担任学生会干部</span>
      <span>心健部部长(有较强活动组织能力,良好沟通能力)</span>
    </h3>
    <span class="item">开展织冬活动（给敬老院老人送温暖），获得活动经费 400 元</span>
    <span class="item"> 开展冬日暖阳活动（学院才艺表演），获得活动经费 400 元</span>
    <span class="item"> 每月心理班会开展，活动经费每月 160 元</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.department {
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    span:not(:nth-child(1)) {
      padding-left: 40px;
    }
  }
  .item {
    line-height: 30px;
  }
}
</style>
