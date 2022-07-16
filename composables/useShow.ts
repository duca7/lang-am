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
    displayImage: '/images/trotich/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'mo-cua': {
    category: 'doi-thuong',
    slug: 'mo-cua',
    displayName: 'Mò cua',
    displayImage: '/images/mo-cua.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'teu-giao': {
    category: 'doi-thuong',
    slug: 'teu-giao',
    displayName: 'Tễu Gião',
    displayImage: '/images/chu-teu-giao.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'di-cay': {
    category: 'doi-thuong',
    displayName: 'Đi cày',
    slug: 'di-cay',
    displayImage: '/images/di-cay.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'thoi-lua': {
    category: 'doi-thuong',
    slug: 'thoi-lua',
    displayName: 'Thổi lửa',
    displayImage: '/images/thoi-lua.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'bat-vit': {
    category: 'doi-thuong',
    slug: 'bat-vit',
    displayName: 'Bắt vịt',
    displayImage: '/images/tro-ech.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'bat-tien': {
    category: 'le-hoi',
    slug: 'bat-tien',
    displayName: 'Bát tiên',
    displayImage: '/images/bat-tien-2.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'mua-rong': {
    category: 'le-hoi',
    slug: 'mua-rong',
    displayName: 'Múa rồng',
    displayImage: '/images/mua-rong.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'mua-lan': {
    category: 'le-hoi',
    slug: 'mua-lan',
    displayName: 'Múa lân',
    displayImage: '/images/mua-lan.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'dua-thuyen': {
    category: 'le-hoi',
    slug: 'dua-thuyen',
    displayName: 'Đua thuyền',
    displayImage: '/images/dua-thuyen.webp',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'dang-hoa': {
    category: 'le-hoi',
    slug: 'dang-hoa',
    displayName: 'Dâng hoa',
    displayImage: '/images/dang-hoa.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'ruoc-kieu': {
    category: 'le-hoi',
    slug: 'ruoc-kieu',
    displayName: 'Rước kiệu',
    displayImage: '/images/ruoc-kieu.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'tra-guom': {
    category: 'tich-co',
    slug: 'tra-guom',
    displayName: 'Trả gươm',
    displayImage: '/images/ho-guom.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'thach-sanh': {
    category: 'tich-co',
    slug: 'thach-sanh',
    displayName: 'Thạch sanh',
    displayImage: '/images/thach-sanh.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'tam-cam': {
    category: 'tich-co',
    slug: 'tam-cam',
    displayName: 'Tấm cám',
    displayImage: '/images/tam-cam.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'
  },
  'ruoc-kieu-1': {
    category: 'tich-co',
    slug: 'ruoc-kieu',
    displayName: 'Rước kiệu',
    displayImage: '/images/water-puppet-show-hanoi-bonecos.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'trang-nguyen': {
    category: 'tich-co',
    slug: 'trang-nguyen',
    displayName: 'Trạng nguyên',
    displayImage: '/images/trang-nguyen.jpg',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5,
    time: '12 phút'

  },
  'mua-quạt': {
    category: 'tich-co',
    slug: 'mua-quạt',
    displayName: 'Múa quạt',
    displayImage: '/images/mua-quat.jpg',
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
