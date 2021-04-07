<template>
  <myTemplate :title="'成绩查询'">
    <component :is="component"></component>
  </myTemplate>
</template>

<script>
  import myTemplate from "com/Template/Template.vue";
  import student from "./student.vue";
  import teacher from "./teacher.vue";
  import { onMounted, ref } from "vue";
  import { showComponent } from '../common';
  export default {
    components: { myTemplate, student, teacher },
    setup () {
      let component = ref("teacher");
      onMounted(() => {
        component.value = showComponent()
      });
      return { component };
    },
  };
</script>
