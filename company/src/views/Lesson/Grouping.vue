<template>
  <div class="classify">
   <div class="wode">
      <div class="title">
      <h2>课程分类</h2>
      <div>当前APP中显示分类<span class="num">1</span>/6个</div>
    </div>
    <div class="table">
      <table border="1">
        <thead>
          <tr>
            <th>分类标题</th>
            <th>排序值</th>
            <th>课程</th>
            <th>发布状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>默认分类</td>
            <td>1</td>
            <td>23门</td>
            <td>已发布</td>
            <td><button class="edit">编辑</button></td>
          </tr>
          <tr>
            <td>默认分类</td>
            <td>1</td>
            <td>23门</td>
            <td>已发布</td>
            <td><button class="edit">编辑</button></td>
          </tr>
          <tr>
            <td>默认分类</td>
            <td>1</td>
            <td>23门</td>
            <td>已发布</td>
            <td><button class="edit">编辑</button></td>
          </tr>
          <tr>
            <td>默认分类</td>
            <td>1</td>
            <td>23门</td>
            <td>已发布</td>
            <td><button class="edit">编辑</button></td>
          </tr>
          <tr>
            <td>默认分类</td>
            <td>1</td>
            <td>23门</td>
            <td>已发布</td>
            <td><button class="edit">编辑</button></td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.classify{
  width: 100%;
  height: 100%;
  .wode{
    width: 100%;
    height: auto;
    background: #fff;
  }
}
.title{
  width: 98%;
  margin-left: 1%;
  height: 70px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div{
    font-weight: 900;
    color: #A9A9A9;
    .num{
      font-size: 20px;
      color: #1890FF;
    }
  }
}
.table{
  width: 98%;
  height: auto;
  margin-top: 25px;
  padding-bottom: 50px;
  table{
    width: 100%;
    height: 100%;
    background: #000;
    text-align: center;
    margin-left: 1%;
    th{
      background: #E4E4E4;
      height: 40px;
      width: 20%;
    }
    td{
      background: #fff;
      height: 40px;
      width: 20%;
      .edit{
        color: #1890FF;
        border: none;
      }
    }
  }
}
</style>