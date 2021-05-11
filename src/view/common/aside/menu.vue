<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="0"
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
          <el-menu-item-group>
            <el-menu-item
              v-for="(item, index) in state.information.Route"
              :key="index"
              :index="item.route"
              >{{ item.name }}</el-menu-item
            >
          </el-menu-item-group>
          <!-- <item :route="state.information.Route" /> -->
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
  import { useStore } from 'vuex';
  import item from "./item.vue";
  const state = useStore().state
</script>
