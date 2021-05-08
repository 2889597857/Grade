<template>
  <chart class="echart-radar" :options="option" />
</template>

<script setup>
  import chart from "./chart.vue";
  const grade = [
    [79, 89, 89, 70, 77, 94, 88],
    [85, 90, 83, 80, 97, 84, 79],
    [90, 79, 88, 83, 78, 89, 90],
    [88, 93, 95, 80, 87, 96, 96],
  ];
  const option = {
    legend: {
      top: "top",
    },
    tooltip: {
      trigger: "item",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        // dataView: { show: true, readOnly: false },
        // restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "第一次考试",
        type: "pie",
        radius: [50, 250],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 5,
        },
        data: [
          { value: 40, name: "90分以上" },
          { value: 38, name: "80-89分" },
          { value: 50, name: "70-79分" },
          { value: 30, name: "60-69分" },
          { value: 28, name: "60分以下" },
        ],
      },
    ],
  };
</script>

<style scoped>
  .echart-radar {
    width: 720px;
    height: 720px;
    margin: 0 auto;
  }
</style>
