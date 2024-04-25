<template>
  <div class="home">
    <div class="particles-wrapper" id="particlesId">
      <canvas class="particles-js-canvas-el" width="1560" height="560" style="width: 100%; height: 100%"></canvas>
    </div>
    <div v-if="isLoading">数据加载中....</div>
    <div class="bg-wrapper" v-else>
      <!-- <img src="@/assets/images/123123.jpeg" alt="" style="width: 1000px" />
      <img src="@/assets/images/124124.jpeg" alt="" style="width: 1000px" />
      <img src="@/assets/images/125125.jpeg" alt="" style="width: 1000px" />
      <img src="@/assets/images/126126.jpeg" alt="" style="width: 1000px" /> -->
      <slider animation="fade" width="100vw" height="24vh" style="margin: 0 auto">
        <slider-item v-for="(i, index) in list" :key="index">
          <img :src="i" style="width: 100%" />
        </slider-item>
      </slider>
      <!-- <div class="banner-container clearfix">
        <div class="banner-image-container">
          <img src="@/assets/images/123123.jpeg" alt="" />
          <img src="@/assets/images/124124.jpeg" alt="" />
          <img src="@/assets/images/125125.jpeg" alt="" />
          <img src="@/assets/images/126126.jpeg" alt="" />
          <img src="@/assets/images/124124.jpeg" alt="" />
        </div>
      </div> -->
      <!-- <div class="slideshow-container">
        <img
          style="width: 100%; height: 30vh; margin-top: 1px"
          src="@/assets/images/123123.jpeg"
        />
        <img
          style="width: 100%; height: 30vh; margin-top: 1px"
          src="@/assets/images/124124.jpeg"
        />
      </div> -->
      <div class="container" v-if="counts >= 1" @click="toLink(tableData[0].url)">
        <!-- <div class="background-img"> -->
        <div class="box" style="top: 45%; left: 25%">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon iconName="icon-yunjiankong" size="30" className="aaa"></svg-icon>
            <div class="content-div">{{ tableData[0].name }}</div>
          </div>
        </div>
      </div>
      <div class="container" v-if="counts >= 2" @click="toLink(tableData[1].url)">
        <!-- <div class="background-img"> -->
        <div class="box" style="top: 45%; left: 50%">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon iconName="icon-jiankong2" size="30" className="aaa"></svg-icon>
            <div class="content-div">{{ tableData[1].name }}</div>
            <!-- <p>
              <a
                >All our modules are designed to play nicely with responsive of
                course. At the end of the day it comes down to the theme you use
                - our code doesn't get in your way.</a
              >
            </p> -->
          </div>
        </div>
      </div>
      <div class="container" v-if="counts >= 3" @click="toLink(tableData[2].url)">
        <!-- <div class="background-img"> -->
        <div class="box" style="top: 45%; left: 75%">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon iconName="icon-jiankong1" size="30" className="aaa"></svg-icon>
            <div class="content-div">{{ tableData[2].name }}</div>
          </div>
        </div>
      </div>
      <div class="container" v-if="counts >= 4" @click="toLink(tableData[3].url)">
        <!-- <div class="background-img"> -->
        <div class="box" style="top: 65%; left: 25%">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon iconName="icon-jiankong" size="30" className="aaa"></svg-icon>
            <div class="content-div">{{ tableData[3].name }}</div>
            <!-- <p>
              <a
                >All our modules are designed to play nicely with responsive of
                course. At the end of the day it comes down to the theme you use
                - our code doesn't get in your way.</a
              >
            </p> -->
          </div>
        </div>
      </div>
      <div class="container" v-if="counts >= 5" @click="toLink(tableData[4].url)">
        <!-- <div class="background-img"> -->
        <div class="box" style="top: 65%; left: 50%">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon iconName="icon-yunjiankong" size="30" className="aaa"></svg-icon>
            <div class="content-div">{{ tableData[4].name }}</div>
            <!-- <p>
              <a
                >All our modules are designed to play nicely with responsive of
                course. At the end of the day it comes down to the theme you use
                - our code doesn't get in your way.</a
              >
            </p> -->
          </div>
        </div>
      </div>
      <div class="container" v-if="counts >= 6" @click="toLink(tableData[5].url)">
        <!-- <div class="background-img"> -->
        <div class="box" style="top: 65%; left: 75%">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon iconName="icon-jiankong3" size="30" className="aaa"></svg-icon>
            <div class="content-div">{{ tableData[5].name }}</div>
            <!-- <p>
              <a
                >All our modules are designed to play nicely with responsive of
                course. At the end of the day it comes down to the theme you use
                - our code doesn't get in your way.</a
              >
            </p> -->
          </div>
        </div>
      </div>
      <div class="bottom-container">
        <div class="item" v-for="(item, index) in bottomList" :key="'bottomList' + index" @click="toLink(item.url)">
          <svg-icon :iconName="item.icon" size="30" className="aaa"></svg-icon>
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="backImg">
        <div style="margin-right: 20px">
          <img style="width: 110px; height: 76px" src="@/assets/images/2323.gif" alt="" />
        </div>
        <div class="backwrap">
          <span>Copyright©中国航天科工集团公司 智慧工地综合服务平台</span>
          <span></span>
          制作单位：建设工程集团有限公司
          地址：北市市丰台区看丹路4号院甲6号 邮编：100070
          联系电话：(010)83680501
          </span>
          <span>欢迎关注官方微信公众号：casic-ZHT</span>
        </div>
      </div>
    </div>
    <div class="earth-wrapper">
      <div class="light">
        <div class="rotate">
          <img src="../../../assets/images/home-example/earth2.png" alt="" />
          <!--<div class="star" v-for="(item,index) in starList"
               :style="{top:item.y+'px',left:item.x+'px',animationDelay:parseInt(index%8) + 's'}"></div>-->
        </div>
      </div>
    </div>
    <!-- <div class="center-wrapper">
      <div class="title">
        <span class="title-zh">菩提阁</span>
      </div>
    </div> -->
  </div>
</template>
<script>
import particles from 'particles.js';
import * as Three from 'three';
import Card from './Card.vue';
import { dishPage } from '@/api/user';
/* eslint-disable */
export default {
  name: 'Home',
  data: function () {
    return {
      list: [
        'http://101.43.127.118:7000/static/img/123123.eadb247e.jpeg',
        'http://101.43.127.118:7000/static/img/124124.c9e67c55.jpeg',
        'http://101.43.127.118:7000/static/img/125125.68d0c429.jpeg',
        'http://101.43.127.118:7000/static/img/126126.4e601130.jpeg',
      ],
      slideIndex: 0,
      tableData: [],
      counts: 0,
      isLoading: false,
      particleJson: {
        particles: {
          number: {
            value: 60, // 数量
            density: {
              enable: true, // 启用粒子的稀密程度
              value_area: 800, // 区域散布密度大小
            },
          },
          color: {
            value: '#00aeff', // 原子的颜色
          },
          shape: {
            type: 'circle', // 原子的形状 "circle" ,"edge" ,"triangle" ,"polygon" ,"star" ,"image" ,["circle", "triangle", "image"]
            stroke: {
              width: 0, // 原子的宽度
              color: '#362cff', // 原子颜色
            },
            polygon: {
              nb_sides: 5, // 原子的多边形边数
            },
            image: {
              src: 'img/github.svg', // 原子的图片可以使用自定义图片 "assets/img/yop.svg" , "http://mywebsite.com/assets/img/yop.png"
              width: 100, // 图片宽度
              height: 100, // 图片高度
            },
          },
          opacity: {
            value: 1, // 不透明度
            random: true, // 随机不透明度
            anim: {
              enable: true, // 渐变动画
              speed: 1, // 渐变动画速度
              opacity_min: 0, // 渐变动画不透明度
              sync: true,
            },
          },
          size: {
            value: 3, // 原子大小
            random: true, // 原子大小随机
            anim: {
              enable: false, // 原子渐变
              speed: 4, // 原子渐变速度
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false, // 连接线
            distance: 150, // 连接线距离
            color: 'transparent', // 连接线颜色
            opacity: 0.4, // 连接线不透明度
            width: 1, // 连接线的宽度
          },
          move: {
            enable: true, // 原子移动
            speed: 1, // 原子移动速度
            direction: 'none', // 原子移动方向   "none" ,"top" ,"top-right" ,"right" ,"bottom-right" ,"bottom" ,"bottom-left" ,"left" ,"top-left"
            random: true, // 移动随机方向
            straight: false, // 直接移动
            out_mode: 'out', // 是否移动出画布
            bounce: false, // 是否跳动移动
            attract: {
              enable: false, // 原子之间吸引
              rotateX: 600, // 原子之间吸引X水平距离
              rotateY: 600, // 原子之间吸引Y水平距离
            },
          },
        },
        interactivity: {
          detect_on: 'canvas', // 原子之间互动检测 "canvas", "window"
          events: {
            onhover: {
              enable: true, // 悬停
              mode: 'bubble', // 悬停模式      "grab"抓取临近的,"bubble"泡沫球效果,"repulse"击退效果,["grab", "bubble"]
            },
            onclick: {
              enable: false, // 点击效果
              mode: 'repulse', // 点击效果模式   "push" ,"remove" ,"bubble" ,"repulse" ,["push", "repulse"]
            },
            resize: true, // 互动事件调整
          },
          modes: {
            grab: {
              distance: 100, // 原子互动抓取距离
              line_linked: {
                opacity: 0.8, // 原子互动抓取距离连线不透明度
              },
            },
            bubble: {
              distance: 250, // 原子抓取泡沫效果之间的距离
              size: 4, // 原子抓取泡沫效果之间的大小
              duration: 2, // 原子抓取泡沫效果之间的持续事件
              opacity: 1, // 原子抓取泡沫效果透明度
              speed: 1,
            },
            repulse: {
              distance: 400, // 击退效果距离
              duration: 0.4, // 击退效果持续事件
            },
            push: {
              particles_nb: 2, // 粒子推出的数量
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      },
      starList: [
        { x: 610, y: 570 },
        { x: 440, y: 600 },
        { x: 320, y: 450 },
        { x: 260, y: 350 },
        { x: 310, y: 440 },
        { x: 420, y: 510 },
        { x: 780, y: 500 },
        { x: 680, y: 640 },
      ],
      bottomList: [],
      iconList: [
        'icon-jiankong3',
        'icon-jishufuwu',
        'icon-fuwudiqiu',
        'icon-fuwuliu',
        'icon-fuwu_o',
        'icon-fuwu1',
        'icon-fuwuqi',
        'icon-yunjiankong',
        'icon-jiankong',
        'icon-jiankong3',
      ],
    };
  },
  methods: {
    toLink(it) {
      // 如果it是http开头的，就直接打开，否则就加上http://
      if (it.indexOf('http') == -1) {
        it = 'http://' + it;
      }
      window.open(it, '_blank');
    },
    async dishPageList() {
      this.isLoading = true;
      let res = await dishPage({
        page: 1,
        pageSize: 10,
      });
      if (res.code === 1) {
        this.$nextTick(() => {
          this.tableData = res.data.records || [];
          this.counts = res.data.total;
          // 取第七个到最后一个的数据
          // this.$nextTick(() => {
          this.bottomList =
            res.data.records.slice(6, res.data.records.length) || [];
          if (this.bottomList.length > 0) {
            // 循环bottomList和iconList，给每个bottomList添加icon
            for (var i = 0; i < this.bottomList.length; i++) {
              this.bottomList[i].icon = this.iconList[i];
            }
          }
        });
        this.isLoading = false;
      }
    },
    showSlides() {
      var i;
      var slides = document.getElementsByClassName('mySlides');
      var dots = document.getElementsByClassName('dot');
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
      setTimeout(showSlides, 2000); // 切换时间
    },
  },
  components: {
    Card,
  },
  mounted() {
    //  for (var i = 0; i < 100; i++) {
    //   var x = Math.random() * 600 + 200;
    //   var y = Math.random() * 600 + 200;
    //   this.starList.push({ x, y });
    // }
    // window.location.reload();
    // await this.dishPageList();window.location.reload();
  },
  created() {
    window.particlesJS('particlesId', this.particleJson);
    // this.dishPageList();
    location.reload();
    showSlides();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.dishPageList();
    });
  },
};
</script>

<style>
.container {
  padding-top: 20px;
  padding-bottom: 20px;
}

.background-img {
  background-image: url('https://3.bp.blogspot.com/-piZWCW2uUbg/W2fPXxkWZgI/AAAAAAAAOu0/eydmMjTIqcwLMHEEr2H7imqoRTxMw4o9QCLcBGAs/s1600/among_trees_night_dribbble.png');
  height: 400px;
  width: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #2a3cad;
  border-radius: 4px;
  box-shadow: 0px 0px 5px #2a3cad;
  position: relative;
}

.content div {
  font-size: 19px;
}

.bottom-container {
  position: absolute;
  top: 80%;
  /* left: 10%; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 60px;
  cursor: pointer;
}

.item .aaa {
  font-size: 36px;
}

.item p {
  color: #4edad6;
  font-size: 20px;
  font-weight: 700;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: #111845a6;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 20px 50px rgb(23, 32, 90);
  border: 2px solid #2a3cad;
  color: white;
  padding: 20px;
  cursor: pointer;
}

.box:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.5s;
  pointer-events: none;
}

.box:hover:before {
  left: -50%;
  transform: skewX(-5deg);
}

.box .content {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border: 1px solid #f0a591;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}

.aaa {
  font-size: 30px;
  margin-bottom: 10px;
}

.box span:nth-child(1) {
  transform: rotate(0deg);
}

.box span:nth-child(2) {
  transform: rotate(90deg);
}

.box span:nth-child(3) {
  transform: rotate(180deg);
}

.box span:nth-child(4) {
  transform: rotate(270deg);
}

.box span:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #50dfdb;
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }

  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform: scaleX(1);
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>

<style lang="stylus" scoped>
canvas {
  display: block;
  background-color: transparent;
}

.home {
  width: 100%;
  height: 100%;

  .particles-wrapper {
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 100%;
  }

  .bg-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url('~@/assets/images/home-example/bg.min.png');
    -webkit-background-size: cover;
    background-size: cover;
  }

  .earth-wrapper {
    position: absolute;
    top: -500px;
    right: -400px;
    background-image: url('~@/assets/images/home-example/light2.png');
    background-position: left bottom;
    background-size: cover;

    .rotate {
      position: relative;
      animation: rotate linear infinite 60s;

      img {
        width: 1000px;
        height: auto;
      }

      /* .star
      background-image: radial-gradient(#fff 5%, rgba(10,80,150,0.8) 50%, transparent 60%);
      width: 10px
      height: 10px
      z-index 200
      opacity 0
      position absolute
      animation star-shine infinite linear 10s */
    }
  }

  .center-wrapper {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);

    .title {
      text-align: center;

      img {
        width: 1000px;
        height: auto;
      }

      .title-zh {
        font-size: 60px;
        color: #fff;
        width: 1000px;
        letter-spacing: 50px;
        text-align: end;
      }

      .title-en {
        font-size: 40px;
        color: #fff;
        width: 1000px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #627a9b;
      }

      .title-user {
        font-size: 20px;
        color: #0958a8;
        width: 1000px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }

    .links {
      padding-top: 20px;
      width: 1000px;
      display: flex;
      justify-content: space-between;

      a {
        font-size: 16px;
        display: block;
        width: 180px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background-color: rgba(8, 35, 75, 0.6);
        position: relative;
        box-shadow: 0 0 1px rgba(200, 200, 255, 0.4);
        transition: all ease-in-out 0.4s;

        &::before {
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          height: 10px;
          width: 10px;
          display: block;
          border-left: 1px solid #2691ff;
          border-bottom: 1px solid #2691ff;
        }

        &::after {
          position: absolute;
          content: '';
          top: 0;
          right: 0;
          height: 10px;
          width: 10px;
          display: block;
          border-right: 1px solid #2691ff;
          border-top: 1px solid #2691ff;
        }

        &:hover {
          box-shadow: 0 0 4px rgba(200, 200, 255, 0.4);
          background-color: rgba(10, 60, 130, 0.6);
        }
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
    opacity: 0.9;
  }

  50% {
    transform: rotate(180deg);
    opacity: 1;
  }

  100% {
    transform: rotate(360deg);
    opacity: 0.9;
  }
}

/* @keyframes star-shine{
  0% {opacity:0}
  25% {opacity:0.1}
  50% {opacity:0.6}
  75% {opacity:0.1}
  100% {opacity:0}
} */
.content-div {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
}

.backImg {
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backwrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #5eacf5;
  font-size: 14px;
  line-height: 30px;
}
</style>

<style lang="css">
ul {
  list-style: none;
}

#slideshow {
  width: 100vw;
  height: 30vh;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

#imglist li {
  width: 100%;
  height: 100%;
  position: absolute;
  /* 全部图片设为透明 */
  opacity: 0;
  transition: opacity 3.5s;
}

#imglist>li img {
  height: 1000px;
}

#dotlist {
  position: absolute;
  bottom: 30px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  left: 50%;
  transform: translate(-50%);
}

#dotlist>li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(206, 16, 16);
  /* 全部小圆点设为半透明 */
  opacity: 0.3;
  cursor: pointer;
  user-select: none;
}

/* 具有appear类的元素设为 不透明 即显示 */

#imglist>li.appear,
#dotlist>li.appear {
  opacity: 1;
}

/* 左右轮播按钮 */

#pre,
#next {
  position: absolute;
  font-size: 100px;
  color: rgba(0, 0, 0, 0.3);
  top: 50%;
  transform: translate(0, -50%);
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}

#pre {
  left: 20px;
}

#next {
  right: 20px;
}

#pre:hover,
#next:hover {
  color: rgba(255, 255, 255, 0.3);
}
</style>
