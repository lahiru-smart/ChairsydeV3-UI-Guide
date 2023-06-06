<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: 'NotBlockUserMiddleware',
  colorMode: 'light',
  mounted() {
    // this.$colorMode.preference = 'light'
  },
}
</script>
