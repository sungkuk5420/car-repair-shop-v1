<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="statics/quasar-logo-full.svg" />
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  mounted() {
    // this.showLoading();
  },
};
</script>

<style>
.page-name{
  
}
</style>
