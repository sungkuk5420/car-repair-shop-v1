<template>
  <q-page class="column flex justify-start items-center login-page">
    <div class="logo flex justify-center ">
      <img src="~assets/images/logo.png" alt="" srcset="">
    </div>
    <div class="form flex">
      <div class="flex column form-left">
          <q-input placeholder="아이디" class="id" outlined v-model="id" :dense="dense" />
          <q-input placeholder="비밀번호" class="password q-mt-sm" outlined v-model="password" :dense="dense" />
      </div>
      <div class="flex column form-right q-ml-sm">
        <q-btn class="col-12 login-button" flat >로그인</q-btn>
      </div>
    </div>
    <div class="flex items-start full-width">
      <q-checkbox class="login-checkbox" v-model="loginCheck" label="자동 로그인 설정" color="negative" />
    </div>
    <div class="flex items-start full-width">
      <q-btn class="col-12 join-button full-width" flat >간단 회원가입</q-btn>
    </div>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  data(){
    return{
      dense:true,
      loginCheck:false,
      id:"",
      password:""
    }
  },
  mounted() {
    // this.showLoading();
  },
};
</script>

<style lang="scss">
.login-page{
  padding: 0 20px;
  background:$pageBgColor;
  width: 100%;
  .logo {
    margin-top:150px;
    margin-bottom:50px;
    img{
      width: 90%;
    }
  }
  .form{
    width:100%;
    &-left{
      flex:1;
    }
  }
  .login-button{
    background:$negative;
    color:white;
    .q-btn__content{
      color:white;
      font-weight: bold;
    }
  }
  .join-button{
    background:$negative;
    color:white;
    .q-btn__content{
      color:white;
      font-weight: bold;
    }
  }
  .login-checkbox{
    .q-checkbox__inner:not(.q-checkbox__inner--truthy){
      .q-checkbox__bg{
        background:white;
      }
    }
    
  }
}
</style>
