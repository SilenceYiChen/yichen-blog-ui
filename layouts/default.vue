<script setup lang="ts">
import {useSystemStore} from '@/store'
const systemStore = useSystemStore();
const drawer = computed(()=>systemStore.drawer)
console.log("drawer",drawer.value)
</script>

<template>
  <Navbar/>
  <SideNavBar :drawer="drawer"></SideNavBar>
  <transition name="moveCartoon" appear>

    <div style="min-height:calc(100vh - 167px)">
      <div class="pageCenter">
        <nuxt-page></nuxt-page>
      </div>
    </div>
  </transition>
  <Footer/>
</template>

<style scoped>

</style>