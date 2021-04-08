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
        <li
          v-for="(value, key, index) in result"
          :data-obj="key"
          :key="`obj${index}`"
        >
          <span>{{ value }}</span>
          <el-input class="a" v-model="ids"></el-input>
        </li>
      </ul>
      <el-button
        class="modify-btn"
        type="primary"
        size="small"
        @click="modify"
        >{{ change }}</el-button
      >
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, inject, toRefs } from "vue";
  import { nowTime } from "@/lib/utils.js";
  import selects from "com/from/selects.vue";
  import { useStore } from "vuex";
  const store = useStore();
  const inf = inject("inf");
  const obj = inf.object
  const objs = ["语文", "数学", "英语", "政治", "历史", "地理", "生物", "总分"];
  const props = defineProps({
    result: Object,
    name: String,
    id: Number
  });
  let { result, name, id } = toRefs(props);

  let ids = ref("");
  let changeVal = ref(true);
  let change = ref('修改')

  const modify = () => {
    let span = document.querySelector(`[data-obj="${obj}"] span`)
    let a = document.querySelector(`[data-obj="${obj}"] div`)
    if (changeVal) {
      a.classList.remove('a')
      span.style.display = 'none'
      change.value = '保存'
      ids.value = result.value[obj]
      changeVal = !changeVal
    } else {
      if (ids.value > 100 || ids.value < 0) {
        alert('数据不合法')
      } else {
        store.commit('addHis', {
          id: id,
          name: name,
          object: inf.role.substr(0, 2),
          history: { oldVal: result.value[obj], newVal: ids.value },
          operator: inf.name,
          time: nowTime()
        })
        result.value[obj] = ids.value
        ids.value = null
      }
      changeVal = !changeVal
      a.classList.add('a')
      span.style.display = 'block'
      change.value = '修改'
    }
  };


</script>
<style lang="scss" scoped>
  .modify-btn {
    margin: 20px auto;
  }
  .a {
    display: none;
  }
</style>
