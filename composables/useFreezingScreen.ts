export const useFreezingScreen = () => {
  const isFreezing = useState<boolean>('isFreezing', () => false);

  const freezingClass = computed(() => ({ freezing: isFreezing.value }));

  const freezing = () => {
    isFreezing.value = true;
  };

  const unfreezing = () => {
    isFreezing.value = false;
  };

  return {
    isFreezing,
    freezingClass,
    freezing,
    unfreezing
  };
};
