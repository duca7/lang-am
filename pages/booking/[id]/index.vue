<template>
  <div>
    <div class="container booking-ticket">
      <div class="booking-ticket__section">
        <h4 class="booking-ticket__title">
          Loại vé
        </h4>
        <div class="booking-ticket__type">
          <div class="booking-ticket__price">
            <p>Trẻ em</p>
            <span>Giá vé 100.000đ</span>
          </div>
          <div class="booking-ticket__quantity">
            <AppMinusIcon />
            <span class="booking-ticket__quantity-number font-mtd">0</span>
            <AppPlusIcon />
          </div>
        </div>
        <div class="booking-ticket__type">
          <div class="booking-ticket__price">
            <p>Người lớn</p>
            <span>Giá vé 120.000đ</span>
          </div>
          <div class="booking-ticket__quantity">
            <AppMinusIcon />
            <span class="booking-ticket__quantity-number font-mtd">0</span>
            <AppPlusIcon />
          </div>
        </div>
      </div>
      <div class="booking-ticket__section">
        <h4 class="booking-ticket__title">
          Chỗ ngồi
        </h4>
        <div class="booking-ticket__seat">
          <p>
            <span class="booking-ticket__seat-status empty" /><span>
              Ghế trống</span>
          </p>
          <p>
            <span class="booking-ticket__seat-status booked" /><span>Ghế đã chọn</span>
          </p>
          <p>
            <span class="booking-ticket__seat-status booking" /><span>Ghế đang chọn</span>
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="286"
          height="22"
          viewBox="0 0 286 22"
          fill="none"
          class="curve"
        >
          <path
            d="M2.05859 2.3559C84.0336 26.0752 195.611 26.075 284.417 2.35603"
            stroke="#860002"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <BookingShowSeat class="booking-ticket__seat-map" />
      </div>
      <div class="booking-ticket__section">
        <div class="booking-ticket__result">
          <div class="booking-ticket__result-info">
            <p>Vị trí ghế của bạn</p>
            <span>Vé cá nhân: {{ a }}</span>
          </div>
          <div class="booking-ticket__result-price">
            <p>Tổng cộng:</p>
            <span class="font-mtd">
              {{ price }}
            </span>
          </div>
        </div>
      </div>
      <AppButtonRed size="large" class="booking-ticket__continue" @click="goToExtraInfo()">
        <span>Tiếp tục</span>
        <AppArrowIcon />
      </AppButtonRed>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
const a = ref(2);
const price = ref('240.000đ');

const { navigate, path } = useSidebar();

function goToExtraInfo () {
  navigate(`${path.value}/extra-information`);
}

</script>

<style lang="scss">
.booking-ticket {
  &__section {
    padding: 0 1rem;

    .curve {
      display: block;
      margin: 2rem auto 1rem;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 1.4rem;
    margin: 1rem 0;
  }

  &__type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid red;
    margin-top: 1rem;
  }

  &__price {
    p {
      font-size: 1.1rem;
      font-weight: 500;
    }
    span {
      font-weight: 300;
      display: inline-block;
      padding: 0.5rem 0;
    }
  }

  &__quantity {
    display: flex;
    align-items: center;

    &-number {
      margin-top: 0.3rem;
      display: inline-block;
      padding: 0 0.5rem;
      font-size: 1.2rem;
    }
  }

  &__seat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    p {
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.9rem;
    }

    &-status {
      display: inline-block;
      width: 1em;
      height: 1em;
      border: 1px solid $primary-gray-100;
      border-radius: 50%;
      margin-right: 0.4em;

      &.booked {
        background-color: $primary-gray-100;
      }

      &.booking {
        border-color: $primary-dark-red-300;
        background-color: $primary-dark-red-300;
      }
    }

    &-map {
      box-sizing: content-box;
      display: block;
      width: 100%;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #fff;
    }
  }

  &__result {
    @include center();
    justify-content: space-between;
    padding-top: 1rem;

    &-info {
      p {
        font-weight: 500;
        font-size: 1.1rem;
        padding-bottom: 0.5em;
      }
      span {
        font-weight: 300;
      }
    }
    &-price {
      text-align: end;
      p {
        padding-bottom: 0.5em;
      }
    }
  }

  &__continue {
    margin: 2rem auto 1rem;
  }
}
</style>
