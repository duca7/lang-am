<template>
  <div class="container booking-extra">
    <div class="booking-extra__section">
      <div class="booking-extra__heading">
        <h2>Câu cá</h2>
        <div class="booking-extra__heading-time">
          <span class="font-msr">04:00</span><AppClockIcon />
        </div>
      </div>
    </div>

    <div class="booking-extra__section">
      <h4 class="booking-extra__title">
        Thông tin đặt chổ
      </h4>
      <div class="booking-extra__placement">
        <p>Địa điểm</p>
        <span class="font-msr">Nhà hát múa rối nước Rồng Vàng </span>
        <p>Mô tả</p>
        <span class="font-msr">Vỡ diễn gồm nhiều trò tích cùng chủ đề </span>
        <p>Vị trí</p>
        <span class="font-msr">D03, D04 x 120.000</span>
        <p>Suất</p>
        <span class="font-msr">10:00 - 10:50</span>
      </div>
    </div>

    <div class="booking-extra__section">
      <div class="booking-extra__coupon">
        <AppInput placeholder="Nhập mã giảm giá" />
        <button class="booking-extra__coupon-button font-rlw">
          Áp mã
        </button>
        <AppInput
          placeholder="Mã giảm giá từ những đối tác, voucher và coupon"
        />
      </div>
    </div>

    <div class="booking-extra__section">
      <div class="booking-extra__price">
        <p>Tổng cộng</p>
        <span class="font-mtd">240.000 VNĐ</span>
      </div>
    </div>

    <div class="booking-extra__section">
      <h4 class="booking-extra__title">
        Thông tin khách hàng
      </h4>
      <div class="booking-extra__info">
        <AppInput placeholder="Họ tên" />
        <AppInput placeholder="Email" />
        <AppInput placeholder="Số điện thoại" />
      </div>
    </div>

    <div class="booking-extra__section">
      <h4 class="booking-extra__title">
        Thẻ thanh toán
      </h4>
      <BookingCard
        v-for="card in bookingCardData"
        :key="card.name"
        :card="card"
      />
    </div>

    <AppButtonRed
      size="large"
      class="booking-extra__continue"
      @click="goToCreditCardInfo"
    >
      <span>Thanh Toán</span>
      <AppMoneyBagIcon />
    </AppButtonRed>
  </div>
</template>

<script setup>
import { bookingCardData } from './_data';
const { navigate } = useSidebar();
const route = useRoute();

function goToCreditCardInfo () {
  navigate(`/booking/${route.params.id}/credit-card`);
}
</script>

<style lang="scss">
.booking-extra {
  --space-md: 2rem;

  &__section {
    padding: 0 1rem;

    .app-input {
      margin-top: 1.3rem;
    }
  }

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "MTD Valky Bold";
    font-size: 1.1rem;
    margin-top: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid $primary-dark-red-300;
    font-weight: 400;

    &-quantity {
      display: flex;
      align-items: center;

      span {
        margin-top: 0.3rem;
        width: var(--space-md);
        text-align: center;
      }
    }

    &-time {
      display: flex;
      align-items: center;

      span {
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
  }

  &__title {
    font-weight: 500;
    font-size: 1.4rem;
    margin: 2rem 0 1rem;
  }

  &__placement {
    display: grid;
    grid-template-columns: 3fr 8fr;
    row-gap: 0.3rem;

    p {
      font-size: 1rem;
      font-weight: 500;
    }
    span {
      font-size: 0.9rem;
      font-weight: 100;
    }
  }

  &__coupon {
    display: grid;
    grid-template-columns: 7fr 5fr;
    column-gap: 2rem;
    margin-top: 0.5rem;

    .app-input {
      &:first-child {
        font-size: 1.5rem;
        color: $primary-dark-red-300;
      }

      &:last-child {
        grid-column: span 2;
      }
    }

    &-button {
      color: white;
      background: none;
      border: 1px solid $primary-dark-red-100;
      font-weight: 500;
      font-size: 1.1rem;
      padding: 0.6rem 1.3rem;
      align-self: end;
      border-radius: 8px;
    }
  }

  &__price {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    p {
      font-size: 1rem;
      font-weight: 400;
    }

    span {
      color: $primary-dark-red-100;
    }
  }

  &__continue {
    margin: 2rem auto 1rem;
  }
}
</style>
