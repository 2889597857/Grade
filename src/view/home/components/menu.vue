<template>
  <div class="home-menu">
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<style lang="scss" scoped>
  .home-menu {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 10px;
    right: 10px;
    display: none;
    @media screen and (max-width: 1000px) {
      display: block;
    }
    img {
      width: 100%;
    }
  }
</style>