<template>
  <div class="result-history">
    <div class="his-title">
      <p>录入记录</p>
    </div>
    <div class="history res-his">
      <ul class="history-title">
        <li v-for="(item, index) in menu" :key="`menu${index}`">
          {{ item }}
        </li>
      </ul>
      <div class="history-content">
        <ul v-for="(item, index) in hisList" :key="`ul${index}`">
          <li v-for="(i, index) in item" :key="`li${index}`">
            {{ i }}
          </li>
        </ul>
      </div>
      <div class="his-tips" v-show="tipsShow"><p>暂无记录</p></div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
const menu = ["姓名", "学号", "学科", "分数", "操作人", "时间"];
const hisList = inject("his");
let tipsShow = computed(() => {
  if (hisList.value.length) {
    return false;
  } else {
    return true;
  }
});
</script>

<style lang="scss" scoped>
.his-title {
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 30px;
  border-bottom: 1px solid #409eff;
  padding-bottom: 20px;
}
.res-his ul li:last-child {
  width: 150px;
}
.his-tips {
  margin: 30px auto;
}
</style>
