<template>
  <div class="container">
    <AppTitle :level="1" title="Rồng Vàng">
      Nhà hát múa rối nước tư nhân đầu tiên của Việt Nam mang tên Rồng Vàng.
    </AppTitle>

    <WaterPuppetArticle
      title="Nhà hát Rồng Vàng"
      description="Địa điểm biểu diễn những tiết mục múa rối nước dân gian Việt Nam duy nhất ở Tp. Hồ Chí Minh được diễn ra trên sân khấu nước."
      background="/images/bat-tien-bg.png"
    />

    <div>
      <AppButtonRed class="btn-bottom feedback">
        <img src="icons/gio.svg" alt="cai-gio-bat-ca">
        Đặt vé
      </AppButtonRed>
    </div>
  </div>
</template>
