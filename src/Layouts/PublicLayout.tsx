import { FC } from "react"
import { Outlet } from "react-router-dom";


const PublicLayout: FC = () => {
    return (
        <section>

            <div className="">
                <Outlet />
            </div>
        </section>
    );
};

export default PublicLayout;
