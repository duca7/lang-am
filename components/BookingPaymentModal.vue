<template>
  <div v-if="props.isModalOpen" class="booking-bill container">
    <div class="booking-bill__section">
      <div class="booking-bill__notify">
        <AppCompleteIcon class="booking-bill__notify-icon" />
        <p>Thanh toán thành công</p>
        <span class="font-mtd">240.000 VNĐ</span>
      </div>
    </div>

    <div class="booking-bill__section">
      <div class="booking-bill__transaction">
        <strong>Thời gian thanh Toán</strong>
        <strong>Mã đơn</strong>
        <span class="font-msr">15:40 - 08/08 /2022</span>
        <span>qKHS4nq54t2Ac...</span>
      </div>
    </div>

    <div class="booking-bill__section receipt">
      <div class="booking-bill__receipt">
        <h2>{{ show.displayName }}</h2>
        <p class="booking-bill__receipt-time">
          {{ show.time }} <span>|</span>{{ category }}
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

    <AppButtonRed
      size="large"
      class="booking-bill__continue"
      @click="gotoHome()"
    >
      <span>Tải về</span>
      <AppDownloadIcon />
    </AppButtonRed>

    <div class="overlay" />
  </div>
</template>

<script setup>
const props = defineProps({
  isModalOpen: {
    type: Boolean,
    require: true
  }
});

const { findBySlug, getShowCategory } = useShows();
const { navigate } = useSidebar();

const route = useRoute();

const show = findBySlug(route.params.id);
const category = getShowCategory(show.category);

const gotoHome = () => {
  navigate('/tro-tich');
};

</script>

<style lang="scss" scoped>
.booking-bill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  z-index: 1;
  padding-bottom: 3rem;

  &__section {
    margin: 0 1rem;
    position: relative;

    &.receipt {
      margin-left: 0.5rem;
      margin-top: 2rem
    }
  }

  &__notify {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-icon {
      margin: 1rem 0;

      & + p {
        font-size: 1.3rem;
        font-weight: 500;
        padding-bottom: 0.8rem;

        & + span {
          color: $primary-dark-red-100;
          font-size: 1.8rem;
        }
      }
    }
  }

  &__transaction {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 0.4rem;
    margin-top: 2rem;
    text-align: start;

    strong {
      font-weight: 600;
    }

    span {
      font-size: 0.9em;
    }
  }

  &__receipt {
    position: absolute;
    top: 36%;
    left: 2.5rem;
    right: 1.5rem;
    bottom: 0;

    &-time {
      font-weight: 300;
      margin-top: 0.5rem;
      span {
        margin: 0 0.5em;
      }
    }

    &-desc {
      border-bottom: 1px solid #fff;
      font-size: 1.1rem;
      font-weight: 600;
      padding: 1rem 0 0.3rem;
    }

    &-img {
      width: 100%;
    }

    &-qr {
      position: absolute;
      bottom: 5%;
      left: 2.5rem;
    }

    &-extra {
      margin-top: 30%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      strong {
        font-size: 1.5rem;
      }
    }
  }

  &__continue {
    margin: 2rem auto 1rem;
  }

  .overlay {
    @include overlay("/images/chan-may.png");
  }
}
</style>
