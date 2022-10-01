<template>
  <div class="skill">
    <el-card>
      <template #header> 我的技能 </template>

      <div class="item">熟练使用 HTML+CSS，完成布局操作以及初步的 SEO 优化。</div>
      <div class="item">
        熟练运用 JavaScript 熟练使用钩子，能手写 promise 实现，了解 async、await 原理。了解 vue3
        源码，能够手 写数据响应式。
      </div>
      <div class="item">熟练运用 Vue 框架(2/3都可), 完成数据交互, 组件封装操作</div>
      <div class="item">
        熟练运用 git 操作能够正确配备项目资源和分支，以及 webpack、vite 打包工具，能手搭 webpack
        项目。熟悉 服务器操作。
      </div>
      <div class="item">熟练运用包管理工具，npm，yarn，pnpm 等，了解 pnpm 优势。</div>
      <div class="item">熟悉 node，能写出基本接口供前端功能测试。</div>
      <div class="item">熟悉 ElementPlus、antd、Vant 等 ui 组件库，能正确配备到网页中。</div>
      <div class="item">熟悉 uni-app，能搭建、开发、打包跨平台应用。</div>
      <div class="item">具有良好的编码习惯 语义化的把控 ui组件的封装 代码全局架构的思考</div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import Banner from './cpns/banner'

const bannerList = ref([
  'https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/image-20220710025451595.png',
  'https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/image-20220710161544110.png',
  'https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/image-20220710025451595.png',
  'https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/image-20220710161544110.png'
])
</script>

<style lang="scss" scoped>
.skill {
  .item {
    height: 35px;
    color: v-bind(index);
  }
}
</style>
