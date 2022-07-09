export const useSidebar = () => {
  const isOpen = useState<boolean>('isOpen', () => false);
  const router = useRouter();

  function toggle () {
    isOpen.value = !isOpen.value;
  }

  function navigate (path) {
    if (isOpen) {
      isOpen.value = false;
    }
    router.push({ path });
  }

  return { isOpen, toggle, navigate };
};
