---
    title: 设计模式
    date: 2020-07-09
    categories:
     - 技术
    tags:
     - 设计模式
---

<Boxx/>

## 简介

设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。

使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。


## 原则

::: tip

详细的原则解释可查看 [https://www.cnblogs.com/WindSun/p/10223080.html](https://www.cnblogs.com/WindSun/p/10223080.html)

:::

1. __单一职责原则 (Single Responsibility Principle, SRP)__

    - 一个程序只做好一件事
    - 如果功能过于复杂就拆分开，每个部分保持独立

1. __开闭原则（Open Close Principle）__

    - 对扩展开放，对修改关闭
    - 增加需求时，扩展新代码，而非修改已有代码

1. __里氏代换原则（Liskov Substitution Principle）__

    - 对开闭原则的补充
    - 子类能覆盖父类
    - 父类能出现的地方子类就能出现
    - 尽量把父类设计成抽象类或接口，让子类继承父类或实现父接口。增加一个新功能时，通过增加一个新的子类来实现

1. __依赖倒转原则（Dependence Inversion Principle）__

    - 以里氏代换原则为基础
    - 针对接口编程，依赖于抽象而不依赖于具体
    - 使用方只关注接口而不关注具体类的实现

1. __接口隔离原则（Interface Segregation Principle）__

    - 保持接口的单一独立
    - 类似单一职责原则，这里更关注接口

1. __迪米特法则，又称最少知道原则（Demeter Principle）__

    - 一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立

1. __合成复用原则（Composite Reuse Principle）__

    - 尽量使用合成/聚合的方式，而不是使用继承

## 类型

根据设计模式的参考书 Design Patterns - Elements of Reusable Object-Oriented Software（中文译名：设计模式 - 可复用的面向对象软件元素） 中所提到的，总共有 23 种设计模式。

这些模式可以分为三大类：创建型模式（Creational Patterns）、结构型模式（Structural Patterns）、行为型模式（Behavioral Patterns）。当然，我们还会讨论另一类设计模式：J2EE 设计模式。

1. __创建型模式__

    这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。

    - 工厂模式（Factory Pattern）
    - 抽象工厂模式（Abstract Factory Pattern）
    - 单例模式（Singleton Pattern）
    - 建造者模式（Builder Pattern）
    - 原型模式（Prototype Pattern）

1. __结构型模式__

    这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。

    - 适配器模式（Adapter Pattern）
    - 桥接模式（Bridge Pattern）
    - 过滤器模式（Filter、Criteria Pattern）
    - 组合模式（Composite Pattern）
    - 装饰器模式（Decorator Pattern）
    - 外观模式（Facade Pattern）
    - 享元模式（Flyweight Pattern）
    - 代理模式（Proxy Pattern）

1. __行为型模式__

    这些设计模式特别关注对象之间的通信。

    - 责任链模式（Chain of Responsibility Pattern）
    - 命令模式（Command Pattern）
    - 解释器模式（Interpreter Pattern）
    - 迭代器模式（Iterator Pattern）
    - 中介者模式（Mediator Pattern）
    - 备忘录模式（Memento Pattern）
    - 观察者模式（Observer Pattern）
    - 状态模式（State Pattern）
    - 空对象模式（Null Object Pattern）
    - 策略模式（Strategy Pattern）
    - 模板模式（Template Pattern）
    - 访问者模式（Visitor Pattern）

1. __J2EE 模式__

    这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。

    - MVC 模式（MVC Pattern）
    - 业务代表模式（Business Delegate Pattern）
    - 组合实体模式（Composite Entity Pattern）
    - 数据访问对象模式（Data Access Object Pattern）
    - 前端控制器模式（Front Controller Pattern）
    - 拦截过滤器模式（Intercepting Filter Pattern）
    - 服务定位器模式（Service Locator Pattern）
    - 传输对象模式（Transfer Object Pattern）

## 工厂模式
