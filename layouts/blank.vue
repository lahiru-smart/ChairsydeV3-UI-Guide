<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: 'BlockUserMiddleware',
  mounted() {
    //  this.$colorMode.preference = 'light'
  },
}
</script>
