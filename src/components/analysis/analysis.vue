<template>
  <myTemplate :title="'成绩分析'">
    <component :is="component"></component>
  </myTemplate>
</template>

<script>
import myTemplate from "../Template/Template.vue";
import stu from "./stu.vue";
import tea from "./tea.vue";
import { onMounted, inject, ref } from "vue";
export default {
  components: { myTemplate, stu, tea },
  setup() {
    let component = ref("stu");
    const jurisdiction = inject("inf").jurisdiction;
    onMounted(() => {
      if (jurisdiction) {
        component.value = "stu";
      } else {
        component.value = "tea";
      }
    });
    return { component };
  },
};
</script>
