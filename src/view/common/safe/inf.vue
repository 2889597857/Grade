<template>
  <div class="information www">
    <div class="information-header">
      <span>用户信息</span>
    </div>
    <div class="information-container">
      <el-form label-width="80px">
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
    <backhome />
  </div>
</template>

<script>
  import { computed, ref, inject } from "vue";
  import backhome from 'com/backhome/backhome.vue'

  export default {
    components: { backhome },
    setup () {
      function changeInf () {
        readonly.value = !readonly.value;
      }
      const inf = inject("inf");
      let readonly = ref(true);
      let btnName = computed(() => {
        if (readonly.value) {
          return "修改";
        } else {
          return "保存";
        }
      });
      return {
        acc: inf.id,
        name: inf.name,
        jurisdiction: inf.role,
        email: inf.email,
        phone: inf.phone,

        btnName,
        changeInf,
        readonly,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .information {
    margin: 0 auto;
    width: 50%;
    height: 450px;
    padding: 10px 20px;
    position: relative;
    .information-header {
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      font-weight: 700;
    }
  }
</style>
