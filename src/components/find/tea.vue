<template>
  <div class="teacher">
    <div class="find-menu">
      <el-form label-width="50px" :model="id" :rules="rules" ref="result">
        <el-form-item label="学号" prop="id">
          <el-input v-model="id.id" clearable></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="submitForm()" size="small">查询</el-button>
        <el-button @click="resetForm()" size="small">重置</el-button>
      </div>
    </div>
    <div class="find-result">
      <stu v-if="container" />
    </div>
  </div>
</template>

<script setup>
import stu from "./stu.vue";
import { reactive, ref } from "vue";
const id = reactive({
  id: "",
});
let find = ref([]);
const result = ref(null);
const rules = {
  id: [{ validator: validate1, trigger: "blur" }],
};
function validate1(rule, value, callback) {
  if (value == "") {
    callback(new Error("请输入学号"));
  } else if (value.length < 6) {
    callback(new Error("学号位数少于6位"));
  } else {
    callback();
  }
}
const submitForm = () => {
  result.value.validate((valid) => {
    if (valid) {
      id.id = "";
      container.value = true;
    } else {
      return false;
    }
  });
};
const container = ref(false);
const resetForm = () => {
  result.value.resetFields();
};
</script>
<style lang="scss" scoped>
.find-menu {
  width: 300px;
  margin: 20px auto;
}
.result-btn {
  padding-left: 80px;
}
</style>
