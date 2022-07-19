<template>
  <footer>
    <aside class="information">
      <h4>Nhà hát rồng vàng</h4>
      <span>Địa chỉ</span>
      <p class="font-msr">
        55B Nguyễn Thị Minh Khai, Bến Thành, Quận 1, TP. HCM
      </p>
      <span>Email</span>
      <p class="font-msr">
        NhahatRongVang@gmail.com.vn
      </p>
      <span>Số điện thoại</span>
      <p class="font-msr">
        0258 3856 068
      </p>
      <span>Giờ mở của</span>
      <p class="font-msr">
        Mọi ngày (9:00 - 18:00)
      </p>
    </aside>
    <aside class="about">
      <span>Liên hệ</span>
      <div class="contact">
        <img src="/icons/facebook.svg" alt="Facebook link">
        <img src="/icons/youtube.svg" alt="Youtube link">
        <img src="/icons/instagram.svg" alt="Instagram link">
        <img src="/icons/twitter.svg" alt="Twitter link">
      </div>
      <span>Về chúng tôi</span>
      <span>Hỗ trợ</span>
      <span>Về Rối Nước</span>
    </aside>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem 2rem 1em;
  background-color: $primary-dark-red-200;

  h4 {
    font-weight: 600;
    font-size: 1.3rem;
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    display: inline-block;
    padding-top: 0.7em;
  }

  p {
    padding-top: 0.3rem;
    font-size: 0.875rem;
    line-height: 140%;
  }

  .about {
    padding-left: 1em;
    margin-bottom: 3rem;
    .contact {
      display: flex;
      justify-content: space-between;
      padding-top: 0.7em;

      img {
        height: 100%;
      }
    }
  }

  .booking {
    position: absolute;
    text-decoration: underline;
    color: $primary-dark-red-100;
    bottom: 2rem;
    right:1rem

  }
}
</style>
