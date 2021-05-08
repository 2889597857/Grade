<template>
  <el-menu-item-group>
    <el-menu-item
      v-for="(item, index) in route"
      :key="index"
      :index="item.route"
      >{{ item.name }}</el-menu-item
    >
  </el-menu-item-group>
</template>

<script>
  import { useStore } from 'vuex';
  export default {
    props: {
      route: {
        tyoe: Array
      }
    }
  };
</script>
