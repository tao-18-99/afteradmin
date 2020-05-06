<template>
  <div class="wrap-work">
    <!-- 头部 -->
    <div class="work-header">
      <a-avatar :size="64"  :src="userInfo.avator"/>
      <div class="masName">
        <div class="nTop" style="display:flex;">
          <span>{{userInfo.name}},今天是<b style="color: #65b5ff;">{{userInfo.hour}}</b>，祝你开心每一天</span>
<!--          <p>你说啥说你咋的试试就试试</p>-->
        </div>
        <div class="timer" style="margin-left:10px">{{userInfo.position_name}}</div>
      </div>
    </div>
    <div class="big">
      <div class="tit-leftTop">
        <div class="tit-left">
          <p>我的学习</p>
        </div>
        <div class="tit-leftNav">
          <div class="msgMain" >

            <div class="msgMain-items"  v-for="item,i in info" :key="i">
              <div class="items-left">
                <a-avatar :size="64" :src="item.head_portrait" />
                <div class="masName" >
                  <div class="nTop" style="display:flex;">
                    <span>名人</span>
                    <p>{{item.content}}</p>
                  </div>
                  <div class="timer" style='margin-left:10px'>{{item.date}}</div>
                </div>

              </div>
              <div class="items-right"  >知道了

              </div>
            </div>




          </div>
        </div>
      </div>
      <div class="tit-right">
        <p>企业学习</p>
        <ul>
          <li><p><b>{{studyInfo.total_duration}} </b><b>企业成员学习总时长（APP中学习）</b></p></li>
          <li><p><b>{{studyInfo.company_total_duration}} </b><b>企业成员学习总时长（企业课学习）</b></p></li>
          <li><p><b>{{studyInfo.member_number}} </b><b>企业会员人数（上限{{studyInfo.upper_limit_number}}人）</b></p></li>
          <li><p><b>{{studyInfo.average_study_days}} </b><b>人均学习企业课</b></p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {workbench} from '../../api/person'
export default {
  data() {
    return {
      userInfo:null,//用户信息
      info:null,//消息
      studyInfo:null,//学习时长
    }
  },
  created() {
    workbench().then(res => {
      this.userInfo = res.data.user_info;
      this.info = res.data.msg_info;
      this.studyInfo = res.data.company_study_info;
      console.log(res)
    })
  }
};
</script>

<style lang='scss' scoped>
.wrap-work{
  width: 100%;
  height: 100%;
}
.tit-leftTop {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin:0 20px 0px 0px;

}
.tit-left{
   width: 100%;
  height: 60%;
  background: #ffffff;
}
.tit-leftNav {
  width: 100%;
  height: 40%;
  margin:10px 0 0 0;
  background: #fff;
  .msgMain-items{
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: space-between;
    padding:0 40px;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    span{
      margin:0 10px;
      font-size: 18px;
    }
  }
  .msgMain{
    flex:1;
    display: flex;
    flex-direction: column;
  }

}
.big {
  width: 98%;
  height: 86%;
  margin: 20px;
  display: flex;
}
.tit-right {
  width: 30%;
  height: 100%;
    margin:0px 0px 0px 10px;
   background: #fff;
  ul{
    height: 90%;
  }
  li{
    height:25%;
    display: flex;
    align-items: center;   // 垂直居中，针对的是mycontainer类下面的子元素，不包含“孙子”元素
    justify-content: center; // 水平居中，针对的是mycontainer类下面的子元素，不包含“孙子”元素
    border-top:1px solid rgba(51,51,51,.6) ;
    p{
      text-align: center;
    }
    b{
      display: block;
    }
  }
}
.work-header {
  width: 100%;
  height: 130px;
  border-top: 1px solid #cccccc;
  display: flex;
  padding: 0 20px;
  background: #ffffff;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  span {
    margin: 0 10px;
    font-size: 18px;
  }
}
.items-left {
  display: flex;
  height: 64px;
}
</style>
