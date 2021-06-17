<template>
  <div id="login">
    <div class="login www">
      <div class="login-content">
        <div class="title">登 录</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="login"
          label-width="60px"
        >
          <el-form-item label="账号:" prop="pass">
            <el-input
              type="text"
              v-model="ruleForm.pass"
              autocomplete="off"
              size="small"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              @keyup.enter="submitForm()"
              size="small"
            ></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button type="primary" size="small" @click="submitForm()"
            >登录</el-button
          >
          <el-button size="small" @click="resetForm()">重置</el-button>
        </div>
        <div class="tips">
          <p>*老师账号：12345 - 12351 密码：123456</p>
          <p>*学生账号：180101 - 180150 密码：123456</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive, ref } from "vue";
  import { useRouter } from "vue-router";
  import { setCookie } from "@/lib/utils.js";
  import { signin } from '@/api/signin.js';

  let ruleForm = reactive({
    pass: "",
    checkPass: "",
  });

  let rules = {
    pass: [{ required: true, message: '请输入账号', trigger: "blur" },],
    checkPass: [{ required: true, message: '请输入密码', trigger: "blur" }],
  };

  const login = ref(null);
  const router = useRouter();

  function submitForm () {
    login.value.validate((valid) => {
      if (valid) {
        signin({
          act: ruleForm.pass.trim(),
          psd: ruleForm.checkPass.trim()
        }).then((result) => {
          console.log(result)
          if (result.status == 200) {
            setCookie(result.token);
            // setCookie(result.role)
            router.push({ name: 'index' });
          }
        }).catch(() => {
          ruleForm.checkPass = ''
          alert('账号或密码错误')
        });
      } else {
        return false;
      }
    });
  }
  function resetForm (formName) {
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
      width: 450px;
      height: 350px;
      padding: 30px 0;
      @media screen and (max-width: 750px) {
        width: 90vw;
      }
      .login-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .el-form {
          width: 80%;
        }
        .title {
          font-size: 30px;
          font-weight: bolder;
          @media screen and (max-width: 750px) {
            font-size: 20px;
          }
        }
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
