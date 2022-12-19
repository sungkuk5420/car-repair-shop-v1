<template>
  <q-page class="column flex justify-start items-center estimate-page">
    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
      control-color="primary" padding width="100%" height="100%" class="bg-white shadow-2 rounded-borders">
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="header full-width flex">
          <div class="header-center">
            차량 관리
          </div>
        </div>
        <div class="content">
          <div class="menu-row relative-position " v-ripple v-for="(item, index) in menuDatas" :key="index"
            @click="() => { action(index) }">
            <div class="menu-row__left">
              {{ item.label }}
            </div>
            <div class="menu-row__right">
              <q-toggle v-if="index == 0" v-model="notification" checked-icon="check" color="negative"
                unchecked-icon="clear" />
              <div style="color:#fe2d2a; font-weight:bold;" v-if="index == 1">{{ loginUser }}</div>
              <q-toggle v-if="index == 2" v-model="loginCheck" checked-icon="check" color="negative"
                unchecked-icon="clear" />

              <q-btn class="arrow-icon" v-if="(index == 4) || (index == 5)"
                :icon="$q.platform.is.ios ? 'arrow_back_ios' : 'arrow_back_ios'" flat />
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="header full-width flex">
          <div class="header-left" @click="slide = 1">
            <q-btn :icon="$q.platform.is.ios ? 'arrow_back_ios' : 'arrow_back_ios'" flat />
          </div>
          <div class="header-center">
            공지사항
          </div>
        </div>
        <div class="content list-content">
          <q-list>
            <q-item clickable>
              <q-item-section class="list-content__text">
                <q-item-label>공지사항입니다.</q-item-label>
                <q-item-label caption>안녕하세요 착한 공업사입니다. 금일 예약손님이 취소되어 오일교체 및 타이어 교체 50% 할인요금에 진행합니다.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>2분 전</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset />
            <q-item clickable>
              <q-item-section class="list-content__text">
                <q-item-label>공지사항입니다.</q-item-label>
                <q-item-label caption>안녕하세요 착한 공업사입니다. 금일 예약손님이 취소되어 오일교체 및 타이어 교체 50% 할인요금에 진행합니다.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>2분 전</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset />
            <q-item clickable>
              <q-item-section class="list-content__text">
                <q-item-label>공지사항입니다.</q-item-label>
                <q-item-label caption>안녕하세요 착한 공업사입니다. 금일 예약손님이 취소되어 오일교체 및 타이어 교체 50% 할인요금에 진행합니다.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>2분 전</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset />
            <q-item clickable>
              <q-item-section class="list-content__text">
                <q-item-label>공지사항입니다.</q-item-label>
                <q-item-label caption>안녕하세요 착한 공업사입니다. 금일 예약손님이 취소되어 오일교체 및 타이어 교체 50% 할인요금에 진행합니다.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>2분 전</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset />
            <q-item clickable>
              <q-item-section class="list-content__text">
                <q-item-label>공지사항입니다.</q-item-label>
                <q-item-label caption>안녕하세요 착한 공업사입니다. 금일 예약손님이 취소되어 오일교체 및 타이어 교체 50% 할인요금에 진행합니다.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>2분 전</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset />
            <q-item clickable>
              <q-item-section class="list-content__text">
                <q-item-label>공지사항입니다.</q-item-label>
                <q-item-label caption>안녕하세요 착한 공업사입니다. 금일 예약손님이 취소되어 오일교체 및 타이어 교체 50% 할인요금에 진행합니다.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>2분 전</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset />
          </q-list>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-dialog v-model="programInfoPopup">
      <q-card>
        <q-toolbar style="border-bottom:1px solid #ddd">
          <q-toolbar-title style="padding:15px 0 0 0;">
            <img src="~assets/images/logo.png" style="width:60%;">
          </q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
          부천에 위치한 착한 자동차 공업사 고객관리 앱입니다.
          <br>
          <br>
          대표: 이광현
          <br>
          위치 : 원미동 777-30번지 부천시 경기도
          <br>
          전화번호 : 010-1234-5678
          <br>
        </q-card-section>
      </q-card>
    </q-dialog>
    <Footer @changed="clickedFooterMenu"></Footer>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
import Footer from "../components/Footer.vue";
import { T } from "../store/module-example/types";
export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  components: { Footer },
  data () {
    return {
      slide: 1,
      programInfoPopup: false,
      notification: true,
      loginCheck: false,
      menuDatas: []
    }
  },
  methods: {
    logout () {
      this.$store.dispatch(T.LOGIN, null)
      localStorage.setItem("loginCheck", false)
      this.movePage(("/login"))
    },
    action (index) {
      console.log(index)
      switch (index) {
        case 3: // 로그인
          this.logout()
          break;
        case 4:
          this.slide = 2;
          break;
        case 5:
          this.programInfoPopup = true;
          break;

        default:
          break;
      }
    },
    clickedFooterMenu (valueName) {
      console.log(valueName)
      if (valueName == "/settings") {
        this.slide = 1;
      }
    }
  },
  mounted () {
    // this.showLoading();
    this.loginCheck = localStorage.getItem("loginCheck") == "true" ? true : false

    if (this.loginUser) {
      this.menuDatas = [
        {
          label: "알림 받기",
        },
        {
          label: "내 계정 정보",
        },
        {
          label: "계정 자동 로그인",
        },
        {
          label: "로그아웃",
        },
        {
          label: "공지사항",
        },
        {
          label: "프로그램 정보",
        },
      ]
    } else {
      this.menuDatas = [
        {
          label: "알림 받기",
        },
        {
          label: "내 계정 정보",
        },
        {
          label: "계정 자동 로그인",
        },
        {
          label: "로그인",
        },
        {
          label: "공지사항",
        },
        {
          label: "프로그램 정보",
        },
      ]
    }

  },
  watch: {
    loginCheck (value) {
      localStorage.setItem("loginCheck", value)
    }
  }
};
</script>

<style lang="scss">
.estimate-page {
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  background: $pageBgColor;
  width: 100%;
  flex-wrap: nowrap;
  padding-bottom: 57px;
  align-items: center;
  justify-content: flex-start;

  .q-carousel {
    width: 100%;
  }

  .header {
    z-index: 1;
    background: white;
    position: relative;

    &-left {
      position: absolute;
      height: 50px;
      display: flex;

      .q-btn {
        margin-top: auto;
        margin-bottom: auto;

        i {
          color: #cc0706;
        }
      }
    }

    &-center {
      width: 100%;
      display: flex;
      height: 50px;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 20px;
      border-bottom: 3px solid #cc0706;
    }
  }

  .content {
    width: 100%;
    padding: 20px;
  }

  .q-toggle__inner {
    margin-right: -10px;
  }

  .menu-row {
    border: 2px solid #e0e0e0;
    padding: 10px 15px;
    background: white;
    margin: 0;
    display: flex;
    flex: none;
    justify-content: space-between;
    align-items: center;
    height: 45px;

    &:hover {
      cursor: pointer;
    }

    &:focus,
    &:active {
      background: white;
    }

    &__left {
      color: black;
      font-weight: bold;
      font-size: 14px;
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(8) {
      border-top: 1px solid #e0e0e0;
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      border-bottom: 0;
    }

    &:nth-child(1) {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-bottom: 10px;
    }

    &:nth-child(2),
    &:nth-child(6) {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    &:nth-child(5),
    &:nth-child(6) {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-bottom: 10px;
    }
  }

  .arrow-icon {
    transform: rotate(180deg);
    color: $negative;
    margin-right: -10px;

    .q-btn__wrapper {
      padding-right: 5px;
      padding-left: 15px;
    }
  }

  .q-carousel__slide {
    padding: 0;
  }

  .content.list-content {
    background: white;
    overflow: auto;
    padding: 0;
  }

  .q-list {
    padding: 0;
  }

  .q-item {
    background: white;
    padding: 15px 10px;
  }

  .q-separator--horizontal-inset {
    margin: 0 !important;
  }

  .q-item__section,
  .list-content__image {
    flex: 1;
  }

  .list-content__image {
    flex: 2;
  }

  .list-content__text {
    flex: 5;
  }
}
</style>
