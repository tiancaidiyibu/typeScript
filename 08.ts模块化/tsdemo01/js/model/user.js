"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.usrModel = void 0;
var db_1 = require("../modules/db");
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
exports.Users = Users;
var usrModel = new db_1.Mysqldb();
exports.usrModel = usrModel;
