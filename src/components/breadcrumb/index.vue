<template>
  <el-breadcrumb separator="/" class="breadcrumb www">
    <el-breadcrumb-item
      v-for="(item, index) in matchedList"
      :key="index"
      :to="{ path: item.path }"
    >
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    props: {
      matchedList: {
        type: Array,
        required: true
      }
    },
    setup () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .breadcrumb {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    width: 90%;
    margin: 10px;
  }
</style>