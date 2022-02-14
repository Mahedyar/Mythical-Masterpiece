import ProductImage from "./ProductImage";
import PhoneProduct from "./ResProductImage/PhoneProduct/PhoneProduct";

import useMediaQuery from '@mui/material/useMediaQuery';

export default function MainProductImage(){
    const matches = useMediaQuery('(min-width:769px)');

    return(
        <>
            {matches? <ProductImage/>:<PhoneProduct/>}

        </>
    )
}