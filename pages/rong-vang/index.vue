<template>
  <div class="container">
    <AppTitle :level="1" title="Rồng Vàng" />
    <p class="gold-dragon-content">
      Nhà hát múa rối nước tư nhân đầu tiên của Việt Nam mang tên Rồng Vàng.
    </p>
    <WaterPuppetArticle
      title="Nhà hát Rồng Vàng"
      description="Địa điểm biểu diễn múa rối nước dân gian Việt Nam duy nhất ở Tp. Hồ Chí Minh được diễn ra trên sân khấu nước."
      background="/images/bat-tien-bg.png"
    >
      <GoldDragonDescription />
    </WaterPuppetArticle>

    <GoldDragonArtist />

    <div>
      <AppButtonRed class="btn-bottom feedback">
        <img src="/icons/gio.svg" alt="cai-gio-bat-ca">
        Đặt vé
      </AppButtonRed>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.title{
  padding: 1rem;
}

.gold-dragon-content{
    padding: 0.2rem 1rem 0 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 140%;
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
