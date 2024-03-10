import { Button, FormControlLabel, Input, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { DB } from "../../Config/FireBase/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import CitiesDropDown from "../../Components/DropDown/Cities/CitiesDropDown";

const Home = () => {
  const Navigate = useNavigate()

  // const auth = getAuth()
  // console.log(auth) 

  const [Name, setName] = useState("")
  const [Number, setNumber] = useState("")
  const [Address, setAddress] = useState("")
  const [BloodGroup, setBloodGroup] = useState("")
  const [Gender, setGender] = useState("")
  const [Age, setAge] = useState("")
  const [City, setCity] = useState("")
  // console.log(Name, Number, Address, BloodGroup, Gender, Age)
  console.log(City)


  const [getUserData, setgetUserData] = useState([]);
  const [refresh, setrefresh] = useState(true);

  // get data from store
  const dispatch = useDispatch();
  const getToDos = useSelector((state) => state.toDoSliceReducer.ToDoArr);
  // console.log("globalState", getToDos);


  //add toDo & send to dataBase

  const SubmitHandeler = async (e) => {

    const allToDo = {
      Name,
      Age,
      Number,
      Address,
      BloodGroup,
      Gender,
      City,
    };
    try {
      const toDoRef = await addDoc(collection(DB, "Users"), allToDo);
      console.log(toDoRef, "Send toDoRef");

      Navigate('/dashBoard')

    } catch (error) {
      console.log("error", error);
    }
  };


  return (
    <Stack sx={{
      marginTop: 8,
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // background:"orange"
    }}>
      <Stack
        sx={{
          padding: "50px",
          // border: "2px solid black",
          borderRadius: "20px",
          background: "transparent",
          boxShadow: "0 0 10px"
        }}>
        <Stack>
          <Typography sx={{
            fontSize: "25px",
            textAlign: "center",

          }}>To Be A Donor</Typography>
        </Stack>

        <Stack >
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            value={Name}
            sx={{
              padding: "15px",
              width: "300px",
            }}
          ></Input>

        </Stack>
        <Stack

        >
          <Input
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            type="Number"
            value={Number}
            sx={{
              padding: "15px",
              width: "300px",
            }}
          ></Input>

        </Stack>
        <Stack

        >
          <Input
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            value={Address}
            sx={{
              padding: "15px",
              width: "300px",
            }}
          ></Input>

        </Stack>

        <Stack

        >
          <Input
            onChange={(e) => setBloodGroup(e.target.value)}
            placeholder="Blood Group"
            value={BloodGroup}
            sx={{
              padding: "15px",
              width: "300px",
            }}
          ></Input>

        </Stack>
        <Stack

        >
          <Input
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            value={Age}
            type="Number"
            sx={{
              padding: "15px",
              width: "300px",
            }}
          ></Input>

        </Stack>
        <Stack
          sx={{
            mt: "10px"
          }}
        >
          <CitiesDropDown  onChange={(e) => setCity(e.target.value)} value={City} />

          {/* <Input
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            value={City}

            sx={{
              padding: "15px",
              width: "300px",
            }}
          ></Input> */}

        </Stack>
        <Stack

        >

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
            name="radio-buttons-group"
            sx={{
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>




          {/* <Input
            onChange={(e) => setGender(e.target.value)}
            placeholder="Gender"
            value={Gender}
            sx={{
              padding: "15px",
              width: "300px",
            }}
          ></Input> */}

        </Stack>





        <Button onClick={SubmitHandeler}>Submit</Button>





      </Stack>


    </Stack>
  );
};

export default Home;