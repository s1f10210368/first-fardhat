pragma solidity ^0.8.19;

// import "hardhat/console.sol";

contract Counter {
    uint private _count;

    constructor(uint initial_value) {
        _count = initial_value;
    }

    function increment() public {
        _count++;
    }

    function getCount() public view returns(uint) {
        return _count;
    }
}
