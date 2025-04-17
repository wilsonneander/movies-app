"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "../types/movie";

interface ModalContextType {
    isOpen: boolean;
    movieData?: Movie;
    openModal: (data: Movie) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [movieData, setMovieData] = useState<Movie>();

    const openModal = (data: Movie) => {
        setMovieData(data);
        setIsOpen(true)
    };
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, movieData }}>
            {children}
        </ModalContext.Provider>
    );
};
