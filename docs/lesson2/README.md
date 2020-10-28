1. void 和 undefined 有什么区别？

      ```
      void表示没有任何类型。当一个函数没有返回值的时候，通常其返回类型是void。生声明一个void类型的变量没有什么作用，他的值只能为undefined或null。默认情况下null和undifined是所有类型的子类型。就是说你可以把null和undifined赋值给number类型的变量。（void是返回类型，undefined是值）                                                        
      ```
      
2. 什么是 never 类型？

      ```                                                             
      
      ```

3. readonly 和 const 有什么区别？

      ```                                                             
      
      ```

4. 实现myinterface

      ```                                                             
      
      ```

5. 什么是abstract class？

      ```                                                             
      
      ```

6. 什么是 class mixin, 如何实现？

      ```                                                             
      
      ```

7. typeof 关键词有什么用？

      ```                                                             
      
      ```

8. keyof 关键词有什么用？

      ```                                                             
      
      ```

9. 类型声明里 & 和 | 有什么作用？

      ```                                                             
      
      ```

10. tsconfig.json 里 --strictNullChecks 参数的作用是什么？

      ```                                                             
      
      ```

11. interface 和 type 声明有什么区别？

      ```                                                             
      
      ```

12. 「import ... from」、「 import ... = require()」 和 「import(path: string)」有什么区别？

      ```                                                             
      
      ```

13. declare 关键字有什么用？

      ```                                                             
      
      ```

14. module 关键字有什么用？

      ```                                                             
      
      ```

15. 如何处理才能在 TS 中引用 CSS 或者 图片使之不报错？

      ```                                                             
      
      ```

16. namespace 和 module 有什么区别?

      ```                                                             
      
      ```

17. 哪些声明类型既可以当做 type 也可以当做 value？

      ```                                                             
      
      ```
      
18. 下面代码会不会报错？怎么解决？

      ```                                                             
      const obj = {
          a: 1,
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
      
      ```     
      
20. 下面代码中，foo 的类型应该如何声明?

      ```     
      let foo = {};

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
      
      ```   
      
22. 下面代码中，foo 的类型应该如何声明?

      ```     
      const foo = new Map();
      foo.set('bar', 1);
      
      ```   
      
23. 下面代码会导致 TS 编译失败，如何修改 getValue 的类型声明。

      ```     
      function getValue() {
          return this.value;
      }

      getValue();
      
      ```       
      
24. 下面代码里「date is Date」有什么作用？

      ```   
      function isDate(date: any): date is Date {
        if (!date) return false;
        return Object.prototype.toString.call(date) === '[object Date]';
      }
      
      ```         
      
25. String 和 string 的区别？

      ```                                                             
      
      ```  
