<template>
  <div class="header">
    <div class="header-button button-1" @click="()=>{changeCenterTab('info')}" :class="centerTab=='info'?'is-active':''">
      <div class="header-effect"></div>
        공업소 정보
    </div>
    <div class="header-button button-2" @click="()=>{changeCenterTab('repair-contents')}" :class="centerTab=='repair-contents'?'is-active':''">
      <div class="header-effect"></div>
        장비 기계 소개
    </div>
    <div class="header-button button-3" @click="()=>{changeCenterTab('call')}" :class="centerTab=='call'?'is-active':''">
      <div class="header-effect"></div>
        긴급 전화
    </div>
  </div>
</template>

<script>
import { T } from "../store/module-example/types";
export default {
  props:["centerTab"],
  name: 'Header',
  data () {
    return {
    }
  },
  methods:{
    changeCenterTab(tabName){
      this.$store.dispatch(T.CHANGE_CENTER_TAB,tabName);
    }
  }
}
</script>

<style lang="scss">
  .header{
    max-width: 375px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 100%;
    flex: 1;
    position: absolute;
    top: 0;
    &-button{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      height: 50px;
      background: #323b4a;
      color:#76808f;
      position: relative;
      
      .header-effect{
        width: 10px;
        height: 10px;
        position: absolute;
        bottom: -5px;
        transform: rotate(45deg);
        right: auto;
        left: auto;
        background: #ececec;
        display: none;
      }
      &.is-active{
        color:white;
        .header-effect{
          display: block;
        }
      }
      &:hover{
        color:white;
        cursor: pointer;
      }
    }
  }
</style>