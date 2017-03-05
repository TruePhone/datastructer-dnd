function BinaryNode(value) {
    if (!arguments.length)
        this.value = null;
    else
        this.value = value;
    this.leftChild = this.rightChild = null;


    this.getValue = function () {
        return this.value;
    }

    this.setValue = function (value) {
        this.value = value;
    }

    this.getLeftChild = function () {
        return this.leftChild;
    }

    this.setLeftChild = function (leftChild) {
        this.leftChild = leftChild;
    }

    this.getRightChild = function () {
        return this.rightChild;
    }

    this.setRightChild = function (rightChild) {
        this.rightChild = rightChild;
    }

    this.isLeaf = function () {
        return (leftChild == null) && (rc == null);
    }

}
function BinaryTree() {
    this.root = null;


    this.getRoot = function () {
        return this.root;
    }

    this.setRoot = function (root) {
        this.root = root;
    }

    var preorderHelp = function (root) {
        if (root == null)
            return;
        console.log(root.getValue());
        preorderHelp(root.getLeftChild());
        preorderHelp(root.getRightChild());
    }

    this.preorder = function () {
        preorderHelp(this.root);
    }

    var inorderHelp = function (root) {
        if (root == null)
            return;
        inorderHelp(root.getLeftChild());
        console.log(root.getValue());
        inorderHelp(root.getRightChild());
    }

    this.inorder = function () {
        inorderHelp(this.root);
    }

    var posterorderHelp = function (root) {
        if (root == null)
            return;
        posterorderHelp(root.getLeftChild());
        posterorderHelp(root.getRightChild());
        console.log(root.getValue());
    }

    this.posterorder = function () {
        posterorderHelp(this.root);
    }

    var getHeightHelp = function (root) {
        if (root == null)
            return 0;
        return 1 + Math.max(getHeightHelp(root.getLeftChild()), getHeightHelp(root.getRightChild()))
    }

    this.getHeight = function () {
        return getHeightHelp(this.root);
    }

    var getCountHelp = function (root) {
        if (root == null)
            return 0;
        return 1 + getCountHelp(root.getLeftChild()) + getCountHelp(root.getRightChild());

    }

    this.getCount = function () {
        return getCountHelp(this.root);
    }

    this.buildRandomTreeHelp = function (value) {
        if (this.root == null) {
            this.root = new BinaryNode(value);
            return;
        }
        var current = this.root;
        var BUILD_LEFT_CHILD = 0;
        var BUILD_RIGHT_CHILD = 1;
        while (current != null) {
            if (Math.round(Math.random()) == BUILD_LEFT_CHILD) {
                if (current.getLeftChild() != null)
                    current = current.getLeftChild();
                else {
                    current.setLeftChild(new BinaryNode(value));
                    break;
                }
            }
            else {
                if (current.getRightChild() != null)
                    current = current.getRightChild();
                else {
                    current.setRightChild(new BinaryNode(value));
                    break;
                }
            }
        }
    }

    function getRandomInteger(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.buildRandomTree = function (nodeCount, max, min) {
        for (var i = 0; i < nodeCount; i++)
            this.buildRandomTreeHelp(getRandomInteger(max, min));
    }

}


var tree = new BinaryTree();
tree.buildRandomTree(10, 1, 100);
console.log("前序遍历：");
tree.preorder();
console.log("中序遍历：");
tree.inorder();
console.log("后序遍历：");
tree.posterorder();
console.log("树的高度：");
console.log(tree.getHeight());
console.log("节点的个数：");
console.log(tree.getCount());