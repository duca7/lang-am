<template>
  <section>
    <AppTitle :level="2" title="Hoàn vé" />
    <p class="return-content">
      Việc hoàn trả sẽ được thực hiện bằng phương thức thanh toán bạn đã chọn.
    </p>
    <img src="/images/booking-form.png" alt="booking-form" class="form">
  </section>
</template>

<style lang="scss" scoped>
    section{
        width: 100%;
        padding-bottom: 2rem;
        .title{
            padding: 0 1rem;
        }
        .return-content{
          font-size: 1.125rem;
                line-height: 140%;
                font-weight: 400;
                padding: 0.5rem 1rem;
        }

        .form{
            width: 100%;
            padding-top: 1rem;
        }
    }
</style>
