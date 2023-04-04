<template>
  <div class="home">
    <div class="particles-wrapper" id="particlesId">
      <canvas
        class="particles-js-canvas-el"
        width="1560"
        height="560"
        style="width: 100%; height: 100%"
      ></canvas>
    </div>
    <div class="bg-wrapper">
      <div class="container" @click="toLink()">
        <!-- <div class="background-img"> -->
        <div class="box" style="top:30%;left: 25%;">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon
              iconName="icon-jiankong3"
              size="30"
              className="aaa"
            ></svg-icon>
            <h2>建科研</h2>
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
      <div class="container" @click="toLink()">
        <!-- <div class="background-img"> -->
        <div class="box" style="top:30%;left: 50%;">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon
              iconName="icon-jiankong3"
              size="30"
              className="aaa"
            ></svg-icon>
            <h2>建科研</h2>
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
      <div class="container" @click="toLink()">
        <!-- <div class="background-img"> -->
        <div class="box" style="top:30%;left: 75%;">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon
              iconName="icon-jiankong3"
              size="30"
              className="aaa"
            ></svg-icon>
            <h2>建科研</h2>
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
      <div class="container" @click="toLink()">
        <!-- <div class="background-img"> -->
        <div class="box" style="top:55%;left: 25%;">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon
              iconName="icon-jiankong3"
              size="30"
              className="aaa"
            ></svg-icon>
            <h2>建科研</h2>
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
      <div class="container" @click="toLink()">
        <!-- <div class="background-img"> -->
        <div class="box" style="top:55%;left: 50%;">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon
              iconName="icon-jiankong3"
              size="30"
              className="aaa"
            ></svg-icon>
            <h2>建科研</h2>
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
      <div class="container" @click="toLink()">
        <!-- <div class="background-img"> -->
        <div class="box" style="top:55%;left: 75%;">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <svg-icon
              iconName="icon-jiankong3"
              size="30"
              className="aaa"
            ></svg-icon>
            <h2>建科研</h2>
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
        <div
          class="item"
          v-for="(item, index) in bottomList"
          :key="'bottomList' + index"
        >
          <svg-icon :iconName="item.icon" size="30" className="aaa"></svg-icon>
          <p>{{ item.name }}</p>
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
import particles from "particles.js";
import * as Three from "three";
import Card from "./Card.vue";
/* eslint-disable */
export default {
  name: "Home",
  data: function() {
    return {
      particleJson: {
        particles: {
          number: {
            value: 60, // 数量
            density: {
              enable: true, // 启用粒子的稀密程度
              value_area: 800 // 区域散布密度大小
            }
          },
          color: {
            value: "#00aeff" // 原子的颜色
          },
          shape: {
            type: "circle", // 原子的形状 "circle" ,"edge" ,"triangle" ,"polygon" ,"star" ,"image" ,["circle", "triangle", "image"]
            stroke: {
              width: 0, // 原子的宽度
              color: "#362cff" // 原子颜色
            },
            polygon: {
              nb_sides: 5 // 原子的多边形边数
            },
            image: {
              src: "img/github.svg", // 原子的图片可以使用自定义图片 "assets/img/yop.svg" , "http://mywebsite.com/assets/img/yop.png"
              width: 100, // 图片宽度
              height: 100 // 图片高度
            }
          },
          opacity: {
            value: 1, // 不透明度
            random: true, // 随机不透明度
            anim: {
              enable: true, // 渐变动画
              speed: 1, // 渐变动画速度
              opacity_min: 0, // 渐变动画不透明度
              sync: true
            }
          },
          size: {
            value: 3, // 原子大小
            random: true, // 原子大小随机
            anim: {
              enable: false, // 原子渐变
              speed: 4, // 原子渐变速度
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: false, // 连接线
            distance: 150, // 连接线距离
            color: "transparent", // 连接线颜色
            opacity: 0.4, // 连接线不透明度
            width: 1 // 连接线的宽度
          },
          move: {
            enable: true, // 原子移动
            speed: 1, // 原子移动速度
            direction: "none", // 原子移动方向   "none" ,"top" ,"top-right" ,"right" ,"bottom-right" ,"bottom" ,"bottom-left" ,"left" ,"top-left"
            random: true, // 移动随机方向
            straight: false, // 直接移动
            out_mode: "out", // 是否移动出画布
            bounce: false, // 是否跳动移动
            attract: {
              enable: false, // 原子之间吸引
              rotateX: 600, // 原子之间吸引X水平距离
              rotateY: 600 // 原子之间吸引Y水平距离
            }
          }
        },
        interactivity: {
          detect_on: "canvas", // 原子之间互动检测 "canvas", "window"
          events: {
            onhover: {
              enable: true, // 悬停
              mode: "bubble" // 悬停模式      "grab"抓取临近的,"bubble"泡沫球效果,"repulse"击退效果,["grab", "bubble"]
            },
            onclick: {
              enable: false, // 点击效果
              mode: "repulse" // 点击效果模式   "push" ,"remove" ,"bubble" ,"repulse" ,["push", "repulse"]
            },
            resize: true // 互动事件调整
          },
          modes: {
            grab: {
              distance: 100, // 原子互动抓取距离
              line_linked: {
                opacity: 0.8 // 原子互动抓取距离连线不透明度
              }
            },
            bubble: {
              distance: 250, // 原子抓取泡沫效果之间的距离
              size: 4, // 原子抓取泡沫效果之间的大小
              duration: 2, // 原子抓取泡沫效果之间的持续事件
              opacity: 1, // 原子抓取泡沫效果透明度
              speed: 1
            },
            repulse: {
              distance: 400, // 击退效果距离
              duration: 0.4 // 击退效果持续事件
            },
            push: {
              particles_nb: 2 // 粒子推出的数量
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      },
      starList: [
        { x: 610, y: 570 },
        { x: 440, y: 600 },
        { x: 320, y: 450 },
        { x: 260, y: 350 },
        { x: 310, y: 440 },
        { x: 420, y: 510 },
        { x: 780, y: 500 },
        { x: 680, y: 640 }
      ],
      bottomList: [
        { icon: "icon-jiankong3", name: "建科研" },
        { icon: "icon-jishufuwu", name: "建科研" },
        { icon: "icon-fuwudiqiu", name: "建科研" },
        { icon: "icon-fuwuliu", name: "建科研" },
        { icon: "icon-fuwu_o", name: "建科研" },
        { icon: "icon-fuwu1", name: "建科研" },
        { icon: "icon-fuwuqi", name: "建科研" },
        { icon: "icon-yunjiankong", name: "建科研" },
        { icon: "icon-jiankong", name: "建科研" },
        { icon: "icon-jiankong3", name: "建科研" }
      ]
    };
  },
  methods: {
    toLink() {
      window.open("https://www.baidu.com");
    }
  },
  components: {
    Card
  },
  mounted() {
    // this.createModel();
    for (var i = 0; i < 100; i++) {
      var x = Math.random() * 600 + 200;
      var y = Math.random() * 600 + 200;
      this.starList.push({ x, y });
    }
    window.particlesJS("particlesId", this.particleJson);
  }
};
</script>

<style>
.container {
  padding-top: 20px;
  padding-bottom: 20px;
}
.background-img {
  background-image: url("https://3.bp.blogspot.com/-piZWCW2uUbg/W2fPXxkWZgI/AAAAAAAAOu0/eydmMjTIqcwLMHEEr2H7imqoRTxMw4o9QCLcBGAs/s1600/among_trees_night_dribbble.png");
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

.content h2 {
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
  content: "";
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
  content: "";
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
canvas
  display block
  background-color: transparent

.home
  width: 100%
  height: 100%

  .particles-wrapper
    position absolute
    background-color: transparent
    width: 100%
    height: 100%

  .bg-wrapper
    width: 100%
    height: 100%
    background-image: url('~@/assets/images/home-example/bg.min.png')
    -webkit-background-size: cover
    background-size: cover

  .earth-wrapper
    position absolute
    top: -500px
    right: -400px
    background-image: url('~@/assets/images/home-example/light2.png')
    background-position: left bottom;
    background-size: cover;
    .rotate
      position relative
      animation rotate linear infinite 60s
      img
        width: 1000px
        height: auto
      /*.star
        background-image: radial-gradient(#fff 5%, rgba(10,80,150,0.8) 50%, transparent 60%);
        width: 10px
        height: 10px
        z-index 200
        opacity 0
        position absolute
        animation star-shine infinite linear 10s*/
  .center-wrapper
    position absolute
    top: 10%
    left: 50%
    transform translate(-50%, -50%)

    .title
      text-align center
      img
        width 1000px
        height: auto
      .title-zh
        font-size: 60px
        color #fff
        width 1000px
        letter-spacing 50px
        text-align end
      .title-en
        font-size: 40px
        color #fff
        width 1000px
        text-align center
        margin-top: 20px
        margin-bottom: 20px
        color #627a9b
      .title-user
        font-size: 20px
        color #0958a8
        width 1000px
        text-align center
        margin-top: 20px
        margin-bottom: 20px

    .links
      padding-top: 20px
      width: 1000px
      display flex
      justify-content space-between

      a
        font-size: 16px
        display block
        width: 180px
        height: 50px
        line-height: 50px
        text-align center
        color #fff
        background-color: rgba(8, 35, 75, .6)
        position relative
        box-shadow 0 0 1px rgba(200, 200, 255, .4)
        transition all ease-in-out .4s

        &::before
          position absolute
          content ''
          bottom: 0
          left: 0
          height: 10px
          width: 10px
          display block
          border-left: 1px solid #2691ff
          border-bottom: 1px solid #2691ff

        &::after
          position absolute
          content ''
          top: 0
          right: 0
          height: 10px
          width: 10px
          display block
          border-right: 1px solid #2691ff
          border-top: 1px solid #2691ff

        &:hover
          box-shadow 0 0 4px rgba(200, 200, 255, .4)
          background-color: rgba(10, 60, 130, .6)

@keyframes rotate {
  0% {
    transform: rotate(0);
    opacity: 0.9
  }
  50% {
    transform: rotate(180deg);
    opacity: 1
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.9
  }
}
/*@keyframes star-shine{
  0% {opacity:0}
  25% {opacity:0.1}
  50% {opacity:0.6}
  75% {opacity:0.1}
  100% {opacity:0}
}*/
</style>
