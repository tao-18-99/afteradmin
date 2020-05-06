<template>
    <div class="warp-login">
        <div class="warp-log">
            <!-- 勺子课堂的图片 -->
            <div class="warp-header">
                <img src="../../assets/logo@2x.png" alt />
            </div>
            <div class="warp-nav">
                <!-- 网络科技的图片 -->
                <img src="../../assets/图片.png" alt />
            </div>
            <div class="warp-right">
                <img src="../../assets/logo大背景@2x.png" alt />
            </div>
            <!-- 登陆框 -->
        </div>

        <div class="login-k">
            <div class="log-kHead">
                <h3>-欢迎使用勺子课堂企业管理系统-</h3>
            </div>
            <div class="log-kHead">
                <h1></h1>
            </div>
<!--            oninput="value=value.replace(/[^\d]/g,'')"-->
            <div class="ustit">
                <div class="img"></div>
                <input type="text" placeholder="手机号" v-model="inputPhone" @input="phone"/>
            </div>
            <div class="hintMsg" v-if="isShow_phone">{{message_phone}}</div>
            <div class="ustit">
                <div class="img1"></div>
                <input type="password" placeholder="密码" v-model="inputPwd" @input="pwd"/>
            </div>
            <div class="hintMsg" v-if="isShow_pwd">{{message_pwd}}</div>
            <div class="ustit1">
                <div class="img2"></div>
                <div class="yan">
                    <input type="text" placeholder="验证码" v-model="code"/>
                </div>
                <div class="bor">|</div>
                <div class="dange" @click="verCode" @keydown.enter="login">
                    <!-- <SIdentify :identifyCode="identifyCode"></SIdentify> -->
                    <img :src="src_url" alt="" srcset="">
                </div>
            </div>

            <button class="btn" @click="login">登录</button>
        </div>
    </div>
</template>

<script>
import SIdentify from "../../components/identify";
import md5 from 'js-md5'
import {Login,companyName,randomCode} from '../../api/user'
import {mapActions} from  "vuex";
export default {
    name: "login",
    components: {
        SIdentify
    },
    data() {
        return {
            identifyCodes: "1234567890qwertyuioasdfghjklpzxcvbnm",
            identifyCode: "",
            random_number: "",
            inputPhone: "19911112222",
            inputPwd:"123123",
            isShow_phone:false,
            isShow_pwd:false,
            message_phone:'',
            message_pwd:'',
            code:'',
            src_url:''
        }
    },
    mounted() {

        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
        this.dicts = this.identifyCode;

       companyName().then(res=>{console.log(res)}).catch(err=>{console.log(err)});

        this.verCode();
    },
    methods: {
        ...mapActions(['SetUserInfo']),
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        verCode(){
            randomCode({ random_number:this.identifyCode,
                company_code:'sdfsodfklweew'
            }).then(res=>{
                console.log(res)
                this.src_url = res.data.url
            })
                .catch(err=>{
                    console.log(err)
                })
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                ];
            }
            localStorage.random_number = this.identifyCode;
                  console.log(this.identifyCode,"2222222222222222");
        },
        // phoneNumber(){
        //     var phoneNumber = document.getElementsByName('phone').value;
        //     if(!(/^1[34578]\d{9}$/.test(phoneNumber))){
        //         alert("手机号码有误，请重填");
        //         return false;
        //     }
        // }
        login(){
          var that = this;
          console.log(this.inputPhone,this.inputPwd,that.code)
          if(that.inputPhone == '' && that.inputPwd == ''){
            that.isShow_phone = true;
            that.isShow_pwd = true
            that.message_phone = '手机号不能为空';
            that.message_pwd = '密码不能为空'
            console.log("不能为空")
          }else if(that.inputPhone == ''){
            that.isShow_phone = true;
            that.message_phone = '手机号不能为空';
          }else if(that.inputPwd == ''){
            that.isShow_pwd = true;
            that.message_pwd = '密码不能为空';
          }
        //   else if(!(/^1[34578]\d{9}$/.test(that.inputPhone))){
        //       that.isShow_phone = true;
        //       that.message_phone = '手机号格式不正确'
        //   }
          else{

              Login({
                  account:that.inputPhone,
                  password:that.inputPwd,  // md5(that.inputPwd)
                  // random_number:that.identifyCode,
                  random_number:that.identifyCode,
                  random_code:that.code,
                  company_code:'sdfsodfklweew'
              })
                  .then(res => {console.log(res)
                      this.SetUserInfo(res.data)
                    sessionStorage.setItem("userInfo",res.data)
                      this.$router.push('/shaozi')
                // setTimeout(()=>{console.log(localStorage.random_number)},3000)  //获取本地缓存随机数
            })
                .catch(err => {
                    console.log(err);
                    this.verCode()
                })
          }

        },
        phone(event) {
            if(event.currentTarget.value !== ''){
              this.isShow_phone = false;
            }
        },
        pwd(event){
          if(event.currentTarget.value !== ''){
              this.isShow_pwd = false;
            }
        }
        // isPhone(e) {
        //     if (e.currentTarget.value == "") {
        //         this.reqPhone = true;
        //     }
        //     console.log(e.currentTarget.value);
        //     }
        // }
    }
};
</script>
<style lang="scss" scoped>
.login-k {
    width: 430px;
    height: 520px;
    background: #ffff;
    position: absolute;
    top: 25%;
    border-radius: 3%;
    border: 1px solid #ffffff;
    right: 10%;
    .hintMsg {
      width: 100%;
      position: absolute;
      color: red;
      text-align: center;
    }
}
.log-kHead {
    width: 90%;
    height: 50px;
    line-height: 50px;
    padding-left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.warp-right {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    img {
        height: 100%;
    }
}
.btn {
    width: 90%;
    height: 50px;
    border: 1px solid #cccc;
    border-radius: 20px;
    background: #1355bf;
    margin-top: 35px;
    margin-left: 5%;
    outline: none;
}
.ustit1 {
    width: 90%;
    height: 50px;
    margin-left: 5%;
    margin-top: 35px;
    border: 1px solid #ccc;
    border-radius: 20px;
    display: flex;
    .yan {
        width: 60%;
        height: 50px;
        border-radius: 20px;
        input {
            margin-top: 2px;
            width: 100%;
            height: 45px;
            border: none;
            border-radius: 20px;
            outline: none;
            text-indent: 10px;
        }
    }
}
.bor {
    width: 5px;
    line-height: 50px;
}
.dange {
    width: 25%;
    height: 50px;
    line-height: 45px;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    margin: 0;
}
.ustit {
    width: 90%;
    height: 50px;
    margin-left: 5%;
    margin-top: 35px;
    border: 1px solid #ccc;
    border-radius: 20px;
    display: flex;
    input {
        margin-top: 3px;
        width: 100%;
        height: 45px;
        border: none;
        border-radius: 20px;
        outline: none;
        text-indent: 10px;
    }
}
.img {
    width: 23px;
    height: 24px;
    margin-top: 13px;
    margin: 10px;
    background: url("../../assets/手机号码@2x.png") no-repeat;
    background-position: center;
}
.img1 {
    width: 23px;
    height: 24px;
    margin-top: 13px;
    margin: 10px;
    background: url("../../assets/密码@2x.png") no-repeat;
    background-position: center;
}
.img2 {
    width: 23px;
    height: 24px;
    margin-top: 13px;
    margin: 10px;
    background: url("../../assets/安全@2x.png") no-repeat;
    background-position: center;
}
.warp-login {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #1355bf, #2994f8);
}
.warp-log {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/网格@3x.png");
    background-repeat: no-repeat;
    position: relative;
}
.warp-header {
    position: absolute;
    left: 50px;
    top: 50px;
}
.warp-nav {
    width: 900px;
    height: 900px;
    position: absolute;
    left: 12%;
    top: 20%;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>

