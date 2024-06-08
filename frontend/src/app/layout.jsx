'use client';

import { useEffect, useState } from 'react';
import { NearContext } from '@/context';
import { Navigation } from '@/components/Navigation';
import { NetworkId, HelloNearContract } from '@/config';
import { Wallet } from '@/wallets/near';
import '@/app/globals.css';

const wallet = new Wallet({
	networkId: NetworkId,
	createAccessKeyFor: HelloNearContract,
});

// Layout Component
export default function RootLayout({ children }) {
	const [signedAccountId, setSignedAccountId] = useState('');

	useEffect(() => {
		wallet.startUp(setSignedAccountId);
	}, []);

	return (
		<html lang='en'>
			<body className='flex flex-col'>
				<NearContext.Provider value={{ wallet, signedAccountId }}>
					<Navigation />
					{children}
				</NearContext.Provider>
			</body>
		</html>
	);
}
