import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSideBarOpen(true);
    }


    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }


    const closeModal = () => {
        setIsModalOpen(false);
    }



    return (
        <AppContext.Provider
            value={{ isSidebarOpen, isModalOpen, openModal, closeModal, openSidebar, closeSideBar }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppContext, AppProvider };
