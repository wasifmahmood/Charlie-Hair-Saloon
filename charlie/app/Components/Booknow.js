import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from "react-icons/ai";
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';


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
    marginTop: "10px",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    width: "50%",

};

const BookNow = ({ onClose }) => {
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const options = [

        { value: 'Hair Cut', label: 'Hair Cut', Price: "100" },
        { value: 'Face Shave', label: 'Face Shave' },
        { value: 'beard-trim', label: 'Beard Trim' },
        { value: 'hair Styling', label: 'Hair Styling' },
        { value: 'Moustache Trim', label: 'Moustache Trim' },
        { value: 'Clipper Cut', label: 'Clipper Cut' },
        { value: 'Cleanser', label: 'Cleanser' },
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

    const appointmentBook = () => {
        if (name.length < 3 || name.length > 20) {
            alert('Please enter a name between 3 and 20 characters.');
            return;
        }
        if (phone.length < 11) {
            alert('Please enter a valid phone number with 11 digits.');
            return;
        }
        // Perform appointment booking logic here
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
                    <div className='d-flex text-white'>
                        <h3 className='font-black'>Book Appointment</h3>
                        <span className='ml-auto' onClick={handleClose}><AiOutlineClose size={"30px"} /></span>
                    </div>
                    <div className='items-center'>
                        <span className='flex gap-4'>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={inputStyle}
                                minLength="3"
                                maxLength="20"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                type='tel'
                                id='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                style={inputStyle}
                                maxLength="11"
                                placeholder="Your Phone Number"
                                required
                            />
                        </span>
                        <Select
                            options={options}
                            value={selectedService}
                            onChange={serviceChange}
                            placeholder="Select a service"
                            isMulti
                            required
                        />
                        <div style={inputStyle} className='place-content-center'>
                            <DateTimePicker
                                onChange={dateTimeChange}
                                value={selectedDateTime}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex justify-center pt-4'>
                        <button className='bg-black p-2 rounded text-white' onClick={appointmentBook}>MAKE AN APPOINTMENT</button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default BookNow;
