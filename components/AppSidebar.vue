<template>
  <transition name="slide">
    <aside v-show="isOpen" class="sidebar">
      <ul v-for="nav in navData" :key="nav.id" class="route">
        <li>
          <div class="route_text">
            <img :src="nav.icon_flower" alt="hoa sen">
            <NuxtLink :to="nav.link">
              {{ nav.text }}
            </NuxtLink>
          </div>
          <img :src="nav.icon_arrow" alt="arrow right">
        </li>
      </ul>

      <div class="bottom">
        <img src="/images/bg-menu.png" alt="bg-menu">
        <div class="bottom_text">
          <ul class="social">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
          <div class="description">
            Copyright © 2005–2022 Công ty Nhà Hát Múa Rối Nước Rồng Vàng. Rồng Vàng là một phần của Công ty
            TNHH một thành viên Nhà Hát Trẻ về các nghệ thuật truyền thống
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const navData = ref([
      {
        icon_flower: 'images/icon-sen.svg',
        icon_arrow: 'images/icon-arrow-right.svg',
        text: 'Rối Nước'
      },
      {
        icon_flower: 'images/icon-sen.svg',
        icon_arrow: 'images/icon-arrow-right.svg',
        text: 'Trò Tích',
        link: 'tro-tich'
      },
      {
        icon_flower: 'images/icon-sen.svg',
        icon_arrow: 'images/icon-arrow-right.svg',
        text: 'Rồng Vàng'
      },
      {
        icon_flower: 'images/icon-sen.svg',
        icon_arrow: 'images/icon-arrow-right.svg',
        text: 'Booking'
      },
      {
        icon_flower: 'images/icon-sen.svg',
        icon_arrow: 'images/icon-arrow-right.svg',
        text: 'Lưu niệm'
      },
      {
        icon_flower: 'images/icon-sen.svg',
        icon_arrow: 'images/icon-arrow-right.svg',
        text: 'Liên Hệ'
      }
    ]);
    const { isOpen } = useSidebar();
    return {
      navData,
      isOpen
    };
  }
};
</script>

<style lang="scss">
.route {
    $color-red: #5e0101;

    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    text-align: center;

    li {
        padding-top: 2rem;
        font-size: 1.875rem;
        font-weight: medium;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            text-decoration: none;
            margin-left: 1rem;
            color: $color-red;
        }
    }
}

.bottom {
    width: 100%;

    img {
        width: 100%;
        height: auto;
        position: relative;
        top: 10vh;
    }

    &_text {
        position: absolute;
        left: 5%;
        bottom: 5%;
        width: 85%;
        margin: 0 auto;

        .social {
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            li {
                font-size: 1.125rem;
            }
        }

        .description {
            padding-top: 1rem;
            left: 8%;
            text-align: center;
            font-size: 0.75rem;
            line-height: 140%;
            color: #bfbfbf;
        }
    }
}

.sidebar {
    position: fixed;
    width: 100%;
    margin-top: $navbar-height;
    height: $sidebar-height;
    background-color: #000;
}

.slide-leave-active,
.slide-enter-active {
    transition: 1s;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-enter-to {
    transform: translateX(0%);
}

.slide-leave-to {
    transform: translateX(100%);
}
</style>
