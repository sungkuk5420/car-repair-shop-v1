<template>
  <q-page class="column flex justify-start items-center center-page">
    <Header :centerTab="centerTab"></Header>
    <div class="container" v-show="centerTab=='info'">
      <div class="logo">
        <img src="~assets/images/main_bg.jpg" alt="" srcset="">
      </div>
      <div class="flex justify-center q-mt-lg call-row">
        <q-btn class="col-12 call-button" flat >전화 상담하기</q-btn>
      </div>
    </div>
    <div class="container repair-contents" v-show="centerTab=='repair-contents'">
      <RepairContent v-for="(conetent,index) in repairContents" :key="index" :data="conetent"></RepairContent>
    </div>
    <Footer></Footer>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import RepairContent from "../components/RepairContent.vue";
export default {
  mixins: [ComputedMixin, UtilMethodMixin, Footer, RepairContent],
  components:{Footer,Header,RepairContent},
  data(){
    return{
      dense:true,
      loginCheck:false,
      id:"",
      password:"",
      repairContents:[
        {
          image:"images/center1.jpg",
          title:"엔진오일 퍼포먼스 장비",
          content:"엔진오일을 교환할 경우에는 엔진속에 숨어있는 폐유 (300~800ml)를 제거한후에 신유를 주입하므로 엔진오일 교환효과를 극대화하여 완벽한 오일교환을 하실 수 있습니다."
        },
        {
          image:"images/center2.jpg",
          title:"타이어 교환 및 관리 정비",
          content:"엔진오일을 교환할 경우에는 엔진속에 숨어있는 폐유 (300~800ml)를 제거한후에 신유를 주입하므로 엔진오일 교환효과를 극대화하여 완벽한 오일교환을 하실 수 있습니다."
        },
        {
          image:"images/center3.jpg",
          title:"브레이크 관리 정비",
          content:"엔진오일을 교환할 경우에는 엔진속에 숨어있는 폐유 (300~800ml)를 제거한후에 신유를 주입하므로 엔진오일 교환효과를 극대화하여 완벽한 오일교환을 하실 수 있습니다."
        },
        {
          image:"images/center4.jpg",
          title:"엔진 및 엔진 플러그 정비",
          content:"엔진오일을 교환할 경우에는 엔진속에 숨어있는 폐유 (300~800ml)를 제거한후에 신유를 주입하므로 엔진오일 교환효과를 극대화하여 완벽한 오일교환을 하실 수 있습니다."
        },
        {
          image:"images/center5.jpg",
          title:"에어컨 및 차량 공조대 정비",
          content:"엔진오일을 교환할 경우에는 엔진속에 숨어있는 폐유 (300~800ml)를 제거한후에 신유를 주입하므로 엔진오일 교환효과를 극대화하여 완벽한 오일교환을 하실 수 있습니다."
        },
      ]
    }
  },
  mounted() {
    // this.showLoading();
  },
};
</script>

<style lang="scss">
.center-page{
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  background:$pageBgColor;
  width: 100%;
  .container{
    display: flex;
    flex:1;
    height: 100%;
    padding-top: 60px;
    flex-direction: column;
    &.repair-contents{
      padding:0 10px;
      padding-top: 60px;
      overflow: auto;
    }
    .logo{
      margin-top: 0px;
      img{
        width: 100%;
      }
    }

    .call-row{
      margin-top: 20px;
      margin-bottom: 100px;
    }
    .call-button{
      background:$negative;
      color:white;
      width:90%;
      .q-btn__content{
        color:white;
        font-weight: bold;
      }
    }
  }
}
</style>
