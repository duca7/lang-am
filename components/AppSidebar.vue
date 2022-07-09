<template>
  <transition name="slide">
    <nav v-if="isOpen" class="sidebar">
      <ul class="routes">
        <li
          v-for="route in routes"
          :key="route.id"
          :class="routeClass(route.path)"
          @click="navigate(route.path)"
        >
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.19141 6.60921C9.29349 5.49307 9.83464 2.8889 11.7956 1.40088C12.5102 2.26911 14.1549 4.52588 14.3997 6.60921" stroke="#5E0101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.6659 20.1509C7.25442 19.3931 -0.861205 14.5832 1.96171 1.40088C5.68671 2.25296 12.843 7.19619 11.6664 20.1509H11.6659Z" stroke="#5E0101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.9226 20.1509C16.334 19.3931 24.4497 14.5832 21.6267 1.40088C17.9017 2.25296 10.7455 7.19619 11.922 20.1509H11.9226Z" stroke="#5E0101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>{{ route.displayText }}</span>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.828125 7.95745H21.7372C19.2372 8.18028 14.4645 9.05384 13.5554 14.9365" stroke="#5E0101" />
            <path d="M0.828125 7.9571H21.7372C19.2372 7.73427 14.4645 6.86071 13.5554 0.978027" stroke="#5E0101" />
          </svg>
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
    </nav>
  </transition>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const routes = ref([
      {
        displayText: 'Rối Nước',
        path: '/roi-nuoc'
      },
      {
        displayText: 'Trò Tích',
        path: '/tro-tich'
      },
      {
        displayText: 'Rồng Vàng'
      },
      {
        displayText: 'Booking'
      },
      {
        displayText: 'Lưu niệm'
      },
      {
        displayText: 'Liên Hệ',
        path: '/lien-he'
      }
    ]);
    const { isOpen, navigate } = useSidebar();
    const route = useRoute();
    const currentPath = route.path.split('/')[1];

    return {
      routes,
      isOpen,
      navigate,
      currentPath
    };
  },

  methods: {
    routeClass (path) {
      return { route: true, active: this.currentPath === path };
    }
  }

};
</script>

<style lang="scss" scoped>
.route {
    font-size: 1.875rem;
    display: flex;
    padding:1rem;
    margin-top: 0.5rem;
    align-items: center;

    span{
      color: $primary-dark-red-300;
      margin-left: 1rem;
      flex:1
    }

  &.active{
    background: linear-gradient(90deg, rgba(44,1,1,1) 0%, rgba(44,1,1,1) 60%, rgba(0,0,0,0.8104283949908089) 87%, rgba(0,0,0,0) 100%);
    svg{
      path{
        stroke:#fff
      }
    }

    span{
        color:#fff
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
    z-index: 1;
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
