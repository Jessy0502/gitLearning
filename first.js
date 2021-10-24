alert('本康熙来了')
console.log('这是用控制台发出的信息')
prompt(info)
//创建全局变量name
var name = "全局变量";

//创建一个函数
function fun(){
    console.log(this.name);
}

//创建一个对象
var obj = {
    name:"孙悟空",
    sayName:fun
};

//调用obj.sayName()时可以输出obj的名字
obj.sayName();