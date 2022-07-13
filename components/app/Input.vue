<template>
  <input class="app-input font-rlw">
</template>

<style lang="scss" scoped>
.app-input {
  $input-color:#B3B3B3;

  background: none;
  width: 100%;
  padding: 0 0 0.5rem;
  margin-top: 0.5rem;
  font-weight: 600;
  outline: 0;
  border: none;
  font-size: 1rem;
  border-bottom: 1px solid $input-color;
  color: $input-color;

  &:focus {
    border-color: #fff;
  }

  &::placeholder{
    color: inherit;
    opacity: 0.9;
    font-weight: 500;
    font-size: 0.9em;
  }
}
</style>
