class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class BinarySearchTree {

    constructor() {
        this.size = 0;
        this.tree = null
    }

    isEmpty() {
        return this.tree === null;
    }


    insertWithRecursion(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.tree = node;
        } else {
            this.insertNode(this.tree, node)
        }

        this.size++
    }



    insertNode(tree, node) {
        if(tree.value === node.value) return node.value;
        if(tree.value > node.value) {
            if(tree.left === null){
                tree.left = node;
            } else {
                this.insertNode(tree.left, node)
            }
        } else {
            if (tree.right === null){
                tree.right = node;
            } else {
                this.insertNode(tree.right, node)
            }
        }
    }

    search(value) {
        if(this.isEmpty()) {
            return "No search value";
        }

        return this.searchNode(this.tree, value)
    }

    searchNode(tree, value) {
        if(value === tree.value) {
            return tree;
        }

        if ((tree.value > value) && tree.left) {
           return this.searchNode(tree.left, value)
        }

        if ((tree.value < value) && tree.right) {
            return this.searchNode(tree.right, value)
        }

        return "No search value"
    }


    preOrder(tree = this.tree, result = []) {
        if (tree) {
            result.push(tree.value);
            this.preOrder(tree.left, result);
            this.preOrder(tree.right, result)
        }
        return result
    }

    inOrder(tree = this.tree, result = []) {
        if(tree) {
            this.inOrder(tree.left, result);
            result.push(tree.value);
            this.inOrder(tree.right, result);
        }
        return result;
    }


    postOrder(tree = this.tree, result = []) {
        if(tree) {
            this.inOrder(tree.left, result);
            this.inOrder(tree.right, result);
            result.push(tree.value);
        }
        return result;
    }

    levelOrder(tree = this.tree, queue = [], result = []) {
        queue.push(tree);
        while (queue.length) {
            const curr = queue.shift();
            result.push(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
        return result;
    }

    findMin() {
        let tree = this.tree;

        while (tree.left) {
            tree = tree.left
        }
        return tree.value
    }

    findMax() {
        let tree = this.tree;

        while (tree.right) {
            tree = tree.right
        }
        return tree.value
    }

    checkAndRemove(tree, value) {
        if(tree) {
            if (tree.value === value) {

                if (!tree.left && !tree.right) {
                    return null;
                }

                if (!tree.left && tree.right) {
                    return tree.right;
                }

                if (!tree.right && tree.left) {
                    return tree.left;
                }

                tree.left.right = tree.right;
                return tree.left;
            }
        }

        return tree;
    }

    remove(value, tree = this.tree) {
        if(tree) {
           tree.left = this.checkAndRemove(tree.left, value);
           tree.right = this.checkAndRemove(tree.right, value);

            if (tree.value > value) {
                this.remove(value, tree.left)
            }

            if (tree.value < value) {
                this.remove(value, tree.right)
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insertWithRecursion(10);
tree.insertWithRecursion(5);
tree.insertWithRecursion(3);
tree.insertWithRecursion(7);
tree.insertWithRecursion(15);
tree.insertWithRecursion(13);
tree.insertWithRecursion(18);
tree.insertWithRecursion(1);
console.log(tree.search(20))
console.log(tree.preOrder())
console.log(tree.inOrder());
console.log(tree.postOrder());
console.log(tree.levelOrder());
console.log(tree.findMin());
console.log(tree.findMax());
console.log(tree.levelOrder());
tree.remove(7)
tree.remove(5)
tree.remove(5)
console.log(tree.levelOrder());

