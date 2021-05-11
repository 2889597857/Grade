<template>
  <div style="position: relative">
    <myTemplate :title="'成绩录入'">
      <div class="result" v-infinite-scroll="load">
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
                @input="input"
              ></el-input>
            </el-form-item>
            <el-form-item label="分数" clearable prop="grade">
              <el-input v-model="stu.grade"></el-input>
            </el-form-item>
          </el-form>
          <div class="result-btn">
            <el-button type="primary" @click="submitForm()" size="small"
              >录入</el-button
            >
            <el-button @click="resetForm()" size="small">重置</el-button>
          </div>
        </div>
        <history />
      </div>
    </myTemplate>
  </div>
</template>

<script setup>
  import { append, appendAdd } from '@/api/append.js';
  import { onMounted, reactive, ref } from "vue";
  import { ElMessage } from "element-plus";
  import { nowTime } from "@/lib/utils.js";
  import myTemplate from "com/Template/Template.vue";
  import history from "./history.vue";
  import { useStore } from 'vuex';

  const stroe = useStore()

  let currenPage = 0
  const state = stroe.state
  const load = () => {
    if (currenPage <= state.appendPage) {
      stroe.dispatch('appendHistory', 0)
        .then(() => { currenPage++ })
        .catch(err => console.log(err))
    }
  }
  const his = ref([]);
  const result = ref(null);

  const inf = stroe.state.information

  const open1 = (message) => {
    ElMessage.success({
      message: message,
      type: "success",
    });
  };
  let validate = true
  const reg = /^\d{1,}$/
  function validate1 (rule, value, callback) {
    if (!reg.test(value)) {
      callback(new Error("学号不能为空或学号格式错误"));
    } else if (value.length < 6) {
      callback(new Error("学号位数少于6位"));
    } else {
      if (validate) {
        append({ id: stu.id, exam: "fourth", course: inf.course })
          .then((result) => {
            stu.name = result.name
            if (result.grade != 0) {
              stu.grade = result.grade
            }
            validate = false
            callback();
          }).catch((err) => {
            stu.name = ''
            ElMessage.error('学号错误');
          });
      } else callback();
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
  function input () {
    if (!validate && stu.id.length < 6) {
      validate = true
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
  function submitForm () {
    result.value.validate((valid) => {
      if (valid && !validate) {
        const histoty = {
          id: stu.id,
          name: stu.name,
          obj: inf.role.substr(0, 2),
          score: stu.grade,
          operator: inf.name,
          time: nowTime(),
        }
        appendAdd({
          data: histoty,
          examing: {
            exam: "fourth",
            course: inf.course
          }
        })
          .then(res => {
            open1(res)
            stu.grade = "";
            stu.id = "";
            stu.name = "";
            validate = true;
            stroe.commit('setFindHistory', histoty);
          })
          .catch(err => console.log(err))
      } else {
        return false;
      }
    });
  }

  const resetForm = () => {
    stu.name = ''
    validate = true;
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
  .go-top {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgb(0 0 0 / 12%);
    cursor: pointer;
    z-index: 5;
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
</style>
