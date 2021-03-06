import {Box,Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import LocalMaxImage from "./LocalMaxImage";
import DataCard from "./DataCard";
import Icon from "./Icon";

export default function BoxMaxImage(props){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#f5f5f5',
        padding: theme.spacing(1),
        textAlign: 'center',
        boxShadow:'none'
    }));
    return(
        <>
            <Box className={'max-Image'}
                sx={{
                    width: 420,
                    height: 420,
                    backgroundColor: '#f5f5f5',
                    borderRadius:3,
                    margin:'auto',
                }}
            >
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={9.5}>
                            {DataCard.map((item)=>
                                <Item key={item.product}>{item.boxMax.map((img)=><LocalMaxImage key={item.product}><img className={'Img-product'} width={350} height={350} src={props.product.image[0]} /></LocalMaxImage>)}</Item>
                            )}
                        </Grid>
                        <Grid item xs={1.5}>
                            <Item><Icon/></Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}