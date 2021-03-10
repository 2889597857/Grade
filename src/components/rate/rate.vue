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
            <start :rate="item.rate" :id="item.id" />
          </li>
        </ul>
      </div>
    </div>
    <el-button @click="isRate = !isRate" type="primary">{{ btnName }}</el-button>
  </myTemplate>
</template>

<script>
import start from "./start.vue";
import myTemplate from "../Template/Template.vue";
import { ref, provide, computed } from "vue";
export default {
  components: { start, myTemplate },
  setup() {
    let Rate = [
      { name: "李新", obj: "英语", rate: 0, id: 0 },
      { name: "王建国", obj: "语文", rate: 0, id: 1 },
      { name: "王婷婷", obj: "数学", rate: 0, id: 2 },
      { name: "张杰", obj: "地理", rate: 0, id: 3 },
    ];
    const RateTeacher = () => {};
    let isRate = ref(true);
    provide("isRate", isRate);
    let btnName = computed(() => {
      if (isRate.value) {
        return "评分";
      } else {
        return "保存";
      }
    });
    return {
      Rate,
      RateTeacher,
      btnName,
      isRate,
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
