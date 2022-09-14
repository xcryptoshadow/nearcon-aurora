const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_oracle",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_weth",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IndexSwap",
				"name": "_index",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "t",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "_getTokenAmountInBNB",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountInBNB",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ASSET_MANAGER_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IndexSwap",
				"name": "_index",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "tokenBalanceInBNB",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "vaultBalance",
				"type": "uint256"
			}
		],
		"name": "calculateSwapAmounts",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IndexSwap",
				"name": "_index",
				"type": "address"
			}
		],
		"name": "getTokenAndVaultBalance",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenXBalance",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "vaultValue",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export { abi }