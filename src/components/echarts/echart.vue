<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import { ref, watch, onMounted, toRefs, defineProps } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  options: {
    required: true,
    type: Object,
    default: {},
  },
});
const container = ref(null);
const chart = ref(null);
const { options } = toRefs(props);

onMounted(() => {
  chart.value = echarts.init(container.value);
  chart.value.setOption(props.options);
});
watch(
  options,
  (newOptions) => {
    chart.value.setOption(newOptions);
  },
  { deep: true }
);
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
