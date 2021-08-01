<template>
  <div class="main-content"  @click="()=>{$emit('handleClick', data)}">
    <div class="main-content-image" :style="`background-image:url(${imageData});`">
    </div>
    <div class="main-content-text">
      <div class="content">
        <div class="content-left">
          <div class="content-left__title">
            {{data.title}}
          </div>
          <div class="content-left__content">
            {{data.content}}
          </div>
        </div>
        <div class="content-right">
          <div class="content-right-row">
            <div class="content-right-icon">
              시간
            </div>
            <div class="content-right-text">
              {{data.time}}
            </div>
          </div>
          <div class="content-right-row">
            <div class="content-right-icon">
              비용
            </div>
            <div class="content-right-text">
              {{data.price}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props:["data"],
  data () {
    return {
    }
  },
  computed: {
    imageData () {
      return require('../assets/'+this.data.image)
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
.main-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #bebebe;
    &:hover{
      cursor: pointer;
    }
    &-image{
      display: flex;
      height: 200px;
      flex:none;
      background-size: cover;
      background-position: center center;
    }
    &-text{
      border-top:2px solid #afafaf;
      border-bottom:2px solid #afafaf;
      display: flex;
      flex-direction: column;
      width: 100%;
      flex:none;
      background: white;
      height:56px;
      .content{
        color:#8d8d8d;
        font-size: 11px;
        font-weight: bold;
        display: flex;
        &-left{
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
        &-right{
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
    }
  }
</style>