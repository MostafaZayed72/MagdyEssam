<template>
  <v-container class="rounded" style="width: 90%; background-color: white"
    ><v-row>
      <v-col cols="12" md="4" class="relative card cursor-pointer">
        <div class="text ml-4 absolute left-10 top-20 md:top-48 lg:top-20">
          <h1 class="font-bold mb-4" style="white-space: nowrap">
            Lighting & Chair
          </h1>
          <span>Discover Now</span>
        </div>
        <img class="w-100" src="/assets/images/img2.jpg" alt="" />
      </v-col>
      <v-col cols="12" md="4" class="relative card cursor-pointer">
        <div class="text ml-4 absolute left-10 top-20 md:top-48 lg:top-20">
          <h1 class="font-bold mb-4" style="white-space: nowrap">
            Decoration & Accessories
          </h1>
          <span>Discover Now</span>
        </div>
        <img class="w-100" src="/assets/images/img1.jpg" alt="" />
      </v-col>
      <v-col cols="12" md="4" class="relative card cursor-pointer">
        <div class="text ml-4 absolute left-10 top-20 md:top-48 lg:top-20">
          <h1 class="font-bold mb-4" style="white-space: nowrap">
            Clothing & Oil
          </h1>
          <span>Discover Now</span>
        </div>
        <img class="w-100" src="/assets/images/img3.jpg" alt="" />
      </v-col> </v-row
  ></v-container>
</template>

<style>
.text {
  transform: translateX(20%);
}
.card:hover .text {
  margin-top: 20px;
  transition: 0.5s;
  z-index: 10;
}
.card:hover img {
  transform: scale(1.1);
  transition: 0.5s;
}
</style>
