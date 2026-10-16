import type { Restaurant as RestaurantData } from '../../models/Restaurant'

import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'

import {
  Card,
  Conteudo,
  Infos,
  Cabecalho,
  Titulo,
  Avaliacao,
  Descricao,
  SaibaMais
} from './styles'

type Props = RestaurantData

const Restaurant = ({
  id,
  title,
  description,
  image,
  rating,
  category,
  highlighted
}: Props) => (
  <Card>
    <img src={image} alt={title} />

    <Infos>
      {highlighted && <Tag>Destaque da semana</Tag>}
      <Tag>{category}</Tag>
    </Infos>

    <Conteudo>
      <Cabecalho>
        <Titulo>{title}</Titulo>
        <Avaliacao>
          <span>{rating}</span>
          <img src={estrela} alt="estrelas" width={21} height={21} />
        </Avaliacao>
      </Cabecalho>

      <Descricao>{description}</Descricao>
      <SaibaMais to={`/restaurante/${id}`}>Saiba mais</SaibaMais>
    </Conteudo>
  </Card>
)

export default Restaurant
