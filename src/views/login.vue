<template>
  <div class="login">
    <div class="login-box">
      <h2><img src="@/assets/img/logo_w.png"></h2>
      <p>페이오티 모바일 매출관리시스템</p>
      <div class="loginForm">
        <span><input type="text" placeholder="아이디"></span>
        <span><input type="text" placeholder="비밀번호"></span>
        <v-btn outlined @click="$router.push('/')">로그인</v-btn>
      </div>
    </div>
  </div> 
</template>

<script>
export default {

  
}
</script>

<style lang="scss" scoped>
.login{
  flex:1;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  background:#292929;
  padding:0 40px;
  
  .login-box{
    margin:0 auto;
    width:100%;

    h2{
      text-align:center;
      padding:20px 0;
      img{height:70px;}
    }
    p{color:#fff;text-align:center;font-size:14px;margin-bottom:30px;}

    .loginForm{
      span{
        display:block;

        input{
          width:100%;
          height:40px;
          background:#fff;
          padding:0 5px;
          border-radius:5px;
          margin-bottom:10px;
          outline: none;
        }
      }
      
      .v-btn{
        width:100%;
        height:40px;
        background:#EE2073;
        color:#fff;
        border:0px;
        font-family:'SCDream';
        border-radius:5px;
      }
    }
    .bottom{
      margin-top:20px;
      text-align:center;
      .v-btn{
        font-size:13px;
        letter-spacing: 0;
        font-family:'SCDream';
        font-weight:400;
        color:#888
      }
    }
  }
}
</style>