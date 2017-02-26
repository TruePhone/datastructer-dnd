

alert('hello world');

document.write('用aler弹框  <br/>      \
    用console.log输出到console <br/>    \
     用document.write输出到html <br/>    \
    建议用第二种');

console.log("hello world");

var a= 101;
console.log('a = ');
console.log(a);



// ===========================
// 简单定义myArray
var MyArray = function() {
    //属性
    this.length = 0,
    this.arr  = new Array(),

    //方法
    this.getLength = function(){
        console.log('the length is');
        console.log(this.length);
        return this.length;
    },

    this.push_back = function(elem){
        this.arr[this.length] = elem;
        this.length++;
    },

    this.insert = function(elem,position){
        for (var i= this.length;i > position;i--){
            this.arr[i] = this.arr[i-1];
        }
        this.arr[position] = elem;
        this.length++;
    },

    this.delete = function(){
        //delete的代码
    },

    //其他一些方法

    this.showAll = function(){
        console.log('showAll');
        console.log(this);
    }
};

//============================================
//测试

myarray1 = new MyArray;

myarray1.showAll();

myarray1.push_back(1);
myarray1.push_back(2);
myarray1.push_back(3);

myarray1.showAll();

myarray2 = new MyArray;

myarray2.showAll();

myarray2.push_back(4);
myarray2.push_back(5);
myarray2.push_back(6);

myarray2.showAll();

myarray2.insert("hello",1);

myarray2.showAll();

var b = myarray2.getLength();
console.log('b is');
console.log(b);