<script setup lang="ts">
import {ref} from 'vue'
import {queryArticleList} from '@/api/index'

const bannerList = [
    'https://file.qcycloud.com/banner/1.png',
    'https://file.qcycloud.com/banner/2.jpg',
    'https://file.qcycloud.com/banner/3.png'
]
const activeName = 'second1';
const handleClick = (data:string)=>{
  console.log(data)
}

let list = ref([]);
async function fetchData() {
  try {
    const response:any = await $fetch('/qcy-blog/frontend/article/list',{
      query:{
        pageNo:1,
        pageSize:10
      }
    });
    list.value = response.result.records

    console.log(response)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();
onMounted( ()=>{


})
</script>

<template>
<div class="home">
  <div class="content">
    <div class="top flex between">
      <div class="banner">
        <el-carousel>
          <el-carousel-item v-for="item in bannerList" :key="item">
            <img :src="item" style="width: 100%;height: 100%"/>
            <span class="title">
              推荐文字
            </span>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="authorInfo" v-if="!$device.isMobile">
        <AuthorInfo/>
        <div class="ad imgZoom">
          <img src="https://file.qcycloud.com/20231010_1696930367538.jpg"/>
          <span>高效便宜可靠的服务器</span>
        </div>
      </div>

    </div>
    <div class="box">
      <div class="tabs">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="最新" name="second1"></el-tab-pane>
          <el-tab-pane label="生活随笔" name="second2"></el-tab-pane>
          <el-tab-pane label="前端" name="second3"></el-tab-pane>
          <el-tab-pane label="JAVA" name="second4"></el-tab-pane>
          <el-tab-pane label="操作系统" name="second5"></el-tab-pane>
          <el-tab-pane label="运维部署" name="second6"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="box-content flex between">
        <div class="article-list">
          <div class="item flex column between scale-up-center"
          v-for="item in list"
               :key="item.id"
          >
            <div class="top flex between">
              <div class="header">
                <div class="blogBaseInfo flex">
                  <span class="topUp">置顶</span>
                  <nuxt-link href="/article/1.html">
                    <h4 class="blogTile">{{item.title}}</h4>
                  </nuxt-link>
                </div>
                <div class="desc">
                  <span>
                    使用LoadRunner自带的测试项目–航班订票管理系统WebTours，
                    网站地址为：http://127.0.0.1:1080/WebTours/ (用户名为jojo，密码为bean),
                    完成性能测试，要求：1、 虚拟用户为10；2、 每隔15s启动2个Vusers；
                    3、 运行时间为5min；4、 每隔15s停止2个Vusers；5、在分析工具中自定义一个图形。
                  </span>
                </div>
              </div>
              <el-image  src="https://file.qcycloud.com/20240123_1705973581037.png"
                         class="blog-cover imgZoom"
                         v-if="!$device.isMobile"
              >
                <template #error>
                  <div class="image-slot">
                    <img src="https://file.qcycloud.com/20240123_1705973581037.png"
                    style="width: 100%;height: 100%"
                    />
                  </div>
                </template>
              </el-image>
            </div>
            <div class="authorInfo flex alignCenter between">
              <div class="left flex alignCenter">
                <div class="authorName flex alignCenter">
                  <img src="@/assets/images/logo.png"/>
                  <span>Silence逸辰</span>
                </div>
                <div class="tags">
                  <el-space>
                    <el-tag effect="light">
                      前端
                    </el-tag>
                    <el-tag effect="light">
                      前端
                    </el-tag>
                    <el-tag effect="light">
                      前端
                    </el-tag>
                  </el-space>

                </div>
              </div>
              <div class="right">
                <el-space>
                  <div class="icon flex alignCenter">
                    <Icon name="my-icon:view"/>
                    <span>10</span>
                  </div>
                  <div class="icon flex alignCenter">
                    <Icon name="my-icon:time"/>
                    <span>2024-09-09-14:54:33</span>
                  </div>
                </el-space>
              </div>
            </div>
            <div class="originFlag">
              <span>原创</span>
            </div>
          </div>
        </div>
        <div class="cardGroup" v-if="!$device.isMobile">
          <div class="card prohibitAttackPrompt flex alignCenter center">
            <img src="https://file.qcycloud.com/2.jpg"/>
          </div>
          <div class="card recommend">
            <div class="header">
              推荐文章
            </div>
            <div class="list">
              <div class="item flex alignCenter between"
              v-for="item in 5"
                   :key="item"
              >
                <div class="left">
                  <div :class="'ranking color'+item"

                  >
                    <span>{{item}}</span>
                  </div>
                  <el-image  src="https://file.qcycloud.com/20240123_1705973581037.png"
                             class="blog-cover imgZoom"
                             v-if="!$device.isMobile"
                  >
                    <template #error>
                      <div class="image-slot">
                        <img src="https://file.qcycloud.com/20240123_1705973581037.png"
                             style="width: 100%;height: 100%"
                        />
                      </div>
                    </template>
                  </el-image>
                </div>
                <div class="right multiline-ellipsis-txt">
                  <nuxt-link href="/article/2.html">
                    <span class="title">推荐文章推荐文章推荐文章推荐文章</span>
                  </nuxt-link>
                  <span class="time">2024-09-10 10:24:35</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.home{
  margin-top: 20px;
  .content{
    width: 65%;
    margin: 0 auto;

    .top{
      .banner{
        width: 70%;
        :deep(.el-carousel__container){
          height: 420px;
          position: relative;
          .title{
            display: block;
            background: #0000004d;
            height: 66px;
            position: absolute;
            width: 100%;
            bottom: 0;
            color: #fff;
            text-align: center;
            line-height: 66px;
          }
        }
      }
      .authorInfo{
        width: 28%;
        height: 420px;
        overflow: hidden;
        .ad{
          width: 100%;
          height: calc(100% - 270px);
          margin: 10px 0;
          border-radius: 10px;
          position: relative;
          img{
            border-radius: 10px;
            width: 100%;
            height: 100%;
          }
          span{
            display: block;
            background: #0000004d;
            height: 30px;
            position: absolute;
            width: 100%;
            bottom: 10px;
            color: #fff;
            text-align: center;
            line-height: 30px;
          }
        }
      }
    }
    .box{
      margin: 20px 0;
      .box-content{
        width: 100%;
        div{
          //border: 1px solid;
        }
        .article-list{
          width: 70%;

          .item{


            box-shadow: var(--el-box-shadow-light);
            height: 170px;
            margin-bottom: 10px;
            border-radius: 5px;
            background-color: #fff;
            padding:15px 20px;
            position: relative;
            .top{
              height: 120px;
              overflow: hidden;
              .header{
                width: 68%;
                .blogBaseInfo{
                  .topUp{
                    background-image: -webkit-linear-gradient(0deg, #3ca5f6 0, #a86af9 100%);
                    padding-left: 5px;
                    padding-right: 5px;
                    display: inline-block;
                    border-top-right-radius: 5px;
                    border-bottom-left-radius: 5px;
                    font-size: .9rem;
                    margin-right: 5px;
                    color: #fff;
                    height: 20px;
                    /* width: 38px;
                     height: 17px;*/
                  }
                  .blogTile{
                    position: relative;
                    display: -webkit-box;
                    -webkit-line-clamp: 2; /* 显示2行 */
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 1.5em; /* 行高，根据需要调整 */
                    max-height: 3em; /* 根据行高和行数计算总高度 */
                    color: #000;
                  }
                  .blogTile::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #000;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.5s ease;
                  }

                  .blogTile:hover::after {
                    transform: scaleX(1);
                  }

                  /* 添加动画效果，使得线条最后在右边消失 */
                  @keyframes slide-out {
                    0% {
                      transform: scaleX(1);
                      transform-origin: left;
                    }
                    100% {
                      transform: scaleX(0);
                      transform-origin: right;
                    }
                  }

                  .blogTile::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #000;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.5s ease;
                    z-index: -1; /* 保证动画在文本下方 */
                  }

                  .blogTile:not(:hover)::before {
                    animation: slide-out 0.5s forwards;
                  }
                }
                .desc{
                  margin: 10px 0;
                  color: #606266;
                  font-size: 15px;
                  overflow: hidden;
                  overflow-wrap: break-word;
                  display: -webkit-box;
                  -webkit-line-clamp: 4; /* 显示2行 */
                  -webkit-box-orient: vertical;
                  text-overflow: ellipsis;
                  line-height: 20px; /* 行高，根据需要调整 */

                }
              }
              .blog-cover{
                width: 182px;
                height: 118px;
                border-radius: 5px;
                border: 1px solid #e4e7ed;
              }
            }
            .authorInfo{
              .left{
                img{
                  width: 25px;
                  height: 25px;
                  border-radius: 50%;
                  margin-right: 10px;
                }
                span{
                  font-size: 15px;
                  margin-right: 10px;
                  color: var(--theme-color);
                }
              }
              .right{
                .iconify{
                  font-size: 14px !important;
                  margin-right: 3px;
                }
                span{
                  font-size: .8rem;
                }
              }
            }
            .originFlag{
              width: 50px;
              height: 50px;
              background-color: #40c9c6;
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
              position: absolute;
              right: 0;
              top: 0;
              color: #fff;
              font-size: 14px;
              span{
                position: absolute;
                color: #fff;
                top: 8px;
                left: 50%;
                font-size: 12px;
                transform: rotate(50deg);
              }
            }
          }
        }
        .cardGroup{
          width: 28%;
          .card{
            border-radius: 5px;
            background-color: #fff;
            min-height: 144px;
            box-shadow: var(--el-box-shadow-light);
            margin-bottom: 10px;
          }
          .prohibitAttackPrompt{
            img{
              width: 80%;
              height: 80%;
            }
          }
          .recommend{
            padding: 10px 20px;
            .header{
              color: var(--theme-color);
              font-weight: bold;
              border-bottom: 1px solid #f0f0f4;
              padding-bottom: 10px;
            }
            .list{
              .item{
                margin: 20px 0;
                  .left{
                    position: relative;
                    .blog-cover{
                      width: 120px;
                      height: 75px;
                      border-radius: 5px;
                    }
                    .ranking{
                      position: absolute;
                      display: inline-block;
                      width: 30px;
                      border-radius: 2px 8px 8px 2px;
                      text-align: right;
                      padding-right: 5px;
                      font-weight: 700;
                      color: #fff;
                      margin-top: 5px;
                      z-index: 50;
                      background-color: #818b95;
                      &.color1{
                        background-color: #f56c6c;
                      }
                      &.color2{
                        background-color: #ffa41b;
                      }
                      &.color3{
                        background-color: #02a0f8;
                      }
                    }
                  }
                .right{
                  width: calc(100% - 120px);
                  color: #303133;
                  .title{
                    font-size: 14px;
                    color: #303133;
                  }
                  .time{
                    margin-top: 20px;
                    font-size: 12px;
                    white-space: nowrap;
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 750px){
    .banner{
      :deep(.el-carousel__container){
        height: 200px !important;
      }
    }
}
@media screen and (max-width: 1118px){
  .home{
    margin-top: 20px;
    .content{
      width: 95%;
      margin: 0 auto;

      .top{
        .banner{
          width: 100%;
          :deep(.el-carousel__container){
            height: 420px;
          }
        }
        .authorInfo{
         display: none;
        }
      }
      .box{
        margin: 20px 0;
        .box-content{
          width: 100%;
          div{
            //border: 1px solid;
          }
          .article-list{
            width: 100%;
            .item{
              box-shadow: var(--el-box-shadow-light);
              height: 170px;
              margin-bottom: 10px;
              border-radius: 5px;
              background-color: #fff;
              padding:15px 20px;
              .top{
                height: 120px;
                overflow: hidden;
                .header{
                  width: 100%;
                  .blogBaseInfo{
                    flex-wrap: wrap;
                    .topUp{
                      white-space: nowrap;
                      background-image: -webkit-linear-gradient(0deg, #3ca5f6 0, #a86af9 100%);
                      padding-left: 5px;
                      padding-right: 5px;
                      display: inline-block;
                      border-top-right-radius: 5px;
                      border-bottom-left-radius: 5px;
                      font-size: .9rem;
                      margin-right: 5px;
                      color: #fff;
                      height: 20px;
                      /* width: 38px;
                       height: 17px;*/
                    }
                    .blogTile{
                      position: relative;
                      display: -webkit-box;
                      -webkit-line-clamp: 2; /* 显示2行 */
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      line-height: 1.5em; /* 行高，根据需要调整 */
                      max-height: 3em; /* 根据行高和行数计算总高度 */
                      color: #000;
                    }
                    .blogTile::after {
                      content: '';
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      height: 2px;
                      background-color: #000;
                      transform: scaleX(0);
                      transform-origin: left;
                      transition: transform 0.5s ease;
                    }

                    .blogTile:hover::after {
                      transform: scaleX(1);
                    }

                    /* 添加动画效果，使得线条最后在右边消失 */
                    @keyframes slide-out {
                      0% {
                        transform: scaleX(1);
                        transform-origin: left;
                      }
                      100% {
                        transform: scaleX(0);
                        transform-origin: right;
                      }
                    }

                    .blogTile::before {
                      content: '';
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      height: 2px;
                      background-color: #000;
                      transform: scaleX(0);
                      transform-origin: left;
                      transition: transform 0.5s ease;
                      z-index: -1; /* 保证动画在文本下方 */
                    }

                    .blogTile:not(:hover)::before {
                      animation: slide-out 0.5s forwards;
                    }
                  }
                  .desc{
                    margin: 10px 0;
                    color: #606266;
                    font-size: 15px;
                    overflow: hidden;
                    overflow-wrap: break-word;
                    display: -webkit-box;
                    -webkit-line-clamp: 3; /* 显示2行 */
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    line-height: 20px; /* 行高，根据需要调整 */

                  }
                }

              }
              .authorInfo{
                flex-wrap: wrap;
                .left{
                  img{
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    margin-right: 10px;
                  }
                  span{
                    font-size: 15px;
                    margin-right: 10px;
                    color: var(--theme-color);
                  }
                }
                .right{
                  margin-top: 5px;
                  .iconify{
                    font-size: 14px !important;
                    margin-right: 3px;
                  }
                  span{
                    font-size: .8rem;
                  }
                }
              }
            }
          }
          .cardGroup{
            display: none;
          }
        }
      }

    }
  }
}
</style>
