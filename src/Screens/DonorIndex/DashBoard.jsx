import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { DB } from '../../Config/FireBase/FireBase';
import Card2 from '../../Components/Card2/Card2';
import { Stack } from '@mui/material';
import bgPic from "../../../Pics/BgPic.jpg"
import CustomAppBar from '../AppBar/AppBar';
export default function DashBoard() {
    const [getUserData, setgetUserData] = useState([]);

    //get Data from DB
    const getDataArr = [];

    const getTodo = async () => {
        try {
            const toDoSnap = await getDocs(collection(DB, "Users"));
            toDoSnap.forEach((data) => {
                // console.log(data);
                getDataArr.push({ ...data.data(), id: data.id });
                setgetUserData([...getDataArr]);
            });
        } catch (error) {
            console.log(error);
        }

    };
    const navigateToDetailedPage = (e) => {
        console.log(e.id);
        // const pageId = e.id;
        // navigate(`/products/${pageId}`);
    };
    useEffect(() => {
        getTodo()
    }, [])
    // console.log(getUserData)
    // console.log(getDataArr)
    return (
        <Stack sx={{
         
            // backGroundImage: "../../../Pics/BgPic.jpg",
      
        }}>
            <CustomAppBar />
            <Stack sx={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 5,
                flexWrap: "wrap",


            }}>
                {getUserData.map((e, i) => {
                    // console.log(i)
                    return (
                        <>

                            <Card2
                                SeeMoreClick={() => {
                                    navigateToDetailedPage(e);

                                }}
                                key={e.id}
                                UserCity={e.City}
                                UserPhoneNumber={e.Number}
                                UserAge={e.Age}
                                UserAddress={e.Address}
                                UserBloodGroup={e.BloodGroup}
                                UserName={e.Name} UserGender={e.Gender} />
                            {/* {console.log(e)} */}

                        </>

                    )
                })}
            </Stack>
        </Stack>
    );
}