<template>
  <div class="app-select">
    <select>
      <option
        v-for="option in props.options"
        :key="option.text"
        class="app-select__option"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    require: true
  }
});
</script>

<style lang="scss" scoped>
.app-select {
  position: relative;

  select {
    border: 1px solid $primary-dark-red-300;
    text-align: center;
    color: #797979;
    background: none;
    padding: 0.8rem;
    border-radius: 5px;
    font-size: 1.2rem;
    appearance: none;
    display: block;
    width: 100%;
    font-family: 'Raleway';
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0.5rem;
    background: url("/icons/arrow-down.png");
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }

  &__options {
  }
}
</style>
