'use client';
import { Navigation } from '@/components/Navigation';
import React, { createContext, useState } from 'react';
import '@/app/globals.css';

export const WalletContext = createContext();

// Layout Component
export default function RootLayout({ children }) {
	const [wallet, setWallet] = useState();

	return (
		<html lang='en'>
			<body className='flex flex-col'>
				<WalletContext.Provider value={{ wallet, setWallet }}>
					<Navigation />
					{children}
				</WalletContext.Provider>
			</body>
		</html>
	);
}
