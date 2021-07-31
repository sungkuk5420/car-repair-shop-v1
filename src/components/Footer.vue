<template>
  <div class="footer">
    <div class="footer-button" @click="movePage('/main')">
      <img class="button-image-1 off" 
        src="~assets/images/bot_menu.01_off.jpg" 
        :class="footerTabName!=='main'?'is-active':''"
        alt="" srcset=""
      />
      <img class="button-image-1 on" 
        src="~assets/images/bot_menu.01_on.jpg" 
        :class="footerTabName==='main'?'is-active':''"
        alt="" srcset=""
      />
    </div>
    <div class="footer-button" @click="movePage('/estimate')">
      <img class="button-image-2 off" 
        src="~assets/images/bot_menu.02_off.jpg" 
        :class="footerTabName!=='estimate'?'is-active':''"
        alt="" srcset=""
      />
      <img class="button-image-2 on" 
        src="~assets/images/bot_menu.02_on.jpg" 
        :class="footerTabName==='estimate'?'is-active':''"
        alt="" srcset=""
      />
    </div>
    <div class="footer-button" @click="movePage('/event')">
      <img class="button-image-3 off" 
        src="~assets/images/bot_menu.03_off.jpg" 
        :class="footerTabName!=='event'?'is-active':''"
        alt="" srcset=""
      />
      <img class="button-image-3 on" 
        src="~assets/images/bot_menu.03_on.jpg" 
        :class="footerTabName=='event'?'is-active':''"
        alt="" srcset=""
      />
    </div>
    <div class="footer-button" @click="movePage('/center')">
      <img class="button-image-4 off" 
        src="~assets/images/bot_menu.04_off.jpg" 
        :class="footerTabName!='center'?'is-active':''"
        alt="" srcset=""
      />
      <img class="button-image-4 on" 
        src="~assets/images/bot_menu.04_on.jpg" 
        :class="footerTabName=='center'?'is-active':''"
        alt="" srcset=""
      />
    </div>
    <div class="footer-button" @click="movePage('/settings')">
      <img class="button-image-5 off" 
        src="~assets/images/bot_menu.05_off.jpg" 
        :class="footerTabName!='settings'?'is-active':''"
        alt="" srcset=""
      />
      <img class="button-image-5 on" 
        src="~assets/images/bot_menu.05_on.jpg" 
        :class="footerTabName=='settings'?'is-active':''"
        alt="" srcset=""
      />
    </div>
  </div>
</template>

<script>
import UtilMethodMixin from "../UtilMethodMixin";
export default {
  mixins: [UtilMethodMixin],
  name: 'Footer',
  data () {
    return {
    }
  },
  computed:{
    footerTabName(){
      let returnValue = "";
      if(this.$router.currentRoute.path=="/main"){
        returnValue = "main";
      } else if(this.$router.currentRoute.path=="/estimate"){
        returnValue = "estimate";
      } else if(this.$router.currentRoute.path=="/event"){
        returnValue = "event";
      } else if(this.$router.currentRoute.path=="/center"){
        returnValue = "center";
      } else if(this.$router.currentRoute.path=="/settings"){
        returnValue = "settings";
      }
      return returnValue
    }
  }
}
</script>

<style lang="scss">
  .footer{
    max-width: 375px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 100%;
    flex: 1;
    position: absolute;
    bottom: 0;
    
    img{
      width: 100%;
      height: auto;
    }
    &-button{
      display: flex;
      flex: 1;
      justify-content: flex-end;
      img{
        display: none;
      }
      &:hover{
        cursor: pointer;
        .on{
          display: block ;
        }
        .off{
          display: none;
        }
      }
      img.is-active{
        display: block ;
      }
    }
  }
</style>