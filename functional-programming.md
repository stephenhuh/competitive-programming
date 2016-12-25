#Polymorphism

```haskell
id Ints :: Int -> Int
idInt x = x

idString :: String -> String
idString x = x
```

converted into

``` haskell
id :: a -> a
id x = x
```


#Currying
```javascript
function add(a, b){
	return a +b;	
}
```

$add(3,4);

function add(a){
	return function (b)	{
		return a + b;
	}
}

add(3)(4);


#Looping in FP?
* Recursion
* Map
* Fold

Try not to use loops!!!
