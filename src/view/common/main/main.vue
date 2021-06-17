<template>
  <myFind />
  <breadcrumb :matchedList="matchedList" />
</template>

<script setup>
  import myFind from "./myFind.vue";
  import breadcrumb from 'com/breadcrumb/index.vue';
  import { useRoute } from 'vue-router';
  import { computed, watch } from "@vue/runtime-core";
  const Route = useRoute()
  const matchedList = computed(() => {
    const list = []
    if (Route.matched) {
      Route.matched.forEach(el => {
        if (el.meta.title) list.push({ path: el.path, title: el.meta.title })
      })
    }
    return list
  })
</script>

<style>
</style>