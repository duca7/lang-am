<template>
  <button
    class="booking-button font-rlw"
    :class="{ active: isActive }"
    @click="activate"
  >
    <component :is="IconSVG" />
    <p class="booking-button__meta">
      <strong>{{ props.card.name }}</strong>
      <span>{{ props.card.extra }}</span>
    </p>
    <svg
      class="booking-button__status"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M3.55469 9.2666L7.05469 12.7666L14.0547 5.2666"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup scoped>
const props = defineProps({
  card: {
    type: Object,
    require: true
  }
});

const isActive = ref(false);

function activate () {
  isActive.value = !isActive.value;
}

const IconSVG = resolveComponent(props.card.icon);
</script>

<style lang="scss">
$transition: all 0.1s;

.booking-button {
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid #b5b5b5;
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  border-radius: 8px;
  gap: 1rem;
  opacity: 0.8;

  * {
    transition: $transition;
  }

  &__meta {
    flex: 1;

    strong,
    span {
      display: block;
      text-align: start;
    }

    strong {
      font-weight: 500;
      font-size: 1.1em;
    }

    span {
      font-weight: 200;
    }
  }

  &__status {
    border-radius: 50%;
    background: #513030;

    path {
      visibility: hidden;
    }
  }

  &.active {
    opacity: 1;
    border-color: $primary-dark-red-500;

    svg {
        // fill:#fff;
      path,g {
        stroke: #fff;
      }

      &.banking path{
        fill:#fff;
      }
    }

    .booking-button__status {
      border-radius: 50%;
      background: $primary-dark-red-500;

      path {
        visibility: visible;
      }
    }
  }
}
</style>
