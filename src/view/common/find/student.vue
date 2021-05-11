<template>
  <myTemplate :title="'成绩查询'">
    <div class="history">
      <div class="find-btn">
        <selects :examination="examination" :exam="exam" @change="change" />
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
          <li>{{ score }}</li>
        </ul>
      </div>
    </div>
  </myTemplate>
</template>

<script setup>
  import { onMounted, ref, computed } from "vue";
  import { useStore } from 'vuex';
  import findApi from "./findApi.js";
  import myTemplate from "com/Template/Template.vue";
  import examination from '@/config/examination.js';
  import objects from '@/config/object.js';
  import selects from "com/from/selects.vue";

  function change (value) {
    findG(value)
  }
  const exam = ref('third')
  const state = useStore().state
  const result = ref(null);
  const findG = (value) => {
    findApi({ value, id: state.information.ID })
      .then((res) => {
        result.value = res.grade;
      })
      .catch((err) => {
        console.log(err)
      });
  };
  const score = computed(() => {
    if (result.value) {
      return Object.values(result.value).reduce((a, b) => a + b, 0)
    }
  })
  onMounted(() => {
    setTimeout(() => {
      findG(exam.value)
    }, 500)
  });
</script>
