<template>
  <div>
    <div class="container">
      <!-- <img class="background-img" src="/images/muc-dong.jpg"> -->
      <AppVideo video="/video/muc-dong.mp4" />
      <div class="page">
        <main class="article">
          <AppTitle :level="1" title="Trò tích" />
          <FolkTaleSlider category="doi-thuong" />
          <FolkTaleSlider category="le-hoi" />
          <FolkTaleSlider category="tich-co" />
        </main>
        <div class="overlay" />
      </div>
    </div>
    <AppFooter />
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

  .article {
    padding: 0 1rem 2em;
  }

  .overlay{
    @include overlay('/images/bat-tien.png')
  }
}

</style>
