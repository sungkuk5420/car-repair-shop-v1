<template>
  <q-page class="column flex flex-center content-center login-page">
    <div class="logo">
      <img src="~assets/images/logo.png" alt="" srcset="">
    </div>
    <div class="form flex">
      <div class="flex column form-left">
          <q-input class="id" outlined v-model="id" :dense="dense" />
          <q-input class="password q-mt-sm" outlined v-model="password" :dense="dense" />
      </div>
      <div class="flex column form-right q-ml-sm">
        <q-btn></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  data(){
    return{
      dense:true,
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
.login-page{
  background:$pageBgColor;
  .form{
    width: 100%;
  }
}
</style>
