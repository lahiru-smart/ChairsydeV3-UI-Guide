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

    <!-- Text -->

    <div class="intro-headings my-3">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between gap-3-mobile"
      >
        <h2 class="intro-txt has-text-weight-semibold">Text Sizes</h2>

        <a
          class="is-underlined"
          href="https://bulma.io/documentation/helpers/typography-helpers/"
          target="_blank"
          >(Typography Guide)</a
        >
      </div>
    </div>

    <div class="uti-box">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <h5 class="mb-3">Bulma Responsive Typo Sizes</h5>
        <p>[res*: mobile | touch | tablet | desktop | widescreen | fullhd]</p>
      </div>
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
    <!-- custom font sizes -->
    <div class="uti-box mt-3">
      <h5 class="mb-3">Custom Typo Sizes</h5>
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
                <p class="has-text-ch-dark-medium">.fs-md</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="fs-md">1.75rem (28px)</p>
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
                <p class="has-text-ch-dark-medium">.fs-smd</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="fs-smd">1.5rem (24px)</p>
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
                <p class="has-text-ch-dark-medium">.fs-mmd</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="fs-mmd">1rem (16px)</p>
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
                <p class="has-text-ch-dark-medium">.fs-nl</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="fs-nl">0.875rem (14px)</p>
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
                <p class="has-text-ch-dark-medium">.fs-sml</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="fs-sml">0.75rem (12px)</p>
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
                <p class="has-text-ch-dark-medium">.fs-xsml</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="fs-xsml">0.625rem (10px)</p>
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
                <p class="has-text-ch-dark-medium">.fs-xxsml</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center is-justify-content-center"
              >
                <p class="fs-xxsml">0.5rem (8px)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div class="intro-headings my-3">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <h2 class="intro-txt has-text-weight-semibold">Text Alignments</h2>
        <p>
          [res*: mobile | touch | tablet-only | tablet | desktop-only | desktop
          | widescreen-only | widescreen | fullhd]
        </p>
      </div>
    </div>

    <div class="uti-box mt-3">
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
                <p class="has-text-ch-dark-medium">.has-text-centered-[res*]</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">Sample Text</p>
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
                  .has-text-justified-[res*]
                </p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-justified w-100">Sample Text</p>
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
                <p class="has-text-ch-dark-medium">.has-text-left-[res*]</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-left w-100">Sample Text</p>
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
                <p class="has-text-ch-dark-medium">.has-text-right-[res*]</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-right w-100">Sample Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- text weight -->

    <hr />

    <div class="intro-headings my-3">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <h2 class="intro-txt has-text-weight-semibold">Text Weights</h2>
      </div>
    </div>

    <div class="uti-box mt-3">
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
                <p class="has-text-ch-dark-medium">.has-text-weight-light</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered has-text-weight-light w-100">
                  Light Text (300)
                </p>
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
                <p class="has-text-ch-dark-medium">.has-text-weight-normal</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p
                  class="fs-mmd has-text-centered has-text-weight-normal w-100"
                >
                  Normal Text (400)
                </p>
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
                <p class="has-text-ch-dark-medium">.has-text-weight-medium</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p
                  class="fs-mmd has-text-centered has-text-weight-medium w-100"
                >
                  Medium Text (500)
                </p>
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
                <p class="has-text-ch-dark-medium">.has-text-weight-semibold</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p
                  class="fs-mmd has-text-centered has-text-weight-semibold w-100"
                >
                  Bold Text (600-bold*)
                </p>
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
                <p class="has-text-ch-dark-medium">.has-text-weight-bold</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered has-text-weight-bold w-100">
                  Bolder Text (700)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- text transformation -->

    <hr />

    <div class="intro-headings my-3">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <h2 class="intro-txt has-text-weight-semibold">Text Transformation</h2>
      </div>
    </div>

    <div class="uti-box mt-3">
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
                <p class="has-text-ch-dark-medium">.is-capitalized</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered is-capitalized w-100">
                  Sample Text
                </p>
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
                <p class="has-text-ch-dark-medium">.is-lowercase</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered is-lowercase w-100">
                  Sample Text
                </p>
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
                <p class="has-text-ch-dark-medium">.is-uppercase</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered is-uppercase w-100">
                  Sample Text
                </p>
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
                <p class="has-text-ch-dark-medium">.is-italic</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered is-italic w-100">
                  Sample Text
                </p>
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
                <p class="has-text-ch-dark-medium">.is-underlined</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered is-underlined w-100">
                  Sample Text
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- display -->

    <hr />

    <div class="intro-headings my-3">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <h2 class="intro-txt has-text-weight-semibold">Display</h2>
        <p>
          [res*: mobile | touch | tablet-only | tablet | desktop-only | desktop
          | widescreen-only | widescreen | fullhd]
        </p>
      </div>
    </div>

    <div class="uti-box mt-3">
      <div class="columns is-multiline is-desktop">
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-medium"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-ch-dark-high is-size-6">.is-flex-[res*]</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-medium"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-ch-dark-high is-size-6">
                  .is-inline-flex-[res*]
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-medium"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-ch-dark-high is-size-6">.is-block-[res*]</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-medium"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-ch-dark-high is-size-6">
                  .is-inline-block-[res*]
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-medium"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-ch-dark-high is-size-6">.is-inline-[res*]</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-medium"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-ch-dark-high is-size-6">.is-hidden-[res*]</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-medium"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-ch-dark-high is-size-6">.is-invisible</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div
            class="box has-text-centered p-0 has-background-ch-vid has-text-ch-vid is-clipped h-80px"
          >
            <div
              class="is-flex is-flex-direction-column h-100 has-text-weight-medium"
            >
              <div
                class="is-flex-grow-1 is-flex is-align-items-center is-justify-content-center"
              >
                <p class="has-text-ch-dark-high is-size-6">.is-sr-only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- spacing -->

    <hr />

    <div class="intro-headings my-3">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <h2 class="intro-txt has-text-weight-semibold">
          Spacing <span class="is-size-6">[margin(m) | padding(p)]</span>
        </h2>
        <a
          class="is-underlined"
          href="https://bulma.io/documentation/helpers/spacing-helpers/"
          target="_blank"
          >(Spacing Guide)</a
        >
      </div>
    </div>

    <div class="uti-box mt-3">
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
                <p class="has-text-ch-dark-medium">*-auto</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">Auto</p>
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
                <p class="has-text-ch-dark-medium">*-0</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">0rem</p>
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
                <p class="has-text-ch-dark-medium">*-1</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">0.25rem (4px)</p>
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
                <p class="has-text-ch-dark-medium">*-2</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">0.5rem (8px)</p>
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
                <p class="has-text-ch-dark-medium">*-3</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">0.75rem (12px)</p>
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
                <p class="has-text-ch-dark-medium">*-4</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">1rem (16px)</p>
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
                <p class="has-text-ch-dark-medium">*-5</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">1.5rem (24px)</p>
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
                <p class="has-text-ch-dark-medium">*-6</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">3rem (48px)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    
    <!-- helpers -->

    <hr />

    <div class="intro-headings my-3">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <h2 class="intro-txt has-text-weight-semibold">
          Other Helpers
        </h2>
       
      </div>
    </div>

    <div class="uti-box mt-3">
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
                <p class="has-text-ch-dark-medium">.is-clearfix</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">clear floats</p>
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
                <p class="has-text-ch-dark-medium">is-pulled-left</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">float left</p>
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
                <p class="has-text-ch-dark-medium">is-pulled-right</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">float right</p>
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
                <p class="has-text-ch-dark-medium">is-overlay</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">overlay an element</p>
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
                <p class="has-text-ch-dark-medium">is-clipped</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">overflow hidden</p>
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
                <p class="has-text-ch-dark-medium">is-radiusless</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">remove border radius</p>
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
                <p class="has-text-ch-dark-medium">is-shadowless</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">remove shadow</p>
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
                <p class="has-text-ch-dark-medium">is-unselectable</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">unselect text</p>
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
                <p class="has-text-ch-dark-medium">is-clickable</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">cursor pointer</p>
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
                <p class="has-text-ch-dark-medium">is-relative</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">position relative</p>
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
                <p class="has-text-ch-dark-medium">is-absolute</p>
              </div>
              <div
                class="is-flex-grow-1 has-background-ch-dark-medium is-flex is-align-items-center"
              >
                <p class="fs-mmd has-text-centered w-100">position absolute</p>
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
