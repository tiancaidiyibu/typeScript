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

6、typeScript中的泛型

    6.1 泛型的定义
    6.2 泛型函数
    6.3 泛型类
    6.4 泛型接口
   
*/

/*

泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验)，下面我们看看把类当做参数的泛型类

1、定义个类
2、把类作为参数来约束数据传入的类型 
*/

//把类作为参数来约束数据传入的类型 

// class User{
//     username:string | undefined;
//     pasword:string | undefined;
// }

// class MysqlDb{
//     add(user:User):boolean{
//         console.log(user)
//         return true
//     }
// }
// var u = new User()
// u.username='张三';
// u.pasword='123456';
// var db = new MysqlDb()
// db.add(u)


// 定义泛型类
// class MysqlDb<T>{
//     add(user:T):boolean{
//         console.log(user)
//         return true
//     }
// }
// 1、定义一个User类 和数据库进行映射
// class User{
//     username:string | undefined;
//     pasword:string | undefined;
// }
// var u = new User();
// u.username = 'lisi'
// u.pasword = '1233'

// var db = new MysqlDb<User>()
// db.add(u)


// 扩展
// class MysqlDb<T>{
//     add(user:T):boolean{
//         console.log(user)
//         return true
//     }
// }
// class User{
//     username:string | undefined;
//     pasword:string | undefined;
//     constructor(
//         p:{
//             username:string | undefined;
//             pasword?:string | undefined;
//         }
//     ){
//         this.username = p.username
//         this.pasword = p.pasword
//     }
// }
// var u = new User(
//     {
//         username:'233',
//         // pasword:"fddfdf"
//     }
// )
// var db = new MysqlDb<User>()
// db.add(u)


/*

功能：定义一个操作数据库的库  支持 Mysql Mssql  MongoDb



要求1：Mysql MsSql  MongoDb功能一样  都有 add  update  delete  get方法    

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

    2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性、


*/


// interface DBI<T>{
//     add(info:T):boolean;
//     update(info:T,id:number):boolean;
//     delete(id:number):boolean;
//     get(id:number):any[];
// }

// 定义一个操作的类
// class Mysqldb<T> implements DBI<T>{

//     constructor(){
        
//     }

//     add(info: T): boolean {
//         console.log(info)
//         return true
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): any[] {
//         throw new Error("Method not implemented.");
//     }
// }


// class Users{
//     username:string|undefined;
//     password:string|undefined;
// }
// var w = new Users()
// w.username = 'lisi'
// w.password = '1234'
// var mysql = new Mysqldb<Users>()
// mysql.add(w)
















