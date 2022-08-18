<template>
  <div class="skill">
    <el-card>
      <template #header> 我的技能 </template>

      <banner :bannerList="bannerList" />
      <div>良好的编码习惯 语义化的把控 ui组件的封装 代码全局架构的思考</div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Banner from './cpns/banner'

const bannerList = ref([
  'https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/image-20220710025451595.png',
  'https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/image-20220710161544110.png',
  'https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/image-20220710025451595.png',
  'https://picgoload-1310759961.cos.ap-nanjing.myqcloud.com/image-20220710161544110.png'
])
</script>

<style lang="scss" scoped></style>
