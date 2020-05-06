<template>
  <div class="warp-message">
    <div class="content-message">
      <a-page-header style="border-bottom: 1px solid rgb(235, 237, 240)" title=" 企业信息" />
      <div class="meassage">
      <div class="message-left">
        <div class="personal-name">
          <p>品牌*</p>
          <a-input placeholder="请输入姓名，限6个字" style="width:80%; height:45px" />
        </div>
        <div class="personal-name">
          <p>门店规模*</p>
          <a-select
            style="width:80%; height:45px"
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
          >
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="tom">Tom</a-select-option>
          </a-select>
        </div>
        <div class="personal-name">
          <p>企业会员开通人数*</p>
          <a-input placeholder="请输入品牌，限12个字" style="width:80%; height:45px" />
        </div>
        <div class="personal-name">
          <p>联系电话*</p>
          <a-input placeholder="请输入姓名，限6个字" style="width:80%; height:45px" />
        </div>
        <div class="personal-name">
          <p>总部地址*</p>
          <a-input placeholder="请输入品牌，限12个字" style="width:80%; height:45px" />
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.warp-message {
  margin-top: 20px !important;
  height: 98%;
}
.content-message {
  height: 98%;
  width: 98%;
  padding: 20px;
  border-radius: 5px;
  margin: auto;
  background: #fff;
}
.message{
  display: flex;
}
.message-left{
  width: 50%;
}
.personal-name{
   height: 120px;
}
</style>