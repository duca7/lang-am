<template>
  <div class="contact">
    <AppTitle :level="1" title="Liên Hệ" class="title" />
    <ContactConection />
    <div class="overlay" />
  </div>
</template>

<style lang="scss" scoped>
    .contact{
        width: 100%;
        position: relative;
        padding-top: 2rem;

        .title{
            padding: 0 1rem 2em;
        }
        .overlay{
            z-index: -1;
            position: absolute;
            background-image: url("images/vua-tra-guom.png");
            background-size: auto 100%;
            background-repeat: no-repeat;
            background-position: center;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.3;
        }
    }
</style>
