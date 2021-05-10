<template>
  <div class="teacher">
    <p>180101</p>
    <div class="find-menu">
      <el-form label-width="50px" :model="id" :rules="rules" ref="result">
        <el-form-item label="学号" prop="id">
          <el-input
            v-model="id.id"
            maxlength="6"
            show-word-limit
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="find-btn">
        <el-button
          type="primary"
          :loading="loading"
          @click="submitForm()"
          size="small"
          >查询</el-button
        >
      </div>
    </div>
    <transition name="el-fade-in">
      <div class="find-result" v-if="container">
        <div class="find-name">
          <p>姓名：{{ stuName }}</p>
        </div>
        <findResult
          :result="res"
          :name="stuName"
          @changeRes="changeRes"
          :stuId="id.id"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
  import { provide } from "vue";
  import findResult from "./result.vue";
  import validator from "./validator.js";
  let {
    validateId,
    submitForm,
    resetForm,
    id,
    result,
    rules,
    container,
    stuName,
    loading,
    res,
    findGrides,
  } = validator();
  const changeRes = (value) => {
    res.value = value
  }
  provide("findGrides", findGrides);
</script>
<style lang="scss" scoped>
  .find-menu {
    width: 300px;
    margin: 20px auto;
  }

  .find-name {
    font-size: 14px;
    margin-top: 20px;
  }
</style>
