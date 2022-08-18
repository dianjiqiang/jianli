<template>
  <div class="menuItem">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="goToRouter"
    >
      <el-menu-item index="/mine/information">基本信息</el-menu-item>
      <el-sub-menu index="2">
        <template #title>发展历程</template>
        <el-menu-item index="/mine/education">教育背景</el-menu-item>
        <el-menu-item index="/mine/work">工作经历</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>校园经历</template>
        <el-menu-item index="/mine/race">竞赛经历</el-menu-item>
        <el-menu-item index="/mine/department">部门工作经历</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/mine/self">自我评价</el-menu-item>
    </el-menu>
    <router-view class="children"></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeIndex = ref(route.path)
const goToRouter = (e) => {
  router.push(e)
}
</script>

<style lang="scss" scoped>
.menuItem {
  margin-top: 30px;
}
.children {
  margin-top: 20px;
}
</style>
