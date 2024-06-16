import { Route,Switch } from "react-router-dom";
import Box from '@mui/material/Box';
import MakeupPage from "../Pages/makeupPage";
import { ProductDetails } from "../Pages/productPage";
import HomePage from "../Pages/landingPage";
import AdminProduct from "../Pages/Admin/AdminProduct";
import Cart from "../Pages/Cart"
import Checkout from "../Pages/Checkout"
import Payments from "../Pages/Payments"
import AdminLogin from "../Pages/AdminLogin";
import AdminShowOrders from "../Pages/AdminShowOrders";
import AdminCreateProduct from "../Pages/AdminCreateProduct";
import SearchResult from "../Pages/SearchResults"


function AllRoutes(){
    return (
        <Switch>
            <Route exact path="/">
                <Box sx={{position:"relative", top:"100px"}}>
                    <HomePage />
                </Box>
            </Route>

            <Route exact path="/makeup">
                <MakeupPage />
            </Route>
            <Route exact path="/search/:query" >
                <SearchResult />
            </Route>
            <Route exact path="/products/:url">
                <ProductDetails />
            </Route>

            <Route exact path="/brushes">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Brushes</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/skincare">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Skincare</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/trending">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Trending</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/blog">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Blog</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/offers">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Offers</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/2021highlights">
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>2021 Hightlights</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="/checkout">
                <Checkout />
            </Route>
            <Route exact path="/payments">
                <Payments />
            </Route>
            <Route exact path="/admin">
                <AdminLogin />
            </Route>
            <Route exact path="/admin/orders">
                <AdminShowOrders />
            </Route>
            <Route exact path="/admin/create">
                <AdminCreateProduct />
            </Route>
            <Route exact path="/admin/delete">
                <AdminProduct />
            </Route>
            <Route>
                <Box sx={{position:"relative", top:"100px"}}>
                    <h1>Page not found</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </Box>
            </Route>
        </Switch>
    )
}

export default AllRoutes