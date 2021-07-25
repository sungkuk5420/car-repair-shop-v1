<template>
  <div class="repair-content">
    <div class="repair-content-left">
      {{data.image}}
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
    return {}
  }
}
</script>

<style lang="scss">
  .repair-content{
  }
</style>