import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../../Context/CartContext';

function Widget() {
  const { totalCart } = useCartContext()

  return (
    <>
      <Badge badgeContent={totalCart()} color="primary" >
        <ShoppingCartIcon  color='action' style={{color: 'white'}}/>
      </Badge>
    </>
  )
}

export default Widget