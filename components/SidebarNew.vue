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
      
      label='Pages'
      position='is-right'
      type='is-dark'
    >
      <b-navbar-item
        class='p-4'
        tag='router-link'
        to='/pages'
       
      >
        <figure class='image is-24x24'>
          <i class="fas fa-pager fa-1x inactive-icon has-text-white"></i>
          <i class="fas fa-pager fa-1x active-icon has-text-primary"></i>
        </figure>

        <label
          class='has-text-white fs-nl has-text-weight-semibold is-hidden-tablet'
        >Pages</label
        >
      </b-navbar-item>
    </b-tooltip>


    <b-tooltip
      
      label='Colors'
      position='is-right'
      type='is-dark'
    >
      <b-navbar-item
        class='p-4'
        tag='router-link'
        to='/colors'
       
      >
        <figure class='image is-24x24'>
          <i class="fas fa-palette fa-1x inactive-icon has-text-white"></i>
          <i class="fas fa-palette fa-1x active-icon has-text-primary"></i>
        </figure>

        <label
          class='has-text-white fs-nl has-text-weight-semibold is-hidden-tablet'
        >Colors</label
        >
      </b-navbar-item>
    </b-tooltip>


    <b-tooltip
      
      label='Utilities'
      position='is-right'
      type='is-dark'
    >
      <b-navbar-item
        class='p-4'
        tag='router-link'
        to='/utilities'
       
      >
        <figure class='image is-24x24'>
          <i class="fab fa-codepen fa-1x inactive-icon has-text-white"></i>
          <i class="fab fa-codepen fa-1x active-icon has-text-primary"></i>
        </figure>

        <label
          class='has-text-white fs-nl has-text-weight-semibold is-hidden-tablet'
        >Utilities</label
        >
      </b-navbar-item>
    </b-tooltip>

    
    
  </dir>
</template>



