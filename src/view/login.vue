<template>
  <div id="login">
    <div class="login www">
      <div class="login-content">
        <div class="title">登录</div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="45px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号:" prop="pass">
            <el-input
              type="text"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              size="small"
              @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <el-button size="small" @click="resetForm('ruleForm')"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm (formName) {
        this.$refs[formName].resetFields();
      }
    }
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
</style>