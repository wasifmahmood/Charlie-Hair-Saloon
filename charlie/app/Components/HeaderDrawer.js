'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Link from "next/link";


export const HeaderDrawer = ({ isOpen, onClose }) => {

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={onClose}
            onKeyDown={onClose}
        >
            <Divider />
            <div className="text-center pt-5 " style={{ textDecoration: 'none' }}>
                <h1> <Link href={"/About"}>About</Link></h1>
                <h1> <Link href={"/Location"}>Location</Link></h1>
                <h1> <Link href={"/Service"}>Service</Link></h1>
                <h1> <Link href={"/Page"}>page</Link></h1>
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
