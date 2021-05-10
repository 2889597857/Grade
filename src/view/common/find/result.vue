<template>
  <div class="history">
    <div class="find-btn">
      <selects :examination="examination" :exam="exam" @change="storeExam" />
    </div>
    <div class="find-content">
      <ul class="history-title">
        <li v-for="(item, index) in objects" :key="`obj${index}`">
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
        <li>{{ score }}</li>
      </ul>
      <el-button
        class="modify-btn"
        type="primary"
        size="small"
        @click="modify"
        >{{ change }}</el-button
      >
      <el-button
        class="modify-btn"
        type="primary"
        plain
        size="small"
        @click="cancel"
      >
        取消</el-button
      >
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, defineEmit, toRefs, inject, computed, } from "vue";
  import { useStore } from "vuex";
  import { amend } from '@/api/history';
  import examination from '@/config/examination.js';
  import objects from '@/config/object.js';
  import { nowTime } from "@/lib/utils.js";
  import selects from "com/from/selects.vue";

  const emit = defineEmit()

  const store = useStore();
  const inf = store.state.information
  const obj = inf.course
  const exam = store.state.exam
  const props = defineProps({
    result: Object,
    name: String,
    stuId: String
  });

  let { result, name, stuId } = toRefs(props);

  const score = computed(() => {
    return Object.values(result.value).reduce((a, b) => a + b, 0)
  })

  const findGrides = inject('findGrides')

  const storeExam = (value) => {
    cancel()
    store.commit("changeExam", value)
    findGrides()
  }

  let ids = ref("");

  let changeVal = ref(true);
  let change = ref('修改')

  const cancel = () => {
    let span = document.querySelector(`[data-obj="${obj}"] span`)
    let a = document.querySelector(`[data-obj="${obj}"] div`)
    if (span && a) {
      changeVal = true
      a.classList.add('a')
      span.style.display = 'block'
      change.value = '修改'
    }
  }

  const modify = () => {
    let span = document.querySelector(`[data-obj="${obj}"] span`)
    let a = document.querySelector(`[data-obj="${obj}"] div`)
    if (changeVal) {
      a.classList.remove('a')
      span.style.display = 'none'
      change.value = '保存'
      ids.value = result.value[obj]
      changeVal = false
    }
    else {
      if (parseFloat(ids.value) > 100 || parseFloat(ids.value) < 0) {
        alert('数据不合法')
      } else {
        if (result.value[obj] !== ids.value) {
          amend({
            data: {
              id: stuId.value,
              name: name.value,
              object: inf.role.substr(0, 2),
              history: { oldValue: result.value[obj], newValue: ids.value },
              operator: inf.name,
              time: nowTime()
            }, examing: {
              exam: store.state.exam,
              course: inf.course,
              grade: ids.value
            }
          })
            .then((res) => {
              emit('changeRes', res)
              ids.value = null
              changeVal = true
              a.classList.add('a')
              span.style.display = 'block'
              change.value = '修改'
            })
            .catch((err) => {
              console.log(err)
            });
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .modify-btn {
    margin: 20px 10px;
  }
  .a {
    display: none;
  }
</style>
