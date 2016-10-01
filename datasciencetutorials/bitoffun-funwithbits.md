0^1 = 1
1^1 = 0
0^0 = 0
1^0 = 1


Set union
A | B
Set intersection
A & B
Set subtraction
A & ~B
Set negation
ALL_BITS ^ A
Set bit
A |= 1 << bit
Clear bit
A &= ~(1 << bit)
Test bit
(A & 1 << bit) != 0

check if a number is power of two
( N != 0 ) && ( N & ( N - 1 ) == 0 )
how does this do so? uses the carry over effect of binary

& and && precedence | and || precedence




