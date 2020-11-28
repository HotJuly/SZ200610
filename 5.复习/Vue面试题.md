# Vue 复习

https://juejin.im/post/6844904079206924295

- 谈谈 mvvm 和 mvc
    mvc
        m->Model 模型层(数据)
        v->View  视图层(页面)
        c->Controller 控制层(处理)
        Model->Controller->View

    mvvm
        m->Model 模型层(数据)->data
        v->View  视图层(页面)->真实DOM
        vm->ViewModel 视图模型层(处理)->vm实例
        Model->ViewModel->View
        Vue v-model->双向数据绑定
        View->ViewModel->Model


- react 和 vue 的区别
    react->.jsx vue->.vue
        react->定义class或者function    
        vue->模版语法->通过RunTime+Complier把template编译成render方法
    diff算法不同
    更新数据方法:react->this.setState({msg:123})  vue->this.msg=123
        react数据持久化->this.state.msg=123不生效可以看出
        vue不是持久化
    vue api以及react api
        vue上手难度比较简单->vue封装提供了太多的api(同时也是缺点,太多需要记录)
            代码量较小
        react上手难度比较高->代码量较大
    性能方面
        如果数据更新,渲染的方式
            vue->数据代理触发数据劫持->dep通知watcher,watcher控制页面渲染
                wacther->通知使用了数据的组件实例vm,去重新生成虚拟DOM->生成真实DOM(v-once v-pre)
            react->this.setState()不调用该方法不会重新渲染,没有数据监视
                App开始重新生成虚拟DOM->shouldComponentUpdate


- 谈谈 vue 生命周期
    总共11个,常用8个,还有两个属于keep-alive,还有一个错误捕获capture
    分为三个阶段:初始阶段,更新阶段,卸载阶段
    初始阶段
        - beforeCreate
        - created
        - beforeMount
        - mounted
            发送请求
            操作真实DOM(mounted只能保证真实DOM挂载完成,不能保证真实DOM渲染完成)
                vm.$nextTick(等下次DOM重新渲染之后,再触发)
    更新阶段
        - beforeUpdate
        - updated
    卸载阶段
        - beforeDestory
            停止定时器
            如果是使用vue内置命令绑定的事件,vue会自动解绑
            如果是使用原生DOM绑定的监听(onclick,addEventListener),需要我们自己手动解绑
        - destoryed


- vue 组件间通信方案
props
pubsub(基本不用)
自定义事件/全局事件总线
v-model ->  model   -> 自定义v-model传入的prop名称,以及自定义事件名
.sync   ->  v-bind:msg="msg" -> :msg="msg" @update:msg="(value)=>msg=value"
v-slot插槽  ->  component组件配合is属性
$parent $children $root $refs
路由传参
$attrs $listeners
provide/inject
Vuex


- 谈谈 vuex
state,actions,mutations
1.组件触发action:
    1)this.$store.dispatch(action名称,传参) 只能传递一个数据
    2)mapActions(数据)    如果没有进行模块化可以传入数组,如果模块化结束,使用对象

2.触发mutation
    1)this.$store.commit(mutation名称)
    2)通过action的第一个实参(store对象)从中获取commit用于触发


- 谈谈 vue-router
    目的:搭建一个SPA(单页面)应用
    讲讲什么是路由
        前端路由:路由路径和路由组件之间的映射关系
    组件:
        <router-view></router-view>
        <router-link></router-link>
    注册路由:
        new VueRouter({
            mode
            routes:[
                {
                    path:"/foo",
                    name:"foo"
                    component:Foo,
                    children:[
                        {
                            path:"/foo/a"->/foo/a /a
                            component:Fooa
                        }
                    ]
                }
            ]
        })
    路由跳转:
        1)声明式导航
            通过标签跳转
            <router-link></router-link>
        2)编程式导航
            通过js的API控制跳转
            push() replace() go(Number)
            this.$router.push将当前的路由路径推到路由栈中,存于最后一位
            this.$router.replace将当前的路由路径替换掉路由栈中的最后一位
            this.$router.go传入的是整数,如果为整数代表前进几层,负数代表回退几层
            区分:$router和$route
                $router->一般提供操作路由的方法API
                $route->一般提供当前路由的信息,例如路由路径,路由参数
    路由传参:
        简单跳转,不传参数:<router-link to="/foo"></router-link>
        传递query参数:
            1)<router-link to="/foo?name=123"></router-link>
            2)<router-link to="{
                    path:"/foo",
                    //name:"foo",
                    query:{
                        name:123,
                        sex:1
                    }
                }"></router-link>
        传递params参数:
            1)<router-link to="/foo/123"></router-link>
            2)<router-link to="{
                    //path:"/foo",
                    name:"foo",
                    params:{
                        name:123,
                        sex:1
                    }
                }"></router-link>
                注意:如果使用的是path配合params,是无效的
        获取参数:
            query:this.$route.query
            params:this.$route.params
    
    路由守卫:
        一共有7个
        分别:
            1)全局守卫
                全局前置守卫    beforeEach
                全局解析守卫(2.5)  beforeReslove
                全局后置守卫    afterEach
            2)路由独享守卫
                路由前置守卫    beforeEnter
            3)组件守卫
                组件前置守卫    beforeRouteEnter
                组件更新守卫(2.2)  beforeRouteUpdate
                组件后置守卫    beforeRouteLeave
        进入路由组件触发顺序:
            beforeEach->beforeEnter->beforeRouteEnter(如果不解析路由组件,无法获取到该守卫)->beforeReslove->afterEach
        面试题:说说你对路由守卫的理解
            生命周期

  

- 各种指令
v-once v-pre



- vue 双向数据绑定原理/响应式原理



- 特殊属性 $attrs / $listeners

## 通信方式列表:

    1) props
    2) vue自定义事件
    3) 全局事件总线
    4) v-model
    5) .sync
    6) $attrs与$listeners
    7) $ref, $children与$parent
    8) provide与inject
    9) Vuex
    10) 插槽 ==> 作用域插槽

## 根据通信的 2 个组件间的关系来选择一种通信方式

    父子
    	props
    	vue自定义事件
    	v-model
    	.sync
    	$ref, $children与$parent
    	插槽 ==> 作用域插槽
    	$attrs与$listeners
    祖孙
    	provide与inject
    兄弟或其它/任意
    	全局事件总线
    	Vuex

## 1. 方式一: props

    1). 实现父向子通信: 属性值是非函数
    2). 实现子向父通信: 属性值是函数
    应用: 最基本, 用得最多的方式

## 2. 方式二: vue 自定义事件

    1). 用来实现子组件向父组件通信
    2). 相关语法:
        父组件中绑定自定义事件监听:
          <Child @eventName="callback" ref="child">
    	  this.$refs.child.$on('eventName', this.callback)
        子组件中分发事件
          this.$emit('eventName', data)
    应用: element-ui的组件的事件监听语法都用的是自定义事件
          我们项目中的组件也用了不少自定义事件

## 3. 方式三: 全局事件总线 ===> 消息订阅与发布

    1). 实现任意组件间通信
    2). 编码:
        将入口js中的vm作为全局事件总线对象:
            beforeCreate() {
                Vue.prototype.$bus = this
            }
        分发事件/传递数据的组件: this.$bus.$emit('eventName', data)
        处理事件/接收数据的组件: this.$bus.$on('eventName', (data) => {})
    应用: 前台项目中使用全局事件总线

## 4. 方式四: v-model

    1). 实现父子之间相互通信/同步
    2). 组件标签上的v-model的本质: 动态value属性与自定义input监听来接收子组件分发的数据更新父组件数据
        父组件:
            <CustomInput v-model="name"/>
            <!-- 等价于 -->
            <CustomInput :value="name" @input="name=$event"/>
        子组件:
            <input type="text" :value="value" @input="$emit('input', $event.target.value)">
            props: ['value']
    应用: element-ui中的表单项相关组件都用了v-model: Input / Select / Checkbox / Radio

## 5. 方式五: .sync

    1). 实现父子之间相互通信/同步(在原本父向子的基础上增加子向父)
    2). 组件标签的属性上使用.sync的本质: 通过事件监听来接收子组件分发过来的数据并更新父组件的数据
        父组件:
            <child :money.sync="total"/>
            <!-- 等价于 -->
            <Child :money="total" @update:money="total=$event"/>

            data () {
              return {
                total: 1000
              }
            },
        子组件:
            <button @click="$emit('update:money', money-100)">花钱</button>
            props: ['money']
    应用:
        element-ui在有显示隐藏的组件上: Dialog / Drawer

## 6. $attrs与$listeners

    1). $attrs
        实现当前组件的父组件向当前组件的子组件通信
        它是包含所有父组件传入的标签属性(排除props声明, class与style的属性)的对象
        使用: 通过 v-bind="$attrs" 将父组件传入的n个属性数据传递给当前组件的子组件
    2). $listeners
        实现当前组件的子组件向当前组件的父组件通信
        $listeners是包含所有父组件传入的自定义事件监听名与对应回调函数的对象
        使用: 通过v-on="$listeners" 将父组件绑定给当前组件的事件监听绑定给当前组件的子组件
    应用: 利用它封装了一个自定义的带hover文本提示的el-button

## 7. $refs, $children, \$parent

    1). $refs
        实现父组件向指定子组件通信
        $refs是包含所有有ref属性的标签对象或组件对象的容器对象
        使用: 通过 this.$refs.child 得到子组件对象, 从而可以直接更新其数据或调用其方法更新数据
    2). $children
        实现父组件向多个子组件通信
        $children是所有直接子组件对象的数组
        使用: 通过this.$children 遍历子组件对象, 从而可以更新多个子组件的数据
    3). $parent
        实现子组件向父组件通信
        $parent是当前组件的父组件对象
        使用: 通过this.$parent 得到父组件对象, 从而可以更新父组件的数据
    应用: 在后台管理项目中使用了$refs

## 8. provide 与 inject

    1). 实现祖孙组件间直接通信
    2). 使用
    	在祖组件中通过provide配置向后代组件提供数据
    	在后代组件中通过inject配置来声明接收数据
    3). 注意:
    	不太建议在应用开发中使用, 一般用来封装vue插件
    	provide提供的数据本身不是响应式的 ==> 父组件更新了数据, 后代组件不会变化
    	provide提供的数据对象内部是响应式的 ==> 父组件更新了数据, 后代组件也会变化
    应用: element-ui中的Form组件中使用了provide和inject

## 9. Vuex

    1). 实现任意组件间通信
    2). Vuex 是一个专为 Vue 应用程序设计的管理多组件共享状态数据的 Vue 插件
        任意组件都可以读取到Vuex中store的state对象中的数据
        任意组件都可以通过dispatch()或commit()来触发store去更新state中的数据
        一旦state中的数据发生变化, 依赖于这些数据的组件就会自动更新
    应用: 前台和后台项目都有用vuex管理组件数据

## 10. 插槽 ==> 作用域插槽 slot-scope

    1). 实现父组件向子组件传递标签内容
    2). 什么情况下使用作用域插槽?
        父组件需要向子组件传递标签结构内容
        但决定父组件传递怎样标签结构的数据在子组件中
    3). 编码:
        子组件:
            <slot name="title" :row="item" :$index="index">  <!-- slot的属性会自动传递给父组件 -->
        		默认内容
    	 	</slot>
        父组件:
            <template v-slot:title="{row, $index}">
                <span>{{$index+1}}</span> &nbsp;&nbsp;
                <span :style="{color: $index%2===1 ? 'blue' : 'green'}" >{{row.text}}</span>
            </template>
    应用: element-ui中的Table组件
