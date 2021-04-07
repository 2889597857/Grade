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
          <li>{{ item.time }}</li>
        </ul>
      </div>
    </div>
  </myTemplate>
</template>

<script>
  import { useStore } from "vuex";
  import myTemplate from "com/Template/Template.vue";
  export default {
    components: { myTemplate },
    setup () {
      const store = useStore();
      const historyMenu = ["学号", "姓名", "学科", "操作记录", "操作人", '时间'];
      const history = store.state.history;
      console.log(store.state)
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
  .history ul li:last-child {
    width: 150px;
  }
  .history-content ul li:last-child {
    font-size: 14px;
  }
</style>
