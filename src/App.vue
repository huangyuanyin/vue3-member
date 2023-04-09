<template>
  <div id="app" v-cloak>
    <!-- <div
      v-if="this.$route.path !== '/home2' && this.$route.path !== '/login'"
      class="page-title-wrapper"
    > -->
    <div v-if="this.$route.path !== '/home2'" class="page-title-wrapper">
      <span class="page-title">
        {{ returnRouteName() }}
      </span>
      <span class="to-home" v-if="this.$route.path !== '/login'">
        <el-button size="small" type="text" @click="logout">退出登录</el-button>
      </span>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    returnRouteName() {
      let route = this.$route.path
      switch (route) {
        case '/overview':
          return '系统概况专题111'
        case '/summary':
          return '数据归集专题'
        case '/public':
          return '双公示专题'
        case '/union':
          return '联合奖惩专题'
        case '/map':
          return '区域数据归集'
        case '/home':
          return '中航天智慧工地综合服务平台'
        case '/login':
          return '中航天智慧工地综合服务平台'
      }
    },
    logout() {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.to-home {
  z-index: 99999999;
}
.router-link-exact-active {
  font-weight: 700;
  color: #fff;
  cursor: pointer;
}
</style>
<style lang="stylus">
[v-cloak] {
  display: none;
}

$lightBgc = rgba(1, 23, 58, .6)
$lightBdc = rgba(2, 203, 255, .1)
$lightShadowColor = rgba(2, 203, 255, .2)
$fontColor = #02cbff
$bgc = #050819
.num
  color $fontColor
  font-weight: 400
  font-size: 22px

.font
  color #fff
  font-size: 12px

#app
  height: 100%;
  background-color: $bgc
  overflow-x auto
  overflow-y auto
i
  font-style normal

.page-title-wrapper
  background-image: url('~@/assets/images/overview/title_bg.png')
  background-repeat: no-repeat
  -webkit-background-size: auto 100px
  background-size: auto 100px
  background-position: top center
  width: 100%
  text-align center
  height: 80px;
  padding-top: 10px
  position relative

  .to-home
    position absolute
    left: 10%
    bottom 0
    background-color: #0d1b4d
    padding 4px 20px
    -webkit-border-radius: 18px
    -moz-border-radius: 18px
    border-radius: 18px
    cursor pointer
a
  color #fff

.page-title
  background-image: -webkit-linear-gradient(bottom, #1fb9fc, #1d80d2, #1850a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700
  font-size: 36px
  line-height: 60px
  padding 10px 0
  letter-spacing 10px
.white-font
  color #fff
.bin-date-picker-cells-cell-range:before{
  background-color: #0f366e !important
}
</style>
