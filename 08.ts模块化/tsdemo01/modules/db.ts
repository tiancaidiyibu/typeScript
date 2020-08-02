// var dburl = 'XXXXX'

// function getData():any[]{
//     console.log('获取数据2333')
//     return [
//         {
//             title:'1233'
//         }
//     ]
// }
 
// function save(){
//     console.log('保存数据成功')
// }


// export {save ,getData}



// -------------分割线------------------- 第一版
interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}

// 定义一个操作的类
export class Mysqldb<T> implements DBI<T>{
    constructor(){
    }
    add(info: T): boolean {
        console.log(info)
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}





