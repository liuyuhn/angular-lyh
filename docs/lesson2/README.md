1. void 和 undefined 有什么区别？

      ```
      void表示没有任何类型。当一个函数没有返回值的时候，通常其返回类型是void。
      生声明一个void类型的变量没有什么作用，他的值只能为undefined或null。
      默认情况下null和undifined是所有类型的子类型。就是说你可以把null和undifined赋值给number类型的变量。
      （void是返回类型，undefined是值）                                                        
      ```

2. 什么是 never 类型？

      ```                                                             
      never类型表示的是那些永远不存在值的类型。
      例如，never类型是那些总是会抛出异常或根本不会有返回值的函数表示式或箭头函数表达式的返回值类型。
      在TypeScript中，可以利用never类型的特性来实现全面性检查。
      ```

3. readonly 和 const 有什么区别？

      ```   
      const:const是常量的意思，其定义的变量只能读取不能更改，且只能在定义时初始化，不能在构造函数与其他属性与方法中初始化。
      readonly:readonly是只读的意思，其定义的变量在运行期间也只能读取不能更改。
      不同点：
      1）readonly分为实例只读变量与静态只读变量。
      const定义时即初始化，运行期间无法再初始化；
      readonly除了在定义时可以初始化外，还能在运行期间的构造函数中初始化，实例只读变量只能在实例构造函数中初始化，静态只读变量只能在静态构造函数中初始化。
      2）const定义的变量只能通过类名称访问，而readonly会根据其是否定义为静态类型而分别通过对象与类名称访问。
      3）const只能定义值类型与字串，若定义引用类型则初始化值必须为null，而readonly无此限制，可以定义引用类型时初始化为null，在对应的构造函数中再重新初始化。
      ```

4. 实现myinterface

      ```                                                             
      interface MyInterface{
       }

      class Test implements MyInterface{
       }
      ```

5. 什么是abstract class？

      ```                                                             
      使用 abstract 关键字声明的类，我们称之为抽象类。
      抽象类不能被实例化，因为它里面包含一个或多个抽象方法。
      所谓的抽象方法，是指不包含具体实现的方法。
      抽象类不能被直接实例化，我们只能实例化实现了所有抽象方法的子类。
      ```

6. 什么是 class mixin, 如何实现？

      ```                                                             
      mixin一般翻译为“混入”、“混合”，早期一般解释为：把一个对象的方法和属性拷贝到另一个对象上；
      也可以简单理解为能够被继承的类，最终目的是实现代码的复用。
      Mixin功能是类似接口的一种子类，这种子类能够像实现多个接口一样实现多个超类功能。
      一个Mixin分两个部分：
      1.Mixin定义，一个类的定义可以应用到不同超类，实际是一个子类工厂。
      2.Mixin应用，将Mixin定义应用到一个超类，超类能产生新的子类。
      下面是一个通过函数实现Mixin的代码，其实则是将源类中属性改写到目标类属性中：
      function mixin(source, target) {
　　     for (var prop in source) {
　　　　    if (source.hasOwnProperty(prop)) {
　　　　　　 target[prop] = source[prop];
　　　　    }
　　     }
      }
      当我们使用：
      mixin(MyMixin, MyClass.prototype);
      MyClass 就有了MyMixin的所有属性了。
      ```

7. typeof 关键词有什么用？

      ```                                                             
      typeof 类型保护只支持两种形式：typeof v === “typename” 和 typeof v !== typename，”typename” 必须是 “number”， “string”， “boolean” 或 “symbol”。 
      但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
      ```

8. keyof 关键词有什么用？

      ```                                                             
      keyof 操作符可以用来一个对象中的所有 key 值。
      ```

9. 类型声明里 & 和 | 有什么作用？

      ```                                                             
      &：交叉类型，将多个类型合并成一个类型，新的类型将具有所有类型的特性，所以交叉类型特别适用对象混入的场景。
      ｜：声明的类型并不确定，可以为多个类型中的一个。
      ```

10. tsconfig.json 里 --strictNullChecks 参数的作用是什么？

      ```                                                             
      strictNullChecks为true时，null和undefined值不能赋给非这两种类型的值，别的类型也不能赋给他们，除了any类型。
      ```

11. interface 和 type 声明有什么区别？

      ```                                                             
      interface只能定义对象类型，type可以定义组合类型、交叉类型、原始类型。
      interface可以合并多个，而type只能用&进行连接。
      ```

12. 「import ... from」、「 import ... = require()」 和 「import(path: string)」有什么区别？

      ```                                                             
      默认情况下，「import ... from」 的语法只适用于 ECMAScript 6 的 export default 导出：
     「 import ... = require()」 是用来导入 commonjs 模块的库，特殊的地方在于这个库的类型声明是 export = xx 这种方式导出的
     「import(path: string)」整个模块仅为副作用（中性词，无贬义含义）而导入，而不导入模块中的任何内容（接口）。 
     这将运行模块中的全局代码, 但实际上不导入任何值

      ```

13. declare 关键字有什么用？

      ```                                                             
      在 TypeScript 中，我们并不知道 $ 或 jQuery 是什么东西，这时，我们需要使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对。declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
      ```

14. module 关键字有什么用？

      ```                                                             
      module大致的意思就是模块，一个模块中有若干类，假如我写了两个类都叫 A 。
      那怎么区分呢，那么就使用这个module关键词将这两个类定义在不同模块就行了。
      module还有一个作用也是主要作用就是将一些不同特征的的类区分开。
      ```

15. 如何处理才能在 TS 中引用 CSS 或者 图片使之不报错？

      ```                                                             
      import "./index.scss";
      import imgPath from "./home.png";
      ```

16. namespace 和 module 有什么区别?

      ```                                                             
      namespace是跨文件的，namespace的概念等同于包名
      module是以文件为单位的，一个文件一个module,主要是解决加载依赖关系的。
      ```

17. 哪些声明类型既可以当做 type 也可以当做 value？

      ```                                                             
      string
      ```
      
18. 下面代码会不会报错？怎么解决？

      ```                                                             
      const obj = {
          a: 1,
          b: 'string',
      };

      obj.c = null;
      ---------------------
      会报错
      interface myInterface {
            a:number;
            b:string;
            [propName: string]: any;
      };
      
      const obj:myInterface = {
            a:1,
            b: 'string',
      };

      obj.c = null;
      ```
      
19. 下面代码中，foo 的类型应该如何声明?

      ```     
      function foo (a: number) {
          return a + 1;
      }

      foo.bar = 123;  
      -------------------------  
      function foo (a: number) {
             return a + 1;
      }
      console.log(foo(123)); 
      ```     
      
20. 下面代码中，foo 的类型应该如何声明?

      ```     
      let foo = {};

      for (let i = 0; i< 100; i++) {
          foo[String(i)] = i;
      }  
      ------------------------
      interface Foo {
            [key: string]:number;
      }

      let foo:Foo = {};

      for (let i = 0; i< 100; i++) {
          foo[String(i)] = i;
      }
      ```       
      
21. 下面代码中，foo 的类型应该如何声明?

      ```     
      function fn(value: number): string {
          return String(value);
      }
      const foo = fn;
      ------------------------------
      unction fn(value: number): string {
          return String(value);
      }
      const foo: (value: number) => string = fn;  
      ```   
      
22. 下面代码中，foo 的类型应该如何声明?

      ```     
      const foo = new Map();
      foo.set('bar', 1);
      ------------------------------
      const foo = new Map<string, number>();
      foo.set('bar', 1);
      ```   
      
23. 下面代码会导致 TS 编译失败，如何修改 getValue 的类型声明。

      ```     
      function getValue() {
          return this.value;
      }

      getValue();
      ---------------------------
      class Foo{
      value: string;
      constructor(v: string){
             this.value = v;
      }

      getValue() {
           return this.value;
      }
      };

      let foo = new Foo('foo');

      console.log(foo.getValue());
      ```       
      
24. 下面代码里「date is Date」有什么作用？

      ```   
      function isDate(date: any): date is Date {
        if (!date) return false;
        return Object.prototype.toString.call(date) === '[object Date]';
      }
      自定义类型保护的类型谓词, 把date作为Date类型处理
      ```         
      
25. String 和 string 的区别？

      ```                                                             
      string是原始类型，基本类型字符串，不可以new  
      var str: String = new String("Hello world");
      var str: string = String("Hello World");
      ```  
