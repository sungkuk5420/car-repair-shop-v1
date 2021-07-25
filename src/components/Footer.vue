<template>
  <div class="footer">
    <div class="footer-button">
      <img class="button-image-1 off" src="~assets/images/bot_menu.01_off.jpg" alt="" srcset="">
      <img class="button-image-1 on" src="~assets/images/bot_menu.01_on.jpg" alt="" srcset="">
    </div>
    <div class="footer-button">
      <img class="button-image-2 off" src="~assets/images/bot_menu.02_off.jpg" alt="" srcset="">
      <img class="button-image-2 on" src="~assets/images/bot_menu.02_on.jpg" alt="" srcset="">
    </div>
    <div class="footer-button">
      <img class="button-image-3 off" src="~assets/images/bot_menu.03_off.jpg" alt="" srcset="">
      <img class="button-image-3 on" src="~assets/images/bot_menu.03_on.jpg" alt="" srcset="">
    </div>
    <div class="footer-button">
      <img class="button-image-4 off" src="~assets/images/bot_menu.04_off.jpg" alt="" srcset="">
      <img class="button-image-4 on" src="~assets/images/bot_menu.04_on.jpg" alt="" srcset="">
    </div>
    <div class="footer-button">
      <img class="button-image-5 off" src="~assets/images/bot_menu.05_off.jpg" alt="" srcset="">
      <img class="button-image-5 on" src="~assets/images/bot_menu.05_on.jpg" alt="" srcset="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
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
      .on{
        display: none;
      }
      &:hover{
        cursor: pointer;
        .on{
          display: block;
        }
        .off{
          display: none;
        }
      }
    }
  }
</style>