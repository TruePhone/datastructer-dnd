function Link(elem, next) {
    if (!arguments.length) {
        this.elem = null;
        this.next = null;
    } else {
        this.elem = elem;
        this.next = next;
    }
}

function LinkedList() {
    this.current = this.tail = this.head = new Link();
    this.length = 0;

    this.insert = function (position, elem) {
        if ((position < 0) || (position > this.length)) {
            console.log("位置超出范围");
            return;
        }
        this.moveToPosition(position);
        this.current.next = new Link(elem, this.current.next);
        if (this.current == this.tail)
            this.tail = this.current.next;
        this.length++;
    }

    this.append = function (elem) {
        this.tail = this.tail.next = new Link(elem, null);
        this.length++;
    }

    this.clear = function () {
        while (this.head != null) {
            var temp = this.head;
            this.head = this.head.next;
            temp = null;
        }
        this.current = this.tail = this.head = new Link();
        this.length = 0;
    }

    this.remove = function (position) {
        if ((position < 0) || (position > this.length) || (position == this.length)) {
            console.log("位置超出范围");
            return;
        }
        this.moveToPosition(position);
        var elem = this.current.next.elem;
        var temp = this.current.next;
        if (this.tail == this.current.next)
            this.tail = this.current;
        this.current.next = temp.next;
        temp = null;
        this.length--;
        return elem;
    }

    this.update = function (position, elem) {
        if ((position < 0) || (position > this.length) || (position == this.length)) {
            console.log("位置超出范围");
            return;
        }
        this.moveToPosition(position);
        this.current.next.elem = elem;
    }

    this.get = function (position) {
        if ((position < 0) || (position > this.length) || (position == this.length)) {
            console.log("位置超出范围");
            return;
        }
        this.moveToPosition(position);
        return this.current.next.elem;
    }

    this.contains = function (elem) {
        for (var current = this.head.next; current != null; current = current.next)
            if (current.elem == elem)
                return true;
        return false;
    }

    this.indexOf = function (elem) {
        var current = this.head.next;
        for (var i = 0; i < this.length; i++) {
            if (current != null)
                if (current.elem == elem)
                    return i;
            current = current.next;
        }
        return -1;
    }

    this.lastIndexOf = function (elem) {
        var current = this.head.next;
        for (var i = 0, index = -1; i < this.length; i++) {
            if (current != null)
                if (current.elem == elem)
                    index = i;
            current = current.next;
        }
        return index;
    }
    this.reverse = function () {
        var current = this.head.next;
        if (current == null)
            return;
        while (current.next != null) {
            var nextNode = current.next;
            current.next = nextNode.next;
            nextNode.next = this.head.next;
            this.head.next = nextNode;
        }
    }

    this.isEmpty = function () {
        if (this.length)
            return false;
        return true;
    }

    this.getLength = function () {
        return this.length;
    }

    this.print = function () {
        if (!this.length) {
            console.log("[]");
            return;
        }
        var result = "[";
        for (var current = this.head.next; current.next != null; current = current.next)
            result += current.elem + ",";
        result += current.elem + "]";
        console.log(result);
    }

    this.moveToPosition = function (position) {
        this.current = this.head;
        for (var i = 0; i < position; i++)
            this.current = this.current.next;
    }

    function getRandomInteger(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.buildListWithRandomInteger = function (length, max, min) {
        for (var i = 0; i < length; i++)
            this.append(getRandomInteger(max, min));
        console.log("随机生成的线性表：")
        this.print();
    }
}


var list = new LinkedList();
list.buildListWithRandomInteger(10, 1, 100);
list.append(2);
list.append(3);
list.append(5);
list.insert(0, 1);
console.log("插入2,3,5,1后：")
list.print();
console.log("删除下标为1的元素后：");
list.remove(1);
list.print();
list.update(1, 4);
console.log("把下标为1的元素修改为4后：");
list.print();
console.log("返回下标为2的元素：");
console.log(list.get(2));
console.log("是否包含0：");
console.log(list.contains(0));
console.log("是否包含1：");
console.log(list.contains(1));
list.append(5);
console.log("5的第一个下标：");
console.log(list.indexOf(5));
console.log("5的最后一个下标：");
console.log(list.lastIndexOf(5));
list.reverse();
console.log("数组反转：")
list.print();
console.log("数组长度：");
console.log(list.getLength());
list.clear();
console.log("数组是否为空");
console.log(list.isEmpty());

