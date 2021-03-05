<template>
  <el-rate v-model="rate" :colors="colors" allow-half :change="change(rate)">
  </el-rate>
</template>

<script>
  export default {
    props: {
      rate: {
        default: 0,
      },
    },
    setup () {
      function change (params) {
        console.log(params)
      }
      return {
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        change
      }
    }
  }
</script>

<style>
</style>