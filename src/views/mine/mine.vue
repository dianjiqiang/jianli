<template>
  <div class="mine">
    <el-card>
      <template #header> 我的简历 </template>
      <div class="resume-webView cool-text">
        <span class="iconfont">&#xe62e;</span>
        <a
          href="https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/郑高炎简历.pdf"
          target="_blank"
        >
          PDF版简历
        </a>
      </div>
      <div class="resume-particulars">
        <span class="cool-text">简历详情</span>
        <menuItemVue />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import menuItemVue from './cpns/menuItem.vue'
</script>

<style lang="scss" scoped>
.mine {
  a {
    font-size: var(--font-size);
    color: #2865ba;
  }
  .resume-particulars {
    padding-top: 30px;
  }
}
</style>
