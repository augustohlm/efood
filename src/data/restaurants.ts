import type { Restaurant } from '../models/Restaurant'

import hiokiSushi from '../assets/images/hioki-sushi.png'
import laDolceVita from '../assets/images/la-dolce-vita.png'

import bannerLaDolceVita from '../assets/images/banner.png'

const descricaoItaliana =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

export const restaurantes: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiokiSushi,
    cover: bannerLaDolceVita,
    rating: 4.9,
    category: 'Japonesa',
    highlighted: true
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description: descricaoItaliana,
    image: laDolceVita,
    cover: bannerLaDolceVita,
    rating: 4.6,
    category: 'Italiana',
    highlighted: false
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description: descricaoItaliana,
    image: laDolceVita,
    cover: bannerLaDolceVita,
    rating: 4.6,
    category: 'Italiana',
    highlighted: false
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description: descricaoItaliana,
    image: laDolceVita,
    cover: bannerLaDolceVita,
    rating: 4.6,
    category: 'Italiana',
    highlighted: false
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description: descricaoItaliana,
    image: laDolceVita,
    cover: bannerLaDolceVita,
    rating: 4.6,
    category: 'Italiana',
    highlighted: false
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description: descricaoItaliana,
    image: laDolceVita,
    cover: bannerLaDolceVita,
    rating: 4.6,
    category: 'Italiana',
    highlighted: false
  }
]
