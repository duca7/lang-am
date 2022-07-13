<template>
  <input class="app-input font-rlw">
</template>

<style lang="scss" scoped>
.app-input {
  $input-color:#797979;

  margin-top: 20px;
  background: none;
  width: 100%;
  padding-top: 0.5em 0 0.3em;
  font-weight: 600;
  outline: 0;
  border: none;
  font-size: 1.1rem;
  border-bottom: 1px solid $input-color;
  color: $input-color;

  :focus {
    border-color: #fff;
  }
}
</style>
