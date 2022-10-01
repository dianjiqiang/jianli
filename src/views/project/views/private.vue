<template>
  <div class="private">
    <el-card>
      <template #header>个人项目</template>
      <div class="item">
        <h3 class="title">
          <a href="http://www.meant.cc:21321" target="_blank">爱彼迎(http://www.meant.cc:21321)</a>
        </h3>
        <div class="describe">
          <h4 class="little-title">技术栈:</h4>
          <span>React,react-router-dom,Redux</span>
        </div>
      </div>
      <div class="item">
        <h3 class="title">
          <a href="http://www.meant.cc:6564" target="_blank"
            >后台管理系统(http://www.meant.cc:6564)</a
          >
          <span>账号:coderwhy 密码:123456</span>
        </h3>
        <div class="describe">
          <h4 class="little-title">技术栈:</h4>
          <span>Vue3、Vuex、VueRouter、Vite、 Axios、 ElementPlus 、TypeScript、Echart5 </span>
        </div>
      </div>
      <div class="item">
        <h3 class="title">
          <a href="http://www.meant.cc:9421" target="_blank">竞赛项目(http://www.meant.cc:9421)</a>
        </h3>
        <div class="describe">
          <h4 class="little-title">技术栈:</h4>
          <span>Vue3,VueRouter,ElementPlus,Webpack,Axios</span>
        </div>
      </div>
      <div class="item">
        <h3 class="title">
          <a href="http://www.meant.cc:2231" target="_blank">蘑菇街App(http://www.meant.cc:2231)</a>
        </h3>
        <div class="describe">
          <h4 class="little-title">技术栈:</h4>
          <span>Vue2,VueRouter,Vuex,better-scroll,vue-cli,webpack</span>
        </div>
      </div>
      <div class="item">
        <h3 class="title">
          <a href="http://www.meant.cc:43298" target="_blank"
            >弘源旅途(http://www.meant.cc:43298)</a
          >
        </h3>
        <div class="describe">
          <h4 class="little-title">技术栈:</h4>
          <span>Vue3,Pinia,vueRouter,vite,ElementPlus</span>
        </div>
      </div>
      <div class="item">
        <span
          >更多练手项目请访问git hub
          <a href="https://github.com/dianjiqiang">(https://github.com/dianjiqiang)</a></span
        >
      </div>
    </el-card>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.private {
  .item:not(:first-child) {
    margin-top: 20px;
  }
  .describe {
    margin: 10px 0 10px;
    text-indent: 14px;
    span,
    ol {
      margin-left: 10px;
    }
  }
}
</style>
