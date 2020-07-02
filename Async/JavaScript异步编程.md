### [JavaScript异步编程的4种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)
* 回调函数
  ```
  f1();   //f1 is long task
  f2();   //f2 wait for f1
  ```
  ```
  function f1(callback){
      setTimeout(function(){
          //f1 code
          //callback();
      },1000);
  }
  f1(f2);
  ```
* 事件监听
  > 采用事件驱动模式，任务的执行不取决于代码的顺序，而取决于某个事件是否发生
* 发布/订阅
  > 这种方法的性质与“事件监听”类似，但是明显优于后者。因为我们可以通过查看“消息中心”，了解存在多少信号，每个信号有多少订阅者，从而监控程序的运行
* Promise对象
  > Promise对象是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。
  > 简单说，它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数，比如，f1的回调函数f2可以写成```f1().then(f2);```
  
