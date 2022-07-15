<template>
  <div class="container booking-extra">
    <div class="booking-extra__section">
      <div class="booking-extra__heading">
        <h2 class="font-rlw">
          {{ souvenir.name }}
        </h2>
        <span class="booking-extra__heading-quantity">
          <AppMinusIcon @click="decreAmount()" />
          <span>{{ souvenir.amount }}</span>
          <AppPlusIcon @click="increAmount()" />
        </span>
      </div>
    </div>

    <div class="booking-extra__section">
      <div class="booking-extra__coupon">
        <AppInput placeholder="Nhập mã giảm giá" />
        <button class="booking-extra__coupon-button font-rlw">
          Áp mã
        </button>
        <AppInput placeholder="Mã giảm giá từ những đối tác, voucher và coupon" />
      </div>
    </div>

    <div class="booking-extra__section">
      <div class="booking-extra__heading">
        <h2 class="font-rlw">
          Phí vận chuyển
        </h2>
        <!-- <span class="booking-extra__heading-quantity"> -->
        <span class="booking-extra__ship font-mtd">{{ shippingCost }}</span>
        <!-- </span> -->
      </div>
    </div>

    <div class="booking-extra__section">
      <div class="booking-extra__price">
        <p>Tổng cộng</p>
        <span class="font-mtd">{{ totalPrice }}</span>
      </div>
    </div>

    <div class="booking-extra__section">
      <h4 class="booking-extra__title">
        Thẻ thanh toán
      </h4>
      <BookingCard v-for="card in bookingCardData" :key="card.name" :card="card" />
    </div>

    <AppButtonRed size="large" class="booking-extra__continue" @click="goToCredit">
      <span>Thanh Toán</span>
      <AppMoneyBagIcon />
    </AppButtonRed>
  </div>
</template>

<script setup>
import { bookingCardData } from './_data';
import { formatVND } from '@/utils/format-vnd';

const { selectedSouvenir: souvenir, calculatePrice, decreAmount, increAmount } = useSouvenirCart();
const router = useRouter();

const totalPrice = computed(() => formatVND(calculatePrice(), 'VNĐ'));
const shippingCost = formatVND(20, 'VNĐ');

const goToCredit = () => router.push(`/booking/${souvenir.value.slug}/credit-card`);

</script>
<style lang="scss">
.booking-extra__ship{
  font-size: 1rem;
}

</style>
