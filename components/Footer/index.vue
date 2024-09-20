<script setup lang="ts">

</script>

<template>
  <div class="footer flex alignCenter between">
    <div class="left flex column">
      <h3>Silence逸辰</h3>
      <span>Dean【热衷于互联网的发展】</span>
      <div>
        <span>Copyright©2022-2024 逸辰时光</span>
        <a href="https://beian.miit.gov.cn" target="_blank">鄂ICP备2023011116号-2</a>
      </div>
    </div>
    <div class="content">
      <img src="https://file.qcycloud.com/cyxy.png"/>
    </div>

    <div class="right">
      <span>Ctrl+D收藏本站</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer{
  padding: 0 30px;
  background-color: #fff;
  .left{
    line-height: 35px;
    span{
      font-size: 14px;
    }
    a{
      color: #000;
      font-size: 14px;
      margin-left: 5px;
      &:hover{
        color: var(--theme-color);
      }
    }
  }
  .content{
    img{
      width: 350px;
      height: 210px;
    }
  }
  .right{
    width: 300px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background-color: #746afc;
    color: #fff;
  }
}
@media screen and (max-width: 1118px){
  .footer{
    padding: 10px 30px;
  }
  .content{
    display: none;
  }
}
@media screen and (max-width: 750px){
  .footer{
    padding: 10px 30px;
  }
  .content,.right{
    display: none;
  }
}
</style>
