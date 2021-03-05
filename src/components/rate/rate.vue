<template>
  <div class="rate-table">
    <div class="rate-title">教师评分</div>
    <div class="rate-content">
      <div class="rate-table-title">
        <ul>
          <li>姓名</li>
          <li>课程</li>
          <li>评分</li>
        </ul>
      </div>
      <div class="rate-table-content">
        <ul v-for="item in Rate" :key="item">
          <li>{{ item.name }}</li>
          <li>{{ item.obj }}</li>
          <li><start :rate="item.rate" :id="item.id" /></li>
        </ul>
      </div>
    </div>
    <goback />
  </div>
</template>

<script>
  import start from "./start.vue";
  import goback from "../safe/goback.vue";
  export default {
    components: { start, goback },
    setup () {
      return {
        Rate: [
          { name: '李新', obj: '英语', rate: 0, id: 0 },
          { name: '王建国', obj: '语文', rate: 0, id: 1 },
          { name: '王婷婷', obj: '数学', rate: 0, id: 2 },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rate-table {
    position: relative;
    width: 650px;
    height: 700px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    border-radius: 10px;
    padding: 50px 10px;
    .rate-title {
      font-size: 20px;
      font-weight: 700;
      height: 50px;
    }
    .rate-content {
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
      .rate-table-content {
        ul {
          cursor: pointer;
          &:hover {
            background-color: #f5f7fa;
          }
        }
      }
    }
  }
</style>