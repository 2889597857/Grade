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
          <span v-if="!show[index]">{{ item }}</span>
          <el-input v-if="show[index]" v-model="id"></el-input>
        </li>
        <li>
          {{ score }}
        </li>
      </ul>
      <el-button
        class="modify-btn"
        v-if="inf.jurisdiction"
        type="primary"
        size="small"
        @click="modify"
        >{{ change }}</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref, provide, inject, computed, onMounted } from "vue";
import { useStore } from "vuex";
import selects from "../from/selects.vue";
const store = useStore();
const inf = inject("inf");
const objs = ["语文", "数学", "英语", "政治", "历史", "地理", "生物", "总分"];
const score = ref("");
const result = ref([]);
const grade = [
  [79, 89, 89, 70, 77, 94, 88],
  [85, 90, 83, 80, 97, 84, 79],
  [90, 79, 88, 83, 78, 89, 90],
  [88, 93, 95, 80, 87, 96, 96],
];
let id = ref("");
let show = ref([false, false, false, false, false, false, false]);
const findG = (id) => {
  result.value = grade[id];
  score.value = result.value.reduce((a, b) => a + b);
};
const modify = () => {
  if (changeVal.value) {
    show.value[0] = !show.value[0];
    changeVal.value = !changeVal.value;
    id.value = result.value[0];
  } else {
    store.commit("addHis", {
      id: "18071",
      name: "张三",
      object: inf.object,
      history: { oldVal: result.value[0], newVal: id.value },
      operator: inf.name,
    });
    result.value[0] = id.value;
    show.value[0] = !show.value[0];
    changeVal.value = !changeVal.value;
  }
};
const changeVal = ref(true);
const change = computed(() => {
  if (changeVal.value) {
    return "修改";
  } else {
    return "保存";
  }
});
provide("findG", findG);
</script>
<style lang="scss" scoped>
.modify-btn {
  margin: 20px auto;
}
</style>
