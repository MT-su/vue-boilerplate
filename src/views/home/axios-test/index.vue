<template>
    <div>
      <button @click="get">get</button>
      <button @click="post">post</button>
    </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {

    }
  },
  methods: {
    get () {
      this.$api.moduleTest.getText({ key: 'value' }).then(res => {
        console.log(res)
      })
    },
    post () {
      this.$api.moduleTest.weatherApi({ city: '成都' }).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    console.log(this.$api)
  }
}
</script>

<style scoped lang="less">

</style>
