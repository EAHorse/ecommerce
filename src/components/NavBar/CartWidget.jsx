import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CartWidget = () => {
  const { totalCount } = useContext(CartContext);

  return (
    <Link to="/cart">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={totalCount()} color="primary">
          <ShoppingCartIcon sx={{ color: '#C0C0C0' }} />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};

export default CartWidget;
