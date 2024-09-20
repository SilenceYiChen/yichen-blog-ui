<script setup lang="ts">
import {useSystemStore} from '@/stores'
const systemStore = useSystemStore();
const drawer = computed(()=>systemStore.drawer)
const routerPath = computed(()=>systemStore.routerPath)
const openDrawer = ()=>{
  systemStore.setDrawer(!drawer.value)
}
</script>

<template>
<nav v-if="!$device.isMobile" class="navBar flex alignCenter">
  <div class="logo flex alignCenter">
    <img src="@/assets/images/logo.png"/>
    <span>逸辰时光</span>
  </div>
  <div class="list flex alignCenter">
    <nuxt-link href="/">
      <div class="item hand-style flex alignCenter between"
           :class="{
            active:routerPath==='/'
          }"
      >
        <Icon name="my-icon:home"></Icon>
        <span>首页</span>
      </div>
    </nuxt-link>
    <nuxt-link href="/article">
      <div class="item hand-style flex alignCenter between"
      :class="{
        active:routerPath==='/article'
      }"
      >
        <Icon name="my-icon:archive"></Icon>
        <span>分类</span>
      </div>
    </nuxt-link>
    <nuxt-link>
      <div class="item hand-style flex alignCenter between">
        <Icon name="my-icon:link"></Icon>
        <span>友情链接</span>
      </div>
    </nuxt-link>
    <nuxt-link>
      <div class="item hand-style flex alignCenter between">
        <Icon name="my-icon:about"></Icon>
        <span>关于本站</span>
      </div>
    </nuxt-link>

  </div>
</nav   >
<nav class="mobileNavBar flex alignCenter between">
  <Icon name="my-icon:menu" @click="openDrawer"></Icon>
    <div class="logo flex alignCenter">
      <img src="@/assets/images/logo.png"/>
      <span>逸辰时光</span>
    </div>
  <Icon name="my-icon:search"></Icon>
  </nav>
</template>

<style scoped lang="scss">
.navBar{
  position: sticky;
  top: 0;
  width: 100%;
  line-height: 60px;
  height: 60px;
  z-index: 99;
  background-color: var(--header-back-color);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  box-shadow: 0 1px 40px -8px #00000080;
  padding: 0 60px;
  box-sizing: border-box;
  .logo{
    width: 145px;
    height: 100%;
    img{
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    span{
      margin-left: 10px;
      font-size: 20px;
      font-family: Lucida Calligraphy,cursive,serif,sans-serif;
      color: var(--theme-color);
      font-weight: bold;
    }
  }
  .list{
    width: calc(100% - 120px - 200px - 60px);
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    .item{
      min-width:52px;
      margin-right:40px;
      span{
        font-weight: 700;
        font-size: 14px;
        color: #606266;
        margin-left: 5px;
      }
      &:hover{
        span{
          color:var(--theme-color);
        }
      }
      &.active{
        span{
          color:var(--theme-color);
        }
      }
    }

  }
}
@media screen and (max-width: 1118px) {
  .navBar{
    display: none;
  }
  .mobileNavBar{
    display: flex !important;
  }
}
.mobileNavBar{
  display: none;
  position: sticky;
  top: 0;
  width: 100%;
  line-height: 60px;
  height: 60px;
  z-index: 99;
  background-color: var(--header-back-color);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  box-shadow: 0 1px 40px -8px #00000080;
  padding: 0 10px;
  box-sizing: border-box;
  .iconify{
    font-size: 24px !important;
  }
  .logo{
    width: 145px;
    height: 100%;

    img{
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    span{
      margin-left: 10px;
      font-size: 20px;
      font-family: Lucida Calligraphy,cursive,serif,sans-serif;
      color: var(--theme-color);
      font-weight: bold;
    }
  }
}
</style>
