<template>
  <div>
    <eLine />
    <eRadar />
  </div>
</template>

<script>
  import myTemplate from "com/Template/Template.vue";
  import eLine from "com/echarts/line.vue";
  import eRadar from "com/echarts/radar.vue";
  import chart from "com/echarts/chart.vue";


  import { provide } from "vue";
  export default {
    components: { myTemplate, eLine, eRadar },
    setup () {
      const grade = [
        [79, 89, 89, 70, 77, 94, 88],
        [85, 90, 83, 80, 97, 84, 79],
        [90, 79, 88, 83, 78, 89, 90],
        [88, 93, 95, 80, 87, 96, 96],
      ];
      provide("grade", grade);
    },
  };
</script>
