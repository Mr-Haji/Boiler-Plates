import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ForCard from "../../../Pics/ForCard.png"
import { Box, Stack } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Card2 = ({ UserName, UserBloodGroup, UserGender, UserAge, UserCity, SeeMoreClick, UserAddress, UserPhoneNumber, UserBloodPressure, UserSugarLevel }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{
            width: "400px",
            marginTop: "20px", boxShadow: "0 0 15px Black",
            borderRadius: "10px"
        }}>

            <Card>

                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#F1C202", padding: "5px", color: "red", fontSize: "20px" }} aria-label="recipe">
                            {UserBloodGroup || `+ve`}
                        </Avatar>
                    }

                    title={UserName || `Mr. Unknown`}
                    subheader={UserPhoneNumber || `0000-0000000`}
                />

                <Stack sx={{
                    flexDirection: "row",
                    justifyContent: "center"
                }}>


                    <img src={ForCard} width={150}></img>
                </Stack>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {UserAddress || `Address Not Given`}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Call To Donor">
                        <PhoneInTalkIcon />
                    </IconButton>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant='h5' mb={2}
                        >More Deatils:</Typography>
                        {/* <Typography paragraph>
                            {UserAddress}
                        </Typography> */}
                        <Typography paragraph>
                            Age : {UserAge || `Medically Fitt`}
                        </Typography>
                        <Typography paragraph>
                            Gender : {UserGender || `Medically Fitt`}
                        </Typography>
                        <Typography paragraph>
                            City : {UserCity || `Medically Fitt`}
                        </Typography>
                        <Typography paragraph>
                            Sugar Level : {UserSugarLevel || `Medically Fitt`}
                        </Typography>
                        <Typography paragraph>
                            Blood Pressure : {UserBloodPressure || `Medically Fitt`}
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </Box>);

}

export default Card2