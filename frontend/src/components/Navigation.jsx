import { useEffect, useState, useContext } from 'react';
import { NearContext } from '@/context';

export const Navigation = () => {
	const { signedAccountId, wallet } = useContext(NearContext);
	const [action, setAction] = useState(() => {});
	const [label, setLabel] = useState('Loading...');

	useEffect(() => {
		if (!wallet) return;

		if (signedAccountId) {
			setAction(() => wallet.signOut);
			setLabel(`Logout ${signedAccountId}`);
		} else {
			setAction(() => wallet.signIn);
			setLabel('Login');
		}
	}, [signedAccountId, wallet]);

	return (
		<nav className='flex flex-row justify-end w-full p-2'>
			<button className='bg-blue-500' onClick={action}>
				{' '}
				{label}{' '}
			</button>
		</nav>
	);
};
