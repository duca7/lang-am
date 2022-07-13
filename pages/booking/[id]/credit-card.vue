<template>
  <div class="container booking-credit">
    <div class="booking-credit__section">
      <h2>Nhà hát Rồng Vàng Payoo</h2>
      <div class="booking-credit__info">
        <h4 class="booking-credit__title">
          Thông tin thẻ
        </h4>
        <div class="booking-credit__info-time">
          <span class="font-msr">04:00</span><AppClockIcon />
        </div>
      </div>
    </div>

    <div class="booking-credit__section">
      <AppInput placeholder="Tên chủ thẻ" />
      <AppInput placeholder="Số thẻ" />
      <AppInput placeholder="Ngày hết hạn" />
      <AppInput placeholder="CVV/CVC" />

      <div class="booking-credit__bill">
        <strong>Mã đơn</strong><span class="font-msr">qKHS4nq54t2Ac...</span>
        <strong>Số tiền</strong><span class="font-msr">240.000đ</span>
      </div>

      <p class="booking-credit__guarantee">
        <AppSafetyIcon /><span>Giao dịch an toàn với PCI-DSS và ISO 27001</span>
      </p>
    </div>

    <AppButtonRed
      size="large"
      class="booking-credit__continue"
      @click="goToCreditCardInfo()"
    >
      <span>Thanh Toán</span>
      <AppMoneyBagIcon />
    </AppButtonRed>

    <div class="booking-credit__section">
      <div class="booking-credit__contact">
        <button class="booking-credit__contact-button">
          <AppPayooLogo />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.booking-credit {
  &__section {
    padding: 0 1rem;

    .app-input {
      margin-top: 1.3rem;
    }
  }

  &__info {
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

  &__bill {
    display: grid;
    grid-template-columns: 3fr 8fr;
    margin-top: 1.3rem;
    row-gap: 0.4rem;

    strong {
      font-weight: 500;
    }
  }

  &__guarantee{
    display: flex;
    align-items: center;
    margin-top: 1.3rem;

    span{
      display: inline-block;
      padding-left: 0.4rem;
      color:$primary-dark-red-100;
    }
  }

  &__continue {
    margin: 2rem auto 1rem;
  }

  &__contact{

  }
}
</style>
