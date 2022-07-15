<template>
  <section>
    <AppTitle :level="3" title="Lịch diễn" />
    <div class="show-schedule">
      <div class="month">
        <p>Tháng 8</p>
        <AppArrowLeftIcon />
      </div>
      <hr>
      <div class="calendar">
        <div v-for="august in showAugust" :key="august.day">
          <div>
            <NuxtLink to="/booking/doi-thuong" class="router">
              <p class="day">
                {{ august.day }}
              </p>
            </NuxtLink>

            <p class="content">
              <span>{{ august.contentBold }}</span> <br>
              {{ august.content }}
            </p>
          </div>
        </div>
      </div>
      <div class="tag sold-out">
        Bán hết
      </div>
    </div>
    <div class="show-schedule">
      <div class="month">
        <p>Tháng 9</p>
        <AppArrowLeftIcon />
      </div>
      <hr>
      <div class="calendar">
        <div v-for="september in showSeptember" :key="september.day">
          <div>
            <NuxtLink to="/booking/le-hoi" class="router">
              <p class="day">
                {{ september.day }}
              </p>
            </NuxtLink>

            <p class="content">
              <span>{{ september.contentBold }}</span> <br>
              {{ september.content }}
            </p>
          </div>
        </div>
      </div>
      <div class="tag selling-ticket">
        Đang bán vé
      </div>
    </div>

    <div class="show-schedule">
      <div class="month">
        <p>Tháng 10</p>
        <AppArrowLeftIcon />
      </div>
      <hr>
      <div class="calendar">
        <div v-for="october in showOctober" :key="october.day">
          <div>
            <NuxtLink to="/booking/doi-thuong" class="router">
              <p class="day">
                {{ october.day }}
              </p>
            </NuxtLink>

            <p class="content">
              <span>{{ october.contentBold }}</span> <br>
              {{ october.content }}
            </p>
          </div>
        </div>
      </div>
      <div class="tag sold-out-1">
        Bán hết
      </div>
    </div>

    <div class="overlay" />
  </section>
</template>

<script setup>
const showAugust = [
  {
    day: '10',
    contentBold: 'Chủ đề đời thường',
    content: 'Câu cá, bắt vịt, câu ếch, trồng lúa...'
  },
  {
    day: '12',
    contentBold: 'Chủ đề tích cổ',
    content: 'Lê Lợi trả gươm, Thạch Sanh, Tấm Cám...'
  },
  {
    day: '14',
    contentBold: 'Chủ đề đời thường',
    content: 'Câu cá, bắt vịt, câu ếch, trồng lúa...'
  },
  {
    day: '18',
    contentBold: 'Chủ đề tích cổ',
    content: 'Lê Lợi trả gươm, Thạch Sanh, Tấm Cám...'
  },
  {
    day: '20',
    contentBold: 'Chủ đề tích cổ',
    content: 'Lê Lợi trả gươm, Thạch Sanh, Tấm Cám...'
  },
  {
    day: '22',
    contentBold: 'Chủ đề tích cổ',
    content: 'Lê Lợi trả gươm, Thạch Sanh, Tấm Cám...'
  }

];
const showSeptember = [
  {
    day: '01',
    contentBold: 'Chủ đề Lễ Hội',
    content: 'Bát Tiên, Đua Thuyền, Trọi Trâu....'
  },
  {
    day: '03',
    contentBold: 'Chủ đề tích cổ',
    content: 'Lê Lợi trả gươm, Thạch Sanh, Tấm Cám...'
  },
  {
    day: '05',
    contentBold: 'Chủ đề Lễ Hội',
    content: 'Bát Tiên, Đua Thuyền, Trọi Trâu...'
  }

];
const showOctober = [
  {
    day: '01',
    contentBold: 'Chủ đề Lễ Hội',
    content: 'Bát Tiên, Đua Thuyền, Trọi Trâu....'
  },
  {
    day: '03',
    contentBold: 'Chủ đề tích cổ',
    content: 'Lê Lợi trả gươm, Thạch Sanh, Tấm Cám...'
  },
  {
    day: '05',
    contentBold: 'Chủ đề Lễ Hội',
    content: 'Bát Tiên, Đua Thuyền, Trọi Trâu...'
  },
  {
    day: '07',
    contentBold: 'Chủ đề Lễ Hội',
    content: 'Bát Tiên, Đua Thuyền, Trọi Trâu...'
  }

];

</script>

<style lang="scss" scoped>
  section{
    padding: 1rem;
    width: 100%;
    .month{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
      p{
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
    .calendar{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      .router{
        text-decoration: none;
        color: #fff;
      }
      .day{
        font-size: 1.875rem;
        font-family: 'MTD Valky Bold';
      }
      .content{
        font-size: 1rem;
        line-height: 140%;

        span{
          font-weight: bold;
        }
      }
    }
    .overlay {
     @include overlay("/images/teu-booking-bg.png");
     top: 30%;
     opacity: 0.3;
    }

    .show-schedule{
      position: relative;
      .tag{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.125rem;
        font-weight: 600;
        position: absolute;
        transform: rotate(-25deg);
      }
      .sold-out{
        top: 45%;
        right: 0;
        background: #707070;
        color: #000;
      }

      .sold-out-1{
        top:60%;
        right: 0;
        background: #707070;
        color: #000;
      }
      .selling-ticket{
        top: 25%;
        left: 20%;
        background: #ff0000;
        color: #fff;
        text-align: center;
      }

    }

  }
</style>
