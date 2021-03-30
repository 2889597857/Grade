<template>
  <div class="history">
    <div class="find-btn">
      <selects />
    </div>
    <div class="find-content">
      <ul class="history-title">
        <li v-for="(item, index) in objs" :key="`obj${index}`">
          {{ item }}
        </li>
      </ul>
      <ul class="history-content">
        <li v-for="(item, index) in result" :key="`obj${index}`">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, provide, ref } from "vue";
import findApi from "./findApi.js";
import selects from "../from/selects.vue";

const objs = ["语文", "数学", "英语", "政治", "历史", "地理", "生物", "总分"];

const findG = () => {
  findApi(1)
    .then((res) => {
      let a = res.grade.reduce((a, b) => a + b);
      res.grade.push(a);
      result.value = res.grade;
    })
    .catch((err) => {});
};
const result = ref(null);
onMounted(() => {
  findApi(1)
    .then((res) => {
      let a = res.grade.reduce((a, b) => a + b);
      res.grade.push(a);
      result.value = res.grade;
    })
    .catch((err) => {});
});
provide("findG", findG);
</script>
