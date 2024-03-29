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

    constructor(address initialOwner)
        ERC721("Danyang", "ESDY")
        EIP712("Danyang", "1")
        Ownable(initialOwner)
    { }

    /* @dev set 함수는 배포 후 초기 세팅이 필요합니다.
     * 추후 update시 에도 사용할 수 있습니다.
     */
    function setBaseURI(string calldata baseURI_) external onlyOwner {
        baseURI = baseURI_;
    }
    
    function setJoinCode(string calldata joinCode_) external onlyOwner {
        _joinCode = joinCode_;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function updateSaleStatus(bool _saleStatus) external onlyOwner {
        saleStatus = _saleStatus;
    }

    function getJoinCode(uint256 tokenId) public view returns (string memory) {
        require(msg.sender==ownerOf(tokenId), "Danyang: Not your token");
        return _joinCode;
    }

    function buy() public payable {
        require(saleStatus, "Danyang: Not on sale now");
        require(msg.value >= price, "Danyang: Not enough balance to buy");
        uint256 tokenId =_nextTokenId++;

        _safeMint(_msgSender(), tokenId);
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