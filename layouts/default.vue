<script setup lang="ts">
import {useSystemStore} from '@/stores'
const systemStore = useSystemStore();
const drawer = computed(()=>systemStore.drawer)
console.log("drawer",drawer.value)
const { isMobile } = useDevice();
</script>

<template>
  <Navbar/>
  <SideNavBar :drawer="drawer"></SideNavBar>
  <transition name="moveCartoon" appear>

    <div>
      <div class="pageCenter">
        <nuxt-page></nuxt-page>
      </div>
      <el-tooltip effect="dark" content="返回顶部" placement="left-start">
        <el-backtop :right="!isMobile?100:10" :bottom="100" />
      </el-tooltip>
    </div>
  </transition>
  <Footer/>
</template>

<style scoped>

</style>
