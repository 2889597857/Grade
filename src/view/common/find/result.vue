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
      </ul>
      <el-button
        class="modify-btn"
        type="primary"
        size="small"
        @click="modify"
        >{{ (change = changeVal ? "修改" : "保存") }}</el-button
      >
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, inject, toRefs } from "vue";
  import selects from "com/from/selects.vue";
  import { useStore } from "vuex";
  const store = useStore();
  const inf = inject("inf");
  const objs = ["语文", "数学", "英语", "政治", "历史", "地理", "生物", "总分"];
  const props = defineProps({
    result: Array,
  });
  let { result } = toRefs(props);
  let id = ref("");
  let show = ref([false, false, false, false, false, false, false]);
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
  const change = ref('')

</script>
<style lang="scss" scoped>
  .modify-btn {
    margin: 20px auto;
  }
</style>
