# a cool solution and easy to use sol'n using lambda expressions
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        operators = {
            "+": lambda a,b: a+b,
            "-": lambda a,b: a-b,
            "/": lambda a,b: int(a/b),
            "*": lambda a,b: a*b
        }
        stack = []
        for i in tokens:
            if i in operators:
                a = stack.pop()
                b = stack.pop()
                res = operators[i](b, a)
                stack.append(res)
            else:
                stack.append(int(i))
        return stack[0]
        
