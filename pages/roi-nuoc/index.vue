<template>
  <main class="water-puppet container">
    <AppTitle :level="1" title="Rối Nước" />
    <p class="water-puppet_content">
      Một loại hình nghệ thuật sân khấu <br> độc đáo, ra đời từ nền văn hóa lúa
      nước.
    </p>
    <WaterPuppetArticle
      title="Giới Thiệu"
      description="Múa rối nước (còn gọi là trò rối nước) được coi là nét văn hóa phi vật thể dân gian đặc sắc của dân tộc Việt Nam."
      video="/video/ngu-ong.mp4"
    >
      <WaterPuppetIntro />
    </WaterPuppetArticle>

    <WaterPuppetArticle
      title="Biểu Diễn"
      description="Trong biểu diễn múa rối nước lời ca của nghệ sĩ và cách diễn rối của nghệ nhân quan trọng không kém. "
      video="/video/tra-guom.mp4"
    >
      <WaterPuppetActivity />
    </WaterPuppetArticle>
    <div>
      <NuxtLink to="/tro-tich">
        <AppButtonRed class="btn-bottom feedback">
          <img src="/icons/gio.svg" alt="cai-gio-bat-ca" class="cai-gio">
          Đặt vé
        </AppButtonRed>
      </NuxtLink>
    </div>

    <!-- <div class="overlay" /> -->
    <AppFooter />
  </main>
</template>

<style lang="scss" scoped>
.water-puppet {
  width: 100%;
  position: relative;
  &_content{
      font-size: 1.27rem;
      font-weight: 500;
      line-height: 140%;
      padding: 0.3rem 1rem 0 1rem;
  }

  .title{
    align-items: center;
    padding: 0 1rem;
  }

  .btn-bottom {
    position: fixed;
    bottom: 0px;
    right: 0px;
    z-index: 1;
  }

  .feedback {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary-dark-red-100;
    color: white;
    width: 170px;
    height: 55px;
    border-top-left-radius: 20px;
    border: none;
    font-size: 1.25rem;
    font-weight: 400;
    .cai-gio {
      margin-right: 0.5rem;
      width: 17px;
      height: 21px;
}
  }
  .overlay {
    @include overlay("/images/la-sen-lon.png");
    background-position: 70%;
  }
}
</style>
