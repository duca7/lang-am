<template>
  <div class="container booking-credit">
    <div class="booking-credit__section">
      <div class="booking-credit__heading">
        <h2>Nhà hát Rồng Vàng Payoo</h2>
      </div>
    </div>

    <div class="booking-credit__section">
      <div class="booking-credit__info">
        <h4 class="booking-credit__title">
          Thông tin thẻ
        </h4>
        <div class="booking-credit__info-time">
          <span class="font-msr">04:00</span><AppClockIcon />
        </div>
      </div>
    </div>

    <!-- <div class="booking-credit__section">
      <div class="booking-credit__price">
        <p>Tổng cộng</p>
        <span class="font-mtd">240.000 VNĐ</span>
      </div>
    </div> -->

    <!-- <div class="booking-credit__section">
      <h4 class="booking-credit__title">
        Thông tin khách hàng
      </h4>
      <div class="booking-credit__info">
        <AppInput placeholder="Họ tên" />
        <AppInput placeholder="Email" />
        <AppInput placeholder="Số điện thoại" />
      </div>
    </div> -->

    <!-- <div class="booking-credit__section">
      <h4 class="booking-credit__title">
        Thẻ thanh toán
      </h4>
      <BookingCard
        v-for="card in bookingCardData"
        :key="card.name"
        :card="card"
      />
    </div>

    <AppButtonRed size="large" class="booking-credit__continue" @click="goToCreditCardInfo()">
      <span>Thanh Toán</span>
      <AppMoneyBagIcon />
    </AppButtonRed> -->
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.booking-credit {
  &__section {
    padding: 0 1rem;
  }

  &__info{
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
    margin-top: 1rem;
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
      font-size: 1.1rem;
      font-size: 1rem;
      padding: 0.4rem 1.3rem;
      align-self: end;
      border-radius: 8px;
    }
  }

  &__price {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    p {
      font-size: 0.9rem;
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
