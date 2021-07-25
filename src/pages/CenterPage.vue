<template>
  <q-page class="column flex justify-start items-center center-page">
    <Header></Header>
    <div class="container">
      <div class="logo">
        <img src="~assets/images/logo-2.png" alt="" srcset="">
      </div>
      <div class="icons">
        <img src="~assets/images/center-icons.png" alt="" srcset="">
      </div>
      <div class="flex justify-center q-mt-lg call-row">
        <q-btn class="col-12 call-button" flat >전화 상담하기</q-btn>
      </div>
    </div>
    <Footer></Footer>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  mixins: [ComputedMixin, UtilMethodMixin,Footer],
  components:{Footer,Header},
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
    padding-top: 100px;
    flex-direction: column;
    .icons{
      margin-top: 20px;
    }
    .logo,
    .icons{
      img{
        width: 100%;
      }
    }

    .call-row{
      margin-top: 50px;;
      margin-bottom: 100px;;
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
