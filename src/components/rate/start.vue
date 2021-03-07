<template>
  <el-rate
    v-model="rate"
    :colors="colors"
    allow-half
    :change="change(rate, id)"
    :disabled="isRate"
  >
  </el-rate>
</template>

<script>
  import { ref, inject } from 'vue';
  export default {
    props: {
      id: Number
    },
    setup () {
      let rate = ref(0)
      const isRate = inject('isRate')
      function change (params, id) {
        const Rate = {
          teacherID: id,
          rate: params
        }
        if (isRate.value) {
          console.log(Rate)
        }
      }
      return {
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        change, rate, isRate
      }
    }
  }
</script>
