import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ButtonGroup from '@mui/material/ButtonGroup';

const ItemCount = ({ initial, stock, onAdd }) => {

    const [ count, setCount ] = useState(initial)

    const handleIncrease = () => {
        if (count < stock) {
            setCount( count + 1 )
        }
    }
    const handleDecrease = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }   

    const add = () => {
        onAdd(count)
    }
    

    return (
        <Stack direction='column' spacing={1}>
            <ButtonGroup aria-label="large button group" variant="text" size="large" color="inherit" >
                <Button onClick={ handleDecrease }><RemoveCircleIcon /></Button>
                    <Button>{ count }</Button>
                <Button onClick={ handleIncrease }><AddCircleIcon /></Button>
            </ButtonGroup>
            <Button variant="contained" color="success" onClick={ add }>Add to Cart</Button>
        </Stack>
    )
}

export default ItemCount;