// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Danyang is ERC721, Ownable {
    uint256 private _tokenId;
    uint public constant price = 0.01 ether;
    bool private _saleStatus = true;
    string private _joinCode = "abcd1234";

    constructor(address initialOwner) ERC721("Danyang", "DYM") Ownable(initialOwner) { }

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/QmeExEYoftvbYQvQWhCMdVgua1MARtyQbDUVVP99sUG8dC?filename=%EC%9D%B4%EB%B0%A9%EC%9A%B4_%EB%8F%84%EB%8B%B4%EC%82%BC%EB%B4%89.jpg";
    }

    function isOnSale() public view returns (bool) {
        return _saleStatus;
    }

    function updateSaleStatus(bool saleStatus_) public onlyOwner {
        _saleStatus = saleStatus_;
    }

    function getJoinCode(uint256 tokenId) public view returns (string memory) {
        require(msg.sender==ownerOf(tokenId), "Danyang: Not your token");
        return _joinCode;
    }
    
    function updateJoinCode(string memory joinCode_) public onlyOwner {
        _joinCode = joinCode_;
    }

    function buyNFT() public payable {
        require(_saleStatus, "Danyang: Not on sale now");
        require(msg.value >= price, "Danyang: Not enough balance to buy");
        _tokenId++;
        uint256 tokenId = _tokenId;

        _safeMint(msg.sender, tokenId);
    }

    function withdraw() public payable onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "No Ether left to withdraw");
        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }
}