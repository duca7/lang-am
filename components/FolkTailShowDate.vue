<template>
  <div>
    <div class="ticket-info__date">
      <div
        v-for="date in ticketDate"
        :key="date.strDay"
        class="ticket-info__date-item"
        @click="activate"
      >
        <p class="ticket-info__date-item--string">
          {{ date.strDay }}
        </p>
        <p class="ticket-info__date-item--number">
          {{ date.numberDay }}
        </p>
      </div>
      <div ref="underline" class="underline" />
    </div>
    <div class="btn-red">
      <img src="/images/icon-arrow-red.png" alt="" class="red-arrow">
      <img src="/images/arrow-red-1.png" alt="" class="red-arrow">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  padding: {
    type: Number,
    require: true
  }
});
const underline = ref(null);
const ticketDate = [
  {
    strDay: 'Thứ Hai',
    id: '10T2',
    numberDay: '10'
  },
  {
    strDay: 'Thứ Tư',
    id: '12T4',
    numberDay: '12'
  },
  {
    strDay: 'Thứ Sáu',
    id: '14T6',
    numberDay: '14'
  },
  {
    strDay: 'Thứ Hai',
    id: '18T2',
    numberDay: '18'
  }
];

function activate (event) {
  const { left, width } = event.target.getBoundingClientRect();
  const nextX = props.padding + left + width / 2;
  underline.value.style.transform = `translateX(${nextX}px)`;
}
</script>

<style lang="scss" scoped>
.ticket-info {
  $ticket-date-width: 60px;
  $border-width: 1px;

  &__date {
    display: flex;
    text-align: center;
    justify-content: space-between;
    border-bottom: $border-width solid red;
    position: relative;

    &-item {
      &--number {
        margin-top: 0.1em;
        width: $ticket-date-width;
        font-size: 4rem;
        font-family: "MTD Valky Bold";
      }
    }

    .underline {
      width: $ticket-date-width;
      position: absolute;
      height: calc($border-width * 3);
      left: calc(-1 * calc($ticket-date-width + calc($border-width * 2)));
      bottom: calc(-1 * calc($border-width * 2));
      background-color: #000;
      transform-origin: 0% 0%;
      transition: transform 0.3s;
    }
  }
}

.btn-red{
  display: flex;
  justify-content: space-between;
  align-items: center;

  .red-arrow{
    width: 20px;
    height: 20px;
    padding-top: 0.635rem;
  }
}
</style>
