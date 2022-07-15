<template>
  <div class="container">
    <AppTitle :level="1" title="Rồng Vàng">
      Nhà hát múa rối nước tư nhân đầu tiên của Việt Nam mang tên Rồng Vàng.
    </AppTitle>

    <WaterPuppetArticle
      title="Nhà hát Rồng Vàng"
      description="Địa điểm biểu diễn những tiết mục múa rối nước dân gian Việt Nam duy nhất ở Tp. Hồ Chí Minh được diễn ra trên sân khấu nước."
      background="/images/bat-tien-bg.png"
    >
      <GoldDragonDescription />
    </WaterPuppetArticle>

    <GoldDragonArtist />

    <!-- <div>
      <AppButtonRed class="btn-bottom feedback">
        <img src="icons/gio.svg" alt="cai-gio-bat-ca">
        Đặt vé
      </AppButtonRed>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>

.app-title{
  padding: 1rem;
  .desc{
    padding-top: 1.5rem;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 140%;
    text-align: justify;
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
</style>
