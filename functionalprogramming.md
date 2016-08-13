#Recursive datatypes:
SML:
datatype nat = Zero | Succ of nat

#Pattern matching
SML:
fun iszero(n : nat) : bool = 
	case n of
		Zero => true
	  | Succ(m) => false
