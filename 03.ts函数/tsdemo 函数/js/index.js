"use strict";
/*
1、vscode配置自动编译

    1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",


    2、第二步 任务 - 运行任务  监视tsconfig.json


2、typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        
        任意类型（any）
        null 和 undefined
        void类型
        never类型

3、typeScript中的函数

    3.1、函数的定义
    3.2、可选参数
    3.3、默认参数
    3.4、剩余参数
    3.5、函数重载
    3.6、箭头函数  es6


*/
// 3.1、函数的定义
//es5定义函数的方法
/*
 //函数声明法
     function run(){

         return 'run';
     }
 //匿名函数
     var run2=function(){

         return 'run2';
     }
*/
//ts中定义函数的方法
//函数声明法
// function run():string{
//     return 'run';
// }
//错误写法
// function run():string{
//     return 123;
// }
//匿名函数
// var fun2=function():number{
//     return 123;
// }
// alert(fun2()); /*调用方法*/
//ts中定义方法传参
// function ikki(name:string):void|number{
//     return 123
// }
// ikki('123')
// function ikki(name:string):void|any{
//     return 123
// }
// ikki('123')
/*
    function getInfo(name:string,age:number):string{

            return `${name} --- ${age}`;
    }


    alert(getInfo('zhangsan',20));

*/
// var getInfo=function(name:string,age:number):string{
//     return `${name} --- ${age}`;
// }
// alert(getInfo('zhangsan',40));
//没有返回值的方法
// function run():void{
//     console.log('run')
// }
// run();
// 3.2、方法可选参数 
// es5里面方法的实参和行参可以不一样(参数可以不传)，但是ts中必须一样，如果不一样就需要配置可选参数 
// function ikki(name:string,age?:number):any{
//     return 123
// }
// ikki('123')
/*
 function getInfo(name:string,age?:number):string{

         if(age){

             return `${name} --- ${age}`;
         }else{

             return `${name} ---年龄保密`;
         }


 }

 alert(getInfo('zhangsan'))

 alert(getInfo('zhangsan',123))
*/
//注意:可选参数必须配置到参数的最后面
//错误写法
/*
 function getInfo(name?:string,age:number):string{

          if(age){

              return `${name} --- ${age}`;
          }else{

              return `${name} ---年龄保密`;
          }
         

  }

  alert(getInfo('zhangsan'))
*/
// 3.3、默认参数 可选参数
// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
// function ikki(name:string,age:number=20):any{
//     return 123
// }
// ikki('223')
/*

        function getInfo(name:string,age:number=20):string{

                    if(age){

                        return `${name} --- ${age}`;
                    }else{

                        return `${name} ---年龄保密`;
                    }
            
        }

        // alert( getInfo('张三'));
        alert( getInfo('张三',30));
*/
// 3.4、剩余参数
// function sum(a:number,b:number,c:number,d:number):number{
//     return a+b+c+d;
// }
// alert(sum(1,2,3,4)) ;
//扩展运算符 接受新参传过来的值（必须在末尾）
function ikki(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return 123;
}
ikki(2, 3, 4);
function getInfo(name, age) {
    if (age) {
        return '我叫：' + name + '我的年龄是' + age;
    }
    else {
        return '我叫：' + name;
    }
}
// alert(getInfo('zhangsan'));  /*正确*/
// alert(getInfo(123));  错误
// alert(getInfo('zhangsan',20));
// 3.6、箭头函数  es6  
//this指向的问题    箭头函数里面的this指向上下文
// setTimeout(function(){
//     alert('run')
// },1000)
