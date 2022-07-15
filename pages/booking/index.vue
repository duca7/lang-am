<template>
  <section class="container">
    <AppTitle :level="1" title="Booking" />
    <BookingShowSchedule />
    <BookingTour />
    <BookingPurchaseForms />
    <BookingReturnTicket />
    <BookingShowDetails />
  </section>
</template>

<style lang="scss" scoped>
  .title{
    padding: 1rem;
  }
</style>
