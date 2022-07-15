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
      @click="completeTransaction()"
    >
      <span>Thanh Toán</span>
      <AppMoneyBagIcon />
    </AppButtonRed>

    <div class="booking-credit__section">
      <p class="booking-credit__contact-title">
        Liên hệ CSKH
      </p>
      <div class="booking-credit__contact">
        <button class="booking-credit__contact-button">
          <AppRongVangLogo />
          <div class="booking-credit__contact-extra">
            <strong>Rồng Vàng</strong>
            <span class="font-msr">1900 22 24 88</span>
          </div>
        </button>

        <button class="booking-credit__contact-button">
          <AppPayooLogo />
          <div class="booking-credit__contact-extra">
            <strong>Payoo</strong>
            <span class="font-msr">1900 54 54 78</span>
          </div>
        </button>
      </div>
    </div>
    <BookingPaymentModal v-if="visible">
      <component :is="ModalSlot" />
    </BookingPaymentModal>
  </div>
</template>

<script setup>
const { selectedSouvenir } = useSouvenirCart();
const { findBySlug } = useShows();
const route = useRoute();

let data = findBySlug(route.params.id);
let component = 'BookingPaymentTicket';

if (!data) {
  data = selectedSouvenir.value;
  component = 'BookingPaymentSouvenir';
}

const ModalSlot = resolveComponent(component);

const visible = ref(false);

function completeTransaction () {
  visible.value = true;
}

</script>

<style lang="scss">
.booking-credit {
  position: relative;

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

  &__guarantee {
    display: flex;
    align-items: center;
    margin-top: 1.3rem;

    span {
      display: inline-block;
      padding-left: 0.4rem;
      color: $primary-dark-red-100;
    }
  }

  &__continue {
    margin: 2rem auto 1rem;
  }

  &__contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;

    &-button {
      width: 48%;
      align-items: center;
      background: none;
      border: 1px solid #949292;
      border-radius: 8px;
      display: flex;
      gap: 0.8rem;
      padding: 0.7rem 0.4rem;
    }

    &-extra {
      text-align: start;

      strong {
        display: block;
        font-weight: 500;
      }
    }

    &-title {
      text-align: center;
      font-weight: 400;
      font-size: 1.3rem;
      margin: 2rem 0 1rem;
    }
  }
}
</style>
