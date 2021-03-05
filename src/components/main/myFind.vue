<template>
  <div class="find">
    <el-input
      placeholder="请输入查找内容"
      v-model="input"
      prefix-icon="el-icon-search"
      clearable
    >
    </el-input>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup () {
      return {
        input: ref('')
      }
    }
  })
</script>


<style lang="scss" scoped>
  .find {
    width: 50%;
    height: 80px;
  }
</style>