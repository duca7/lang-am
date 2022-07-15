<template>
  <div class="container">
    <main class="show-info">
      <div class="show-info__caption">
        <h2>
          {{ show.displayName }}
        </h2>
        <span class="show-info__rate font-mtd">{{ show.rate }}<AppStartIcon /></span>
        <p class="show-info__time">
          {{ show.time }} <span>|</span>{{ category }}
        </p>
      </div>
    </main>
    <section class="ticket-info" :style="`--padding:${padding}px`">
      <p class="ticket-info__title">
        Thông tin vé
      </p>
      <FolkTailShowDate :padding="padding" />
      <div class="ticket-info__price">
        <button
          v-for="ticket in ticketPrices"
          :key="ticket.id"
          class="ticket-info__price-button font-mtd"
          :class="{ active: clickedButton === ticket.id }"
          @click="clickButton(ticket.id)"
        >
          <p>{{ ticket.time }}</p>
          <span>{{ ticket.price }}</span>
        </button>
      </div>
      <AppButtonRed size="large" class="ticket-info__continue" @click="toBooking">
        <span>Tiếp tục</span>
        <AppArrowIcon />
      </AppButtonRed>
    </section>
  </div>
</template>
<script setup>
import { ticketPrices } from './_data';

const { findBySlug, getShowCategory } = useShows();
const router = useRouter();
const clickedButton = ref('');
const route = useRoute();
const padding = 16;
const show = findBySlug(route.params.id);
const category = getShowCategory(show.category);

function clickButton (id) {
  clickedButton.value = id;
}

function toBooking () {
  router.push(`/booking/${route.params.id}`);
}

</script>

<style lang="scss" scoped>
.show-info {
  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(23, 1, 1, 0) 25%),
    url("/images/cau-ca-info.png") no-repeat;
  background-position: top;
  background-size: auto 85%;
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 0 1rem;

  &__caption {
    display: grid;
    flex: 1;
    grid-template-columns: 9fr 1fr;
  }

  &__rate {
    align-self: center;
  }

  &__time {
    font-weight: 100;
    span {
      margin: 0 0.5em;
    }
  }
}

.ticket-info {
  padding: 0 var(--padding, 16px) 2rem;

  &__title {
    font-size: 1.4rem;
    padding: 1.5rem 0;
  }

  &__price {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 2rem;

    &-button {
      font-size: 0.8em;
      background-color: transparent;
      color: #fff;
      text-align: center;
      border: 1px solid $primary-dark-red-600;
      padding: 0.4rem 0.5rem;
      border-radius: 8px;
      transition: border-color 0.5s;

      &.active{
        border-color: $primary-dark-red-500;
      }

      p {
        font-size: 1.4em;
      }

      span {
        font-family: "MTD Valky Light";
      }
    }
  }

  &__continue {
    margin: 2rem auto 1rem;
  }
}
</style>
