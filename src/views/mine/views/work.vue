<template>
  <div class="work">
    <span class="item">
      <span class="date">2020.7-2020-10</span>
      在杭州天时科技，作为前端开发实习生，实习三个月，期间主要在熟悉开发
    </span>
    <span class="item">
      <span class="date">2020.10-2021-10</span>
      在杭州天时科技，作为前端开发工程师，工作一年，期间主要在配合前端大哥做项目,做一些UI封装,数据对接工作
    </span>
    <span class="item">
      <span class="date">2021.10-2022.9</span>
      在武汉荣浪数据公司, 作为前端开发工程师,工作十一月,期间主要独立开发外包项目
    </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.work {
  display: flex;
  flex-direction: column;
  .item {
    line-height: 30px;
    .date {
      display: inline-block;
      color: #aaa;
      width: 140px;
    }
  }
}
</style>
