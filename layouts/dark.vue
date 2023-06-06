<template>
  <div>
    <Nuxt />
    <div class="bg-circle"></div>
  </div>
</template>

<script>
export default {
  middleware: 'BlockUserMiddleware',
  mounted() {
    // this.$colorMode.preference = 'light'
  },
}
</script>
