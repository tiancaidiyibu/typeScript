import { Mysqldb } from '../modules/db'


 class Users{
    username:string|undefined;
    password:string|undefined;
}
var usrModel = new Mysqldb<Users>()


export {usrModel, Users }