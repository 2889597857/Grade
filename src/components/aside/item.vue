<template>
  <el-menu-item-group>
    <!-- <el-menu-item index="/rate">教师评分</el-menu-item>
    <el-menu-item index="/find">成绩查询</el-menu-item>
    <el-menu-item index="/analysis">成绩分析</el-menu-item> -->
    <el-menu-item v-for="(item, index) in inf.Route" :key="index" :index="item.route">{{
      item.name
    }}</el-menu-item>
  </el-menu-item-group>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const inf = inject("inf");
    return {
      inf,
    };
  },
};
</script>

<style></style>
