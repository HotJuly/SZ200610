function Observer(data) {
    // 保存原data数据到this上
    //this是Observer的实例对象,不是vm!!!
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    constructor: Observer,
    walk: function(data) {
        //this->Observer的实例对象
        var me = this;
        // 遍历data数据
        //keys=>['msg','a']
        Object.keys(data).forEach(function(key) {
            // ob.convert('msg', data['msg']);
            // ob.convert('msg', 'hello MVVM');
            me.convert(key, data[key]);
        });
    },
    convert: function(key, val) {
        //this->ob
        // ob.defineReactive(data对象的引用值, 'msg', 'hello MVVM');
        this.defineReactive(this.data, key, val);
    },

    // 将属性定义成响应式数据的方法
    defineReactive: function(data, key, val) {
        // data对象的引用值, 'msg', 'hello MVVM'
        // 每一个响应式属性（data中的数据）
        // 都通过闭包的方式保存了一个dep
        var dep = new Dep();
        // 递归遍历
        // 如果当前val是一个对象数据，也要变成响应式
        // 先将里面属性变成响应式，在将外面属性变成响应式
        var childObj = observe(val);

        // 将data的数据重新定义，定义成响应式
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                if (Dep.target) {
                    // 建立dep和watcher的关系
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                // 更新data数据
                val = newVal;
                // 新的值是object的话，进行监听
                // 新的数据劫持
                childObj = observe(newVal);
                // 通知订阅者
                // 通知数据的dep对应所有的watcher，调用cb来更新用户界面
                dep.notify();
            }
        });
        //vm._data.msg={getter,setter} 
        //  vm.msg=123->(数据代理)vm._data.msg=123->(数据劫持的setter)
        //数据劫持,就是将原先的value值替换成属性描述符,value被丢弃,但是通过闭包缓存下来了
        // Object.defineProperty(data的引用值, 'msg', {
        //     enumerable: true, // 可枚举
        //     configurable: false, // 不能再define
        //     get: function() {
        //         if (Dep.target) {
        //             // 建立dep和watcher的关系
        //             dep.depend();
        //         }
        //         return val;
        //     },
        //     set: function(newVal) {
        //          Vue中,data的旧值和新值如果想用,不会触发视图更新
        //         if (newVal === val) {
        //             return;
        //         }
        //         // 更新data数据
        //         val = newVal;
        //         // 新的值是object的话，进行监听
        //         // 新的数据劫持
        //          如果赋予的新值是一个对象,继续递归,把所有的属性名全部变成属性描述符(递归数据劫持)
        //         childObj = observe(newVal);
        //         // 通知订阅者
        //         // 通知数据的dep对应所有的watcher，调用cb来更新用户界面
        //         dep.notify();
        //     }
        // });
    }
};

function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }

    // return new Observer(data||this._data);
    return new Observer(value);
};


var uid = 0;

function Dep() {
    // 唯一id
    this.id = uid++;
    // 保存watcher的容器
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },

    depend: function() {
        // Dep.target 是 watcher
        // watcher.addDep(dep)
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        // 遍历watcher
        this.subs.forEach(function(sub) {
            // 调用watcher.update
            sub.update();
        });
    }
};

Dep.target = null;