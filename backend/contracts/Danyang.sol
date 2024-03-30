// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Danyang is ERC721, EIP712, ERC721Votes, ReentrancyGuard, Ownable {
    uint public constant price = 0.01 ether;
    bool public saleStatus = true;
    uint256 private _nextTokenId;
    string private baseURI;
    string private _joinCode;

    constructor(address initialOwner, string memory initialBaseURI, string memory initialJoinCode)
        ERC721("Danyang", "ESDY")
        EIP712("Danyang", "1")
        Ownable(initialOwner)
    { 
        baseURI = initialBaseURI;
        _joinCode = initialJoinCode;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    // 다음 함수들은 사용자와 상호작용하는 함수들입니다.

    function buy() public payable {
        require(saleStatus, "Danyang: Not on sale now");
        require(balanceOf(_msgSender())==0, "Danyang: Already have Danyang NFT");
        require(msg.value >= price, "Danyang: Not enough balance to buy");
        uint256 tokenId =_nextTokenId++;

        _safeMint(_msgSender(), tokenId);
    }

    function isDamin() public view returns (bool) {
        if (balanceOf(msg.sender)==1) return true;
        else return false;
    }

    function getJoinCode() public view returns (string memory) {
        require(balanceOf(msg.sender)==1, "Danyang: Not a Damin");
        return _joinCode;
    }
    
    // 다음 함수들은 owner만 사용할 수 있습니다.

    function updateBaseURI(string calldata baseURI_) external onlyOwner {
        baseURI = baseURI_;
    }
    
    function updateJoinCode(string calldata joinCode_) external onlyOwner {
        _joinCode = joinCode_;
    }
    
    function updateSaleStatus(bool _saleStatus) external onlyOwner {
        saleStatus = _saleStatus;
    }

    function withdraw() public payable onlyOwner nonReentrant {
        uint balance = address(this).balance;
        require(balance > 0, "No Ether left to withdraw");
        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }

    // The following functions are overrides required by Solidity.

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Votes)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Votes)
    {
        super._increaseBalance(account, value);
    }
}