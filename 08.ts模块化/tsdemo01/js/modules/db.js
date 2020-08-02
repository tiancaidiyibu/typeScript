"use strict";
// var dburl = 'XXXXX'
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mysqldb = void 0;
// 定义一个操作的类
var Mysqldb = /** @class */ (function () {
    function Mysqldb() {
    }
    Mysqldb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    Mysqldb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    Mysqldb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    Mysqldb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return Mysqldb;
}());
exports.Mysqldb = Mysqldb;
