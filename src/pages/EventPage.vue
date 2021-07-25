<template>
  <q-page class="column flex justify-start items-center event-page">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      height="100%"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-12 full-height" src="~assets/images/rs01.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-12 full-height" src="~assets/images/rs02.jpg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
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
      slide: 1
    }
  },
  mounted() {
    // this.showLoading();
  },
};
</script>

<style lang="scss">
.event-page{
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  background:$pageBgColor;
  width: 100%;
  flex-wrap: nowrap;
  padding-bottom:57px;
  align-items: center;
  justify-content: center;
  .q-carousel{
    width:100%;
    height: auto !important;
    border: 0;
    box-shadow: none;
    .q-carousel__slides-container{
      height: auto !important;
    }
    .q-carousel__slide{
      height: auto !important;
      &:hover{
        cursor: pointer;
      }
      .rounded-borders{
        height: auto !important;
        .q-img__image{
          border:1px solid #cfcacb;
          max-height: 600px;
          top: -1px !important;
          background-size: 100% 100% !important;
        }
      }
      background: $pageBgColor;
    }
    .q-btn.q-carousel__navigation-icon--active{
      .q-btn__content{
        color:black;
      }
    }
  }
}
</style>
