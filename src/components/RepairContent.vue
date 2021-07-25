<template>
  <div class="repair-content" >
    <div class="repair-content-left" :style="`background-image:url(${imageData});`">
    </div>
    <div class="repair-content-right">
      <div class="title">
        {{data.title}}
      </div>
      <div class="content">
        {{data.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepairContent',
  props:["data"],
  data () {
    return {
    }
  },
  computed: {
    imageData () {
      return require('../assets/'+this.data.image)
    }
  }
}
</script>

<style lang="scss">
.repair-content{
    display: flex;
    width: 100%;
    max-height:120px;
    margin-bottom: 10px;
    flex:1;
    border: 1px solid #bebebe;
    &:hover{
      cursor: pointer;
    }
    &-left{
      display: flex;
      width:35%;
      flex:none;
      background-size: cover;
      background-position: center center;
    }
    &-right{
      display: flex;
      flex-direction: column;
      width: 65%;
      flex:none;
      background: white;
      padding: 10px 15px;
      .title{
        color:black;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 5px;
      }
      .content{
        color: #7b7b7b;
        font-size: 10px;
        font-weight: bold;
      }
    }
  }
</style>