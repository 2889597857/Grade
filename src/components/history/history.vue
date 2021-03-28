<template>
  <myTemplate :title="'修改记录'">
    <div class="history fuor">
      <div class="history-title">
        <ul>
          <li v-for="(item, index) in historyMenu" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="history-content">
        <ul v-for="(item, index) in history" :key="index">
          <li>{{ item.id }}</li>
          <li>{{ item.name }}</li>
          <li>{{ item.object }}</li>
          <li>
            <span>{{ item.history.oldVal }}分</span> 改为
            <span> {{ item.history.newVal }}分</span>
          </li>
          <li>{{ item.operator }}</li>
        </ul>
      </div>
    </div>
  </myTemplate>
</template>

<script>
import { useStore } from "vuex";
import myTemplate from "../Template/Template.vue";
export default {
  components: { myTemplate },
  setup() {
    const store = useStore();
    const historyMenu = ["学号", "姓名", "学科", "操作记录", "操作人"];
    const history = store.state.history;

    return {
      historyMenu,
      history,
    };
  },
};
</script>
<style lang="scss" scoped>
.fuor.history ul li:nth-child(4) {
  width: 180px;
  span {
    color: #409eff;
  }
}
</style>
