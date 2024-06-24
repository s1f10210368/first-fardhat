pragma solidity ^0.8.19;

import "hardhat/console.sol";

contract Counter {
    uint private _count;

    constructor(uint initial_value) {
        _count = initial_value;
    }

    function increment() public payable {
        require(msg.value == 1, "You have to pay 1 wei to increment.");
        _count++;
    }

    function decrement() public payable {
        _count--;
        msg.sender.transfer(1);
    }

    function getCount() public view returns(uint) {
        return _count;
    }
}
