<template>
  <i class="el-icon-delete change-close" @click="goback"></i>
</template>

<script>
  import { useRouter } from "vue-router";
  export default {
    setup () {
      const router = useRouter()
      function goback () {
        router.push("/")
      }
      return {
        goback,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .change-close {
    font-size: 20px;
    color: #909399;
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
</style>