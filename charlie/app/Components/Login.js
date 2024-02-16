import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from "react-icons/ai";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 5,
    p: 4,
};
const inputStyle = {
    // marginTop: "5px",
    marginBottom: "5px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    width: "100%",
};

const Login = ({ onClose, onClick }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const handleSignUpClick = () => {
        setShowSignUp(true);
        setShowLogin(false);
    };

    const handleLoginClick = () => {
        setShowSignUp(false);
        setShowLogin(true);
    };

    return (
            <div>
                <Button
                    className="text-white"
                    onClick={handleOpen}>
                    Account
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
                    <Box sx={style} className="bg-black text-white">
                        <div className='d-flex'>
                            <div className=''>
                                <h6>Login & Signup </h6>
                            </div>
                            <div
                                className='ml-auto'
                                onClick={handleClose}>
                                <AiOutlineClose size={"20px"} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between py-2 pb-4'>
                            <button onClick={handleLoginClick} className={showLogin ? 'underline' : ''}>Login</button>
                            <button onClick={handleSignUpClick} className={showSignUp ? 'underline' : ''}>Signup</button>
                        </div>
                        {showLogin && (
                            <div className='login '>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        placeholder="Your Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={inputStyle}
                                    />
                                    <input
                                        type="password"
                                        id="pwd"
                                        value={password}
                                        placeholder="Enter Password"
                                        minLength="6"
                                        maxLength="10"
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={inputStyle}
                                    />
                                    <p className='text-end'>Forgot Password?</p>
                                </div>
                                <div
                                    className="bg-black text-white text-center rounded-md "
                                    style={inputStyle}
                                >
                                    Login
                                </div>
                            </div>
                        )}
                        {showSignUp && (
                            <div className='signup'>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    placeholder="Enter Your Name"
                                    onChange={(e) => setName(e.target.value)}
                                    style={inputStyle}
                                />
                                <input
                                    type="text"
                                    name="numonly"
                                    id="phone"
                                    value={phone}
                                    placeholder="Enter Your Phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                    inputMode="numeric"
                                    style={inputStyle}
                                />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    placeholder="Your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={inputStyle}
                                />
                                <input
                                    type="password"
                                    id="pwd"
                                    value={password}
                                    placeholder="Enter Password"
                                    minLength="6"
                                    maxLength="10"
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={inputStyle}
                                />
                                <div
                                    className="bg-black text-white text-center rounded-md  "
                                    style={inputStyle}
                                >
                                    Register
                                </div>
                            </div>
                        )}
                    </Box>
                </Modal>
            </div>
    )
}

export default Login;
