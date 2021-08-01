<template>
  <q-page class="column flex justify-start items-center main-page">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      padding
      width="100%"
      height="100%"
      class="bg-white shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="scroll-container">
          <MainContent v-for="(conetent,index) in mainContents" :key="index" :data="conetent" 
            @handleClick="handleClickContent"
          ></MainContent>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="header full-width flex">
          <div class="header-left" @click="slide=1">
            <q-btn
              :icon="$q.platform.is.ios ? 'arrow_back_ios' : 'arrow_back_ios'"
              flat
            />
          </div>
          <div class="header-center">
            {{currentContent.title}}
          </div>
        </div>
        <div class="content content-details" >
          <img :src="imageData(currentContent.image)" alt="" srcset="">
          <div class="content-details__content">
            <div class="content-left">
              <div class="content-left__title">
                {{currentContent.title}}
              </div>
              <div class="content-left__content">
                {{currentContent.content}}
              </div>
            </div>
            <div class="content-right">
              <div class="content-right-row">
                <div class="content-right-icon">
                  시간
                </div>
                <div class="content-right-text">
                  {{currentContent.time}}
                </div>
              </div>
              <div class="content-right-row">
                <div class="content-right-icon">
                  비용
                </div>
                <div class="content-right-text">
                  {{currentContent.price}}
                </div>
              </div>
            </div>
          </div>
          <div class="content-details__sub-content">
            필립스 K5 기존 안개등 탈착 후 구조변경 장착을 요청하여 작업을 하였습니다.
            <br>
            작업시간 및 자세한 장착 문의는 우측상단의 전화문의 바랍니다.
          </div>
        </div>
        <div class="write-form">
          <div class="write-form__label">
            한마디 남기기
          </div>
          <div class="write-form__input">
            <textarea></textarea>
          </div>
          <div class="write-form__submit-row">
            <div class="write-form__submit-row__left">
              견적과 관계없는 글은 사전경고없이 삭제됩니다.
            </div>
            <div class="write-form__submit-row__right">
              <q-btn class="col-12" flat @click="movePage('/join')">등록하기</q-btn>
            </div>
          </div>
        </div>

        <div class="comments">
          <div class="comment-row" v-for="(comment,index) in comments" :key="index" >
            <div class="comment-row__user">
              <div class="user">
                {{comment.user}}
              </div>
              <div class="time">
                {{comment.time}}
              </div>
            </div>
            <div class="comment-row__content">{{comment.content}}</div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    
    <Footer @changed="clickedFooterMenu"></Footer>
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
      slide:1,
      currentContent:{
        image:"images/home1.jpg",
        title:"기아 K5 데이라이트 장착",
        content:"필립스 5k 안개등 탈착 후 구조변경 장착...",
        time:"약 3시간",
        price:"350,000원",
      },
      comments:[
        {
          user:"안낄낄",
          time:"2014.06.15 17:09",
          content:"해당 제품을 K3차량에도 설치할 수 있나요?"
        },
        {
          user:"글쓴이",
          time:"2014.06.15 21:49",
          content:"네 가능합니다. "
        },
      ],
      mainContents:[
        {
          image:"images/home1.jpg",
          title:"기아 K5 데이라이트 장착",
          content:"필립스 5k 안개등 탈착 후 구조변경 장착...",
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
  methods:{
    imageData (url) {
      return require('../assets/'+url)
    },
    handleClickContent(currentContent){
      console.log(currentContent)
      this.currentContent = currentContent;
      this.slide=2;
    },
    clickedFooterMenu(valueName){
      console.log(valueName)
      if(valueName == "/main"){
        this.slide = 1;
      }
    }
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
  .q-carousel{
    width: 100%;
  }
  .q-carousel__slide{
    padding: 0;
  }

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
  }
  .content-details{
    img{
      width: 100%;
    }
    &__content{
      color:#8d8d8d;
      font-size: 11px;
      font-weight: bold;
      display: flex;
      width: 100%;
      flex:1;
      display: flex;
      .content-left{
        padding: 11px 10px 10px 10px;
        line-height: 2;
        flex:4;
        height:50%;
        font-size: 11px;
        &__title{
          color:black;
          font-weight: bold;
          font-size: 16px;
          line-height: 1;
        }
        &__content{
          white-space:nowrap;
        }
      }
      .content-right{
        flex:1.8;
        height:50%;
        &-row{
          display: flex;
          align-items: center;
          flex:none;
          margin: 5px 0 4px 0;
        }
        &-icon{
          line-height: 2.1;
          margin-right: 5px;
          font-size: 11px;
          padding: 0px 5px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 3px;
          background: #3d3d3d;
        }
      }
    }
    &__sub-content{
      padding: 0px 10px 10px 10px;
      color:black;
      font-size: 10px;
      font-weight: bold;
    }
  }
  .write-form{
    padding: 10px;
    background: #ebebeb;
    border: 1px solid #bdbdbd;
    &__label{
      color:black;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;;
    }
    textarea{
      width: 100%;
      min-height: 80px;
      border: 1px solid #bdbdbd;
    }
    &__submit-row{
      display: flex;
      &__left{
        padding-left: 2px;
        color: #959595;
        display: flex;
        flex: 1;
        font-size: 11px;
        font-weight: bold;
        align-items: center;
      }
      &__right{
        .q-btn{
          padding: 0px 5px;
          background:$negative;
          font-size: 12px;
          font-weight: bold;
          color:white;
        }
      }
    }
  }

  .comments{
    background: #f9f9f9;
    flex:1;
    .comment-row{
      border:1px solid #bdbdbd;
      border-top: 0;
      padding: 10px;
      &:last-child{
        .user{
          background: $negative;
        }  
      }
      &__user{
        display: flex;
        width: 100%;
        flex: 1;
        .user{
          min-width: 80px;
          margin-right: 10px;
          margin-bottom:10px;
          color: white;
          display: flex;
          flex:0;
          justify-content: center;
          align-items:center;
          font-weight: bold;
          background: #323232;
        }
        .time{
          color: #999999;
        }
      }
      &__content{
        color: black;
        font-weight: bold;
        margin-left: 3px;
      }
    }
  }
}
</style>
