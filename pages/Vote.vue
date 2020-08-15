<template>
  <pre>1</pre>
</template>

<script>
export default {
  name: 'Vote',
  asyncData (context) {
    return this.$axios.get('candidates').then((res) => {
      return { candidates: res.response.data }
    })
  }
}
</script>
