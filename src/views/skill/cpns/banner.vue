<template>
  <div class="banner">
    <el-carousel :interval="5000" arrow="always" type="card">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
defineProps({
  bannerList: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.el-image {
  height: 600px;
}
</style>
