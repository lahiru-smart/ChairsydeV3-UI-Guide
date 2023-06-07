<template>
  <div class="edu-wrap edu-wrap__animations p-4">
    <div class="intro-headings mb-3">
      <h2 class="intro-txt has-text-weight-semibold">Utilities</h2>
    </div>

    <div class="uti-box">
      <h5 class="mb-3">Bulma Responsive breakpoints</h5>
      <div class="columns is-multiline is-desktop">
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mobile {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 768</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include tablet {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 768</p>
              </div>
            </div>
          </div>
        </div>


        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include tablet-only {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>768-1023</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include desktop {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 1024</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include desktop-only {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>1024-1215</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include widescreen {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 1215</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include widescreen-only {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>1216-1407</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include fullhd {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 1407</p>
              </div>
            </div>
          </div>
        </div>


        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include touch {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 1024</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include until-widescreen {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 1215</p>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include until {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 1407</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    <div class="uti-box my-4">
      <h5 class="mb-3">Custom Responsive breakpoints [max-width]</h5>
      <div class="columns is-multiline is-desktop">
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(mobile) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 318</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(x-small) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 375</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(small) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 480</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(md-small) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 576</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(lg-small) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 650</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(tablet) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 768</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(medium) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 991</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(desktop) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 1023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(ipad) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 1024</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(widescreen) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 1215</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(laptop-sm) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 1300</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(laptop) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 1400</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include mq(fullhd) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>below 1407</p>
              </div>
            </div>
          </div>
        </div>

        



  

        
      </div>
    </div>
    <div class="uti-box my-4">
      <h5 class="mb-3">Custom Responsive breakpoints [min-width]</h5>
      <div class="columns is-multiline is-desktop">
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(mobile) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 318</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(x-small) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 375</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(small) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 480</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(md-small) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 576</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(lg-small) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 650</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(tablet) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 768</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(medium) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 991</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(desktop) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 1023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(ipad) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 1024</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(widescreen) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 1215</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(laptop-sm) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 1300</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(laptop) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 1400</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-semibold"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-light">@include minq(fullhd) {...}</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-light is-flex is-align-items-center is-justify-content-center"
              >
                <p>above 1407</p>
              </div>
            </div>
          </div>
        </div>

        



  

        
      </div>
    </div>

    <hr />

    <!-- Tags -->

    <div class="intro-headings my-3">
      <h2 class="intro-txt has-text-weight-semibold">Tags</h2>
    </div>

    <div class="btn-wrap">
      <div class="columns is-align-items-center">
        <div class="column is-2">
          <h6>Normal</h6>
        </div>
        <div class="column">
          <b-field>
            <b-tag class="has-text-weight-semibold" type="is-primary"
              >Normal</b-tag
            >
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<b-field><b-tag class="has-text-weight-semibold" type="is-primary">Normal</b-tag></b-field>'
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-align-items-center">
        <div class="column is-2">
          <h6>Rounded</h6>
        </div>
        <div class="column">
          <b-field>
            <b-tag
              class="bd-primary has-text-primary is-tag-rounded has-text-weight-semibold"
              type="is-light"
              >Rounded tag label</b-tag
            >
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-input
              value='<b-field><b-tag class="bd-primary has-text-primary is-tag-rounded has-text-weight-semibold" type="is-light">Rounded tag</b-tag></b-field>'
            ></b-input>
          </b-field>
        </div>
      </div>
    </div>
    <hr />
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
