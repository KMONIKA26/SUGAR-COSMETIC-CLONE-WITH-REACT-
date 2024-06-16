import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../Redux/Admin/actions';

export default function OrderList() {

    const dispatch = useDispatch()

    React.useEffect( () => {
        dispatch(getOrders())
    }, [])

    const orders = useSelector(state => state.admin.orders);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="center">Total Items</TableCell>
            <TableCell align="center">Order Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <TableRow
              key={order.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th">
                {order.cart.map(el => <div><strong>{el.name}</strong> x <span>{el.quantity}</span> = <strong  style={{color:"green"}}>{el.quantity * Number(el.price)}</strong></div>)}
              </TableCell>
              
              <TableCell align="center">{order.totalItems}</TableCell>
              <TableCell align="center"><span style={{color:"green"}}>Rs. {order.cartTotal}</span></TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}