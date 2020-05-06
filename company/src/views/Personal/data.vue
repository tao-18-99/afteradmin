<template>
    <div class="warp-personal">
        <!-- 个人资料页面 -->
        <div class="content">
            <a-page-header
                    style="border-bottom: 1px solid rgb(235, 237, 240)"
                    title="个人资料"
                    subTitle="与勺子课堂APP中个人资料同步"
            />
            <div class="personal">
                <div class="personal-left">
                    <div class="personal-name">
                        <p>姓名*</p>
                        <a-input placeholder="请输入姓名，限6个字" style="width:80%; height:45px" v-model="userInfo.name"/>
                    </div>
                    <div class="personal-name">
                        <p>品牌*</p>
                        <a-input placeholder="请输入品牌，限12个字" style="width:80%; height:45px" v-model="userInfo.brand"/>
                    </div>
                    <div class="personal-name">
                        <p>职位*</p>
                        <a-select
                                style="width:80%; height:45px"
                                showSearch
                                placeholder="选择职位"
                                optionFilterProp="children"

                                v-model=userInfo.position_id
                        >
                            <!--          :filterOption="filterOption"-->
                            <!--          @focus="handleFocus"-->
                            <!--          @blur="handleBlur"-->
                            <!--          @change="handleChange"-->
                            <!--        <a-select-option value="jack">Jack</a-select-option>-->
                            <!--        <a-select-option value="lucy">Lucy</a-select-option>-->
                            <!--        <a-select-option value="tom">Tom</a-select-option>-->
                            <a-select-option v-for="position in positions" :value="position.id">{{position.name}}
                            </a-select-option>
                        </a-select>
                    </div>
                    <div class="personal-name">
                        <!-- 省市联动 -->
                        <p>地区*</p>
                        <div>
                            <a-select style="width: 140px" @change="handleProvinceChange"
                                      v-model="userInfo.province_id">
                                <a-select-option v-for="province in region" :key="province.id" :value="province.id">
                                    {{province.name }}
                                </a-select-option>
                            </a-select>
                            <a-select v-model="cityId" style="width: 140px;margin-left:20px;height:45px">
                                <a-select-option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}
                                </a-select-option>
                            </a-select>
                        </div>
                    </div>
                    <!-- 兴趣标签 -->
                    <div class="hoady">
                        <p>兴趣职位*</p>
                        <div :style="{ marginTop: '16px' }">
                            <a-radio-group defaultValue="a" style="align-content: center">
                                <a-radio-button :value="item.id" style="width: 140px;margin-left:20px;height:45px" v-for="item in label" :key="label.id">{{item.name}}
                                </a-radio-button>

                            </a-radio-group>
                        </div>
                    </div>
                </div>
                <div class="personal-right">
                    <div class="upload-head">
                        <!-- 头像上传 -->
                        <div class="img-top"></div>
                        <p>头像*</p>
                        <a-avatar :size="240" icon="user" :src="userInfo.img"/>
                        <div class="img-botto">
                            <a-upload
                                    name="file"
                                    :multiple="true"
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    :headers="headers"
                                    @change="handleChange"
                            >
                                <a-button>
                                    <a-icon type="upload"/>
                                   更换头像
                                </a-button>
                            </a-upload>
                        </div>


                    </div>
                </div>
            </div>
            <a-button type="primary" style="right:15px;bottom:15px;width:84px;height:45px" class="btn" @click="updateUserInfo">更新信息</a-button>
        </div>
    </div>
</template>

<script>
    import {userInfo,userUpdate} from "../../api/person"

    export default {
        data() {
            return {
                userInfo: null,
                positions: [],//
                region: [],//地区信息
                cities:[],//城市信息
                label:[],//标签
                provinceId: null,
                cityId: null,
                headers: {
                    authorization: "authorization-text"
                },
                options: [
                    {
                        value: "zhejiang",
                        label: "Zhejiang",
                        children: [
                            {
                                value: "hangzhou",
                                label: "Hangzhou",
                                children: [
                                    {
                                        value: "xihu",
                                        label: "West Lake"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: "jiangsu",
                        label: "Jiangsu",
                        children: [
                            {
                                value: "nanjing",
                                label: "Nanjing",
                                children: [
                                    {
                                        value: "zhonghuamen",
                                        label: "Zhong Hua Men"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        },
        created() {
            this.getUserInfo()
        },
        methods: {
            updateUserInfo(){//修改用户信息
                if(this.userInfo.name == "" || this.userInfo.name == null)
                    return   this.$message.warning("请输入用户名")
                if(this.userInfo.name.length >6)
                    return   this.$message.warning("用户名最长6个字符")
                if(this.userInfo.brand.length >12)
                    return   this.$message.warning("品牌最长12个字符")
                if(this.userInfo.position_id == undefined || this.userInfo.name == null)
                    return  this.$message.warning("请选择职位")
                if(this.userInfo.position_id == undefined || this.userInfo.name == null)
                    return  this.$message.warning("请选择职位")
                userUpdate({}).then()

            },
            getUserInfo() {//获取用户信息
                userInfo().then(res => {
                    console.log(res)
                    this.userInfo = res.data.user_info;
                    this.positions = res.data.positions
                    this.region = res.data.region;
                    this.label = res.data.label;

                    this.provinceId = this.userInfo.province_id;
                    this.cityId = this.userInfo.city_id;

                    this.setCitys();
                })

            },
            setCitys(){
                this.region.map((province,index) => {
                    if(province.id == this.provinceId){
                        this.cities = province.childs
                        console.log(this.cities)
                    }
                })
            },
            // 头像上传事件
            handleChange(info) {
                if (info.file.status !== "uploading") {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === "done") {
                    this.$message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === "error") {
                    this.$message.error(`${info.file.name} file upload failed.`);
                }
            },
            handleChange(value) {
                console.log(`selected ${value}`);
            },
            onChange(value) {
                console.log(value);
            },
            onChange1(checkedValues) {
                console.log("checked = ", checkedValues);
            },
            // 省市级
            handleProvinceChange(value) {
                 this.provinceId = value;
                    this.setCitys();
                    this.cityId = this.cities[0].id;
            },
        }
    };
</script>

<style lang="scss" scoped>
    .warp-personal {
        margin-top: 20px !important;
        height: 98%;
    }

    .upload-head {
        display: flex;
        flex-direction: column;
    }

    .img-botto {
        margin-left: 35px;
        margin-top: 40px;
    }

    .content {
        height: 98%;
        width: 98%;
        padding: 20px;
        position: relative;
        border-radius: 5px;
        margin: auto;
        background: #fff;
    }

    .personal {
        display: flex;
    }

    .btn {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    .personal-left {
        width: 50%;
    }

    .personal-right {
        width: 50%;
    }
</style>
