import { connect, keyStores, KeyPair, utils } from 'near-api-js';

export async function useLogin(privKey, accountId) {
	const myKeyStore = new keyStores.InMemoryKeyStore();
	const keyPair = KeyPair.fromString(privKey);
	await myKeyStore.setKey('testnet', accountId, keyPair);

	const connectionConfig = {
		networkId: 'testnet',
		keyStore: myKeyStore,
		nodeUrl: 'https://rpc.testnet.near.org',
		walletUrl: 'https://testnet.mynearwallet.com/',
		helperUrl: 'https://helper.testnet.near.org',
		explorerUrl: 'https://testnet.nearblocks.io',
	};
	const nearConnection = await connect(connectionConfig);
	return nearConnection;
}

// Investors send money to us
export function investMoney(nearConnection, amount) {
	nearConnection.sendMoney();
}

export function toYoctoNear(near) {
	return utils.format.parseNearAmount(near);
}
