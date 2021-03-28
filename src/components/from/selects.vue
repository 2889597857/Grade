<template>
  <div class="select">
    <!-- <div style="width: 130px">
      <el-select v-model="year" size="small" placeholder="请选择学年">
        <el-option
          v-for="item in years"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div> -->
    <div style="width: 130px">
      <el-select v-model="obj" size="small" placeholder="请选择日期">
        <el-option
          v-for="item in objs"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, reactive, watch, inject, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      objs: [
        { value: 0, label: "第一次考试" },
        { value: 1, label: "第二次考试" },
        { value: 2, label: "第三次考试" },
        { value: 3, label: "第四次考试" },
      ],
    });
    let obj = ref("第四次考试");
    const findG = inject("findG");
    watch(obj, (value) => {
      findG(value);
    });
    onMounted(() => {
      findG(3);
    });
    return {
      ...toRefs(state),
      obj,
    };
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
