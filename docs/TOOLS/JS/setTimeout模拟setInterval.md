---
title: setTimeout模拟setInterval
---

setInterval 创建的定时器确保了定时器代码被规则的插入队列，但是当代码执行时间>插入时间时，会导致代码连续运行，或者有些间隔被跳过，与我们期待的效果不一致。

例如在 5ms 时开始一个间隔为 200ms 的定时器，需要 300 多 ms 才可以执行完。由于主线程还没有完成，所以要继续等待，在 600 多 ms 处，执行完 205ms 时的代码后发现 405ms 添加的代码在队列中，就会继续执行代码，由于到了 605ms 时 405ms 的代码还在队列中，所以 605ms 的代码不会被添加到队列中。

![实现效果](/setinterval-demo.jpg)

可以用 setTimeout 的递归调用实现，在前一个代码执行完成之前，不会向队列插入新代码。

```javascript
class SetInterval {
  constructor() {
    this.init();
  }
  init() {
    setTimeout(this.loopGetData.bind(this), 0);
  }
  loopGetData() {
    this.getData();
    this.timer = setTimeout(this.loopGetData.bind(this), 1000);
  }
  getData() {
    if (!this.timer) {
      setTimeout(() => {
        this.clear();
      }, 3000);
    }
    console.log(1);
  }
  clear() {
    clearTimeout(this.timer);
    this.timer = null;
  }
}
let time = new SetInterval();
```
