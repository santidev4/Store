import { Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/actions'
import Card from './Card'

function PromoCards() {
  const promo = useSelector(state => state.products).filter(e => e.category.name === 'promo')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Promos</Text>
      {promo.map(p=> (
        <Card 
        title={p.title} 
        price={p.price} 
        description={p.description} 
        image={p.image} 
        key={p.id} 
        />
      ))}
    </>
  )
}

export default PromoCards