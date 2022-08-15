// SPDX-License-Identifier: UNLICENSED
// Import this file to use console.log
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract Lock2 {
    uint256 public unlockTime;
    address payable public owner;
    mapping(address => uint256[]) public addressLocks;
    mapping(uint256 => Lock) public locks;
    uint256 public lastId = 0;

    event Withdrawal(uint256 amount, uint256 when, uint256 lockId);

    struct Lock {
        uint256 balance;
        uint256 unlockTime;
        address owner;
        uint256 id;
    }

    constructor(uint256 _unlockTime, string memory banana) {
        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function createLock() public payable {
        require(msg.value > 0, "!value");
        Lock memory lock = Lock(
            msg.value,
            block.timestamp + unlockTime,
            msg.sender,
            lastId
        );

        console.log(lock.balance);
        locks[lastId] = lock;
        addressLocks[msg.sender].push(lastId);
        lastId++;
    }

    function deposit(uint256 lockId) public payable {
        require(
            block.timestamp < locks[lockId].unlockTime,
            "Lock is already expired"
        );
        require(locks[lockId].owner == msg.sender, "!owner");
        require(msg.value > 0, "!value");
        locks[lockId].balance += msg.value;
    }

    function withdraw(uint256 lockId) public {
        // Uncomment this line to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);
        Lock memory lock = locks[lockId];
        require(block.timestamp >= lock.unlockTime, "You can't withdraw yet");
        require(msg.sender == lock.owner, "You aren't the owner");
        require(lock.balance > 0, "You can't withdraw 0");
        emit Withdrawal(lock.balance, block.timestamp, lockId);
        locks[lockId].balance = 0;
        payable(msg.sender).transfer(lock.balance);
    }
}
