import { useEffect } from "react"
import { getProducts } from "../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import Card from "./Card"
import { Text } from '@chakra-ui/react'


function BeerCards() {
  const bebidas = useSelector(state => state.products).filter(e => e.category.name === 'bebidas')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Bebidas</Text>
      {bebidas.map(p=> (
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

export default BeerCards