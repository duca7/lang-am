export function useSidebar () {
  const { unfreezing } = useFreezingScreen();
  const router = useRouter();
  const route = useRoute();
  const isOpen = useState<boolean>('isOpen', () => false);
  const path = useState<string>('path', () => route.path);

  router.afterEach((to) => {
    path.value = to.path;
    unfreezing();
  });

  function toggle () {
    isOpen.value = !isOpen.value;
  }

  function navigate (url) {
    if (isOpen.value) {
      isOpen.value = false;
    }
    router.push(url);
  }

  function back () {
    if (isOpen.value) {
      isOpen.value = false;
    }
    router.back();
  }

  return { isOpen, routes, path, toggle, navigate, back };
}

const routes = [
  {
    displayText: 'Rối Nước',
    path: '/roi-nuoc'
  },
  {
    displayText: 'Trò Tích',
    path: '/tro-tich'
  },
  {
    displayText: 'Rồng Vàng',
    path: '/rong-vang'
  },
  {
    displayText: 'Booking',
    path: '/booking'
  },
  {
    displayText: 'Lưu niệm',
    path: '/luu-niem'
  },
  {
    displayText: 'Liên Hệ',
    path: '/lien-he'
  }
];
