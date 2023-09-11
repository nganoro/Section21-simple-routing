import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = (props) => {
    /** Outlet is where the child routes are rendered */
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;