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
      if(data < currentNode.data){
        if(!currentNode.left){
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else{
        if(!currentNode.right){
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let currentNode = this._root;
    while (currentNode){
      if(data === currentNode.data) return currentNode;
      if(data < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return null;
  }

  remove(data) {
   this._root = this.removeCurrentNode(this._root,data);
  }
  removeCurrentNode(currentNode,data){
  
    if (currentNode === null) return currentNode;
    if (data < currentNode.data) {
      currentNode.left = this.removeCurrentNode(currentNode.left, data);
      return currentNode;
    } else if (data > currentNode.data) {
      currentNode.right = this.removeCurrentNode(currentNode.right, data);
      return currentNode;
    }

    if (currentNode.left === null) {
      return currentNode.right;
    } else if (currentNode.right === null) {
      return currentNode.left;
    }

    currentNode.data = this.miData(currentNode.right);
    currentNode.right = this.removeCurrentNode(currentNode.right, currentNode.data);
    return currentNode;
  }

  min() {
    return this.miData(this._root);
  }
miData(currentNode){
  let miNode = currentNode;
  while(miNode.left){
    miNode = miNode.left;
  }
  return miNode.data;
}
  max() {
    let miNode = this._root;
    while (miNode.right){
      miNode = miNode.right;
    }
    return miNode.data;
  }
};
