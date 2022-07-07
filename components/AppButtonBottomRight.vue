<template>
  <div class="btn-bottom">
    <button class="feedback">
      <img src="icons/gio.svg" alt="cai-gio-bat-ca">
      Đặt vé
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-bottom {
  position: fixed;
  bottom: 0px;
  right: 0px;
}
.feedback {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary-dark-red;
    color: white;
    width:170px;
    height: 55px;
    border-top-left-radius: 20px;
    border: none;
    font-size: 1.25rem;
    font-weight: 400;
    img{
        padding-right: 1rem;
    }
}

</style>
