<template>
  <q-page class="column flex justify-start items-center main-page">
    <div class="scroll-container">
      <MainContent v-for="(conetent,index) in mainContents" :key="index" :data="conetent"></MainContent>
    </div>
    <Footer></Footer>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
import Footer from "../components/Footer.vue";
import MainContent from "../components/MainContent.vue";
export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  components:{Footer,MainContent},
  data(){
    return{
      mainContents:[
        {
          image:"images/home1.jpg",
          title:"엔진오일 퍼포먼스 장비",
          content:"필립스 5k 기존 안개등 탈착 후 구조변경 장착...",
          time:"약 3시간",
          price:"350,000원",
        },
        {
          image:"images/home2.jpg",
          title:"타이어 교환 및 관리 정비",
          content:"스마트월드표 걸윙도어 장착",
          time:"약 2일",
          price:"200,000원",
        },
        {
          image:"images/home3.jpg",
          title:"브레이크 관리 정비",
          content:"브레이크 패드 교체 작업",
          time:"약 2시간",
          price:"100,000원",
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
.main-page{
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  background:$pageBgColor;
  width: 100%;
  flex-wrap: nowrap;
  .scroll-container{
    width:100%;
    padding: 10px;
    padding-bottom: 50px;
    overflow: auto;
  }
}
</style>
