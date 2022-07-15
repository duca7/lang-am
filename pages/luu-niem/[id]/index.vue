<template>
  <div id="souvenir-item" class="container">
    <div class="image">
      <img :src="souvenir.url">
      <div class="blur" />
    </div>

    <main class="section">
      <p class="meta">
        {{ 21 }} lượt mua <span class="separator">|</span>
        <AppStartIcon v-for="star in stars" :key="star" :star="star" class="star-icon" />
        {{ 8.5 }}
      </p>
      <AppHeartIcon />
    </main>

    <div class="section info">
      <strong>{{ souvenir.name }} </strong>
      <span>{{ souvenir.price }}.000đ</span>
    </div>

    <p class="desc">
      Sau vụ lúa trên đồng nhiều cá, tôm, ếch….câu cá là một trong những hoạt
      động mưu sinh thường nhật và cũng là một thú vui thư giãn của người nông
      dân Việt Nam..
    </p>

    <AppButtonRed size="large" class="button-buy" @click="openModal()">
      <AppCartIcon />
      <span>Mua ngay</span>
    </AppButtonRed>

    <AppModal v-if="visible" @onbackdropclick="closeModal()">
      <div class="modal__box">
        <p class="modal__text">
          <span>{{ selectedSouvenir.name }}</span>
          <span class="modal__quantity">
            <AppMinusIcon @click="decreAmount()" />
            <span>{{ selectedSouvenir.amount }}</span>
            <AppPlusIcon @click="increAmount()" />
          </span>
        </p>
        <p class="modal__text">
          <span>Tổng cộng</span><span>{{ totalPrice }}</span>
        </p>
        <button class="modal__button" :disabled="selectedSouvenir.amount === 0" @click="buy">
          Mua ngay
        </button>
      </div>
    </AppModal>
  </div>
</template>

<script setup>
import { formatVND } from '@/utils/format-vnd';

const { initCart, calculatePrice, decreAmount, selectedSouvenir, increAmount } = useSouvenirCart();
const { findBySlug } = useSouvenir();
const router = useRouter();
const route = useRoute();
const souvenir = findBySlug(route.params.id);

const visible = ref(false);
const stars = [1, 2, 3, 4, 5];
const totalPrice = computed(() => formatVND(calculatePrice()));

const closeModal = () => (visible.value = false);
const openModal = () => {
  initCart(souvenir);
  visible.value = true;
};

const buy = () => {
  router.push(`/booking/${route.params.id}/thong-tin-khach-hang`);
};
</script>

<style lang="scss">
#souvenir-item {
  --space-xsm: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 3rem;

  padding-left: var(--space-sm);
  padding-right: var(--space-sm);

  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .image {
    width: 100%;
    height: 65vh;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .blur {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10%;
    background: linear-gradient(0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.7567401960784313) 28%,
        rgba(0, 0, 0, 0.4206057422969187) 47%,
        rgba(0, 0, 0, 0) 100%);
    width: 100%;
  }

  .meta {
    font-family: "Montserrat";
    font-weight: 500;
  }

  .star-icon {
    margin: 0 4px;
  }

  .separator {
    margin: 0 var(--space-xsm);
  }

  .button-buy {
    margin: 2rem auto;
  }

  .info {
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: var(--space-sm);
    margin-bottom: var(--space-xsm);

    span {
      font-family: "Montserrat";
    }
  }

  .modal {
    &__box {
      width: 80%;
      padding: var(--space-sm);
      font-family: "MTD Valky Bold";
      font-weight: 700;
      font-size: 1.4rem;
      background-color: #470000;
      border-radius: 16px;
    }

    &__text {
      border-bottom: 1px solid $primary-dark-red-400;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-sm) 0;
    }

    &__quantity {
      display: flex;
      align-items: center;

      span {
        margin-top: 0.3rem;
        width: var(--space-md);
        text-align: center;
      }
    }

    &__button {
      display: block;
      padding: var(--space-xsm) var(--space-md);
      margin: var(--space-sm) auto 0;
      border: 1px solid #fff;
      border-radius: 5px;
      background: none;
      font-size: 0.8em;
      font-weight: 500;
      line-height: 1.5;

      &:disabled {
        opacity: 0.4;
      }
    }
  }
}
</style>
