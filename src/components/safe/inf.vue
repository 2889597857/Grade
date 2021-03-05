<template>
  <div class="information">
    <div class="information-header">
      <span>用户信息</span>
    </div>
    <div class="information-container">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号:">
          <el-input v-model="acc" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="角色:">
          <el-input v-model="jurisdiction" :disabled="true"> </el-input>
        </el-form-item>
        <el-form-item label="姓名:">
          <el-input v-model="name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:">
          <el-input v-model="email" :readonly="readonly"></el-input>
        </el-form-item>
        <el-form-item label="号码:">
          <el-input v-model="phone" :readonly="readonly"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="information-foot">
      <el-button @click="changeInf" type="primary">{{ btnName }}</el-button>
    </div>
    <goback />
  </div>
</template>

<script>
  import { computed, ref } from 'vue'
  import goback from './goback.vue'

  export default {
    components: { goback },
    setup () {
      function changeInf () {
        readonly.value = !readonly.value
      }

      let readonly = ref(true)
      let btnName = computed(() => {
        if (readonly.value) {
          return '修改'
        } else {
          return '保存'
        }
      })
      return {
        acc: ref('Admin'),
        name: ref('张三'),
        jurisdiction: ref('管理员'),
        email: ref('2123@qq.com'),
        phone: ref('198 1234 5678'),
        btnName, changeInf, readonly
      }
    }
  }
</script>

<style lang="scss" scoped>
  .information {
    margin: 0 auto;
    width: 50%;
    height: 450px;
    padding: 10px 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    border-radius: 10px;
    position: relative;
    .information-header {
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      font-weight: 700;
    }
  }
</style>