import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@chakra-ui/react'
import Card from '../components/Card'
import { getProducts } from '../redux/actions'

function Home() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

// title, price, description, image


  console.log('products', products)

  return (
    <Box>
      {
        products.map(p => (
          <Card title={p.title} price={p.price} description={p.description} image={p.image} />

        ))
      }
    </Box>

  )
}

export default Home