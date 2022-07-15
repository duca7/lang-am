import { Souvenir } from './type';

export const useSouvenir = () => {
  function findBySlug (slug: string) {
    return souvenirs[slug];
  }

  function findByCategory (category: string): Souvenir[] {
    return Object.keys(souvenirs).reduce((acc, souvenirKey) => {
      if (souvenirs[souvenirKey].category !== category) {
        return acc;
      }
      return [...acc, souvenirs[souvenirKey]];
    }, []);
  }

  return { findBySlug, findByCategory };
};

const souvenirs: Record<string, Souvenir> = {
  'chu-teu': {
    name: 'Chú Tễu',
    price: 320,
    url: '/images/souvenir/chu-teu.png',
    category: 'souvenir',
    slug: 'chu-teu',
    bgc: '#0d0d0d'
  },

  'bac-bat-ech': {
    name: 'Bác bắt ếch',
    price: 325,
    url: '/images/souvenir/bac-bat-ech.png',
    category: 'souvenir',
    slug: 'bac-bat-ech',
    bgc: '#121011'
  },

  'ong-dia': {
    name: 'Ông Địa',
    price: 200,
    url: '/images/souvenir/ong-dia.png',
    category: 'souvenir',
    size: 'md',
    slug: 'ong-dia',
    bgc: '#0F0F0F'
  },

  'bac-nong': {
    name: 'Bác nông',
    price: 220,
    url: '/images/souvenir/bac-nong.png',
    category: 'souvenir',
    size: 'md',
    slug: 'bac-nong',
    bgc: '#0E0C0D'
  },

  'muc-dong': {
    name: 'Mục đồng',
    price: 400,
    url: '/images/souvenir/muc-dong.png',
    category: 'souvenir',
    slug: 'muc-dong',
    bgc: '#121011'
  },

  'bac-nong-nu': {
    name: 'Bác nông nữ',
    price: 200,
    url: '/images/souvenir/bac-nong-nu.png',
    category: 'souvenir',
    slug: 'bac-nong-nu',
    bgc: '#181617'
  },

  'tui-tote': {
    name: 'Túi Tote',
    price: 320,
    url: '/images/souvenir/tui-tote.png',
    category: 'gift',
    slug: 'tui-tote',
    bgc: '#BEBEBE'
  },

  'binh-nuoc': {
    name: 'Bình nước',
    price: 320,
    url: '/images/souvenir/binh-nuoc.png',
    category: 'gift',
    slug: 'binh-nuoc',
    bgc: '#BEBEBE'
  },

  'op-dien-thoai': {
    name: 'Ốp điện thoại',
    price: 320,
    url: '/images/souvenir/op-dien-thoai.png',
    category: 'gift',
    slug: 'op-dien-thoai',
    bgc: '#BEBEBE'
  },

  'dia-teu': {
    name: 'Đĩa Tễu',
    price: 320,
    url: '/images/souvenir/dia-teu.png',
    category: 'gift',
    bgc: '#A3A3A3',
    slug: 'dia-teu',
    size: 'md'
  },

  'ao-thun': {
    name: 'Áo thun',
    price: 320,
    url: '/images/souvenir/ao-thun.png',
    category: 'gift',
    size: 'md',
    slug: 'ao-thun',
    bgc: '#BEBEBE'
  },

  'ly-nuoc': {
    name: 'Ly nước',
    price: 320,
    url: '/images/souvenir/ly-nuoc.png',
    category: 'gift',
    slug: 'ly-nuoc',
    bgc: 'linear-gradient(180deg, #B1B1B1 0%, #989898 100%), linear-gradient(180deg, #B1B1B1 0%, #989898 100%)'
  },

  'dia-bat-tien': {
    name: 'Đĩa Bát Tiên',
    price: 320,
    url: '/images/souvenir/dia-bat-tien.png',
    category: 'gift',
    slug: 'dia-bat-tien',
    bgc: '#A4A4A4'
  },

  'dia-ngu-ong': {
    name: 'Đĩa Ngư Ông',
    price: 320,
    url: '/images/souvenir/dia-ngu-ong.png',
    category: 'gift',
    slug: 'dia-ngu-ong',
    bgc: 'A4A4A4'
  }
};
