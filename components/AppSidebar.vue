<template>
  <transition name="slide">
    <nav v-if="isOpen" class="sidebar">
      <ul class="routes">
        <li
          v-for="route in routes"
          :key="route.id"
          class="route"
          :class="{ active: curPath === route.path }"
          @click="navigate(route.path)"
        >
          <AppSenIcon class="icon" />
          <span>{{ route.displayText }}</span>
          <AppArrowIcon class="icon icon-arrow" />
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
            Copyright © 2005–2022 Công ty Nhà Hát Múa Rối Nước Rồng Vàng. Rồng
            Vàng là một phần của Công ty TNHH một thành viên Nhà Hát Trẻ về các
            nghệ thuật truyền thống
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script setup>
const { isOpen, navigate, routes, path: curPath } = useSidebar();
</script>

<style lang="scss">
.route {
  font-size: 1.875rem;
  display: flex;
  padding: 1rem;
  margin-top: 0.5rem;
  align-items: center;

  span {
    color: $primary-dark-red-300;
    font-size: 1.7rem;
    font-weight: 500;
    margin-left: 1rem;
    flex: 1;
  }

  .icon {
    path {
      stroke: $primary-dark-red-300;
    }

    &-arrow {
      transform: scale(1.4);
    }
  }

  &.active {
    background: linear-gradient(
      90deg,
      rgba(44, 1, 1, 1) 0%,
      rgba(44, 1, 1, 1) 60%,
      rgba(0, 0, 0, 0.8104283949908089) 87%,
      rgba(0, 0, 0, 0) 100%
    );

    svg.icon {
      path {
        stroke: #fff;
      }
    }

    span {
      color: #fff;
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
  border: 1px solid #000;
  z-index: 2;
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
