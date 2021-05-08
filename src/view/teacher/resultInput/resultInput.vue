<template>
  <myTemplate :title="'成绩录入'">
    <div class="result">
      <div class="result-container">
        <el-form label-width="80px" :model="stu" :rules="rules" ref="result">
          <el-form-item label="姓名">
            <el-button type="text">{{ stu.name }}</el-button>
          </el-form-item>
          <el-form-item label="学号" prop="id">
            <el-input
              v-model="stu.id"
              maxlength="6"
              show-word-limit
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="分数" clearable prop="grade">
            <el-input v-model="stu.grade"></el-input>
          </el-form-item>
        </el-form>
        <div class="result-btn">
          <el-button type="primary" @click="submitForm('ruleForm')" size="small"
            >录入</el-button
          >
          <el-button @click="resetForm('ruleForm')" size="small"
            >重置</el-button
          >
        </div>
      </div>
      <history />
    </div>
  </myTemplate>
</template>

<script setup>
  import { append } from '@/api/append.js';
  import { reactive, ref } from "vue";
  import { ElMessage } from "element-plus";
  import { nowTime } from "@/lib/utils.js";
  import myTemplate from "com/Template/Template.vue";
  import history from "./history.vue";
  import { useStore } from 'vuex';

  const his = ref([]);
  const result = ref(null);
  const stroe = useStore()
  const inf = stroe.state.information

  const open1 = () => {
    ElMessage.success({
      message: "录入成功",
      type: "success",
    });
  };
  let a = true
  const reg = /^\d{1,}$/
  function validate1 (rule, value, callback) {
    if (!reg.test(value)) {
      callback(new Error("学号不能为空或学号格式错误"));
    } else if (value.length < 6) {
      callback(new Error("学号位数少于6位"));
    } else {
      if (a) {
        append(stu.id).then((result) => {
          stu.name = result.name
        }).catch((err) => {
          console.log(err)
        });
        a = !a
      }
      callback();
    }
  }
  function validate2 (rule, value, callback) {
    if (!reg.test(value)) {
      callback(new Error("分数不能为空或分数格式错误"));
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
  const submitForm = () => {
    result.value.validate((valid) => {
      if (valid) {
        stroe.commit('setFindHistory', {
          name: stu.name,
          id: stu.id,
          obj: inf.role.substr(0, 2),
          grade: stu.grade,
          teacher: inf.name,
          time: nowTime(),
        })
        stu.grade = "";
        stu.id = "";
        stu.name = "";
        open1();
        a = !a
      } else {
        return false;
      }
    });
  };
  const resetForm = () => {
    stu.name = ''
    result.value.resetFields();
  };

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
