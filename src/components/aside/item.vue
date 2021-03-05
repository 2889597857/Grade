<template>
  <el-menu-item-group>
    <el-menu-item index="/rate">教师评分</el-menu-item>
    <el-menu-item index="1-2">成绩查询</el-menu-item>
    <el-submenu index="1-3">
      <template #title>成绩排名</template>
      <el-menu-item index="1-3-1">班级排名</el-menu-item>
      <el-menu-item index="1-3-2">年纪排名</el-menu-item>
    </el-submenu>
  </el-menu-item-group>
</template>

<script>
  export default {

  }
</script>

<style>
</style>