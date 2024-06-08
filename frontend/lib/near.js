import * as nearAPI from 'near-api-js';
const { connect, keyStores, WalletConnection, utils } = nearAPI;

export async function useLogin() {
	const connectionConfig = {
		networkId: 'testnet',
		keyStore: new keyStores.BrowserLocalStorageKeyStore(),
		nodeUrl: 'https://rpc.testnet.near.org',
		walletUrl: 'https://testnet.mynearwallet.com/',
		helperUrl: 'https://helper.testnet.near.org',
		explorerUrl: 'https://testnet.nearblocks.io',
	};

	// connect to NEAR
	const nearConnection = await connect(connectionConfig);

	// create wallet connection
	const walletConnection = new WalletConnection(nearConnection, 'bitch');
	if (walletConnection.isSignedIn()) {
		return walletConnection;
	}
	walletConnection.requestSignIn({
		contractId: 'example-contract.testnet',
		methodNames: [], // optional
		successUrl: 'http://localhost:3000/profile', // optional redirect URL on success
		failureUrl: 'http://localhost:3000/helpme', // optional redirect URL on failure
	});
	return walletConnection;
}

// Investors send money to us
export function investMoney(wallet, amount) {
	const walletAccountObj = wallet.account();

	(async () => {
		await walletAccountObj.sendMoney(
			'habibrahman.testnet',
			toYoctoNear(amount)
		);
		// The URL this redirects to will have the transaction hash
	})();
}

export function toYoctoNear(near) {
	return utils.format.parseNearAmount(near);
}
