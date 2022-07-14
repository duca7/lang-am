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

    <div class="booking-bill__section">
      <div class="booking-bill__receipt">
        <img class="booking-bill__receipt-img" src="/images/bill.png">
      </div>
    </div>

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

  &__section{
    padding:0 1rem;
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

    &-img{
      width: 100%;
  }
  }

  .overlay {
    @include overlay("/images/chan-may.png");
  }
}
</style>
