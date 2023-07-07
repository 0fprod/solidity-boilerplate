import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const greeting = await ethers.deployContract("Greeting")
  await greeting.waitForDeployment();
  console.log(` # Contract Greeting deployed to: ${await greeting.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
