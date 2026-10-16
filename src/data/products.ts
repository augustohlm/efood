import type { Product } from '../models/Product'

import pizza from '../assets/images/pizza (2).png'

const pizzaMarguerita = {
  title: 'Pizza Marguerita',
  description:
    'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  image: pizza
}

export const produtos: Product[] = [
  { id: 1, ...pizzaMarguerita },
  { id: 2, ...pizzaMarguerita },
  { id: 3, ...pizzaMarguerita },
  { id: 4, ...pizzaMarguerita },
  { id: 5, ...pizzaMarguerita },
  { id: 6, ...pizzaMarguerita }
]
