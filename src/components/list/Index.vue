<template>
  <div class="newblogs">
    <home-title title='最新文章'/>
    <!-- <h2 class="hometitle">最新文章</h2> -->
    <ul>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ul>
  </div>
</template>

<script>
// import 'lib/normalize.css/normalize.css'
// import '@/common/styles/common.css'
import Summary from './Summary.vue'
import HomeTitle from '@/components/hometitle'

export default {
  components: {
    HomeTitle,
    Item: Summary
  }
}
</script>

<style scoped>

.newblogs {
  background: #fff;
  overflow: hidden;
  width: 100%;
}

.newblogs ul{
  padding: 10px;
  overflow: hidden;
}
</style>
