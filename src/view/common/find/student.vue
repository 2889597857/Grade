<template>
  <div class="history">
    <div class="find-btn">
      <selects :examination="examination" @change="change" />
    </div>
    <div class="find-content">
      <ul class="history-title">
        <li v-for="(item, index) in objects" :key="`obj1${index}`">
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
  import { onMounted, ref } from "vue";
  import findApi from "./findApi.js";
  import examination from '@/config/examination.js';
  import objects from '@/config/object.js';
  import selects from "com/from/selects.vue";

  function change (value) {
    findG(value)
  }
  const findG = (value) => {
    findApi(value)
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
</script>
