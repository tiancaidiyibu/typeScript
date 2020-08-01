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
4、typeScript中的类

    4.1 类的定义
    4.2 继承
    4.3 类里面的修饰符
    4.4 静态属性 静态方法
    4.5 抽象类 多态
5、typeScript中的接口

    5.1 属性类接口
    5.2 函数类型接口
    5.3 可索引接口
    5.4 类类型接口
    5.5 接口扩展

   
*/


/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，
提供这些方法的类就可以满足实际需要。 typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

定义标准。

*/

// 5.1 属性类接口 对json的约束
//ts中定义方法
// function printLabel(label:string):void{
//     console.log('printLabel');
// }
// printLabel('22')

// ts中自定义方法传入参数,对json进行约束
// function printLabel(labelInfo:{'label':string}):void{
//     console.log('printLabel',labelInfo.label);
// }
// var labelJson = {
//     label:'233'
// }
// printLabel(labelJson)

//对批量方法传入参数进行约束。
//接口：行为和动作的规范，对批量方法进行约束
// interface关键词定义接口，就是传入对象的约束
// interface FullName {
//     firstName:string;  //注意：分号结束
//     secondName:string
// }
// function  printName(name:FullName){
//     // 必须传入对象，里面必须有firstName secondName
//     console.log(name.firstName+'--'+name.secondName)
// }
// printName({
//     firstName:'ZHANGSAN',
//     secondName:'LISI'
// })
// //或者
// var obj = {
//     age:20,
//     firstName:'ZHANGSAN',
//     secondName:'LISI'
// }
// printName(obj)

// interface FullName {
//     firstName:string;  //注意：分号结束
//     secondName:string
// }
// function  printName(name:FullName){
//     // 必须传入对象，里面必须有firstName secondName
//     console.log(name.firstName+'--'+name.secondName)
// }
// // function  printInfo(info:FullName){
// //     // 必须传入对象，里面必须有firstName secondName
// //     console.log(info.firstName+'--'+info.secondName+'__'+info.age)
// // }
// var obj = {
//     age:20,
    // firstName:'ZHANGSAN',
    // secondName:'LISI'
// }
// printName(obj)
// var obj = {
//     age:20,
//     firstName:'ZHANGSAN',
//     secondName:'LISI'
// }
// printInfo(obj)

//接口 ：可选属性
// interface FullName{
//     firstName:string;
//     secondName?:string
// }
// function getName(name:FullName){
//     console.log(name.firstName+'--'+name.secondName)
// }
// getName({
//     firstName:'ZHANGSAN',
// })

 
// function ajax(config:Config){
//     var xhr=new XMLHttpRequest();
//     xhr.open(config.type,config.url,true);
//     xhr.send(config.data);
//     xhr.onreadystatechange=function(){
//          if(xhr.readyState==4 && xhr.status==200){
//              console.log('chengong');
//              if(config.dataType=='json'){
//                  console.log(JSON.parse(xhr.responseText));
//              }else{
//                  console.log(xhr.responseText)
//              }
//          }
//     }
// }
// ajax({
//     type:'get',
//     data:'name=zhangsan',
//     url:'http://a.itying.com/api/productlist', //api
//     dataType:'json'
// })

// 5.2函数类型接口   对方法传入的参数以及返回值进行约束  批量约束
// 加密的函数类型接口
// interface encrypt{
//     (key:string,value:string):string
// }
// var md5:encrypt = function(key:string,value:string):string{
//     return key+'__md5__'+value
// }
// console.log(md5('name','ikki'))
// var sha1:encrypt = function(key:string,value:string):string{
//     return key+'__sha1__'+value
// }
// console.log(sha1('name','lucky'))


// 5.3可索引接口 对数组，对象的约束(不常用)
// interface UserArr{
//     [index:number]:string
// }
// var arr:UserArr = ['23','2e']
// console.log(arr[1])

// interface UserObj{
//     [index:string]:string
// }
// var obj:UserObj = {'a':'333'}
// console.log(obj)


// 5.4类类型接口  对类的约束（和抽象类相似）
// interface Animal{
//     name:string;
//     eat(str:string):void
// }
// class Dog implements Animal {
//     name:string
//     constructor(name:string){
//         this.name = name
//     }
//     eat(){
//         console.log(this.name)
//     }
// }
// var d = new Dog('ikki')
// d.eat()

// class Cat implements Animal{
//     name:string
//     constructor(name:string){
//         this.name = name
//     }
//     eat(food:string){
//         console.log(this.name,food)
//     }
// }

// var n = new Cat('ikki')
// n.eat('kaa')


// 5.5接口的扩展 接口可以继承接口
// interface Animal{
//     eat():void;
// }
// interface Per extends Animal{
//     work():void;
// }
// class Web implements Per {
//     eat(){
//         console.log('eat')
//     }
//     work(){
//         console.log('work')
//     }
// }
// let web = new Web()
// web.eat()
// web.work()

// interface Animal{
//     eat():void;
// }
// interface Per extends Animal{
//     work():void;
// }
// class Pro {
//     name:string
//     constructor(name:string){
//         this.name = name 
//     }
//     coding(code:string){
//         console.log(this.name+code)
//     }
// }
// class Web extends Pro implements Per {
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         console.log('eat')
//     }
//     work(){
//         console.log('work')
//     }
// }
// let web = new Web('ikki')
// web.eat()
// web.work()
// web.coding('写ts')













