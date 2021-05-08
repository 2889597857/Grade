<template>
  <el-rate
    v-model="ra"
    :colors="colors"
    allow-half
    :change="change(ra)"
    :disabled="isRate"
  >
  </el-rate>
</template>

<script>
  import { inject, ref } from "vue";
  export default {
    props: {
      id: Number,
      rate: Number,
      index: Number
    },
    setup (props) {
      const isRate = inject("isRate");
      const RateTeacher = inject("RateTeacher");
      let ra = ref()
      ra.value = props.rate
      function change (params) {
        if (params != props.rate) {
          RateTeacher({
            rate: params, id: props.id, index: props.index
          })
        }
      }
      return {
        colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
        change,
        isRate,
        ra
      };
    },
  };
</script>
