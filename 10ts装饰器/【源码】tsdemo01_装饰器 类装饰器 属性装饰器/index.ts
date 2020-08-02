/*
    装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
    装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）
    装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
*/

//1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 传入一个参数
//1.1 类装饰器:普通装饰器（无法传参)
// function logsClass(params:any){
//     console.log(params)  //
//     // params就是当前类
//     params.prototype.apiUrl  = '动态扩展属性'
//     params.prototype.run = function(){
//         console.log('动态扩展方法')
//     }
// }
// @logsClass
// class HttpClient {
//     constructor(){}
//     getData(){}
// } 
// let http:any = new HttpClient()
// console.log(http.apiUrl)
// http.run()

//1.2 类装饰器:装饰器工厂（可传参）
// function logsClass(params:any){
//     return function (target:any){
//         // console.log(params,target)
//         target.prototype.apiUrl = params
//     }

// }
// @logsClass('http://ikki:80000')
// class HttpClient {
//     constructor(){}
//     getData(){}
// } 
// let http:any = new HttpClient()
// console.log(http.apiUrl)  //http://ikki:80000

/*
类装饰器 例子
     下面是一个重载构造函数的例子。
     类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
     如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
*/
// function logsClass(target:any){
//     console.log(target)
//     // 重置
//     return class extends target {
//         apiUrl:any = '我是修改后的'
//         getData(){
//             console.log(this.apiUrl) //我是修改后的
//         } 
//     }
// }
// @logsClass
// class HttpClient {
//     public apiUrl:string|undefined;
//     constructor(){
//         this.apiUrl = '我是构造函数的apiurl'
//     }
//     getData(){
//         console.log(this.apiUrl)
//     }
// } 
// let http:any = new HttpClient()
// http.getData()

/*
   2、属性装饰器
        属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、成员的名字。
*/
// function logProperty(params:any){
//     return function(target:any,attr:any){
//         // console.log(target,attr) // {getData: ƒ, constructor: ƒ}getData: ƒ ()constructor: ƒ HttpClient()__proto__: Object,     "url"
//         target[attr] = params
//     }
// }
// class HttpClient {
//     @logProperty('http://ikki:80000')
//     public url:any|undefined
//     constructor(){}
//     getData(){
//         console.log(this.url)
//     }
// } 
// let http:any = new HttpClient()
// http.getData() //http://ikki:80000


/*
    3、方法装饰器
        它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
        方法装饰会在运行时传入下列3个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、成员的名字。
            3、成员的属性描述符。
*/
// function get(params:any){
//     return function(target:any,method:any,desc:any){
//         // console.log(target,method,desc)
//         target.apiUrl = 'XXXX'
//         target.run = function(){
//             console.log('good run')
//         }
//         let descValue = desc.value
//         desc.value = function(...args:any[]){
//             args = args.map((value)=>{
//                 return String(value)
//             })
            
//             descValue.apply(this,args)
//         }
        
//     }
// }
// class HttpClient {
//     public url:any|undefined
//     constructor(){}
//     @get('ikki')
//     getData(...args:any[]){
//         console.log(args)
//         console.log('2sadsdasdas')
//     }
// } 
// let http:any = new HttpClient()
// http.getData('122',3444)  // ["122", "3444"]     2sadsdasdas



/*
    4、方法参数装饰器
        参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、方法的名字。
            3、参数在函数参数列表中的索引。
*/
// function logParmas(params:any){
//     return function(target:any,methodName:any,paramsIndex:any){
//         console.log(params,target,methodName,paramsIndex)

//         target.apiUrl = params
//     }
// }
// class HttpClient {
//     public url:any|undefined
//     constructor(){}
    
//     getData(@logParmas('xxxx') uuid:any){
//         console.log(uuid)
//     }
// } 
// let http:any = new HttpClient()
// console.log(http.apiUrl)
// http.getData('122',3444)  // ["122", "3444"]     2sadsdasdas

// 5.装饰器执行顺序
//属性》方法》方法参数》类
//如果有多个同样的装饰器，它会先执行后面的

// function logsClass1(params:any){
//     return function (target:any){
//         console.log('类装饰器1')
//     }
// }
// function logsClass2(params:any){
//     return function (target:any){
//         console.log('类装饰器2')
//     }
// }
// function logsAttr(params?:any){
//     return function (target:any,attr:any){
//         console.log('属性装饰器')
//     }
// }
// function logsMethod(params?:any){
//     return function (target:any,attrName:any,desc:any){
//         console.log('方法装饰器')
//     }
// }
// function logsParmas1(params?:any){
//     return function (target:any,attrName:any,desc:any){
//         console.log('方法参数装饰器1')
//     }
// }
// function logsParmas2(params?:any){
//     return function (target:any,attrName:any,desc:any){
//         console.log('方法参数装饰器')
//     }
// }
// @logsClass1('http://ikki:80000')
// @logsClass2('xxxxxxx')
// class HttpClient {
//     @logsAttr()
//     public apiUrl:string|undefined
//     constructor(){}
//     @logsMethod()
//     getData(){  return true  }
//     setDate(@logsParmas1() attr1:any,@logsParmas2() attr2:any){}
// } 
// let http:any = new HttpClient()
// 属性装饰器
// index.js:176 方法装饰器
// index.js:186 方法参数装饰器
// index.js:181 方法参数装饰器1
// index.js:166 类装饰器2
// index.js:161 类装饰器1







  


