import { Box, Card, Divider,  Snackbar, SnackbarContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import Product1 from '../../assets/category-snack-munchies.jpg';
import Product2 from '../../assets/fruits-vegetables.jpg';
import Product3 from '../../assets/instant-food.jpg';
import Product4 from '../../assets/biscuits.jpg';
import Product5 from '../../assets/category-cold-drinks-juices.jpg';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

import './product.css'

const dummyproducts = [
    {
        id: 1,
        img: Product1,
        name: "Lays",
        price: "20",
    },
    {
        id: 2,
        img: Product2,
        name: "Fruits",
        price: "50",
    },
    {
        id: 3,
        img: Product3,
        name: "Corn food",
        price: "80",
    },

    {
        id: 4,
        img: Product4,
        name: "biscuits",
        price: "80",
    },
    {
        id: 5,
        img: Product5,
        name: "juice",
        price: "80",
    },
]


const Products = () => {
    const [CartDrawer, setCartDrawer] = useState([]);
    const [openAlert, setOpenAlert] = useState(false)

    console.log(CartDrawer);


    const cartHandler = (product) => {
        const isExist = CartDrawer.find((cart) => cart.id === product.id);

        if (!isExist) {
            setCartDrawer((prev) => [...prev, product]);
            let strCartDrawer = JSON.stringify(CartDrawer)
            localStorage.setItem("CartDrawer", strCartDrawer);
        } else {
            setOpenAlert(true);
        }
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };




    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleClose}


            >
                <SnackbarContent style={{
                    backgroundColor: '#bb2124',
                }}
                    message={
                        <Box className="d-flex justify-content-between">
                            <span id="client-snackbar">product already in cart list</span>
                            < CloseIcon onClick={handleClose} />
                        </Box>

                    }
                />
            </Snackbar>

            <Box sx={{ display: "flex", gap: "30px" }} className="container mt-5">
                {dummyproducts?.map((product, index) => (

                    <Card key={index} sx={{ padding: "40px", cursor: "pointer", width: "25%", textAlign: "center" }}>
                        <Box>
                            <img className="product-image" src={product.img} alt={`${product.name}`} />
                            <Typography variant="h6" className="my-3">{product.name}</Typography>
                            <Divider sx={{ borderColor: "#333" }} className="mb-3" variant="fullWidth" />
                            <Box className="d-flex justify-content-between">
                                <ShareIcon />
                                <BookmarkBorderIcon />
                                <Box className="border px-4 bg-primary text-white-50 rounded-pill">
                                    <AddShoppingCartIcon onClick={() => cartHandler(product)} />
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                ))}
            </Box>
        </>
    );
}

export default Products;

