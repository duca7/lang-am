<template>
  <main class="water-puppet container">
    <AppTitle :level="1" title="Rối Nước">
      Là một loại hình nghệ thuật sân khấu độc đáo, ra đời từ nền văn hóa lúa
      nước.
    </AppTitle>

    <WaterPuppetArticle
      title="Giới Thiệu"
      description="Múa rối nước (còn gọi là trò rối nước) được coi là nét văn hóa phi vật thể dân gian đặc sắc của dân tộc Việt Nam."
      background="/images/ngu-ong.png"
    />

    <WaterPuppetArticle
      title="Biểu Diễn"
      description="Trong biểu diễn múa rối nước lời ca của nghệ sĩ và cách diễn rối của nghệ nhân quan trọng không kém. "
      background="/images/ho-guom.png"
    >
      <WaterPuppetActivity />
    </WaterPuppetArticle>
    <div>
      <AppButtonRed class="btn-bottom feedback">
        <img src="icons/gio.svg" alt="cai-gio-bat-ca">
        Đặt vé
      </AppButtonRed>
    </div>

    <!-- <div class="overlay" /> -->
  </main>
</template>

<style lang="scss" scoped>
.water-puppet {
  width: 100%;
  position: relative;

  .app-title{
    padding: 1rem 1rem 0 1rem;

    .desc{
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 140%;
      padding-top: 0.625rem;
    }
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
    img {
      padding-right: 1rem;
    }
  }
  .overlay {
    @include overlay("/images/la-sen-lon.png");
    background-position: 70%;
  }
}
</style>
