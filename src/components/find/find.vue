<template>
  <myTemplate :title="'成绩查询'">
    <div class="find-result">
      <div class="find-btn">
        <selects />
      </div>
      <div class="find-content">
        <ul>
          <li v-for="(item, index) in objs" :key="`obj${index}`">
            {{ item }}
          </li>
        </ul>
        <ul>
          <li v-for="(item, index) in result" :key="`obj${index}`">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </myTemplate>
</template>

<script>
  import myTemplate from "../Template/Template.vue";
  import selects from '../from/selects.vue';
  import { ref, toRefs, reactive, computed, provide } from 'vue';
  export default {
    components: { myTemplate, selects },
    setup () {
      const objs = ["语文", "数学", "英语", "政治", "历史", "地理", "生物", "总分"]
      const grade = [
        [79, 89, 89, 70, 77, 94, 88],
        [85, 90, 83, 80, 97, 84, 79],
        [90, 79, 88, 83, 78, 89, 90],
        [88, 93, 95, 80, 87, 96, 96],
      ]
      const findG = (id) => {
        let dd = [...grade[id]]
        dd.push(grade[id].reduce((a, b) => a + b))
        state.result = dd
      }
      provide('findG', findG)
      const state = reactive({ result: [] })
      return {
        objs, ...toRefs(state)
      }
    }
  }
</script>

<style lang="scss" scope>
  .find-result {
    width: 640px;
    margin: 0 auto;
    .find-content {
      ul {
        display: flex;
        align-items: center;
        border-bottom: 1.5px solid #ebeef5;
        cursor: pointer;
        &:hover {
          background-color: #f5f7fa;
        }
        li {
          width: 80px;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  }
</style>