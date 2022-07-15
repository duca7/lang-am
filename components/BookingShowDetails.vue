<template>
  <section>
    <div class="card">
      <h1 class="card-number">
        {{ number }}
      </h1>
      <img :src="background" alt="background-card" class="bg-show">

      <AppTitle :level="3" :title="card" />
      <p class="card-desc">
        {{ content }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      default: 'default'
    },
    background: {
      type: String,
      default: 'default'
    },
    card: {
      type: String,
      default: 'default'
    },
    content: {
      type: String,
      default: 'default'
    }
  }
};
</script>

<style lang="scss" scoped>
  section{
    width: 100%;
    padding-bottom: 2rem;
    .title{
      padding: 2rem 1rem 1rem 1rem;
    }

    .info-show{
      padding: 1rem;
      &_date{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #b50003;
        font-weight: 600;
        p{
          padding-left: 1rem;
        }
      }
      &_desc{
        font-size: 1.1rem;
        line-height: 140%;
        font-weight: 400;
        padding-top: 0.5rem;
      }
    }

    .price{
      font-size: 1rem;
      font-weight: 500;
      padding-top: 0.5rem;

      span{
        font-weight: 300;
      }
    }
    .app-button{
        margin-top: 1rem;
    }

    .card{
        padding-top: 5rem;
        position: relative;
        .card-number{
            font-size: 100px;
            font-family: 'MTD Valky Bold';
            font-weight: 800;
            padding-left: 1rem;
            color: $primary-dark-red-900;
            font-size: 8rem;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: $primary-dark-red-900;
            position: absolute;
            top:2%
        }

        .card-desc{
            padding:0 1rem;
            line-height: 140%;
            font-size: 1.125rem;
            font-weight: 300;
        }
    }

    .bg-show{
        width: 100%;
        height: auto;
        aspect-ratio: auto;
    }
  }
</style>
