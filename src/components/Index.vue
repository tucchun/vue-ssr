<template>
  <div>
    <h5>home:{{username}}/{{title}}</h5>
    <button type="button" @click="goBack()">goBack</button>
  </div>
</template>

<script>
export default {
  props: [
    'username',
    'title'
  ],
  computed: {
    
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
