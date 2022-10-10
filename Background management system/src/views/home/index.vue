<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userimg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-inif">
          <p>上次登录时间：<span>2022-9-14</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 360px">
        <el-table :data="tableDate">
          <el-table-column
            v-for="(obj, index) in tobleLable"
            :key="index"
            :prop="index"
            :label="obj"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col style="margin-top: 20px" :span="16">
      <div class="numd">
        <el-card
          class="numca"
          v-for="obj in countData"
          :key="obj.name"
          :body-style="{ display: 'flex', padding: '0' }"
        >
          <i
            class="icon"
            :class="`el-icon-${obj.icon}`"
            :style="{ background: obj.color }"
          >
          </i>
          <div class="detail">
            <p class="num">￥{{ obj.value }}</p>
            <p class="txt">{{ obj.name }}</p>
          </div>
        </el-card>
      </div>
      <br />
      <el-card style="height: 250px; width: 100%">
        <div style="height: 250px" ref="echarts"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 230px; width: 47%">
          <div style="height: 220px" ref="userEcharts"></div>
        </el-card>
        <el-card style="height: 230px; margin-left: 20px">
          <div style="height: 220px" ref="videoEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../../../api/data";
import * as echarts from "echarts";
// import
export default {
  name: "hoMe",
  data() {
    return {
      userimg: require("../../assets/1.jpg"),
      tableDate1: [],
      tableDate: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
      tobleLable: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data;
      if (code == 20000) {
        console.log(1111);
        this.tableDate1 = data.tableDate;
        const order = data.orderData;
        const xData = order.date;
        const keyArray = Object.keys(order.data[0]);
        const series = [];
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        const option = {
          xAxis: {
            data: xData,
          },
          yAxis: {},
          legend: {
            data: keyArray,
          },
          series,
        };
        const E = echarts.init(this.$refs.echarts);
        E.setOption(option);
        // 用户图
        const userOption = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: data.userData.map((time) => time.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: "新增用户",
              data: data.userData.map((time) => time.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: data.userData.map((time) => time.active),
              type: "bar",
            },
          ],
        };
        const A = echarts.init(this.$refs.userEcharts);
        A.setOption(userOption);
        // 饼图
        const videoOption = {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              data: data.videoData,
              type: "pie",
            },
          ],
        };
        const B = echarts.init(this.$refs.videoEcharts);
        B.setOption(videoOption);
      }
      // console.log(res);
    });
  },
};
</script>

<style lang='less' scoped>
.user {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    float: left;
  }
  .userinfo {
    float: left;
    margin-left: 40px;
    margin-top: 30px;
  }
}
.login-inif {
  margin-top: 5px;
  p {
    color: #ccc;
    margin-top: 10px;
    font-size: 12px;
    span {
      color: #333;
      margin-left: 40px;
    }
  }
}
.numd {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  .numca {
    width: 31%;
    margin-right: 25px;
    margin-bottom: 10px;
    height: 60px;
    float: left;
    i {
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
    }
    .detail {
      width: 206px;
      padding-left: 20px;
      box-sizing: border-box;
      .num {
        margin-top: 5px;
        margin-bottom: 10px;
        height: 30%;
        font-size: 20px;
        font-weight: bold;
        width: 100%;
      }
      .txt {
        font-size: 14px;
      }
    }
  }
  .numca:nth-child(3n) {
    margin-right: 0;
  }
}
.graph {
  margin-top: 10px;
  width: 100%;
  .el-card {
    float: left;
    width: 50%;
  }
}
</style>