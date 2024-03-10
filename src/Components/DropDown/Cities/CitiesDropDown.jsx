import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const CitiesDropDown = ({ onChange, value }) => {
    return (
        <Autocomplete
            id="city-select"
            sx={{ width: 300 }}
            options={CitiesName}
            value={value}
            onChange={onChange}
            autoHighlight
//yha issue hy 
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
                <Box component="li" {...props}>
                    {option}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Select Your City"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

const CitiesName = ["Karachi", "Lahore", "Islamabad", "Multan",]


export default CitiesDropDown