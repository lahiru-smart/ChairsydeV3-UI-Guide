<template>
  <dir
   
    class='my-0 navbar has-background-black sidebar-nav'
  >
    <b-button
      class='bg-trans p-0 is-absolute close-btn is-hidden-tablet'
      icon-right='close'
      size='is-medium'
      type='is-ch-txt-sub'
     
    />

    <b-navbar-item
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/favicon-3.png') + ')',
      }"
      class='mx-3 mb-2 logo-sub is-rounded'
      style='background-position: center; background-size: 30px'
      tag='router-link'
      to='/landing'
     
    />
    <b-tooltip
      
      label='Dashboard'
      position='is-right'
      type='is-dark'
    >
      <b-navbar-item
        class='p-4'
        tag='router-link'
        to='/landing'
       
      >
        <figure class='image is-24x24'>
          <img
            class='inactive-icon'
            src='@/assets/images/icons/dashboard.svg'
          />
          <img
            class='active-icon'
            src='@/assets/images/icons/dashboard-active.svg'
          />
        </figure>

        <label
          class='has-text-white fs-nl has-text-weight-semibold is-hidden-tablet'
        >Dashboard</label
        >
      </b-navbar-item>
    </b-tooltip>

    
    
  </dir>
</template>



