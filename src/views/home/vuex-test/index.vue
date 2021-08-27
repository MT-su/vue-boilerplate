<template>
  <div class="home">
    <b>vuex Test</b>
    <br/>
    <button @click="addnum">mutation</button>
    <br/>
    <button @click="action">action</button>
    <br/>
    state:{{$store.state.moduleA.num}}
    <br/>
    getter:{{this.$store.getters.getText}}
  </div>
</template>

<script>

export default {
  methods: {
    addnum () {
      this.$store.commit('mutationAddNum', 2)
    },
    action () {
      this.$store.dispatch('actionAddNum', 2)
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
button {
  margin: 8px;
}
</style>
