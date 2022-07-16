<template>
  <div class="connection">
    <AppTitle id="contact" :level="1" title="Liên Hệ" />
    <AppTitle :level="2" title="Liên lạc" />
    <div class="info-list">
      <div class="info">
        <p>Địa chỉ</p>
        <span>55B Nguyễn Thị Minh Khai, P. Bến Thành, Q1, Thành phố Hồ Chí
          Minh.</span>
      </div>
      <div class="info">
        <p>Email</p>
        <span>NhahatRongVang@gmail.com.vn</span>
      </div>
      <div class="info">
        <p>Số Điện Thoại</p>
        <span>0258 3856 068</span>
      </div>
      <div class="info">
        <p>Giờ mở cửa</p>
        <span>Từ thứ 2 đến Chủ Nhật (6:00-19:00)</span>
      </div>
    </div>
    <div class="overlay" />
    <img src="/images/maps.png" alt="ban-do" width="100%">
  </div>
</template>

<style lang="scss" scoped>
.connection {
  position: relative;
  margin: 2rem 0;

  #contact {
    margin-bottom: 2rem;
  }
  .title {
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
  .info-list {
    padding: 0 1rem;
    margin-bottom: 3rem;
    .info {
      padding-top: 0.625rem;
      p {
        font-size: 1.5rem;
        font-weight: 500;
      }

      span {
        display: block;
        font-size: 1rem;
        font-weight: 300;
        margin-top: 0.4rem;
        line-height: 140%;
      }
    }

  }

  .overlay {
    @include overlay("/images/vua-tra-guom.png");
  }
}
</style>
