import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@chakra-ui/react'
import Cards from '../components/Cards'
import { getProducts } from '../redux/actions'

function Home() {

  return (
    <Box>

      <Cards />
      
    </Box>

  )
}

export default Home