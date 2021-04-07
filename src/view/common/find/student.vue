<template>
  <div class="history">
    <div class="find-btn">
      <selects />
    </div>
    <div class="find-content">
      <ul class="history-title">
        <li v-for="(item, index) in objs" :key="`obj1${index}`">
          {{ item }}
        </li>
      </ul>
      <ul class="history-content">
        <li v-for="(item, index) in result" :key="`obj2${index}`">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, provide, ref } from "vue";
  import findApi from "./findApi.js";
  import selects from "com/from/selects.vue";

  const objs = ["语文", "数学", "英语", "政治", "历史", "地理", "生物", "总分"];

  const findG = () => {
    findApi(1)
      .then((res) => {
        result.value = res.grade;
      })
      .catch((err) => {
        console.log(err)
      });
  };
  const result = ref(null);
  onMounted(() => {
    findG()
  });
  provide("findG", findG);
</script>
