<template>
  <div class="header">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <p>{{ inf.name }}</p>
    <el-col :span="8">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ inf.role }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <router-link to="/information">个人信息</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/change">修改密码 </router-link>
            </el-dropdown-item>
            <el-dropdown-item divided>安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </div>
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

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 240px;
  color: #fff;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  img {
    cursor: pointer;
    width: 150px;
    height: 150px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 14px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
