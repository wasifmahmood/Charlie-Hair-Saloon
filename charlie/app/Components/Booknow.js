import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from "react-icons/ai";
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';
// import Image from 'next/image';
// import appoint from "../../assests/image/appoint.jpg"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: 5,
    p: 4,
};
const inputStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    width: "50%",
};

const BookNow = ({ onClose }) => {
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());

    const options = [
        { value: 'haircut', label: 'Haircut' },
        { value: 'shave', label: 'Shave' },
        { value: 'beard-trim', label: 'Beard Trim' },
        { value: 'hairstyling', label: 'Hairstyling' },
        // Add more options as needed
    ];

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const dateTimeChange = (dateTime) => {
        setSelectedDateTime(dateTime);
    };

    const serviceChange = (selectedOption) => {
        setSelectedService(selectedOption);
    };

    const appointment = () => {
        // Logic to handle appointment booking
    };
    return (
        <div>
            <Button
                className="text-white"
                onClick={handleOpen}>
                BookNow
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={style} className="bg-slate-500">
                    <div className='d-flex place-content-center'>
                        <h3 className='text-black font-black'>Book Appointment</h3>
                        <span className='ml-auto' onClick={handleClose}><AiOutlineClose size={"30px"} /></span>
                    </div>
                    {/* <Image src={appoint} /> */}
                    <div className='items-center'>
                        <span>
                            <input type="text" id="name" style={inputStyle} placeholder="Your Name" />
                            <input type='text' id='phone' style={inputStyle} placeholder="Your Phone Number" />
                        </span>
                        <Select options={options} value={selectedService} onChange={serviceChange} placeholder="Select a service" />
                        <div style={inputStyle} className='place-content-center'>
                            <DateTimePicker onChange={dateTimeChange} value={selectedDateTime} />
                        </div>
                    </div>
                    <button className='bg-black p-2 rounded text-white items-center' onClick={appointment}>MAKE AN APPOINTMENT</button>
                </Box>
            </Modal>
        </div>
    )
}

export default BookNow;
