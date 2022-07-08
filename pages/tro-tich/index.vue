<template>
  <img class="background-img" src="/images/muc-dong.jpg">
  <div class="page">
    <main class="article">
      <AppTitle :level="1" title="Trò tích" />
      <FolkTaleSlider category="doi-thuong" />
      <FolkTaleSlider category="le-hoi" />
      <FolkTaleSlider category="tich-co" />
    </main>
    <div class="overlay" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.background-img {
  width: 100%;
}
.page{
  position: relative;

  .overlay{
    z-index: -1;
    position: absolute;
    background-image: url("images/bat-tien.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 105% 0%;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.1;
  }

  .article {
    padding: 0 1rem 2em;
  }
}

</style>
