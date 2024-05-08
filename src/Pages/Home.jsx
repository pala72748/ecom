import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Table from '../Components/Table';
import axios from 'axios';
import Title from '../Components/Title';
const Home = () => {
    const form = [
        { label: "Username", name: "username", type: "text", placeholder: "Enter your username" },
        { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
        { label: "Description", name: "description", type: "textarea", placeholder: "Enter your description" },
        { label: "Phone Number", name: "number", type: "tel", placeholder: "Enter your number" },
        { label: "Address", name: "address", type: "text", placeholder: "Enter your address" },
        { label: "Product", name: "product", type: "text", placeholder: "Enter your product" },
        { label: "Price", name: "price", type: "number", placeholder: "Enter your price" },
        { label: "Long Description", name: "long_desc", type: "textarea", placeholder: "Enter your description" },
    ];

    const [user, setUser] = useState([]);
    const [newUser, setNewUser] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://hub.dummyapis.com/employee?noofRecords=10`);
                setUser(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchNew = async () => {
            try {
                const newdata = await axios.get(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=100`);
                setNewUser(newdata.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchNew();
    }, [])

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        number: "",
        description: "",
        address: "",
        product: "",
        price: "",
        long_desc: "",
    });

    const handleClick = (e) => {
        e.preventDefault();
        setFormData({
            username: "",
            email: "",
            number: "",
            description: "",
            address: "",
            product: "",
            price: "",
            long_desc: "",
        });
        console.log(formData);
    };
    const handleEdit = (id) => {
        alert(id);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const filter = ['firstName', 'lastName', 'email'];

    return (
        <>
            <Title name={"Home"} />
            <Header />
            <div className='container mx-auto my-10'>
                <div className='flex flex-col w-6/12 flex-wrap mx-auto shadow-lg'>
                    <h1 className='text-center text-3xl font-bold my-4'>Register</h1>
                    <form className='flex flex-col m-10'>
                        {form.map((input, index) => (
                            input.type === "textarea" ? (
                                <React.Fragment key={index}>
                                    <label htmlFor={input.name}>{input.label}</label>
                                    <textarea
                                        className="py-2 outline-none border border-black rounded-lg pl-4 my-4"
                                        name={input.name}
                                        rows={8}
                                        value={formData[input.name]}
                                        onChange={handleChange}
                                        placeholder={input.placeholder}
                                        required
                                    />
                                </React.Fragment>
                            ) : (
                                <Input
                                    key={index}
                                    className="py-2 outline-none border border-black rounded-full pl-4 my-4"
                                    name={input.name}
                                    type={input.type}
                                    value={formData[input.name]}
                                    onChange={handleChange}
                                    placeholder={input.placeholder}
                                    label={input.label}
                                />
                            )
                        ))}
                        <Button name="Sign up" onClick={handleClick} className="px-8 py-2 bg-black text-white rounded" />
                    </form>
                </div>
            </div>
            <Table data={user} onClick={handleEdit} filter={filter} />
        </>
    );
};

export default Home;
