<template>
  <div id="login">
    <div class="login www">
      <div class="login-content">
        <div class="title">登录</div>
        <el-form :model="ruleForm" :rules="rules" ref="login" label-width="45px">
          <el-form-item label="账号:" prop="pass">
            <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              @keyup.enter="submitForm()"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="submitForm()">登录</el-button>
            <el-button size="small" @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="tips">
          <p>*老师账号：0 密码：0</p>
          <p>*学生账号：1 密码：1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { setCookie } from "@/lib/utils.js";

function validatePass(rule, value, callback) {
  if (value === "") {
    callback(new Error("请输入账号"));
  } else {
    callback();
  }
}
function validatePass2(rule, value, callback) {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
}
let ruleForm = reactive({
  pass: "",
  checkPass: "",
});

let rules = {
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
};

const login = ref(null);

const store = useStore();
const router = useRouter();
function submitForm(formName) {
  login.value.validate((valid) => {
    if (valid) {
      const a = parseFloat(this.ruleForm.pass);
      const b = parseFloat(this.ruleForm.checkPass);
      if (a == 1 && b == 1) {
        sgin(1);
      } else if (a == 0 && b == 0) {
        sgin(0);
      } else {
        alert("账号或密码错误");
      }
    } else {
      return false;
    }
  });
}
function sgin(id) {
  store
    .dispatch("login", id)
    .then((result) => {
      setCookie(1);
      router.push("/");
    })
    .catch((err) => {});
}
function resetForm(formName) {
  login.value.resetFields();
}
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  position: relative;
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 350px;
    padding: 50px 0;
    .login-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.tips {
  p {
    font-size: 14px;
    color: red;
  }
}
</style>
