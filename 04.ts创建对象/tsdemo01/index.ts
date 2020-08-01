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

    
*/


// 1.类的定义
// class Son{
//     name:string  //属性  前面省略public关键词

//     constructor(n:string){
//         this.name = n
//     }
//     getName():string{
//         return this.name
//     }
//     setName(name:string):void{
//         this.name = name
//     }

// } 
// var s = new Son('ikki')
// alert(s.getName())
// s.setName('lucky')
// alert(s.getName())



// 2. 继承
// ts实现继承
// class Son{
//     name:string 
//     constructor(n:string){
//         this.name = n
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// } 
// // var s = new Son('ikki')
// // alert(s.run())
// class Web extends Son{
//     constructor(name:string){
//         super(name)
//     }
// }
// var  w = new Web('lu')
// alert(w.run())


// 子类和父类有相同方法，会现在子类中查找
// class Son{
//     name:string 
//     constructor(n:string){
//         this.name = n
//     }
//     run():string{
//         return `父类${this.name}在运动`
//     }
// } 
// class Web extends Son{
//     constructor(name:string){
//         super(name)
//     }
//     work(){
//         alert(`${this.name}hahah`)
//     }
//     run():string{
//         return `子类${this.name}在运动`
//     }
// }
// var  w = new Web('lu')
// // w.work()
// alert(w.run()) 


// 3 类里面的修饰符
// ts 定义属性的时候给我们提供了3中修饰符
// 1.public 公有    在类里面，子类，类外部，都可以访问
// 2.protected 保护类型    在类里面，子类可以访问   类外部不可以访问
// 3.private 私有   在类里面可以访问  子类，类外部不可以访问  
// 属性如果不加修饰符，默认就是公有public
// class Son{
//     public name:string  //公有属性
//     // protected name:string  //保护类型

//     constructor(n:string){
//         this.name = n
//     }
//     run():string{
//         return `父类${this.name}在运动`
//     }
// }
// var s = new Son('ikki')
// alert(s.name) //ikki 公有属性可以外部访问
// alert(s.name) // error 保护类型外部不能访问
// class Web extends Son{
//     constructor(name:string){
//         super(name)
//     }
//     work(){
//         alert(`${this.name}在工作`)
//     }
//     run():string{
//         return `子类${this.name}在运动`
//     }
// }
// var  w = new Web('lisi')
// w.work()
// alert(w.run()) 
// 类外部访问公有属性




// 4.静态属性 静态方法
// class Per{
//     public name:string;
//     public age:number=20;
//     //静态属性

//     static sex="男";
//     constructor(name:string) {
//             this.name=name;
//     }
//     run(){  /*实例方法*/

//         alert(`${this.name}在运动`)
//     }
//     work(){

//         alert(`${this.name}在工作`)
//     }
//     static print(){  /*静态方法  里面没法直接调用类里面的属性*/

//         alert('print方法'+Per.sex);
//     }
// }
// var p=new Per('张三');
// p.run();
// Per.print();
// alert(Per.sex);


// 5. 抽象类 多态  :父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现 

//多态属于继承
// class Animal {
//     name:string;
//     constructor(name:string) {
//         this.name=name;
//     }
//     eat(){   //具体吃什么  不知道   ，  具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
//         console.log('吃的方法')
//     }
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){

//         return this.name+'吃粮食'
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+'吃老鼠'
//     }
// }


//typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准 。   标准：Animal 这个类要求它的子类必须包含eat方法

// abstract class Animal {
//     public name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     run(){
//         console.log('其他方法可以不实现')
//     }
//     abstract eat():any //抽象方法只能放在抽象类里面
// }
// // var a=new Animal() //抽象类不能被实例化
// class Dogs extends Animal{
//     constructor(name:any){
//         super(name)
//     }
//     //抽象类的子类必须实现抽象类里面的抽象方法
//     eat(){
//         console.log(this.name + '吃粮食')
//     }
// }
// var d=new Dogs('小花花');
// d.eat();


