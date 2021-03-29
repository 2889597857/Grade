<template>
  <myTemplate :title="'成绩录入'">
    <div class="result">
      <div class="result-container">
        <el-form label-width="80px" :model="stu" :rules="rules" ref="result">
          <el-form-item label="姓名">
            <el-button type="text">{{ stu.name }}</el-button>
          </el-form-item>
          <el-form-item label="学号" prop="id">
            <el-input v-model="stu.id" clearable></el-input>
          </el-form-item>
          <el-form-item label="分数" clearable prop="grade">
            <el-input v-model="stu.grade"></el-input>
          </el-form-item>
        </el-form>
        <div class="result-btn">
          <el-button type="primary" @click="submitForm('ruleForm')" size="small"
            >录入</el-button
          >
          <el-button @click="resetForm('ruleForm')" size="small">重置</el-button>
        </div>
      </div>
      <history />
    </div>
  </myTemplate>
</template>

<script setup>
import { provide, inject, reactive, ref, watch } from "vue";
import { ElMessage } from "element-plus";
import { nowTime } from "@/lib/utils.js";
import myTemplate from "../Template/Template.vue";
import history from "./history.vue";

const teacher = inject("inf").name;
const open1 = () => {
  ElMessage.success({
    message: "录入成功",
    type: "success",
  });
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
function validate2(rule, value, callback) {
  if (value == "") {
    callback(new Error("请输入分数"));
  } else if (parseFloat(value) < 0 || parseFloat(value) > 100) {
    callback(new Error("数据不合法"));
  } else {
    callback();
  }
}
const stu = reactive({
  name: "",
  id: "",
  grade: "",
});

const rules = {
  id: [{ validator: validate1, trigger: "blur" }],
  grade: [{ validator: validate2, trigger: "blur" }],
};

const his = ref([]);
provide("his", his);
const result = ref(null);
const submitForm = () => {
  console.log(123);
  result.value.validate((valid) => {
    if (valid) {
      his.value.push({
        name: stu.name,
        id: stu.id,
        grade: stu.grade,
        obj: "语文",
        teacher,
        time: nowTime(),
      });
      stu.grade = "";
      stu.id = "";
      stu.name = "";
      open1();
    } else {
      return false;
    }
  });
};
const resetForm = () => {
  result.value.resetFields();
};
watch(stu, () => {
  if (stu.id.length >= 5) {
    stu.name = "张三";
  }
});
</script>
<style lang="scss" scoped>
.result {
  width: 70%;
  margin: 0 auto;
  .result-container {
    width: 300px;
    margin: 30px auto;
  }
}
.result-btn {
  padding-left: 80px;
}
</style>
