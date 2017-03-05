function ArrayList() {
    this.arr = new Array();
    this.length = 0;


    this.insert = function (position, elem) {
        if ((position < 0) || (position > this.length)) {
            console.log("位置超出范围");
            return;
        }
        for (var i = this.length; i > position; i--)
            this.arr[i] = this.arr[i - 1];
        this.arr[position] = elem;
        this.length++;
    }

    this.append = function (elem) {
        this.arr[this.length++] = elem;
    }

    this.clear = function () {
        this.arr = null;
        this.length = 0;
        this.arr = new Array();
    }

    this.remove = function (position) {
        if ((position < 0) || (position > this.length) || (position == this.length)) {
            console.log("位置超出范围");
            return;
        }
        var elem = this.arr[position];
        for (var i = position; i < this.length - 1; i++)
            this.arr[i] = this.arr[i + 1];
        this.length--;
        return elem;
    }

    this.update = function (position, elem) {
        if ((position < 0) || (position > this.length) || (position == this.length)) {
            console.log("位置超出范围");
            return;
        }
        this.arr[position] = elem;
    }

    this.get = function (position) {
        if ((position < 0) || (position > this.length) || (position == this.length)) {
            console.log("位置超出范围");
            return;
        }
        return this.arr[position];
    }

    this.contains = function (elem) {
        for (var i = 0; i < this.length; i++)
            if (this.arr[i] == elem)
                return true;
        return false;
    }

    this.indexOf = function (elem) {
        for (var i = 0; i < this.length; i++)
            if (this.arr[i] == elem)
                return i;
        return -1;
    }

    this.lastIndexOf = function (elem) {
        for (var i = this.length; i > -1; i--)
            if (this.arr[i] == elem)
                return i;
        return -1;
    }
    this.reverse = function () {
        for (var i = 0; i < this.length / 2; i++) {
            var temp = this.arr[i];
            this.arr[i] = this.arr[this.length - 1 - i];
            this.arr[this.length - 1 - i] = temp;
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
        var result = "[";
        for (var i = 0; i < this.length - 1; i++)
            result += this.arr[i] + ",";
        result += this.arr[this.length - 1] + "]";
        console.log(result);
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


var list = new ArrayList();
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

