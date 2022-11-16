# Web3 Runner Game (Vanilla JS)

Someone's on the run. What happened?

## Adding metadata

Use [Pinata](https://www.pinata.cloud/) or other services to upload images and metadata to IPFS.

First, upload `images`. 
Then use the [CID/link of images](https://gateway.pinata.cloud/ipfs/QmbJ4icWrct7uC7vLwNzrQewXEf34LqnHpLi2Rtu7sy38W/) to input into `json` files.

Next, upload completed `json` files. 
Then use the CID/link of metadata to input into RunnerCollection.sol constructor argument.

## Deploying the smart contracts

`RunnerCollection.sol` requires 3 arguments in constructor:
1. "Name"
2. "SYMBOL"
3. "`https://ipfs.io/ipfs/example-url-here/`" // Link to the folder containing JSON metadata files

```
"Runner",
"RUN",
"https://gateway.pinata.cloud/ipfs/QmXGqNS7w9qcss9eRbViJe3FUJJy9vBgNWQ2b2mvuzHB7h/"
```

### Deploying - the easiest way

Use [Remix](https://remix.ethereum.org/), copy your contracts in, compile, and deploy.

### Deploying - the hardhat way

Setup Hardhat like recommended in the [video (from about 30m 30s)](https://youtu.be/ZjQzxXhebVc?t=1823).

### Deployed contracts and transactions

- [TX #1](https://mumbai.polygonscan.com/tx/0x7503996f402e0870b25c882fb27677238fa66a3deee511082b9d8bf5124a5ad0): [RunToken Contract](https://mumbai.polygonscan.com/address/0x729b0845f63c9ea57de0b194ecec453c19c7206d)
- [TX #2](https://mumbai.polygonscan.com/tx/0xb7cd94cd3f856d925c745a354b733330285aa21c7a00db499a90e46cb38f4b82): [RunnerCollection Contract](https://mumbai.polygonscan.com/address/0xd06aa67849b3eeb12d52683b95af271724c094a0)
- [TX #3](https://mumbai.polygonscan.com/tx/0x95eff3f79e5f7ef12edfcb7995cdc823cb1dfa8ac50557913b716759e23f84a2): [Mint Run Tokens](https://mumbai.polygonscan.com/token/0x729b0845f63c9ea57de0b194ecec453c19c7206d)
- [TX #4](https://mumbai.polygonscan.com/tx/0xec0d6e630e23ef5822b4601a548ff6edb7b965cd98d2f7736edb67f205fb9842): [Mint RUN NFTs](https://mumbai.polygonscan.com/token/0xd06aa67849b3eeb12d52683b95af271724c094a0)

To view your NFTs, head to [OpenSea Testnets](https://testnets.opensea.io/), sign-in with metamask, and [view your profile](https://testnets.opensea.io/account).

E.g. https://testnets.opensea.io/0xC1599513431405b231263516fe554fFd492A5bF2

## References

- [YouTube Tutorial: Code a Web 3.0 Game in 1 Hour Step-by-Step](https://youtu.be/ZjQzxXhebVc)
- [Original GitHub repo](https://github.com/dappuniversity/Runner-blockchain-game-)

### Polygon Mumbai (Testnet) Facuets

- https://faucet.polygon.technology/
- https://mumbaifaucet.com/
- https://faucet.paradigm.xyz/ (require twitter account with 50+ followers)