'use client';
import { toYoctoNear, useLogin } from '../../lib/near';

// Sample button
export default function InvestMoney() {
	async function sendMoney() {
		const privateKey =
			'ed25519:2MowWg9qrzFGc2RjzVzbbwhiufm3oZh98cTqMbeDDrECcHBrdyr6RYSduNjdfgisDC7usRjXipwE79ZUdyxYZXdk';
		const accountId = 'mohammadanwar.testnet';
		// retreive the above from mongodb

		const nearConnection = await useLogin(privateKey, accountId);
		const account = await nearConnection.account(accountId);
		await account.sendMoney('habibrahman.testnet', toYoctoNear('1.5'));
	}

	return (
		<div>
			<button onClick={sendMoney}>Send Money</button>
		</div>
	);
}
