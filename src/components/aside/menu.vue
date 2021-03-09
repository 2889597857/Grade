<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="1"
        background-color="#283848"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-s-tools"></i>
            <span>系统管理</span>
          </template>
          <item />
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import item from "./item.vue";
</script>
