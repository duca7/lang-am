export const useFolkTaleSlider = (category) => {
  const data = category ? slider.filter(cate => cate.category === category) : slider;
  const title = sliderTitle[category];
  return { data, title };
};

const slider = [
  {
    category: 'doi-thuong',
    displayName: 'Câu cá',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  },
  {
    category: 'doi-thuong',
    displayName: 'Bắt vịt',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  },
  {
    category: 'doi-thuong',
    displayName: 'Bắt vịt',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  },
  {
    category: 'doi-thuong',
    displayName: 'Trồng lúa',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  },
  {
    category: 'le-hoi',
    displayName: 'Bát tiên',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  },
  {
    category: 'le-hoi',
    displayName: 'Múa rồng',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  },
  {
    category: 'le-hoi',
    displayName: 'Múa lân',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  },
  {
    category: 'tich-co',
    displayName: 'Trả gươm',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  },
  {
    category: 'tich-co',
    displayName: 'Thạch sanh',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  },
  {
    category: 'tich-co',
    displayName: 'Tấm cám',
    displayImage: '/images/cau-ca.png',
    date: 'Thứ 2 và thứ 4',
    rate: 8.5
  }
];

const sliderTitle = {
  'doi-thuong': 'Đời thường',
  'le-hoi': 'Lễ Hội',
  'tich-co': 'Tích cổ'
};
