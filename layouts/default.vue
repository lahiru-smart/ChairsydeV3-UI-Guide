<template>
  <div>
    <div class="hero is-flex is-flex-direction-row is-fullheight">
      <SidebarNew />
      <div class="is-flex is-flex-direction-column content-area">
        <NavbarNew />
        <Nuxt />
      </div>
    </div>
    
    <div class="bg-circle"></div>
  </div>
</template>

<script>
export default {
  colorMode: 'dark',
  data() {
    return {}
  },
}
</script>


