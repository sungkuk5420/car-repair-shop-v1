<template>
  <q-page class="column flex justify-start items-center login-page">
    <div class="logo flex justify-center ">
      <img src="~assets/images/logo.png" alt="" srcset="">
    </div>
    <div class="form flex">
      <div class="flex column form-left">
        <q-input placeholder="아이디" class="id" outlined v-model="id" :dense="dense" />
        <q-input placeholder="비밀번호" type="password" class="password q-mt-sm" outlined v-model="password"
          :dense="dense" />
      </div>
      <div class="flex column form-right q-ml-sm">
        <q-btn class="col-12 login-button" flat @click="login">로그인</q-btn>
      </div>
    </div>
    <div class="flex items-start full-width">
      <q-checkbox class="login-checkbox" v-model="loginCheck" label="자동 로그인 설정" color="negative" />
    </div>
    <div class="flex items-start full-width">
      <q-btn class="col-12 join-button full-width" flat @click="movePage('/join')">간단 회원가입</q-btn>
    </div>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
import { T } from "../store/module-example/types";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBozDFmvFQsND73Qm5R0E9vJVSriqKzIxo",
  authDomain: "carrepairshop-f398e.firebaseapp.com",
  databaseURL: "https://carrepairshop-f398e.firebaseio.com",
  projectId: "carrepairshop-f398e",
  storageBucket: "carrepairshop-f398e.appspot.com",
  messagingSenderId: "516814046131",
  appId: "1:516814046131:web:5c5ee7f890be4f255b01c6"
};
export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  data () {
    return {
      dense: true,
      loginCheck: false,
      id: "",
      password: "",
    }
  },
  mounted () {
    this.id = localStorage.getItem("id")
    this.loginCheck = localStorage.getItem("loginCheck") == "true" ? true : false

    if (this.loginCheck) {
      this.id = localStorage.getItem("id")
      this.password = localStorage.getItem("password")
      this.login()
    }
  },
  methods: {
    async login () {
      const docRef = doc(this.db, "users", this.id);
      const docSnap = await getDoc(docRef);
      const currentData = docSnap.data();

      if (currentData) {
        if (currentData.id == this.id && currentData.password == this.password) {
          if (this.loginCheck) {
            localStorage.setItem("loginCheck", true)
            localStorage.setItem("id", this.id)
            localStorage.setItem("password", this.password)
          }
          this.$store.dispatch(T.LOGIN, this.id)
          this.movePage("/")
        } else {
          this.errorMessage("아이디와 비밀번호를 확인해주세요.")
        }
      }
    }
  }
};
</script>

<style lang="scss">
.login-page {
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  background: $pageBgColor;
  width: 100%;

  .logo {
    margin-top: 150px;
    margin-bottom: 50px;

    img {
      width: 90%;
    }
  }

  .form {
    width: 100%;

    &-left {
      flex: 1;
    }
  }

  .login-button {
    background: $negative;
    color: white;

    .q-btn__content {
      color: white;
      font-weight: bold;
    }
  }

  .join-button {
    background: $negative;
    color: white;

    .q-btn__content {
      color: white;
      font-weight: bold;
    }
  }

  .login-checkbox {
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
}
</style>
