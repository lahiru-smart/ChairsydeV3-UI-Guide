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
      <h2 class="intro-txt has-text-weight-semibold">Font Sizes</h2>
    </div>

    <div class="uti-box">
      <h5 class="mb-3">Bulma Responsive Typo Sizes</h5>
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
                <p class="has-text-ch-dark-medium">
                  .is-size-1 | .is-size-1-[res*]
                </p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="is-size-1">3rem (48px)</p>
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
                <p class="has-text-ch-dark-medium">
                  .is-size-2 | .is-size-2-[res*]
                </p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="is-size-2">2.5rem (40px)</p>
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
                <p class="has-text-ch-dark-medium">
                  .is-size-3 | .is-size-3-[res*]
                </p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="is-size-3">2rem (32px)</p>
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
                <p class="has-text-ch-dark-medium">
                  .is-size-4 | .is-size-4-[res*]
                </p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="is-size-4">1.5rem (24px)</p>
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
                <p class="has-text-ch-dark-medium">
                  .is-size-5 | .is-size-5-[res*]
                </p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="is-size-5">1.25rem (20px)</p>
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
                <p class="has-text-ch-dark-medium">
                  .is-size-6 | .is-size-6-[res*]
                </p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="is-size-6">1rem (16px)</p>
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
                <p class="has-text-ch-dark-medium">
                  .is-size-7 | .is-size-7-[res*]
                </p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="is-size-7">0.75rem (12px)</p>
              </div>
            </div>
          </div>
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
