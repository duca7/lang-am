type Show = {
  category: string;
  displayName: string;
  slug: string;
  displayImage: string;
  date: string;
  rate: number;
  time: string;
}

export const useShows = () => {
  function findBySlug (slug: string) {
    return shows[slug];
  }

  function findByCategory (category: string): Show[] {
    return Object.keys(shows).reduce((acc, showSlug) => {
      if (shows[showSlug].category !== category) { return acc; }
      return [...acc, shows[showSlug]];
    }, []);
  }

  function take (number: number) {
    return Object.values(shows).slice(0, number);
  }

  function getShowCategory (title: string) {
    return showsNameMap[title];
  }

  return { findBySlug, findByCategory, getShowCategory, take };
};

const shows: Record<string, Show> = {
  'cau-ca': {
    category: 'doi-thuong',
    displayName: 'Câu cá',
    slug: 'cau-ca',
    displayImage: '/images/cheo-thuyen-thung.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'bat-vit-1': {
    category: 'doi-thuong',
    slug: 'bat-vit-1',
    displayName: 'Bắt vịt',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'bat-vit': {
    category: 'doi-thuong',
    slug: 'bat-vit',
    displayName: 'Bắt vịt',
    displayImage: '/images/chu-teu.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'trong-lua': {
    category: 'doi-thuong',
    slug: 'trong-lua',
    displayName: 'Trồng lúa',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'bat-tien': {
    category: 'le-hoi',
    slug: 'bat-tien',
    displayName: 'Bát tiên',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'mua-rong': {
    category: 'le-hoi',
    slug: 'mua-rong',
    displayName: 'Múa rồng',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'mua-lan': {
    category: 'le-hoi',
    slug: 'mua-lan',
    displayName: 'Múa lân',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'tra-guom': {
    category: 'tich-co',
    slug: 'tra-guom',
    displayName: 'Trả gươm',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'thach-sanh': {
    category: 'tich-co',
    slug: 'thach-sanh',
    displayName: 'Thạch sanh',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'tam-cam': {
    category: 'tich-co',
    slug: 'tam-cam',
    displayName: 'Tấm cám',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'
  }
};

const showsNameMap = {
  'doi-thuong': 'Đời thường',
  'le-hoi': 'Lễ Hội',
  'tich-co': 'Tích cổ'
};
