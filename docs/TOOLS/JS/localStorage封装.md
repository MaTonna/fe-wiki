### localStorage 封装

#### 获取值

```js
 get: function(key) {
        var value = localStorage.getItem(key);
        if (value) {
            try {
                var value_json = JSON.parse(value);
                if (typeof value_json === 'object') {
                    return value_json;
                } else if (typeof value_json === 'number') {
                    return value_json;
                }
            } catch(e) {
                return value;
            }
        } else {
            return false;
        }
    },
```

#### 设置值

```js
 set: function(key, value) {
        localStorage.setItem(key, value);
    },
```

#### 删除值

```js
  remove: function(key) {
        localStorage.removeItem(key);
    },
```

#### 清空

```js
  clear: function() {
        localStorage.clear();
    }
```

#### 批量保存

> data 是个对象

```js
Store.setList = function(data) {
  for (var i in data) {
    localStorage.setItem(i, data[i]);
  }
};
```

#### 批量删除

> list list 是一个数组

```js
Store.removeList = function(list) {
  for (var i = 0, len = list.length; i < len; i++) {
    localStorage.removeItem(list[i]);
  }
};
```

### 源码

```js
let Store = {
  get: function(key) {
    var value = localStorage.getItem(key);
    if (value) {
      try {
        var value_json = JSON.parse(value);
        if (typeof value_json === "object") {
          return value_json;
        } else if (typeof value_json === "number") {
          return value_json;
        }
      } catch (e) {
        return value;
      }
    } else {
      return false;
    }
  },
  set: function(key, value) {
    localStorage.setItem(key, value);
  },
  remove: function(key) {
    localStorage.removeItem(key);
  },
  clear: function() {
    localStorage.clear();
  }
};

// 批量保存，data是一个字典
Store.setList = function(data) {
  for (var i in data) {
    localStorage.setItem(i, data[i]);
  }
};

// 批量删除，list是一个数组
Store.removeList = function(list) {
  for (var i = 0, len = list.length; i < len; i++) {
    localStorage.removeItem(list[i]);
  }
};
```
