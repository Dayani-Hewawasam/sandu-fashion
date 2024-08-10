import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.png'
import list_product_icon from '../../assets/Product_list_icon.png'
import order_check_icon from '../../assets/order_check.png'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add New Products</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>See the Product List</p>
        </div>
        </Link>
       {/*} <Link to={'/orders'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={order_check_icon} alt="" />
            <p>Check the Orders</p>
        </div>
        </Link>  */}
    </div>
  )
}

export default Sidebar