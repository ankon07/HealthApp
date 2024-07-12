const hre = require("hardhat");

async function main() {
    // Fetching the byte code and ABI
    const Health = await hre.ethers.getContractFactory("HealthApp");

    // Deploying an instance of our smart contract
    const health = await Health.deploy();

    // Waiting for the contract to be deployed
    // await chai.deployed();
    // Waiting for the contract to be deployed
    await health.waitForDeployment();

    console.log("Deployed contract address:", await health.getAddress());

    // console.log("Deployed contract address:", chai.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });



    // contract address 0x6f1DC1612027A08b162a51273Da686a9B9e76eD

    //new adddress 0x5FbDB2315678afecb367f032d93F642f64180aa3