'use client';

import { WalletContext } from '@/app/layout';
import { useContext } from 'react';
import { investMoney } from '../../lib/near';

// Sample button
export default function InvestMoney() {
	const { wallet } = useContext(WalletContext);

	function sendMoney() {
		investMoney(wallet, '5');
	}

	return (
		<div>
			<button onClick={sendMoney}>Send Money</button>
		</div>
	);
}
