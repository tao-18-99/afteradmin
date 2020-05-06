<template>
  <div class="warp-safe">
    <div class="content-safty">
    <!-- 安全设置 -->
    <a-page-header style="border-bottom: 1px solid rgb(235, 237, 240)" title="安全设置" />
    <!-- 账号 -->
    
    <div class="wrap-userName">
        <p>账户*</p>
         <a-input placeholder='请输入登陆手机号' style="width:30%;height:45px"  />
    </div>
    <!-- 密码 -->
    <div class="wrap-userName">
        <p>密码*</p>
         <a-input placeholder='请输入原密码' style="width:30%;height:45px" />
    </div>
      <div class="wrap-userName">
        <p>新密码*</p>
         <a-input placeholder='请输入新的密码6-18位' style="width:30%;height:45px" />
    </div>
    <!-- 密码 -->
    <div class="wrap-userName">
        <p>确认密码*</p>
         <a-input placeholder='请再次输入新的密码6-18位' style="width:30%;height:45px" />
    </div>
    <a-button type="primary" style="right:15px;bottom:15px width:30px;height:45px" class="btn">确认更改</a-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.warp-safe{
   margin-top:20px !important; 
  height: 98%;
}
.content-safty{
   height: 98%;
    width: 98%;
    padding: 20px;
    border-radius: 5px;
    margin: auto;
    position: relative;
    background: #fff;
}
.btn{
   position: absolute;
   bottom: 10px;
   right: 10px;
}
.wrap-userName{
   height: 120px;
}
</style>