const keccak256 = require("keccak256");
const {MerkleTree} = require("merkletreejs");
list = [1,2];
const leaves = list.map(x=> keccak256(x));
const tree = new MerkleTree(leaves, keccak256, {sortPairs:true});
const leaf = keccak256(1);
const proof = tree.getHexProof(leaf);
console.log(proof, "proof");