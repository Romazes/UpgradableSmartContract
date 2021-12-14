const { ethers, upgrades } = require("hardhat");

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const boxProxy = await upgrades.upgradeProxy("0xF1b6F87A7Ae5dA7018D1333C34134C731E22b71e", BoxV2)
    console.log("BoxProxy deployed to:", boxProxy.address);
}

main() 
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    });