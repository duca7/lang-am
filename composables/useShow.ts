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
    category: 'Đời thường',
    displayName: 'Câu cá',
    slug: 'cau-ca',
    displayImage: '/images/trotich/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'bat-vit': {
    category: 'Đời thường',
    slug: 'bat-vit',
    displayName: 'Bắt vịt',
    displayImage: '/images/trotich/bat-vit.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'trong-lua': {
    category: 'Đời thường',
    slug: 'trong-lua',
    displayName: 'Trồng lúa',
    displayImage: '/images/trotich/trong-lua.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'bat-tien': {
    category: 'Lễ hội',
    slug: 'bat-tien',
    displayName: 'Bát tiên',
    displayImage: '/images/trotich/bat-tien.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'mua-rong': {
    category: 'Lễ hội',
    slug: 'mua-rong',
    displayName: 'Múa rồng',
    displayImage: '/images/trotich/mua-rong.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'mua-lan': {
    category: 'Lễ hội',
    slug: 'mua-lan',
    displayName: 'Múa lân',
    displayImage: '/images/trotich/mua-lan.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'tra-guom': {
    category: 'Tích cổ',
    slug: 'tra-guom',
    displayName: 'Trả gươm',
    displayImage: '/images/trotich/tra-guom.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'thach-sanh': {
    category: 'Tích cổ',
    slug: 'thach-sanh',
    displayName: 'Thạch sanh',
    displayImage: '/images/trotich/thach-sanh.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'tam-cam': {
    category: 'Tích cổ',
    slug: 'tam-cam',
    displayName: 'Tấm cám',
    displayImage: '/images/trotich/tam-cam.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'
  }
};

const showsNameMap = {
  'Đời thường': 'Đời thường',
  'Lễ hội': 'Lễ Hội',
  'Tích cổ': 'Tích cổ'
};
