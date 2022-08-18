<template>
  <div class="tab-bar">
    <el-row class="tac">
      <el-col>
        <el-menu :default-active="defaultIndex" class="menuList" @select="handleOpen" size="20px">
          <el-menu-item index="/mine">
            <el-icon><avatar /></el-icon>
            <span>关于我</span>
          </el-menu-item>
          <el-menu-item index="/skill">
            <el-icon><span class="iconfont">&#xe604;</span></el-icon>
            <span>我的技能</span>
          </el-menu-item>
          <el-sub-menu index="/project">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>我的项目</span>
            </template>
            <el-menu-item index="/project/company">公司项目</el-menu-item>
            <el-menu-item index="/project/private">个人项目</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Avatar, Menu as IconMenu, Basketball } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()

// 获取当前路由 改变active显示状态
const defaultIndex = ref('/')
watch(
  () => route.path,
  () => {
    if (route.path.indexOf('mine') !== -1) {
      defaultIndex.value = '/mine'
    } else if (route.path.indexOf('skill') !== -1) {
      defaultIndex.value = '/skill'
    } else if (route.path.indexOf('company') !== -1) {
      defaultIndex.value = '/project/company'
    } else if (route.path.indexOf('private') !== -1) {
      defaultIndex.value = '/project/private'
    }
  }
)

// 监听加载的时候当前路由
const handleOpen = (key) => {
  router.push(key)
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
  width: 200px;
}
.el-menu-item,
.el-sub-menu {
  font-size: 15px;
  height: 70px;
  span {
    font-size: 16px;
  }
}
</style>
