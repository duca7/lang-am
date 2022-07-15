import { Souvenir } from './type';

type SouvenirCart = Souvenir & {amount: number}

export const useSouvenirCart = () => {
  const selectedSouvenir = useState<SouvenirCart>('selected-souvenir', () => null);

  const increAmount = () => selectedSouvenir.value.amount++;
  const decreAmount = () => selectedSouvenir.value.amount--;

  const initCart = (item:Souvenir) => (selectedSouvenir.value = { ...item, amount: 0 });
  const calculatePrice = () => selectedSouvenir.value.price * selectedSouvenir.value.amount;

  return {
    selectedSouvenir,
    increAmount,
    decreAmount,
    initCart,
    calculatePrice
  };
};
