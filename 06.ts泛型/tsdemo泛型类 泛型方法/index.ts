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
泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)
*/

// 6.1 泛型的定义   
// 6.2函数泛型
// 泛型：可以支持不特定的数据类型  
// 要求：传入的参数类型和返回的参数类型一致
// T表示泛型，具体什么类型是调用这个方法的时候决定的
// function getData<T>(value:T):T{
//     return value
// }
// getData<string>('123') 

// function getData<T>(value:T):any{
//     return false
// }
// getData<string>('123') 


// 6.3 泛型类
// 比如有个最小堆算法，需要同时支持返回数字和字符串 a  -  z两种类型。  通过类的泛型来实现
// class MinClass{
//     public list:number[] = [];
//     add(num:number){
//         this.list.push(num)
//     }
//     min():number{
//         var minNum = this.list[0]
//         for (let index = 0; index < this.list.length; index++) {
//             if(minNum>this.list[index]){
//                 minNum = this.list[index]
//             }
//         }
//         return minNum
//     }
// }
// var m  = new MinClass();
// m.add(2)
// m.add(22)
// m.add(1)
// m.add(11)
// alert(m.min())

// class MinClass<T>{
//     public list:T[] = [];
//     add(num:T):void{
//         this.list.push(num)
//     }
//     min():T{
//         var minNum = this.list[0]
//         for (let index = 0; index < this.list.length; index++) {
//             if(minNum>this.list[index]){
//                 minNum = this.list[index]
//             }
//         }
//         return minNum
//     }
// }
// var m  = new MinClass<number>(); //实例化类，并且指定了类的T代表的类型
// m.add(2)
// m.add(-1)
// m.add(1)
// m.add(11)
// alert(m.min())
// var m2 = new MinClass<any>(); //实例化类，并且指定了类的T代表的类型
// m2.add('333')
// m2.add(-1)
// m2.add(1)
// m2.add(11)
// alert(m.min())


// 6.4 泛型接口

//函数接口 对比
// interface Configfn{ //函数接口
//     (value1:string,value2:string):string
// }
// var setData:Configfn = function (value1:string,value2:string):string{
//     return value1+value2
// }
// alert(setData('lisi','zhangsan'))

// 第一种：结合泛型接口
// interface Configfn{ //函数接口
//     <T>(value1:T):T
// }
// var setData:Configfn = function<T>(value1:T):T{
//     return value1
// }
// alert(setData('lisi'))

// 第二种：结合泛型接口
// interface Configfn<T>{ //函数接口
//     (value1:T):T
// }
// function setData<T>(value1:T):T{
//     return value1
// }
// var myGetData:Configfn<string> = setData
// myGetData('sdd')














































    //    function getData<T>(value:T):T{
    //        return value;
    //    }
    //     getData<number>(123);

        // getData<string>('1214231');


       // getData<number>('2112');       /*错误的写法*/  





    //    function getData<T>(value:T):any{
    //        return '2145214214';
    //    }

    //    getData<number>(123);  //参数必须是number

    //    getData<string>('这是一个泛型');








// 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串 a  -  z两种类型。  通过类的泛型来实现


    /*

            class MinClass{
                public list:number[]=[];
                add(num:number){
                    this.list.push(num)
                }
                min():number{
                    var minNum=this.list[0];
                    for(var i=0;i<this.list.length;i++){
                        if(minNum>this.list[i]){
                            minNum=this.list[i];
                        }
                    }
                    return minNum;
                }

            }

            var m=new MinClass();

            m.add(3);
            m.add(22);
            m.add(23);
            m.add(6);

            m.add(7);
            alert(m.min());

    */




//类的泛型

// class MinClas<T>{

//     public list:T[]=[];

//     add(value:T):void{

//         this.list.push(value);
//     }

//     min():T{        
//         var minNum=this.list[0];
//         for(var i=0;i<this.list.length;i++){
//             if(minNum>this.list[i]){
//                 minNum=this.list[i];
//             }
//         }
//         return minNum;
//     }
// }

// var m1=new MinClas<number>();   /*实例化类 并且制定了类的T代表的类型是number*/
// m1.add(11);
// m1.add(3);
// m1.add(2);
// alert(m1.min())


// var m2=new MinClas<string>();   /*实例化类 并且制定了类的T代表的类型是string*/

// m2.add('c');
// m2.add('a');
// m2.add('v');
// alert(m2.min())


