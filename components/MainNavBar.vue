<script setup>
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 100; // قيمة 100 يمكن تعديلها حسب احتياجاتك
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="nav" style="background-color: rgb(245, 245, 245)">
    <v-container>
      <v-row
        class="navBar flex justify-between items-center"
        style="transform: translateY(-20%)"
      >
        <v-col cols="6" md="2">
          <img
            class="cursor-pointer"
            style="width: 200px; height: 100px"
            src="/assets/images/Momento-logo.png"
            alt=""
        /></v-col>
        <v-col cols="5" class="links gap-10 text-sm font-bold"
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Home</h1>
            <Icon name="fa6-solid:angle-down" /> </nuxt-link
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Shop</h1>
            <Icon name="fa6-solid:angle-down" /> </nuxt-link
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Blog</h1>
            <Icon name="fa6-solid:angle-down" /> </nuxt-link
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Pages</h1>
            <Icon name="fa6-solid:angle-down" /> </nuxt-link
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Contact</h1>
          </nuxt-link></v-col
        >
        <v-col cols="6" md="3" class="flex justify-center md:justify-end gap-6">
          <div class="menu secondIcon">
            <Icon
              name="material-symbols:menu-rounded"
              class="text-3xl cursor-pointer"
            />
          </div>
          <div class="search flex items-center gap-1 cursor-pointer">
            <Icon name="ic:round-search" class="text-xl" />
            <h1 class="text-sm">Search</h1>
          </div>
          <div class="cart flex items-center gap-1 cursor-pointer">
            <Icon name="ph:handbag" class="text-xl" />
            <h1 class="text-sm">Cart</h1>
          </div>
          <div class="menu">
            <Icon
              name="material-symbols:menu-rounded"
              class="text-3xl cursor-pointer"
            />
          </div> </v-col></v-row
    ></v-container>
  </div>
  <div
    v-show="isScrolled"
    class="nav-sticky h-40 md:h-24 bg-white shadow-lg w-100 sticky top-0 z-10"
  >
    <v-container>
      <v-row
        class="navBar flex justify-between items-center"
        style="transform: translateY(-20%)"
      >
        <v-col cols="6" md="2">
          <img
            class="cursor-pointer"
            style="width: 200px; height: 100px"
            src="/assets/images/Momento-logo.png"
            alt=""
        /></v-col>
        <v-col cols="5" class="links gap-10 text-sm font-bold"
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Home</h1>
            <Icon name="fa6-solid:angle-down" /> </nuxt-link
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Shop</h1>
            <Icon name="fa6-solid:angle-down" /> </nuxt-link
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Blog</h1>
            <Icon name="fa6-solid:angle-down" /> </nuxt-link
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Pages</h1>
            <Icon name="fa6-solid:angle-down" /> </nuxt-link
          ><nuxt-link
            to=""
            class="flex items-center gap-1 text-slate-700 cursor-pointer"
          >
            <h1>Contact</h1>
          </nuxt-link></v-col
        >
        <v-col cols="6" md="3" class="flex justify-center md:justify-end gap-6">
          <div class="menu secondIcon">
            <Icon
              name="material-symbols:menu-rounded"
              class="text-3xl cursor-pointer"
            />
          </div>
          <div class="search flex items-center gap-1 cursor-pointer">
            <Icon name="ic:round-search" class="text-xl" />
            <h1 class="text-sm">Search</h1>
          </div>
          <div class="cart flex items-center gap-1 cursor-pointer">
            <Icon name="ph:handbag" class="text-xl" />
            <h1 class="text-sm">Cart</h1>
          </div>
          <div class="menu">
            <Icon
              name="material-symbols:menu-rounded"
              class="text-3xl cursor-pointer"
            />
          </div> </v-col></v-row
    ></v-container>
  </div>
</template>

<style>
@media (min-width: 991px) {
  .links {
    display: flex;
  }

  .secondIcon {
    display: none;
  }
}

@media (max-width: 991px) {
  .links {
    display: none;
  }
}

@media (max-width: 500px) {
  .navBar {
    flex-direction: column;
  }
}
</style>
