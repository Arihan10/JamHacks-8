'use client';
import { useEffect, useState, useContext } from 'react';
import { useLogin } from '../../lib/near';
import { WalletContext } from '@/app/layout';
import InvestMoney from './InvestMoney';

export function Navigation() {
	const [label, setLabel] = useState('Login');
	const { wallet, setWallet } = useContext(WalletContext);

	async function login() {
		const walletConnection = await useLogin();
		if (walletConnection.isSignedIn()) {
			setLabel('Logged in');
			setWallet(walletConnection);
		}
	}

	useEffect(() => {
		if (!wallet) {
			// login();
		}
	}, []);

	return (
		<nav className='flex flex-row justify-end w-full p-2'>
			<InvestMoney />
			<button className='bg-blue-500' onClick={login}>
				{' '}
				{label}{' '}
			</button>
		</nav>
	);
}
