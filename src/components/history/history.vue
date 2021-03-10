<template>
  <myTemplate :title="'修改记录'">
    <div class="history">
      <div class="history-title">
        <ul>
          <li v-for="(item, index) in historyMenu" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="history-content">
        <ul class="ul-hover" v-for="(item, index) in history" :key="index">
          <li>{{ item.id }}</li>
          <li>{{ item.name }}</li>
          <li>{{ item.object }}</li>
          <li>
            <span>{{ item.history.oldVal }}分</span> 改为
            <span> {{ item.history.newVal }}分</span>
          </li>
          <li>{{ item.operator }}</li>
          <li>{{ item.notes }}</li>
        </ul>
      </div>
    </div>
  </myTemplate>
</template>

<script>
import myTemplate from "../Template/Template.vue";
export default {
  components: { myTemplate },
  setup() {
    const historyMenu = ["学号", "姓名", "学科", "操作记录", "操作人", "备注"];
    const history = [
      {
        id: "18071",
        name: "张三",
        object: "语文",
        history: { oldVal: 78, newVal: 80 },
        operator: "李四",
        notes: "",
      },
      {
        id: "18034",
        name: "王二",
        object: "语文",
        history: { oldVal: 68, newVal: 70 },
        operator: "李四",
        notes: "",
      },
      {
        id: "18076",
        name: "王五",
        object: "语文",
        history: { oldVal: 98, newVal: 80 },
        operator: "李四",
        notes: "",
      },
      {
        id: "18021",
        name: "张三",
        object: "数学文",
        history: { oldVal: 78, newVal: 80 },
        operator: "武康",
        notes: "",
      },
      {
        id: "18071",
        name: "齐兵",
        object: "历史",
        history: { oldVal: 66, newVal: 78 },
        operator: "李四",
        notes: "",
      },
    ];
    return {
      historyMenu,
      history,
    };
  },
};
</script>
<style lang="scss" scope>
.history {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 650px;
    height: 50px;
    border-bottom: 1.5px solid #ebeef5;
    margin: 0 auto;
    li {
      width: 80px;
    }
    li:nth-child(4) {
      width: 180px;
      span {
        color: #409eff;
      }
    }
  }
}
</style>
