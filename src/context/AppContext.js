import React, { useRef, useState, useEffect, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	useEffect(() => {
		return () => {
			window.removeEventListener('scroll', () => stickyNavigation);
		};
	}, []);

	const [isSticky, setSticky] = useState(false);
	const [isShowX, setShowX] = useState(false);

	const stickyRef = useRef(null);

    const stickyNavigation = () => {
		const nav = stickyRef.current.getBoundingClientRect().bottom - 750;
		console.log('navTop = ' + nav);
		console.log('scrollY = ' + window.scrollY);
		(window.scrollY >= nav) ? setSticky(true): setSticky(false);

    }

	const showHandleHamburger = () => {
		setShowX(showX => !showX);
	}

	window.addEventListener('scroll', stickyNavigation);

	return (
		<AppContext.Provider value={{ stickyRef, isSticky, isShowX, showHandleHamburger }}>
			{children}
		</AppContext.Provider>
	);
};