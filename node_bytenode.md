### 利用bytenode编译js文件为jsc文件，保护代码

### 步骤
* install bytenode

* 创建compile.js文件，编码待发布的js文件
 ```
 var bytenode = require('bytenode');
var fs = require('fs');
var path = require("path");

function compileDir(dir) {
    var stat = fs.statSync(dir);
    if (stat.isFile() && dir.indexOf('.js') != -1 && dir.indexOf('.js.map') == -1 && dir.indexOf('.jsc') == -1) {
        // 文件，直接转换
        bytenode.compileFile({
            filename: dir
        });
        fs.unlinkSync(dir);
    } else if (stat.isDirectory()) {
        // 目录，列出文件列表，循环处理
        var files = fs.readdirSync(dir);
        for (var i = 0; i < files.length; i++) {
            var file = dir + '/' + files[i];
            compileDir(file);
        }
    } else {
 
    }
}

function compileFile() {
    // 编译 app.js 为字节码
    // bytenode.compileFile({
    //     filename: './build/app.js'
    // });
    // fs.unlinkSync('./build/app.js');
 
    // 编译 filters/routes/services 目录下的js文件为字节码
    // compileDir('./dist/filters');
    // compileDir('./dist/routes');
    // compileDir('./dist/services');
    compileDir('./build/utils');
    compileDir('./build/config');
    compileDir('./build/exceptions');
    compileDir('./build/middleware');
    compileDir('./build/server');
}
 ```
 * 运行node compiler.js
 * 创建launcher.js文件
```
require('bytenode');
require('./app.jsc');
``` 
 * 启动node launcher.js