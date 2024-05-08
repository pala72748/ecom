import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import axios from 'axios';
import DataTable from '../Components/DataTable';
import Table from '../Components/Table';
import Title from '../Components/Title';

const About = () => {

    const [Newuser, setNewUser] = useState([]);
    const filter = ['firstName', 'email' , 'age'];


    useEffect(() => {
        const fetchuser = async () => {
            try {
                const res = await axios.get(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=200`);
                setNewUser(res.data);
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchuser();
    }, [])

    const handleClick = (abhi) => {
        const x = abhi.id;
        const y = abhi.age;
        const z = x + y
        alert(z)
    }

    return (
        <>
            <Title name={"About"} />
            <Header />
            <Table data={Newuser} filter={filter} onClick={handleClick} />
        </>
    )
}

export default About;