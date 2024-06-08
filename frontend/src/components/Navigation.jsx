'use client';
import { useEffect, useState } from 'react';

import InvestMoney from './InvestMoney';

export function Navigation() {
	const [label, setLabel] = useState('Login');

	return (
		<nav className='flex flex-row justify-end w-full p-2'>
			<InvestMoney />
			<button className='bg-blue-500'> {label} </button>
		</nav>
	);
}
