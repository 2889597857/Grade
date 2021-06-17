<template>
  <div class="echart-line" ref="echartLine"></div>
</template>

<script>
  import * as echarts from "echarts";
  import { inject, onMounted, ref } from "vue";
  export default {
    setup () {
      const echartLine = ref(null);
      const grade = inject("grade");
      const sss = (id) => {
        let result = [];
        for (let index = 0; index < grade.length; index++) {
          const element = grade[index];
          result.push(element[id]);
        }
        return result;
      };

      let option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["第一次考试", "第二次考试", "第三次考试", "第四次考试"],
        },
        legend: {},
        yAxis: {
          type: "value",
          min: "dataMin",
        },
        tooltip: {
          trigger: "axis",
        },
        series: [
          {
            name: "语文",
            data: sss(0),
            type: "line",
          },
          {
            name: "数学",
            data: sss(1),
            type: "line",
          },
          {
            name: "英语",
            data: sss(2),
            type: "line",
          },
          {
            name: "政治",
            data: sss(3),
            type: "line",
          },
          {
            name: "历史",
            data: sss(4),
            type: "line",
          },
          {
            name: "地理",
            data: sss(5),
            type: "line",
          },
          {
            name: "生物",
            data: sss(6),
            type: "line",
          },
        ],
      };

      onMounted(() => {
        const myChart = echarts.init(echartLine.value);
        // myChart.clear();
        myChart.setOption(option);
      });

      return {
        echartLine,
      };
    },
  };
</script>
<style lang="scss" scope`>
  .echart-line {
    width: 100%;
    height: 400px;
    margin: 0 auto;
  }
</style>
