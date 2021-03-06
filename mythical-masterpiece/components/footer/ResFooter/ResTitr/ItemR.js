import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import {Box } from "@mui/material";

export default function ItemR(){
    const titr=[
        {title: "راهنما", subTitle: ["ثبت سفارش", "روش های پرداخت", "شرایط ارسال", "پیگیری سفارش","ضمانت و بازگشت کالا"]},
    ]

    return(
        <>
            <List
                sx={{
                    maxWidth: 900,
                    maxHeight: 300,
                    textAlign: 'right',
                    display:'flex',
                    justifyContent:'right',
                    direction:"rtl",
                    lineHeight:0.2,

                }}>
                {titr.map((sectionId) => (

                    <li  key={`section-${sectionId.title}`}>
                        <ul>
                            <ListSubheader ><Typography variant="h6" sx={{fontWeight:"bold",color:" #141414",fontSize:'0.872rem'}}>{`${sectionId.title}`}</Typography></ListSubheader>
                            {sectionId.subTitle.map((item) => (
                                <ListItem sx={{paddingLeft:0,paddingRight:0}} key={`${sectionId}-${item}`}>
                                    <a href={"#"}> <Box sx={{height:10}}><ListItemText sx={{textAlign: 'right'}}  ><Typography variant="body2" sx={{color: "#8c8c8c",fontSize:'0.8125rem'}}>{item}</Typography></ListItemText></Box></a>
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                ))}
            </List>
        </>
    )
}