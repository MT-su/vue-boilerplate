<template>
  <div class="home">
    <div style="margin-bottom:16px">
    <button @click="toVuex">vuex</button>
    <button @click="toHttp">http request</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    toVuex () {
      this.$router.push('/home/vuex-test')
    },
    toHttp () {
      this.$router.push('/home/axios-test')
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
button {
  margin-right: 16px;
}
</style>
