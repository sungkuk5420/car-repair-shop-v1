<template>
  <q-page class="column flex justify-start items-center estimate-page">
    <div class="header full-width flex">
      <div class="header-center">
        차량 관리
      </div>
    </div>
    <div class="content">
      <div class="menu-row" v-for="(item,index) in menuDatas" :key="index" @click="()=>{action(index)}">
        <div class="menu-row__left">
          {{item.label}}
        </div>
        <div class="menu-row__right" >
          <q-toggle
            v-if="index==0"
            v-model="notification"
            checked-icon="check"
            color="negative"
            unchecked-icon="clear"
          />
          <div style="color:#fe2d2a; font-weight:bold;" v-if="index==1">010-1234-5678</div>
          <q-toggle
            v-if="index==2"
            v-model="autoLogin"
            checked-icon="check"
            color="negative"
            unchecked-icon="clear"
          />
          
          <q-btn
            class="arrow-icon"
            v-if="(index==5)||(index==6)"
            :icon="$q.platform.is.ios ? 'arrow_back_ios' : 'arrow_back_ios'"
            flat
          />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
import Footer from "../components/Footer.vue";
export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  components:{Footer},
  data(){
    return{
      notification:true,
      autoLogin:false,
      menuDatas:[
        {
          label:"알림 받기",
        },
        {
          label:"내 계정 정보",
        },
        {
          label:"계정 자동 로그인",
        },
        {
          label:"로그아웃",
        },
        {
          label:"회원탈퇴",
        },
        {
          label:"내 글 보기",
        },
        {
          label:"공지사항",
        },
        {
          label:"프로그램 정보",
        },
      ]
    }
  },
  methods:{
    action(index){
      console.log(index)
      switch (index) {
        case 3:
          this.movePage("/")
          break;
      
        default:
          break;
      }
    }
  },
  mounted() {
    // this.showLoading();
  },
};
</script>

<style lang="scss">
.estimate-page{
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  background:$pageBgColor;
  width: 100%;
  flex-wrap: nowrap;
  padding-bottom:57px;
  align-items: center;
  justify-content: flex-start;
  .header{
    z-index: 1;
    background: white;
    position: relative;
    &-left{
      position: absolute;
      height:50px;
      display: flex;
      .q-btn{
        margin-top:auto;
        margin-bottom:auto;
        i{
          color:#cc0706;
        }
      }
    }
    &-center{
      width: 100%;
      display: flex;
      height:50px;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 20px;
      border-bottom: 3px solid #cc0706;
    }
  }
  .content{
    width:100%;
    padding: 20px;
  }
  .q-toggle__inner{
    margin-right: -10px;
  }
  
  .menu-row{
    border: 2px solid #e0e0e0;
    padding: 10px 15px;
    background: white;
    margin: 0;
    display: flex;
    flex:none;
    justify-content: space-between;
    align-items: center;
    height:45px;
    &:hover{
      background:#ddd;
      cursor: pointer;
    }
    &:focus,
    &:active{
      background:white ;
    }
    &__left{
      color: black;
      font-weight: bold;
      font-size: 14px;
    }
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(8)
    {
      border-top: 1px solid #e0e0e0;
    }
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(7)
    {
      border-bottom: 0;
    }
    &:nth-child(1),
    &:nth-child(6){
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-bottom: 10px;
    }

    &:nth-child(2),
    &:nth-child(7){
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    
    &:nth-child(5),
    &:nth-child(8){
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-bottom: 10px;
    }
  }
  .arrow-icon{
    transform: rotate(180deg);
    color: $negative;
    margin-right: -10px;
    .q-btn__wrapper{
      padding-right: 5px;
      padding-left: 15px;
    }
  }
}
</style>
