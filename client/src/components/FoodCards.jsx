import { useSelector } from 'react-redux'
import Card from './Card'
import { Text, Grid } from '@chakra-ui/react'

function FoodCards() {
  const food = useSelector(state => state.products).filter(e => e.category.name === 'food')

  return (
    <>
      <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Comida</Text>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>

      {
        food.map(p=> (
          <Card 
          title={p.title} 
          price={p.price} 
          description={p.description} 
          image={p.image} 
          key={p.id} 
          />
          ))
        }
        
      </Grid>
    </>
  )
}

export default FoodCards