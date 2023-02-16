import images from './images';

const patisseries = [
  {
    title: 'Eclair  au chocolat',
    price: '€3',
    tags: 'pâte à choux, ganache  chocolat, glaçage au chocolat',
  },
  {
    title: 'Paris Brest',
    price: '$4',
    tags: 'pâte à choux, crème praliné',
  },
  {
    title: 'Religieuse',
    price: '$6',
    tags: 'Pâte à choux, crème pâtissière au chocolat',
  },
  {
    title: 'Tarte au citron meringuée',
    price: '$5',
    tags: 'Pâte sablée, crème citron, meringue',
  },
  {
    title: 'Flan pâtissier',
    price: '$4',
    tags: 'Crème pâtissière, caramel, crème anglaise',
  },
];

const pains = [
  {
    title: 'Pain de campagne',
    price: '$2',
    tags: ' Sa saveur est légèrement acidulée et sa conservation plus longue que les baguettes',
  },
  {
    title: "Pain de sègle",
    price: '$2',
    tags: 'Le pain de seigle contient au moins 65 % de farine de seigle et au maximum 35 % de farine de blé, ce qui le rend plus digest pour ceux qui sont sensibles au gluten.',
  },
  {
    title: 'Pain   au levain',
    price: '$2',
    tags: 'Le pain au levain est préparé à partir d’un levain, sa fermentation est entièrement naturelle',
  },
  {
    title: 'Sans Gluten',
    price: '$4',
    tags: 'Mix de plusieurs farines telles que le sarrasin, le maïs ou farine de riz',
  },
  
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'La Baguette dorée',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'étoile montante',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitalité 2022',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Meilleur Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { patisseries, pains, awards };
