<template>
  <el-menu-item-group>
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
