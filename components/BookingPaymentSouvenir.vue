<template>
  <div class="booking-bill__section">
    <img class="booking-bill__sou" :src="souvenir.url">
    <p>Đơn hàng của bạn sẽ đên </p>
    <p>trong 5- 7 ngày tới.</p>
  </div>
</template>

<script setup>
const { selectedSouvenir: souvenir } = useSouvenirCart();
</script>

<style lang="scss" scoped>
  p{
    text-align: center;
  }
</style>
