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

## References

- [YouTube Tutorial: Code a Web 3.0 Game in 1 Hour Step-by-Step](https://youtu.be/ZjQzxXhebVc)
- [Original GitHub repo](https://github.com/dappuniversity/Runner-blockchain-game-)

### Polygon Mumbai (Testnet) Facuets

- https://faucet.polygon.technology/
- https://mumbaifaucet.com/
- https://faucet.paradigm.xyz/ (require twitter account with 50+ followers)