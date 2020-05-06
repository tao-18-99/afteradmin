<template>
  <div class="massage-page">
    <div class="msgTitle">
      <div class="msgTitle-left">
        <span>我的消息：</span>
        <a-select defaultValue="未读" style="width: 120px" @change="handleChange" >
          <a-select-option value="0">未读</a-select-option>
          <a-select-option value="1">已读</a-select-option>
          <a-select-option value="2">全部</a-select-option>
        </a-select>
      </div>
      <div class="msgTitle-right">
        <a-icon style='font-size:40px' type="calendar" />
      </div>
    </div>

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
                <div class="items-right" @click="read(item.id,i)" v-show="status==0">知道了

                </div>
            </div>




    </div>
  </div>
</template>

<script>
    import {news,readMsg} from "../../api/person"
export default {
        data(){
            return {
                info:null,
                status:0
            }
        },
        created(){
            this.getNews()
        },
        methods:{
            read(id,index){
                readMsg({id:id}).then(res =>{
                    console.log(res);
                    this.$message.success("该条已读");
                    this.info.splice(index,1)
                })
            },
            handleChange(val){//筛选
                this.status = val
                this.getNews()
            },
            getNews(){//获取消息
                news({status:this.status}).then(data => {
                    console.log(data.data)
                    this.info = data.data.info;
                    console.log( this.info)
                })
            }
        }
};
</script>

<style lang="scss" scoped>
.massage-page {
  width: 98%;
  background: #fff;
  height: 96%;
  margin: 21px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .msgTitle {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

  }
  .msgMain{
    flex:1;
    display: flex;
    flex-direction: column;
  }
}
.msgTitle span{
  font-size: 22px;
}
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
.items-left{
  display: flex;
  height: 64px;
}
    .items-right{
        cursor: pointer;
    }
</style>
