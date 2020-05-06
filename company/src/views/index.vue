<template>
  <a-layout id="components-layout-demo-custom-trigger" style="    height: 100vh;">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" ><img :src="logo" alt=""></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-sub-menu v-for="(item,key) of nav" :key="key" type="mail">
          <span slot="title">
            <a-icon type="user" />
            <span>{{item.title}}</span>
          </span>
          <a-menu-item
            v-for="(e,index) of item.list"
            :key="index+key*10"
            @click="push(e)"
          >{{e.title}}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row type="flex" justify="space-between">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />

          <!-- 用户头像 -->
          <a-row type="flex" justify="space-between" align="middle" style="margin-right:50px;">
            <!-- 提示小红点 -->

            <div class='ball'>
              <a-badge :count="msg_number" showZero>
                <a-icon type="bell" />
              </a-badge>
            </div>


            <a-avatar :src="head_portrait" />
            <a-dropdown>
              <a class="ant-dropdown-link" @click="e => e.preventDefault()">
               {{name}}
                <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">3rd menu item</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-row>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ background: '#eee', minHeight: '280px' }">
        <router-view :key="$route.name"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      head_portrait:null,
      logo:null,
      msg_number:0,
      nav: [
        {
          title: "个人主页",
          list: [
            { title: "我的工作台", url: "/shaozi/home" },
            { title: "我的消息", url: "/shaozi/news" },
            { title: "个人资料", url: "/shaozi/data" },
            { title: "安全设置", url: "/shaozi/security" }
          ]
        },
        {
          title: "企业管理",
          list: [
            { title: "企业信息", url: "/shaozi/information" },
            { title: "分组成员", url: "/shaozi/member" }
          ]
        },
        {
          title: "课程管理",
          list: [
            { title: "企业课", url: "/shaozi/lesson" },
            { title: "课程分组", url: "/shaozi/Grouping" }
          ]
        },
        {
          title: "数据报表",
          list: [
            { title: "任务列表", url: "/shaozi/task" },
            { title: "成员数据", url: "/shaozi/memberData" },
            { title: "分组数据", url: "/shaozi/GroupingData" }
          ]
        }
      ]
    };
  },
  computed:{
    userInfo(){
      return JSON.parse(localStorage.getItem("userInfo"))
      // return this.$store.state.user.userInfo
    },
    authInfo(){//权限信息
      return this.$store.state.user.userInfo.auth
    }
  },
  created(){

  },
  methods: {
    push(e) {
      console.log(e);
      this.$router.push(e.url);
    }
  },
  mounted() {
    this.head_portrait = this.userInfo.user_info.head_portrait;//用户头像
    this.name =this.userInfo.user_info.name;//用户名
    this.msg_number = this.userInfo.msg_info.msg_number;//消息数量
    this.logo = this.userInfo.company_info.logo;//公司logo
    console.log(this.userInfo)
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
/* log的样式 */
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: #eeeeee;
  margin: 16px;
}
.head-example {
  margin-left: 10px;
}
.ball{
  height: 50px;
  width: 50px;
  font-size: 25px;
  line-height: 50px;
}
</style>
