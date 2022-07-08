export const useSidebar = () => {
  const isOpen = useState<boolean>('isOpen', () => false);

  function toggle () {
    isOpen.value = !isOpen.value;
  }

  return { isOpen, toggle };
};
