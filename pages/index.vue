<template>
  <MainNavBar />
  <div class="pb-40" style="background-color: rgb(245, 245, 245)"><MainSwiper /></div>
  <div class="FirstProducts"><FirstProducts /></div>
</template>

<style>
@media (min-width: 767px) {
  .FirstProducts{
    transform: translateY(-100px);
    z-index: 10;
  }
}
</style>
