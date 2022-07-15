<template>
  <div class="container booking-extra">
    <div class="booking-extra__section">
      <h4 class="booking-extra__title">
        Thông tin khách hàng
      </h4>
      <div class="booking-extra__info">
        <AppInput placeholder="Họ tên" />
        <AppInput placeholder="Email" />
        <AppInput placeholder="Số điện thoại" />
        <AppInput placeholder="Địa chỉ" />
      </div>
    </div>

    <div class="booking-extra__section">
      <div class="booking-extra__addr">
        <AppSelection :options="wards" />
        <AppSelection :options="districts" />
        <AppSelection :options="cities" />
      </div>
    </div>

    <div class="booking-extra__section">
      <AppInput placeholder="Chú thích" />
    </div>

    <AppButtonRed
      size="large"
      class="booking-extra__continue"
      @click="next()"
    >
      <span>Tiếp tục</span>
      <AppArrowIcon />
    </AppButtonRed>
  </div>
</template>

<script setup>
const wards = [{ value: '', text: 'Xã/Phường' }];
const districts = [{ value: '', text: 'Quận' }];
const cities = [{ value: '', text: 'Tỉnh/Thành' }];

const router = useRouter();
const route = useRoute();

const next = () => router.push(`/booking/${route.params.id}/thong-tin-the`);

</script>

<style lang="scss">
.booking-extra {
  &__addr {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 2rem 0;
  }
}
</style>
