<template>
  <myTemplate :title="'教师评分'">
    <div class="rate-content">
      <div class="rate-table-title">
        <ul>
          <li>姓名</li>
          <li>课程</li>
          <li>评分</li>
        </ul>
      </div>
      <div class="rate-table-content">
        <ul v-for="(item, index) in Rate" :key="index" class="ul-hover">
          <li>{{ item.name }}</li>
          <li>{{ item.obj }}</li>
          <li>
            <start :index="index" :rate="item.rate" :id="item.id" />
          </li>
        </ul>
      </div>
    </div>
    <el-button @click="save" type="primary">{{
      (btnName = isRate ? "评分" : "保存")
    }}</el-button>
  </myTemplate>
</template>

<script>
  import start from "./start.vue";
  import myTemplate from "com/Template/Template.vue";
  import { ref, provide, onMounted } from "vue";
  import { rate } from '@/api/rate.js';

  export default {
    components: { start, myTemplate },
    setup () {
      let Rate = ref([]);
      onMounted(() => {
        rate().then((result) => {
          Rate.value = result
        }).catch((err) => {
          console.log(err)
        });
      })
      const score = []
      const RateTeacher = (value) => {
        const { index, rate, id } = value
        score[index] = { rate, id }
      };
      let isRate = ref(true);
      let btnName = ref('')
      const save = () => {
        isRate.value = !isRate.value
        console.log(score)
      }
      provide("isRate", isRate);
      provide('RateTeacher', RateTeacher)
      return {
        Rate,
        RateTeacher,
        btnName,
        isRate, save
      };
    },
  };
</script>

<style lang="scss" scoped>
  .rate-content {
    width: 600px;
    margin: 0 auto 50px;
    ul {
      height: 50px;
      display: flex;
      font-size: 14px;
      line-height: 50px;
      border-bottom: 1.5px solid #ebeef5;
      li {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
