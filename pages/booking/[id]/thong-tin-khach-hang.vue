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
        <AppSelection :options="cities" />
        <AppSelection :options="districts" />
        <AppSelection :options="wards" />
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
const wards = [
  { value: '', text: 'Xã/Phường' },
  { value: '', text: 'Phường Bến Thành' },
  { value: '', text: 'Phường Đa Kao' },
  { value: '', text: 'Phường Bến Nghé' },
  { value: '', text: 'Phường Phạm Ngũ Lão' },
  { value: '', text: 'Phường Cầu Ông Lãnh' }

];
const districts = [
  { value: '', text: 'Quận' },
  { value: '', text: 'Quận 1' },
  { value: '', text: 'Quận 2' },
  { value: '', text: 'Quận 3' },
  { value: '', text: 'Quận 4' },
  { value: '', text: 'Quận 5' },
  { value: '', text: 'Quận 6' },
  { value: '', text: 'Quận 7' },
  { value: '', text: 'Quận 8' },
  { value: '', text: 'Quận 9' },
  { value: '', text: 'Quận 10' },
  { value: '', text: 'Quận 11' },
  { value: '', text: 'Quận 12' },
  { value: '', text: 'Quận Bình Thành' },
  { value: '', text: 'Quận Gò Vấp' },
  { value: '', text: 'Quận Tân Bình' },
  { value: '', text: 'Quận Tân Phú' }

];
const cities = [
  { value: '', text: 'Tỉnh/Thành' }, { value: '', text: 'Tp.Hồ Chí Minh' }
];

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
