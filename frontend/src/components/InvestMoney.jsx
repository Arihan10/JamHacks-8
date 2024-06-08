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
		const final = await account.sendMoney(
			'habibrahman.testnet',
			toYoctoNear('1.5')
		);
		console.log(final);
		const transactionHash = final.transaction.hash;
		// Send transactionHash and update total monetary value in mongoDB
		// - in the user it should increase totla monetary value, in investor it should increase total investment
	}

	return (
		<div>
			<button onClick={sendMoney}>Invest Money</button>
		</div>
	);
}
