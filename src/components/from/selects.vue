<template>
  <div class="select">
    <div style="width: 130px">
      <el-select
        v-model="obj"
        size="small"
        placeholder="请选择日期"
        @change="change"
      >
        <el-option
          v-for="item in examination"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  import { ref, watch, inject, } from "vue";
  export default {
    props: {
      examination: {
        type: Array,
        required: true
      }
    },
    setup (prop, { emit }) {
      let obj = ref('fourth');
      const change = value => {
        emit('change', value)
      }
      return {
        obj, change
      }
    },
  };
</script>

<style lang="scss" scope>
  .select {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px auto;
  }
</style>