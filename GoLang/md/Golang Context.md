# Golang Context

## 使用规则
> 1. 不要将 Contexts 放入结构体，相反context应该作为第一个参数传入，命名为ctx。 func DoSomething（ctx context.Context，arg Arg）error { // ... use ctx ... }
> 2. 即使函数允许，也不要传入nil的 Context。如果不知道用哪种 Context，可以使用context.TODO()。
> 3. 使用context的Value相关方法只应该用于在程序和接口中传递的和请求相关的元数据，不要用它来传递一些可选的参数
> 4. 相同的 Context 可以传递给在不同的goroutine；Context 是并发安全的。