<template>
  <div id="bili-register">
      <div class="register-banner">
        <img src="./../assets/login-banner.png" alt="resiterBanner">
      </div>
      <div class="register-title">
        <span class="title-txt">注册</span>
      </div>
      <div class="register-container">
        <form id="register-form" method="POST">
          <div class="form-group">
            <div class="input-box">
              <input type="text" autocomplete="off" name="username" placeholder="昵称" class="input_register" v-model.trim="username">
              <p class="input-tip">{{unameTip}}</p>
            </div>
          </div>
          <div class="register-hidden-gruop">
            <div class="safe-box" v-show="password">
              <p class="safe-box-tip">安全系数</p>
              <div class="safe-level">
                <div :class="[{'level-one': pswSafeLevel},'safe_line']"></div>
                <div :class="[{'level-two': pswSafeLevel >= 2},'safe_line']"></div>
                <div :class="[{'level-three': pswSafeLevel >= 3},'safe_line']"></div>
                <div :class="[{'level-four': pswSafeLevel === 4},'safe_line']"></div>
                <div class="safe_line"></div>
                <div class="safe_line"></div>
                <span v-if="pswSafeLevel === 1" style="color:#bc0001">弱</span>
                <span v-else-if="pswSafeLevel === 2" style="color:#ff9537">中</span>
                <span v-else-if="pswSafeLevel === 3" style="color:#ffd800">中</span>
                <span v-else-if="pswSafeLevel === 4" style="color:#49c519">安全</span>            
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="input-box">
              <input type="password" autocomplete="off" name="password" placeholder="密码（6-16个字符组成，区分大小写）" class="input_register" v-model="password">
              <p class="input-tip">{{pswTip}}</p>
            </div>
          </div>
          <div class="form-group">
            <label class="register-agree">
              <label :class="[{'active': isAgree}, 'agree-check']">
                <input @click.stop="agreeOn" name="agree" type="checkbox">
              </label>
              <span>请勿输入真实信息</span> 
            </label>
          </div>
          <div class="form-group">
            <button :class="[{'button-disable': !isAgree}, 'register-button']" :disabled="!isAgree">
              <span>注册</span>
            </button>
          </div>
          <div class="form-group login-link">
            <a href="/#/login">已有账号，直接登录></a>
          </div>
        </form>
        
      </div>
  </div>
</template>

<script>
export default {
    name: 'BiliRegister',
    data() {
      return {
        username: '',
        password: '',
        unameTip: '',
        pswTip: '',
        pswSafeLevel: 0,    //LOW -> HIGH : 1 2 3 4
        isAgree: false
      }
    },
    methods: {
      checkName(uname) {
        if(typeof(uname) === 'string') {
          if(uname.length === 0) {
            this.unameTip = '请告诉我昵称';
          } else if(uname.length < 3) {
            this.unameTip = '昵称过短';
          } else if(uname.length > 16) {
            this.unameTip = '昵称过长';
          } else {
            this.unameTip = '';
          }
        }
      },
      checkPassword(psw) {
        if(psw && typeof(psw) === 'string') {
          if(psw.length < 6) {
            this.pswTip = '密码不能小于6个字符';
          } else if(psw.length > 16) {
            this.pswTip = '密码不能大于16个字符';
          } else {
            this.pswTip = '';
          }
        }
      },
      checkPasswordSafe(psw) {
        const regMax = new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{10,16}');
        const regMid = new RegExp('(?=[0-9a-z]).{8,16}');
        
        if(psw && typeof(psw) === 'string') {
          if(regMax.test(psw)) {
            this.pswSafeLevel = 4;
          } else if(regMid.test(psw)) {
            this.pswSafeLevel = 3;
          } else if(psw.length >= 6) {
            this.pswSafeLevel = 2;
          } else {
            this.pswSafeLevel = 1;
          }
        } 
      },
      agreeOn() {
        if(this.isAgree) {
          this.isAgree = false 
        } else {
          this.isAgree = true
        }  
      }
    },
    watch: {
      username: function(uname) {
        this.checkName(uname);
      },
      password: function(psw) {
        this.checkPassword(psw);
        this.checkPasswordSafe(psw)
      }
    }
}
</script>

<style lang="stylus">
  #bili-register
    .register-banner
      height: 86px
      margin-bottom: 20px
      text-align: center
      background: #00a0d8
    .register-title
      width: 980px
      height: 28px
      margin: 0 auto
      border-bottom: 1px solid #ddd
      margin-bottom: 28px
      text-align: center
      .title-txt
        height: 56px
        line-height: 56px
        margin: 0 auto
        padding: 0 20px
        font-size: 40px
        background: #fff
        text-align: center
    .register-container
      width: 980px
      margin: 0 auto
      padding: 60px 0
      .form-group
        width: 420px
        margin: 0 auto
        font-size: 12px
        position: relative
        .input-box
          position: relative
          font-size: 14px
          display: inline-block
          width: 100%
          .input_register
            display: inline-block
            width: 100%
            height: 40px
            padding: 0 15px
            box-sizing: border-box
            border: 1px solid #dcdfe6
            border-radius: 4px
            font-size: inherit
            line-height: 40px
            outline: 0
            color: #606266
            background-color: #fff
            background-image: none
            transition: border-color .2s cubic-bezier(.645,.045,.355,1)
            &:focus
              border-color: #00a1d6
          .input-tip
            position: absolute
            right: -20px
            font-size: 12px
            top: 12px
            color: #f45d90
            transform: translate3d(100%,0,0)
        .register-agree
          display: block
          padding: 20px 0 5px
          font-size: 12px
          color: #f45d90
          cursor: pointer
          .agree-check
            vertical-align: middle
            display: inline-block
            width: 14px;
            height: 14px;
            margin: 0 5px 1px 0
            background-image: url('./../assets/check-box-ok.svg')
            background-repeat: no-repeat
            background-size: 14px 14px
            background-position: 50%
            cursor: pointer
            input
              display: none
          .active
            background-image: url('./../assets/check-box.svg')
        .register-button
          width: 100%
          height 40px
          box-sizing: border-box
          padding: 12px 20px
          border: 1px solid #dcdfe6
          border-radius: 4px
          font-size: 14px;
          line-height: 14px
          color: #fff
          background-color: #00a1d6
          border-color: #00a1d6
          cursor: pointer
        .button-disable
          color: rgba(0,0,0,.25)
          background-color: #f5f5f5
          border-color: #d9d9d9
          cursor: not-allowed
      .register-hidden-gruop
        width: 420px
        height: 40px
        margin: 0 auto
        .safe-box
          width: 415px
          margin: 0 auto
          padding: 10px 0
          border-radius: 3px
          line-height: 20px
          font-weight: 700
          font-size: 15px
          overflow: hidden
          .safe-box-tip
            float: left
          .safe-level
            .safe_line
              float: left
              width: 30px
              height: 5px
              border-radius: 5px
              margin-left: 15px
              margin-top: 7px
              margin-right: 10px
            span
              font-size: 12px
            .level-one
              background: #ff0000
            .level-two
              background: #ff7f00
            .level-three
              background: #f0f028
            .level-four
              background: #bff000
      .login-link
        line-height: 40px
        text-align: right
        a
          color: #00a1d6  

</style>
