<template>
  <myTemplate :title="'修改记录'">
    <div class="history fuor">
      <div class="history-title">
        <ul>
          <li v-for="(item, index) in historyMenu" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="history-content" v-loading="loading">
        <ul v-for="(item, index) in state.history" :key="index">
          <li>{{ item.id }}</li>
          <li>{{ item.name }}</li>
          <li>{{ item.object }}</li>
          <li>
            <span>{{ item.history.oldValue }}分</span> 改为
            <span> {{ item.history.newValue }}分</span>
          </li>
          <li>{{ item.operator }}</li>
          <li>{{ item.time }}</li>
        </ul>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        v-model:currentPage="currentPage"
        background
        layout="prev, pager, next, jumper"
        :total="pages"
      >
      </el-pagination>
    </div>
  </myTemplate>
</template>

<script>
  import { useStore } from "vuex";
  import myTemplate from "com/Template/Template.vue";
  import { onMounted, ref, watch } from 'vue';

  export default {
    components: { myTemplate },
    setup () {
      const store = useStore();
      const historyMenu = ["学号", "姓名", "学科", "操作记录", "操作人", '时间'];
      let state = store.state;
      let pages = store.state.historyPage * 10
      let currentPage = ref(0)
      let loading = ref(true)
      const handleCurrentChange = (page) => {
        loading.value = true
        store.dispatch('history', page - 1).then(() => loading.value = false)
      }
      onMounted(() => store.dispatch('history', 0).then(() => loading.value = false))

      return {
        historyMenu,
        state, handleCurrentChange, currentPage, pages, loading
      };
    },
  };
</script>qqqqq
<style lang="scss" scoped>
  .fuor {
    min-height: 100px;
  }
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
  .pagination {
    margin: 30px auto;
  }
</style>
