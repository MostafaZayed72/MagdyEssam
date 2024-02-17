<template>
  <div class="swiper">
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><v-container
          ><v-row
            ><v-col cols="6" class="flex justify-center items-center">
              <!-- Start Left Text -->
              <div class="text flex flex-col mt-10 ml-10 text-start z-10">
                <h1 class="font-bold text-4xl text-gray-700">Handmade</h1>
                <h1 class="font-bold text-4xl text-gray-700 title">
                  Hand carved Coffee
                </h1>
                <h1 class="text-sm mt-4 text-slate-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  assumenda aliquam aut laboriosam fugiat iusto nostrum error
                  adipisci.
                </h1>
                <h1 class="text-xs discover font-bold mt-12 py-3 px-8">
                  DISCOVER NOW
                </h1>
              </div>
              <!-- Start Right Image --> </v-col
            ><v-col>
              <div class="text-center items-center">
                <img src="/assets/images/img1.png" alt="" />
              </div> </v-col></v-row></v-container
      ></swiper-slide>
      <swiper-slide
        ><v-container
          ><v-row
            ><v-col cols="6" class="flex justify-center items-center">
              <!-- Start Left Text -->
              <div class="text flex flex-col mt-10 ml-10 text-start z-10">
                <h1 class="font-bold text-4xl text-gray-700">
                  Think Different &
                </h1>
                <h1 class="font-bold text-4xl text-gray-700">
                  Do it otherwise
                </h1>
                <h1 class="text-sm mt-4 text-slate-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  assumenda aliquam aut laboriosam fugiat iusto nostrum error
                  adipisci.
                </h1>
                <h1 class="text-xs discover font-bold mt-12 py-3 px-8">
                  DISCOVER NOW
                </h1>
              </div>
              <!-- Start Right Image --> </v-col
            ><v-col>
              <div class="text-center items-center">
                <img src="/assets/images/img2.png" alt="" />
              </div> </v-col></v-row></v-container></swiper-slide
      ><swiper-slide
        ><v-container
          ><v-row
            ><v-col cols="6" class="flex justify-center items-center">
              <!-- Start Left Text -->
              <div class="text flex flex-col mt-10 ml-10 text-start z-10">
                <h1 class="font-bold text-4xl text-gray-700">High Beam</h1>
                <h1 class="font-bold text-4xl text-gray-700 title">
                  by Tom Chung
                </h1>
                <h1 class="text-sm mt-4 text-slate-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  assumenda aliquam aut laboriosam fugiat iusto nostrum error
                  adipisci.
                </h1>
                <h1 class="text-xs discover font-bold mt-12 py-3 px-8">
                  DISCOVER NOW
                </h1>
              </div>
              <!-- Start Right Image --> </v-col
            ><v-col>
              <div class="text-center items-center">
                <img src="/assets/images/img3.png" alt="" />
              </div> </v-col></v-row></v-container
      ></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Pagination],
    };
  },
};
</script>

<style>
.discover {
  border: 2px solid black;
  width: fit-content;
  transition: 0.5s;
  cursor: pointer;
}

.discover:hover {
  border: 2px solid rgb(218, 168, 104);
  background-color: rgb(218, 168, 104);
  color: white;
}

#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgb(245, 245, 245);

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #fff;
  border: 2px solid rgb(177, 126, 15);
}

@media (max-width: 767px) {
  .swiper-pagination-bullet-active {
    display: none;
  }
  .swiper-pagination-bullet {
    display: none;
  }
}
</style>
