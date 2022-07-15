<template>
  <div class="">
    <div class="booking-bill__section receipt">
      <div class="booking-bill__receipt">
        <h2>{{ show.displayName }}</h2>
        <p class="booking-bill__receipt-time">
          {{ show.time }} <span>|</span> Đời thường
        </p>
        <p class="booking-bill__receipt-desc">
          Nhà Hát Rồng Vàng
        </p>
        <p class="booking-bill__receipt-desc font-msr">
          10:00 - 10:50
        </p>
        <p class="booking-bill__receipt-desc font-msr">
          14/08/2022
        </p>
        <div class="booking-bill__receipt-extra font-mtd">
          <strong>D03 D04</strong><span>240.000đ</span>
        </div>
      </div>
      <img class="booking-bill__receipt-img" src="/images/bill.png">
      <img class="booking-bill__receipt-qr" src="/images/qr-code.png">
    </div>

    <AppButtonRed size="large" class="booking-bill__continue" @click="gotoHome()">
      <span>Tải về</span>
      <AppDownloadIcon />
    </AppButtonRed>
  </div>
</template>

<script setup>
const { findBySlug } = useShows();
const { navigate } = useSidebar();
const route = useRoute();
const show = findBySlug(route.params.id);
const gotoHome = () => {
  navigate('/tro-tich');
};
</script>

<style></style>
