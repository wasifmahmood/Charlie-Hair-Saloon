import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

export const HeaderDrawer = ({ isOpen, onClose }) => {
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={onClose}
            onKeyDown={onClose}
        >
            <Divider />
            <div className="text-center pt-5 text-lg text-wrap">
                <h5>About</h5>
                <h5>Location</h5>
                <h5>Services</h5>
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
