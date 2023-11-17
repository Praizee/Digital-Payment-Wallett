import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ScrollButton from '../Components/ScrollToTop/ScrollToTop';
import Navbar from '../Components/Navbar/Navbar';
import { SidebarWithSearch } from '../Components/SideBarMenu/SideBarMenu';

import { useAppContext } from '../Context/AppContext'; // Updated import to useAppContext
import Footer from '../Components/Footer/Footer';


const AuthenticatedLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useAppContext(); // Updated to useAppContext  // Access user and loading from the context

  // Handle redirect when user is not authenticated
  useEffect(() => {
    if (loading) {
      // If still loading, show a loading indicator or a message
      return;
    }

    //  kinda useless...makes the user unable to login at first, unless they try again
    // if (!user) {
    //   // If the user is not authenticated, redirect to the login page
    //   console.log('User is not authenticated. Redirecting to login page.');
    //   alert('User is not authenticated. Redirecting to login page.')
    //   navigate('/');
    // }
  }, [loading, user, navigate]);

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowSidebar(true); // Show the sidebar for screens wider than or equal to 768px
    }
  };

  // Add a resize event listener to the window
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially
    handleResize();

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <section>
      <div className="flex h-screen">
        {user && !loading && <Navbar toggleSidebar={toggleSidebar} />} {/* Render the Navbar only when user is authenticated and not loading */}

        <div className="flex-1 flex overflow-hidden">
          <div className="mt-[5.5rem] h-auto overflow-y-auto">
            {user && !loading && <SidebarWithSearch showSidebar={showSidebar} />} {/* Render the Sidebar only when user is authenticated and not loading */}
          </div>

          <main className="flex-1 overflow-x-auto overflow-y-auto bg-[#F6F6F6] dark:bg-gray-900">
            <div className="container mx-auto px-3 tablet:px-6 pt-8">
              <Outlet />
              {user && !loading && <Footer />}
            </div>
          </main>
        </div>

        <ScrollButton />
      </div>
    </section>
  );
};

export default AuthenticatedLayout;