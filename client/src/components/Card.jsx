import{ Box, Image, Badge, Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/actions'

// title, price, description, image

function Card({title, price, description, image, id}) {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <Box maxW='xs' borderWidth='1px' m='5' borderRadius='lg' overflow='hidden'>
            <Image src={image} />
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                        >
                        {title}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    >
                            {description}          
                </Box>

                <Box>
                    ${price}
                    <Box as='span' color='gray.600' fontSize='sm'>
                    </Box>
                </Box>

                <Button colorScheme='orange' mt='4' onClick={() => handleDelete(id)} >
                    Delete
                </Button>

            </Box>
        </Box>
    )
}

export default Card