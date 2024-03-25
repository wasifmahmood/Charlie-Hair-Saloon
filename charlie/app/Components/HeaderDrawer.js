import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import About from "../pages/About/About";
import Location from "../pages/Location/Location";
import Service from "../pages/Service/Service";
import { useNavigate } from "react-router-dom";

export const HeaderDrawer = ({ isOpen, onClose }) => {
    // const navigate = useNavigate();

    const aboutClick = () => {
        navigate('/About');
    };
    const locationClick = () => {
        navigate('/Location');
    };
    const serviceClick = () => {
        navigate('/Service');
    };
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={onClose}
            onKeyDown={onClose}
        >
            <Divider />
            <div className="text-center pt-5 text-lg text-wrap">
                <h5 onClick={aboutClick}>About</h5>
                <h5 onClick={locationClick}>Location</h5>
                <h5 onClick={serviceClick}>Services</h5>
                <h5>Contact</h5>
            </div>
        </Box>
    );

    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={onClose}
        >
            {list}
        </Drawer>
    );
};
