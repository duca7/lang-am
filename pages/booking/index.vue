<template>
  <div>
    <section class="container">
      <AppTitle :level="1" title="Booking" />
      <BookingShowSchedule />
      <BookingTour />
      <BookingPurchaseForms />
      <BookingReturnTicket />
    </section>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
  .title{
    padding: 1rem;
  }
</style>
