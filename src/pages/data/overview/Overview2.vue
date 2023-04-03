<template>
  <div class="overview">
    <div class="head-wrapper">
      <p>系统概况专题111</p>
    </div>
  </div>
</template>

<script>
import ContentBox from "../../../components/ContentBox/ContentBox";
export default {
  name: "Overview",
  data() {
    return {
      pieChartOption: {
        color: ["#499DF8", "#eee"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            hoverAnimation: false,
            legendHoverLink: false,
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" }
            ]
          }
        ]
      },
      barChartOption: {
        color: ["#3c90f7", "#5fbdbd"],
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "1月", "2月", "3月", "4月", "5月", "6月"],
            ["Matcha Latte", 600, 300, 500, 1000, 200, 850],
            ["Milk Tea", 400, 1000, 900, 600, 700, 800]
          ]
        },
        xAxis: [{ type: "category", gridIndex: 0 }],
        yAxis: [{ gridIndex: 0 }],
        series: [
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" }
        ]
      }
    };
  },
  components: {
    ContentBox
  }
};
</script>

<style lang="stylus" scoped>
.overview
  position relative
  width: 100%
  height: 100%
  padding-top: 60px
  .head-wrapper
    position absolute
    top: 0
    left: 0
    width: 100%
    height: 60px
    p
      font-size: 22px
      text-align center
      color #333
  .body-wrapper
    overflow auto
    display flex
    width: 100%
    height: 100%
    .panel
      padding 0 20px
      box-sizing border-box
      &:nth-child(1)
        width 25%
        height: 100%
      &:nth-child(2)
        width 45%
        height: 100%
      &:nth-child(3)
        width 30%
        height: 100%
  .count-wrapper
    span
      display inline-block
      vertical-align middle
    .icon-tip
      background-color: #dce5f5
      color #ffffff
      -webkit-border-radius: 4px
      -moz-border-radius: 4px
      border-radius: 4px
      font-size: 20px
      padding 8px 12px
      margin-top: 10px
      vertical-align baseline
      i
        font-weight: 700
    .count-data
      margin-left: 20px
      i
        line-height: 28px
        &:nth-child(1)
          font-size: 16px
        &:nth-child(2)
          font-size: 14px
    .count-box
      width 48%
      padding 4px 0
      text-align center
      background-color: #dce5f5
      line-height: 20px
</style>
