import { Banner, Conteudo, Categoria, Titulo } from './styles'

type Props = {
  title: string
  category: string
  image: string
}

const RestaurantBanner = ({ title, category, image }: Props) => (
  <Banner>
    <img src={image} alt={title} />
    <Conteudo>
      <Categoria>{category}</Categoria>
      <Titulo>{title}</Titulo>
    </Conteudo>
  </Banner>
)

export default RestaurantBanner
