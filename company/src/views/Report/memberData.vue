<template>
  <div class="warp-lesson">
      <!-- 任务成员数据 -->
    <div class="lesson-header">
      <div style="margin-right:">
        <span>课程标题 :</span>
        <input type="text" placeholder="请输入标题/关键字" class="ipt" />
      </div>

      <div>
        <span>创建人 :</span>
        <input type="text" placeholder="创建人姓名" class="ipt" />
      </div>
      <div>
        <span>课程分类 :</span>
        <a-dropdown class="ipt">
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">
              <a-icon type="user" />1st menu item
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="user" />2nd menu item
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="user" />3rd item
            </a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            请选择所属分类
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>
      <div>
        <span>状态 :</span>
        <a-dropdown class="ipt">
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">
              <a-icon type="user" />1st menu item
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="user" />2nd menu item
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="user" />3rd item
            </a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
           请选择所属课程分类
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>
      <div>
        <a-button type="primary" icon="search" style="height:46px">搜索</a-button>
      </div>
    </div>

    <div class="less-content">
      <div class="div">
        <div class="tit">
          <i>本周</i>任务课程
          <span>13</span>门，其中任务完成
          <span>10</span>门，未完成
          <span>3</span>门
        </div>
        <div class="tit-right">

            <a-dropdown :placement="placement">
              <a-button style="background:skyblue; margin-left:5px;color:white">{{ placement }}</a-button>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.alipay.com/"
                  >1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.taobao.com/"
                  >2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.tmall.com/"
                  >3rd menu item</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          <a-dropdown :placement="placement">
              <a-button style="background:skyblue; margin-left:5px;color:white" :size=20>{{ placements }}</a-button>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.alipay.com/"
                  >1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.taobao.com/"
                  >2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.tmall.com/"
                  >3rd menu item</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
        </div>
      </div>

      <a-table :columns="columns" :dataSource="data" bordered>
        <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record">
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>{{ text }}</template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a @click="() => save(record.key)">Save</a>
              <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
            </span>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "课程ID",
    dataIndex: "name",
    scopedSlots: { customRender: "name" },
    width:'10%'
  },
  {
    title: "课程标题",
    dataIndex: "age",
    width: "10%",
    scopedSlots: { customRender: "age" }
  },
  {
    title: "课程时长",
    dataIndex: "address",
    width: "10%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "任务成员",
    dataIndex: "address",
   width: "10%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "自学人数",
    dataIndex: "address",
   width: "10%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "课程分裂",
    dataIndex: "address",
   width: "10%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "课程来源",
    dataIndex: "address",
    width: "10%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "课程状态",
    dataIndex: "address",
   width: "10%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "分享人",
    dataIndex: "address",
  width: "10%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "分享时间",
    dataIndex: "address",
  width: "10%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" }
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}
export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      placement:"添加任务",
      placements:"导入任务",
      data,
      columns,
      editingKey: ""
    };
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.filter(item => key === item.key)[0];
      const targetCache = newCacheData.filter(item => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = "";
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = "";
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter(item => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.warp-lesson {
  width: 100%;
  height: 98%;
  box-sizing: border-box;
}
.lesson-header {
  width: 100%;
  height: 3rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #ccc;
  span {
    font-size: 14px;
    margin-left: 3.8rem;
  }
  .ipt {
    border: none;
    outline: none;
    border: solid 1px #ccc;
    border-radius: 3px 3px 3px 3px;
    font-size: 10px;
    height: 1.6rem;
    padding-left: 5px;
    margin-left: 0.5rem;
    margin-right: 5rem;
  }
}

 .less-content{
   width: 98%;
     height: 92%;
    margin-top: 20px;
    background: white;
    margin-left: 20px;
    padding: 20px;
    .div{
      width: 100%;
      height: 2.5rem;
      font-size: 16px;
      justify-content: space-between;
      border-bottom: solid 1px #ccc;
      display: flex;
      .tit{
        margin-left: 10px;
        line-height: 2.5rem;
        font-size: 13px;
        color: #ccc;
        margin-right: 730px;
        span{
          font-size: 16px;
          color: skyblue;
        }
      }
    }
  }

#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
  margin-top: 0.4rem;
  background: skyblue;
  color: white;
  font-size: 13px;
  height: 1.8rem;
}

.editable-row-operations a {
  margin-right: 8px;
}
</style>