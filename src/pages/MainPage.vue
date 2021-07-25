<template>
  <q-page class="column flex justify-start items-center main-page">

    <Footer></Footer>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
import Footer from "../components/Footer.vue";
export default {
  mixins: [ComputedMixin, UtilMethodMixin,Footer],
  components:{Footer},
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
.main-page{
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  background:$pageBgColor;
  width: 100%;
}
</style>
