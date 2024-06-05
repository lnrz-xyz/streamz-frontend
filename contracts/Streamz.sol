// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Streamz is ERC20, ERC20Burnable, ERC20Permit, Ownable {
    constructor(
        address initialOwner
    ) ERC20("Streamz", "STRM") ERC20Permit("Streamz") Ownable(initialOwner) {
        _mint(msg.sender, 4_200_000_000 * 10 ** decimals());
    }
}
