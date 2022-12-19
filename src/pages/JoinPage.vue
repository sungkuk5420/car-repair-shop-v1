<template>
  <q-page class="column flex justify-start items-center join-page">
    <div class="header full-width flex">
      <div class="header-left" @click="movePage('/')">
        <q-btn :icon="$q.platform.is.ios ? 'arrow_back_ios' : 'arrow_back_ios'" flat />
      </div>
      <div class="header-center">
        회원가입
      </div>
    </div>
    <div class="content flex flex-center col-12">
      <div class="form-box">
        <div class="form-row">
          <div class="form-label">
            아이디
          </div>
          <div class="form-content">
            <q-input placeholder="휴대폰번호 11자리" class="id-input" outlined v-model="id" :dense="dense"
              mask="### - #### - ####" />
            <q-btn class="col-12 id-check" @click="checkId" :disabled="isCheckedId ? '' : disabled" flat>중복확인</q-btn>
          </div>
        </div>
        <div class="form-row">
          <div class="form-label">
            비밀번호
          </div>
          <div class="form-content">
            <q-input type="password" class="password-input" outlined v-model="password" :dense="dense" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-label">
            비밀번호 확인
          </div>
          <div class="form-content">
            <q-input type="password" class="password-input" outlined v-model="password2" :dense="dense" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-label">
            약관 동의
          </div>
          <div class="form-content">
            <q-checkbox v-model="checkBox1" label="이용약관에 동의합니다." color="negative" />
          </div>
        </div>
        <div class="form-row" style="margin-top:-7px">
          <div class="form-label"></div>
          <div class="form-content">
            <q-checkbox v-model="checkBox2" label="개인정보 수집에 동의합니다." color="negative" />
          </div>
        </div>
        <div class="flex justify-center q-mt-lg join-row">
          <q-btn class="col-12 join-button" flat @click="join" :disabled="ableJoin ? disabled : ''">간단 회원가입</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";

import { doc, setDoc, getDoc } from "firebase/firestore";

export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  data () {
    return {
      dense: true,
      id: "",
      password: "",
      password2: "",
      checkBox1: false,
      checkBox2: false,
      isCheckedId: false,
      ableJoin: false,
    }
  },
  mounted () {
    // Check for user status
  },
  methods: {
    async checkId () {
      console.log(this.id)

      const docRef = doc(this.db, "users", this.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.data()) {
        this.errorMessage('이미 존재하는 아이디 입니다.')
      } else {
        this.isCheckedId = true
        this.successMessage('사용가능한 아이디 입니다.')
      }

    },
    async join () {
      if (!this.isCheckedId) {
        this.errorMessage('아이디 중복확인을 먼저 해주세요.')
        return false;
      }
      await setDoc(doc(this.db, "users", this.id), {
        id: this.id,
        password: this.password,
      });

      localStorage.setItem("id", this.id)
      this.successMessage('회원가입 완료')
      this.movePage("/login")
    }
  },
  watch: {
    checkBox1 (value) {

      if (this.checkBox1 && this.checkBox2) {
        this.ableJoin = true;
      }
    },
    checkBox2 (value) {

      if (this.checkBox1 && this.checkBox2) {
        this.ableJoin = true;
      }
    },
  }
};
</script>

<style lang="scss">
.join-page {
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  background: $pageBgColor;
  width: 100%;

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
    position: absolute;
    top: 0;
    padding: 0 13px;
    padding-top: 70px;
    width: 100%;
    height: 100%;
    align-items: flex-start;

    .form-box {
      border: 1px solid #cecece;
      background: white;
      width: 100%;
    }
  }

  .id-check {
    background: $negative;
    color: white;
    margin-left: 10px;

    &:disabled {
      background: #c4c4c4;
    }
  }

  .form-row {
    display: flex;
    flex: none;

    &:first-child {
      margin-top: 20px;
    }

    &:not(:first-child) {
      margin-top: 10px;
    }

    .form-label {
      padding-right: 10px;
      align-items: center;
      display: flex;
      justify-content: flex-end;
      flex: 1;
    }

    .form-content {
      display: flex;
      flex: 2.6;
      padding-right: 10px;

      .q-field {
        width: 100%;
      }
    }
  }

  .q-checkbox {
    margin-left: -0.6em;

    .q-checkbox__inner:not(.q-checkbox__inner--truthy) {
      .q-checkbox__bg {
        border-width: 1px;
        border-color: $primary;
      }

      .q-checkbox__bg {
        background: white;
      }
    }
  }

  .join-row {
    margin-top: 50px;
    ;
    margin-bottom: 100px;
    ;
  }

  .join-button {
    background: $negative;
    color: white;
    width: 90%;
    height: 50px;

    &:disabled {
      background: #c4c4c4;
    }

    .q-btn__content {
      color: white;
      font-weight: bold;
    }
  }
}
</style>
