import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Center, FormControl, FormLabel, Input, Textarea, NumberInput, NumberInputField,
NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper, Button
 } from '@chakra-ui/react'
import FileBase64 from 'react-file-base64'
import { postProduct } from '../redux/actions' 

function ProductForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {token} = useSelector(state => state.userLoginData)


  const [product, setProduct ] = useState({
    title: '',
    price: 0,
    description: '',
    image: ''
  })

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postProduct(product, config))
    console.log(token, 'token')
    navigate('/')
  }

  console.log('product', product)

  return (
    <Center  bg='blackAlpha.50' h='90vh'>

      <Box maxW='xl' h='3xl' w='xl' borderWidth='1px' color='pink.500' borderRadius='lg' overflow='hidden'>
        <FormControl p='5'  >
          <FormLabel>Titulo</FormLabel>
          <Input 
          type='text' 
          placeholder='Titulo' 
          name='title'
          value={product.title}
          onChange={(e) => setProduct({...product, title: e.target.value})} />

          <FormLabel>Precio</FormLabel>
          <NumberInput max={5000} min={10} step='10'>
            <NumberInputField 
            placeholder='$1000'
            name='price'
            value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value})} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <FormLabel>Descripcion</FormLabel>
          <Textarea 
            placeholder='Descripcion' 
            h='xs'
            name='description'
            value={product.description}
            onChange={(e) => setProduct({...product, description: e.target.value})} />

          <FormLabel>Imagen</FormLabel>
          <FileBase64
            multiple={ false }
            onDone={({base64}) =>  setProduct({...product, image: base64})} />

          <Center mt='50'>
            <Button colorScheme='orange' onClick={handleSubmit} >
              Crear Producto
            </Button>
          </Center>

        </FormControl>
      </Box>

    </Center>
  )
}

export default ProductForm