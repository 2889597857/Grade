<template>
  <div class="echart-radar" ref="echartRadar"></div>
</template>

<script>
import * as echarts from "echarts";
import { inject, ref, onMounted } from "vue";
export default {
  setup() {
    const grade = inject("grade");
    const echartRadar = ref(null);
    const option = {
      tooltip: {},
      legend: {},
      radar: {
        name: {
          textStyle: {
            color: "#fff",
            backgroundColor: "#999",
            borderRadius: 5,
            padding: [4, 6],
          },
        },
        indicator: [
          { name: "语文", max: 100 },
          { name: "数学", max: 100 },
          { name: "英语", max: 100 },
          { name: "政治", max: 100 },
          { name: "历史", max: 100 },
          { name: "地理", max: 100 },
          { name: "生物", max: 100 },
        ],
      },
      series: [
        {
          name: "考试成绩",
          type: "radar",
          data: [
            {
              value: grade[0],
              name: "第一次考试",
            },
            {
              value: grade[1],
              name: "第二次考试",
            },
            {
              value: grade[2],
              name: "第三次考试",
            },
            {
              value: grade[3],
              name: "第四次考试",
            },
          ],
        },
      ],
    };
    onMounted(() => {
      const myChart = echarts.init(echartRadar.value);
      myChart.clear();
      myChart.setOption(option);
    });
    return {
      echartRadar,
    };
  },
};
</script>
<style lang="scss" scope`>
.echart-radar {
  width: 720px;
  height: 720px;
  margin: 0 auto;
}
</style>
