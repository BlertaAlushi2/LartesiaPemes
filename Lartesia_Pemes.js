
class BTNode {
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value){
        this.root = new BTNode(value);
    }
}

btnode = new BTNode(2);

bstnode = new BST(1);

bstnode.root.left= btnode;
bstnode.root.right=new BTNode(3);
bstnode.root.left.left=new BTNode(4);
bstnode.root.left.right=new BTNode(5);
bstnode.root.right.left=new BTNode(6);
bstnode.root.right.right=new BTNode(7);
bstnode.root.right.right.left=new BTNode(8);
bstnode.root.right.right.right=new BTNode(9);

console.log(bstnode.root);

function height(bstnode){
    if(bstnode == null){
        return 0;
    }
    return 1 + Math.max(height(bstnode.left), height(bstnode.right));
}

console.log(height(bstnode.root));


