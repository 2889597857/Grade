<template>
  <div class="information www">
    <div class="information-header">
      <span>用户信息</span>
    </div>
    <div class="information-container">
      <el-form label-width="80px">
        <el-form-item label="账号:">
          <el-input v-model="a.ID" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="角色:">
          <el-input v-model="a.role" :disabled="true"> </el-input>
        </el-form-item>
        <el-form-item label="姓名:">
          <el-input v-model="a.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:">
          <el-input
            v-model="a.contactWay.eMail"
            :readonly="readonly"
          ></el-input>
        </el-form-item>
        <el-form-item label="号码:">
          <el-input
            v-model="a.contactWay.phoneNum"
            :readonly="readonly"
          ></el-input>
        </el-form-item>
        {{}}
      </el-form>
    </div>
    <div class="information-foot">
      <el-button @click="changeInf" type="primary">{{ btnName }}</el-button>
    </div>
    <backhome />
  </div>
</template>

<script>
  import { computed, ref, inject, reactive, toRefs } from "vue";
  import { useStore } from 'vuex';
  import backhome from 'com/backhome/backhome.vue'

  export default {
    components: { backhome },
    setup () {
      const state = useStore().state
      function changeInf () {
        readonly.value = !readonly.value;
      }
      let readonly = ref(true);
      const inf = state.information
      const a = reactive({
        ...inf
      })
      // const mail = state.information.contactWay.eMail

      let btnName = computed(() => {
        if (readonly.value) {
          return "修改";
        } else {
          return "保存";
        }
      });
      return {
        btnName,
        changeInf,
        readonly, inf, a
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
