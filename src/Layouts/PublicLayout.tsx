import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    return (
        <section>

            <div className="">
                <Outlet />
            </div>
        </section>
    );
};

export default PublicLayout;
