import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeting", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContract() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const contractFactory = await ethers.getContractFactory("Greeting");
    const greeting = await contractFactory.deploy();

    return { greeting, owner, otherAccount };
  }

  it("Initializes with an empty message", async function () {
    const { greeting } = await loadFixture(deployContract);

    expect(await greeting.getMessage()).to.equal("");
  });

  it("Sets a new message", async function () {
    const { greeting } = await loadFixture(deployContract);

    await greeting.setMessage("Hello, world!");

    expect(await greeting.getMessage()).to.equal("Hello, world!");
  });

});
