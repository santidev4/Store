import { useEffect } from 'react'
import { getProducts } from '../redux/actions'
import { Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'

function ComboCards() {
  const combo = useSelector(state => state.products).filter(e => e.category.name === 'combo')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Combo</Text>
      {combo.map(p=> (
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

export default ComboCards