<template>
  <div class="edu-wrap edu-wrap__animations p-4">
    <div class="intro-headings mb-3">
      <h2 class="intro-txt has-text-weight-semibold">Layouts</h2>
    </div>

    <!-- Flexbox -->
    <div class="intro-headings my-3">
      <div class="is-flex is-justify-content-space-between">
        <h5 class="has-text-weight-semibold">Bulma Flexbox</h5>
      </div>
    </div>

    <div class="layout-wrap">
      <div class="columns is-align-items-center">
        <div class="column">
          <div class="box has-background-ch-txt-sub has-text-light">
            <div
              class="is-flex is-align-items-center is-justify-content-center"
            >
              <p>Sample Text</p>
            </div>
          </div>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<div class="is-flex is-align-items-center is-justify-content-center"><p>Sample Text</p></div>'
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-align-items-center">
        <div class="column">
          <div class="box has-background-ch-txt-sub has-text-light">
            <div
              class="is-flex is-align-items-center is-justify-content-flex-start"
            >
              <p>Sample Text</p>
            </div>
          </div>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<div class="is-flex is-align-items-center is-justify-content-flex-start"><p>Sample Text</p></div>'
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-align-items-center">
        <div class="column">
          <div class="box has-background-ch-txt-sub has-text-light">
            <div
              class="is-flex is-align-items-center is-justify-content-flex-end"
            >
              <p>Sample Text</p>
            </div>
          </div>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<div class="is-flex is-align-items-center is-justify-content-flex-end"><p>Sample Text</p></div>'
            ></b-input>
          </b-field>
        </div>
      </div>


      <div class="columns is-align-items-center">
        <div class="column">
          <div class="box has-background-ch-txt-sub has-text-light pt-2">
            <div
              class="is-flex is-align-items-flex-start is-justify-content-center"
            >
              <p>Sample Text</p>
            </div>
          </div>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<div class="is-flex is-align-items-flex-start is-justify-content-center"><p>Sample Text</p></div>'
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-align-items-center">
        <div class="column">
          <div class="box has-background-ch-txt-sub has-text-light pb-2">
            <div
              class="is-flex is-align-items-flex-end is-justify-content-center"
            >
              <p>Sample Text</p>
            </div>
          </div>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<div class="is-flex is-align-items-flex-end is-justify-content-center"><p>Sample Text</p></div>'
            ></b-input>
          </b-field>
        </div>
      </div>


      <div class="columns is-align-items-center">
        <div class="column">
          <div class="box has-background-ch-txt-sub has-text-light">
            <div
              class="is-flex is-align-items-center is-justify-content-space-between"
            >
              <p>Sample Text</p>
              <p>Sample Text</p>
            </div>
          </div>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<div class="is-flex is-align-items-center is-justify-content-space-between"><p>Sample Text</p><p>Sample Text</p></div>'
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-align-items-center">
        <div class="column">
          <div class="box has-background-ch-txt-sub has-text-light">
            <div
              class="is-flex is-align-items-center is-justify-content-space-around"
            >
              <p>Sample Text</p>
              <p>Sample Text</p>
            </div>
          </div>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<div class="is-flex is-align-items-center is-justify-content-space-around"><p>Sample Text</p><p>Sample Text</p></div>'
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-align-items-center">
        <div class="column">
          <div class="box has-background-ch-txt-sub has-text-light">
            <div
              class="is-flex is-align-items-center is-justify-content-space-evenly"
            >
              <p>Sample Text</p>
              <p>Sample Text</p>
            </div>
          </div>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<div class="is-flex is-align-items-center is-justify-content-space-evenly"><p>Sample Text</p><p>Sample Text</p></div>'
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-align-items-center">
        <div class="column">
          <div class="box has-background-ch-txt-sub has-text-light">
            <div
              class="is-flex is-align-items-baseline is-justify-content-space-between"
            >
            <div>
              <p>Sample Text</p>
              <span class="is-size-7">sub text</span>
            </div>

              <p>Sample Text</p>
            </div>
          </div>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<div class="is-flex is-align-items-baseline is-justify-content-space-between"><p>Sample Text</p><p>Sample Text</p></div>'
            ></b-input>
          </b-field>
        </div>
      </div>


    </div>

    <!-- Child Classes -->

    <h5 class="has-text-weight-semibold mt-5">Bulma Child Flexbox Utilities</h5>



  </div>
</template>

<!-- <script>

export default {
  layout: 'blank',

  data() {
    return {
      
    }
  },
}
</script> -->
