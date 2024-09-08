<script setup lang="ts">

const props = defineProps({
  drawer:{
    type:Boolean,
    default:false
  }
})
const drawer = computed(()=>props.drawer)
const open = ref(false);
watch(()=>drawer.value,(value)=>{
  open.value = value
})
</script>

<template>
<nav class="sideNavBar">
  <el-drawer v-model="open" direction="ltr"
  :show-close="false"
             class="sideNavBarBox"

  >
  <template #header>
    <div class="logo flex alignCenter">
      <img src="@/assets/images/logo.png"/>
      <span>逸辰时光</span>
    </div>
  </template>

    <div class="menu-container">
      <div class="menus-item">
        <nuxt-link to="/" class="flex alignCenter">
          <Icon name="my-icon:home"/> 首页
        </nuxt-link>
      </div>

      <div class="menus-item">

        <nuxt-link to="/categorys" class="flex alignCenter">
          <Icon name="my-icon:archive"/> 分类
        </nuxt-link>
      </div>
      <div class="menus-item">
        <nuxt-link to="/tag" class="flex alignCenter">
          <Icon name="my-icon:link"/> 友链
        </nuxt-link>
      </div>
      <div class="menus-item">
        <nuxt-link to="/about" class="flex alignCenter">
          <Icon name="my-icon:about"/>关于
        </nuxt-link>
      </div>

    </div>

  </el-drawer>
</nav>
</template>

<style scoped lang="scss">
a {
  color: var(--text-color);
}
:deep(.sideNavBarBox){
  width: 50% !important;
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
  .menu-container {

    .menus-item {
      height: 50px;
      a {
        padding: 6px 30px;
        text-decoration: none;
      }

      .iconify{
        margin-right: 10px;
        font-size: 20px !important;
      }
    }
  }
}
</style>