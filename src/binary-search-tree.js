const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require('../extensions/list-tree.js');


/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor(){
    this._root = null;
  }
  root() {
    return this._root;
   
  }

  add(data) {
    const node = new Node(data)
   if(!this._root){
    this._root = node;
    return;
   }
    let currentNode = this._root;
    while(currentNode){
      if(node.data < currentNode.data){
        if(!currentNode.left){
          currentNode = node;
          return;
        }
        currentNode = currentNode.left;
      } else{
        if(!currentNode.right){
          currentNode = currentNode.right;
          return;
        }
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
};
