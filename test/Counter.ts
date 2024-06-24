import { assert } from "chai";
import { ethers } from "hardhat";
import { Counter } from "../typechain-types";

describe('Counter Test', function() {
	let counterContract: Counter;
	
	beforeEach(async ()=> {
		// コントラクトを指定してFactoryを取り出す
		let counterContractFactory = await ethers.getContractFactory("Counter");
		// コントラクトのデプロイ
		counterContract = await counterContractFactory.deploy(0);
	});
	
	it("can increment the counter", async function () {
        assert.equal(await counterContract.getCount(), BigInt(0));
        await counterContract.increment({value: 1});
        assert.equal(await counterContract.getCount(), BigInt(1));
        // コントラクトの残高が1weiになっていることを確認
        assert.equal(await ethers.provider.getBalance(await counterContract.getAddress()), BigInt(1));
    });
})
