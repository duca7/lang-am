<template>
  <section>
    <AppTitle :level="2" title="Hoàn vé">
      Việc hoàn trả sẽ được thực hiện bằng phương thức thanh toán bạn đã chọn.
    </AppTitle>
    <img src="/images/booking-form.png" alt="booking-form" class="form">
  </section>
</template>

<style lang="scss" scoped>
    section{
        width: 100%;
        padding-bottom: 2rem;
        .app-title{
            padding: 0 1rem;

            .desc{
                font-size: 1.125rem;
                line-height: 140%;
                font-weight: 400;
                padding-top: 0.5rem;
            }
        }

        .form{
            width: 100%;
            padding-top: 1rem;
        }
    }
</style>
