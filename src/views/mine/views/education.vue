<template>
  <div class="education">
    <div class="date-line">
      <span>2019.09-至今</span>
      <span>湖北文理学院</span>
      <span>教育技术学(软件工程方向)</span>
    </div>
    <div class="course">
      <div>主修课程:</div>
      <span span="this-course"
        >HTML、CSS、JavaScript、Vue、React、Webpack、Node、教育技术学相关知识</span
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.education {
  display: flex;
  flex-direction: column;
  .date-line {
    border-bottom: 1px solid #eee;
    span {
      line-height: 30px;
    }
  }
  .course {
    div,
    span {
      line-height: 30px;
    }
  }
}
</style>
