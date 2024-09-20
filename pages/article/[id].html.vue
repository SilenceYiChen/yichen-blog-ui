<script setup lang="ts">

</script>

<template>
  <div class="article-detail flex between">
    <div class="blog-detail">
      <div class="header"></div>
    </div>
    <div class="cardGroup">
      <AuthorInfo/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-detail{
  width: 75%;
  margin: 20px auto;
  position: relative;
  .blog-detail{
    width: 70%;
    border-radius: 5px;
    min-height: 100vh;
    background-color: #fff;
    box-shadow: 0px 0px 12px rgba(0,0,0,.12);
  }
  .cardGroup{
    width: 299px;
    position: fixed;
    right: 12%;
    box-shadow: 0px 0px 12px rgba(0,0,0,.12);
  }
}
@media screen and (max-width: 1118px){
  .cardGroup{
    display: none;
  }
}
</style>
