<template>
  <div class="Home3-wrap">
    <div class="top_wrap">
      <div class="top-left">
        <span>公司</span>
        <span>产品</span>
        <span>公告</span>
        <span>解决方案</span>
        <span>更多</span>
      </div>
      <div class="top-right">
        <span>北京</span>
        <span>设置</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <span class="header" style="margin-right: 3px">
              <img
                src="https://himg.bdimg.com/sys/portraitn/item/public.1.9ae28e6b.lpgg-M-jsxZYTwX1Gz7Z-A"
                alt=""
                srcset=""
              />
            </span>
            <span>登录名</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="content-wrap">
      <div
        style="
          text-align: center;
          font-size: 40px;
          font-weight: 600;
          color: #004098;
          margin-top: 3%;
        "
      >
        <img
          style="width: 700px; height: 76px"
          src="@/assets/images/wx.svg"
          alt=""
        />
        <!-- 中航天智慧工地综合服务平台 -->
      </div>
      <div class="s-wrap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的导航" name="first">
            <el-card class="box-card" shadow="always">
              <div class="box-header">
                我的导航
                <el-button type="text" icon="el-icon-edit" disabled>
                  编辑
                </el-button>
              </div>
              <div class="icon_list">
                <div
                  class="icon-item"
                  v-for="(item, index) in bottomList"
                  :key="'bottomList' + index"
                  @click="toLink(item.url)"
                >
                  <svg-icon
                    :iconName="item.icon"
                    size="80"
                    className="aaa"
                    style="margin-bottom: 20px"
                  ></svg-icon>
                  <span>{{ item.name }}</span>
                </div>
                <div class="icon-item-add" @click="tip">
                  <i class="el-icon-plus" style="padding: 8px"></i>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="推荐" name="second" disabled></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="bottom_wrap">
      <div style="margin-right: 20px">
        <img
          style="width: 110px; height: 76px"
          src="@/assets/images/QQ.jpg"
          alt=""
        />
      </div>
      <div class="backwrap">
        <span>Copyright©中国航天科工集团公司 中航天智慧工地综合服务平台</span>
        <span>
          制作单位：中航天建设工程集团有限公司
          地址：北市市丰台区看丹路4号院甲6号 邮编：100070
          联系电话：(010)83680501
        </span>
        <span>欢迎关注官方微信公众号：casic-ZHT</span>
      </div>
    </div>
  </div>
</template>

<script>
import { dishPage } from '@/api/user';
export default {
  name: 'demo',
  components: {},
  data() {
    return {
      activeName: 'first',
      isLoading: false,
      bottomList: [],
      iconList: [
        'icon-maozi',
        'icon-zhihuigongdi',
        'icon-shuibiao',
        'icon-zhihuigongdi1',
        'icon-jikeng',
        'icon-yanganqi',
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async dishPageList() {
      this.isLoading = true;
      let res = await dishPage({
        page: 1,
        pageSize: 100,
      });
      if (res.code === 1) {
        this.$nextTick(() => {
          this.bottomList = res.data.records || [];
          // 循环bottomList和iconList，给每个bottomList添加icon
          // for (var i = 0; i < this.bottomList.length; i++) {
          //   this.bottomList[i].icon = this.iconList[i];
          // }
          console.log(`output->`, this.bottomList);
        });
        this.isLoading = false;
      }
    },
    tip() {
      this.$message({
        message: '请通过后台管理系统配置导航！',
        type: 'warning',
      });
    },
    toLink(it) {
      // 如果it是http开头的，就直接打开，否则就加上http://
      if (it.indexOf('http') == -1) {
        it = 'http://' + it;
      }
      window.open(it, '_blank');
    },
    handleCommand(command) {
      if (command === 'a') {
        localStorage.clear();
        this.$router.push('/login');
      }
    },
  },
  created() {
    this.dishPageList();
  },
};
</script>

<style scoped>
.top_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.header {
  width: 28px;
  height: 28px;
  border: 1px solid #4e71f2;
  border-radius: 50%;
  /* display: inline-block; */
}

.el-dropdown-link img {
  position: relative;
  /* top: 1px; */
  left: 1px;
  padding: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.top-left {
  padding-left: 24px;
}

.top-left span {
  margin-right: 24px;
  /* margin-top: 19px; */
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.top-left span:hover {
  color: #416bfb;
}

.top-right span {
  margin-right: 24px;
  /* margin-top: 19px; */
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: #606266;
}

.top-right {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
}

.bottom_wrap {
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
  color: #bbb;
  font-size: 14px;
  line-height: 30px;
}

.s-wrap {
  display: block;
  margin: 0 auto;
  border-radius: 16px;
  box-sizing: content-box;
  background: #fff;
  padding: 14px 32px 0;
  width: 60%;
  position: fixed;
  top: 30%;
  left: 20%;
}

.box-card {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  font-family: Arial, sans-serif;
  max-height: 400px;
  display: flex;
  flex-direction: column;
}

.box-card /deep/.el-card__body {
  padding: 0 !important;
  height: 100%;
}

.box-header {
  width: 100%;
  height: 46px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #222222;
  line-height: 14px;
  position: absolute;
  /* left: 16px; */
  padding: 16px;
  /* top: 16px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-header /deep/.el-button {
  font-size: 16px;
  /* color: #222222; */
}

.icon_list {
  margin-top: 56px;
  flex: 1;
  padding: 16px 30px;
  display: flex;
  flex-wrap: wrap;
  max-height: 350px;
  overflow-y: auto;
  /* justify-content: flex-; */
}

.icon-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
  margin-bottom: 60px;
  align-items: center;
  /* min-width: 80px; */
  cursor: pointer;
}

.icon-item span:hover {
  color: #416bfb;
}

.icon-item-add {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px dashed #d7d9e0;
  border-radius: 8px;
  cursor: pointer;
}

.aaa {
  font-size: 50px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 8px;
}

.Home3-wrap {
  font-family: '汉仪大黑简体', sans-serif;
}
</style>
