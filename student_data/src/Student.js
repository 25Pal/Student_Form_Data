import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import MapUser from './MapUser';
import axios from "axios";

function Student() {
    const [AllData, setAllData] = useState([])

    useEffect(() => {
        console.log("useEffect")
        async function getUser() {
            let api = "https://student-data-coby.onrender.com/getUser"
            let data = await axios.post(api);

            if (data) {
                // console.log(data.data.info)
                setAllData(data.data.info)
            }
        }

        getUser();
    }, []);

    return (
        <>
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MapUser AllData={AllData} />
                    </tbody>
                </table>
            </Container>


        </>
    )
}

const Container = styled.div`
/* padding: 15rem;
height: 2rem; */
height: 100vh;
width:100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap:1rem;
align-items: center;
background-image: linear-gradient(to left , black,black);


table{
    height:30rem;
    width:50rem;
    cursor: pointer;
}
thead{
    height: 4rem;
    background-color: transparent;
    font-size: 2rem;
    color: white;
   
  
}
tr{
    th{
        border: 2px solid #333;
    }
        
}
tbody{

 background-color: grey;
 text-align: center;
 font-family:'arial';
 font-size:1.2rem ;
 

}

tr{
    &:hover{
            background-color: whitesmoke;
    }

}

td {
    border: 2px solid #333;
    
}




`
export default Student;