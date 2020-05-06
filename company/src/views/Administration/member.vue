<template>
  <div class="wrap-member">
    <!-- 成员分组 -->
    <div class="content-member">
      <div class="member-header">
        <div class="member-hader-left">
          <div class="mem-mes">成员信息</div>
          <div class="member-mes" style=" margin-left: 15px;">企业拥有/人</div>
        </div>
        <div class="member-hader-right">
          <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
          <a-icon type="plus" />
          <span>添加分组</span>
        </div>
      </div>
      <!-- 企业主管理员 -->
      <div class="member-header">
        <div class="member-hader-left">
          <div class="mem-mes">企业主、管理员</div>
          <div class="member-mes" style=" margin-left: 15px;">当前{}位管理员、共可添加10位</div>
        </div>
        <div class="member-hader-right">
          <a-icon type="plus" />
          <span>添加管理员</span>
        </div>
      </div>
      <!-- 管理员的页面 -->
      <div class="tit-pepole">
         
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
   
    dataIndex: "name"
  },
  {
  
    dataIndex: "age"
  },
  {
   
    dataIndex: "address"
  }
];
const data = [
  {
    key: "0",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "1",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];
export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>

<style lang="scss" scoped>
.wrap-member {
  margin-top: 20px !important;
  height: 98%;
}
.content-member {
  height: 98%;
  width: 98%;
  padding: 20px;
  border-radius: 5px;
  margin: auto;
  background: #fff;
}
.member-header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 45px;
  border-bottom: 1px solid rgb(235, 237, 240);
}
.member-hader-left {
  display: flex;
  .mem-mes {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>