function BinaryNode(value, leftChild, rightChild) {
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
    this.getHeight = function (root) {
        if (root == null)
            return 0;
        return 1 + Math.max(this.getHeight(root.getLeftChild()), this.getHeight(root.getRightChild()))
    }

    this.getCount = function () {
        return nodeCount;
    }
}
function BST() {
    this.root = null;

    var findhelp = function (root, value) {
        if (root == null)
            return false;
        else if (value < root.getValue())
            return findhelp(root.getLeftChild(), value);
        else if (value > root.getValue())
            return findhelp(root.getRightChild(), value);
        else
            return true;
    }

    this.find = function (value) {
        return findhelp(this.root, value);
    }

    var inserthelp = function (root, value) {
        if (root == null)
            return new BinaryNode(value);
        else if (value < root.getValue())
            root.setLeftChild(inserthelp(root.getLeftChild(), value));
        else
            root.setRightChild(inserthelp(root.getRightChild(), value));
        return root;
    }

    this.insert = function (value) {
        this.root = inserthelp(this.root, value);
    }

    var deletemin = function (root, removeNode) {
        if (root.getLeftChild() == null) {
            removeNode.setValue(root.getValue());
            return root.getRightChild();
        } else {
            root.setLeftChild(deletemin(root.getLeftChild(), removeNode));
            return root;
        }
    }

    var removeSuccess = false;

    var removehelp = function (root, value) {
        if (root == null)
            return null;
        else if (value < root.getValue())
            root.setLeftChild(removehelp(root.getLeftChild(), value));
        else if (value > root.getValue())
            root.setRightChild(removehelp(root.getRightChild(), value));
        else {
            removeSuccess = true;
            if (root.getLeftChild() == null)
                root = root.getRightChild();
            else if (root.getRightChild() == null)
                root = root.getLeftChild();
            else {
                root.setRightChild(deletemin(root.getRightChild(), root))
            }
        }
        return root;
    }

    this.remove = function (value) {
        removeSuccess = false;
        this.root = removehelp(this.root, value);
        return removeSuccess;
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

    function getRandomInteger(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.buildRandomBST = function (nodeCount, max, min) {
        for (var i = 0; i < nodeCount; i++)
            this.insert(getRandomInteger(max, min));
    }
}

var tree = new BST();
tree.buildRandomBST(10, 1, 100);
tree.insert(50);
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
console.log("是否找到50：");
console.log(tree.find(50));
console.log("是否成功删除50：");
console.log(tree.remove(50));
console.log("是否找到50：");
console.log(tree.find(50));
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