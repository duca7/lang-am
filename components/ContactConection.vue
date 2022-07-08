<template>
  <div class="conection">
    <AppTitle :level="2" title="Liên lạc" />
    <div class="info-list">
      <div class="info">
        <p>Địa chỉ</p>
        <span>55B Nguyễn Thị Minh Khai, P. Bến Thành, Q1, Thành phố Hồ Chí Minh.</span>
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
  </div>

  <img src="images/maps.png" alt="ban-do" width="100%">
</template>

<style lang="scss" scoped>
.conection{
    position: relative;
    margin-top: 2rem;
    padding: 0 1rem 2em;
   .info-list{
    margin-top: 1.25rem;
    .info{
        padding-top: 0.625rem;
        p{
            font-size: 1.5rem;
            font-weight: 500;
        }

        span{
            display: block;
            font-size: 1rem;
            font-weight: 300;
            margin-top: 0.4rem;
            line-height: 140%;
        }
    }
   }
}
</style>
