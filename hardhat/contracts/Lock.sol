// SPDX-License-Identifier: UNLICENSED
// Import this file to use console.log
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract Lock {
    uint256 public unlockTime;
    address payable public owner;
    mapping(address => uint256) public balance;
    event Withdrawal(uint256 amount, uint256 when);

    constructor(uint256 _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function deposit() public payable {
        require(block.timestamp < unlockTime, "Lock is already expired");
        balance[msg.sender] += msg.value;
    }

    function withdraw() public {
        // Uncomment this line to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
