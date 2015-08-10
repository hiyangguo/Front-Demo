/**
 * Created by YangGuo on 2015/8/10 0010.
 */
var fs = require("fs");
var path = require('path');
var exec = require('child_process').exec;

sPath = "E:\\nodeTest\\Test\\a";

mkdirsSync(sPath);
console.log(rmdirsSync(sPath));


//递归创建目录 同步方法
function mkdirsSync(dirpath) {
    //console.log(dirname);
    if (fs.existsSync(dirpath)) {
        return true;
    }

    if (mkdirsSync(path.dirname(dirpath))) {
        fs.mkdirSync(dirpath);
        return true;
    }

}

//删除目录
function rmdirsSync(dirpath) {
    //console.log(dirname);
    if (!fs.existsSync(dirpath)) {
        return true;
    }

   /* if (rmdirsSync(path.dirname(dirname))) {
        fs.rmdirSync(dirname);
        return true;
    }*/
    exec('rd/s/q '+dirpath, function (err) {
        return true;
    });
}