<template>
  <q-page class="column flex justify-start items-center estimate-page">
    <div class="header full-width flex">
      <div class="header-center">
        견적 요청
      </div>
    </div>
    <div class="content">

      <q-uploader label="견적 참고 이미지 첨부하기" class="uploader q-mb-md" :factory="fileUpload" batch flat square bordered
        color="negative" style="width:100%; " />
      <q-editor v-model="editor" content-class="white" toolbar-text-color="black" toolbar-toggle-color="white"
        toolbar-bg="white" :toolbar="[
        ]" />

      <div class="flex justify-center q-mt-lg call-row">
        <q-btn class="col-12 write-button" flat @click="post">작성하기</q-btn>
      </div>
    </div>
    <Footer></Footer>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
import Footer from "../components/Footer.vue";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  components: { Footer },
  data () {
    return {
      slide: 1,
      editor: "견적 내용을 입력해주세요.",
      file: null
    }
  },
  mounted () {
    // this.showLoading();
  },
  methods: {
    fileUpload (file) {
      if (this.file) {
        this.errorMessage("이미 파일이 업로드 되어있습니다.")
        return false;
      }
      this.file = file[0];
    },
    post () {
      const storage = getStorage();
      const storageRef = ref(storage, "1/" + this.file);

      console.log(this.file)

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, this.file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot)
      });
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

  .write-button {
    background: $negative;
    color: white;
    width: 100%;

    .q-btn__content {
      color: white;
      font-weight: bold;
    }
  }

  .uploader {
    .q-uploader__list {
      display: flex;

      .q-uploader__file {
        flex: 1;
        margin-top: 0;
        margin: 5px;

        &--img {
          height: 150px;
          min-width: 150px;
        }

        .q-uploader__title {
          height: 15px;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }

    .q-uploader__header-content a.q-btn+a.q-btn,
    .q-uploader__header-content a.q-btn:first-child {
      display: none;
    }
  }
}
</style>
