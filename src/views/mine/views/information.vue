<template>
  <div class="information">
    <div class="left">
      <span class="name">郑高炎</span>
      <span class="gender">男</span>
      <span class="birthday">2000-7-19</span>
      <span class="phone">call: 13117287135</span>
      <span class="e-mail"
        >Email: <a href="https://mail.qq.com" target="_blank">609661157@qq.com</a></span
      >
    </div>
    <div class="right">
      <el-image
        src="https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/$SJL1QJK4C6_~(R8Y}4AEXS.png"
      ></el-image>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.information {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    line-height: 30px;
  }
  .right {
    .el-image {
      /* width: 300px; */
      padding-right: 100px;
      height: 160px;
    }
  }
}
</style>
