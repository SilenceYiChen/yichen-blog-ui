<script setup lang="ts">

</script>

<template>

    <div class="card author">
      <div class="avatar">
        <img class="bg" src="https://file.qcycloud.com/beijing.jpg"/>
        <img  class="avatarImg" src="@/assets/images/logo.png"/>
      </div>
      <div class="bottom">
        <div class="authorName flex alignCenter center">
          <span>Silence逸辰</span>
          <Icon name="my-icon:bozhu"/>
        </div>
        <div class="desc flex alignCenter center">
          <span>擅长VUE全家桶开发,个人汪苏泷唯粉</span>
        </div>
        <div class="contact flex alignCenter center">
          <Icon name="my-icon:gitee" title="gitee"/>
        </div>
        <div class="addTag flex alignCenter center">
          <el-button type="primary">
            加入标签
          </el-button>
        </div>
      </div>
    </div>

</template>

<style scoped lang="scss">
.author{
  width: 100%;
  border-radius: 10px;
  height: 251px;
  overflow: hidden;
  .avatar{
    height: 120px;
    align-items: end;
    position: relative;
    .bg{
      width: 100%;
      height: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .avatarImg{
      box-sizing: border-box;
      width: 68px;
      height: 68px;
      border-radius: 50%;
      border: 2px solid #fff;
      position: absolute;
      bottom: 5px;
      left: calc(100% / 2 - 34px);
    }
  }
  .bottom{
    background-color: #fff;
    height:calc(100% - 120px);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 5px 0;
    .authorName{
      span{
        color: var(--theme-color);
        margin-right: 5px;
        font-size: 16px;
        font-weight: 500;
      }
    }
    .desc{
      margin: 5px 0;
      span{
        background: radial-gradient(circle at 49.86% 48.37%,#0090ff 0,#0089ff,#3a82ff,#717aff,#9371fb,#ae67ef,#c45de1,#d652d2,#e448c2,#ef3eb0,#f7369e,#fd318c,#ff317a,#ff3569,#fd3d57,#f94646,#f35035,#ea5a22,#e16308,#d56d00,#c97500,#bb7d00,#ac8300,#9d8900,#8c8f00,#7a9300,#669700,#4f9b00,#309e0e,#00a029,#00a23d);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 14px;

      }
    }
    .contact{
      min-width: 40%;
      border-top: 1px solid var(--border-line);
      margin: 5px auto;
      padding-top: 10px;
    }
    .addTag{
      width: 80%;
      margin:5px auto;
      :deep(.el-button){
        width: 100%;
      }
    }
  }
}
</style>
