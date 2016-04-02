#WHY????
* learn to take concepts and abstract them for different situations
* develop further empathy for SE
* ability to program and translate thoughts into code
* think on your feet
* self confidence in engineering capabilities
* not be an idea guy
* you get jobs like this



#CODECHEF - DS & ALGORITHMS - https://discuss.codechef.com/questions/48877/data-structures-and-algorithms
##Binary Search
* requires that object is sorted.
* different predicates can be adjusted to binary search

#HACKEREARTH - CodeMonk - https://www.hackerearth.com/codemonk/
##Arrays & Strings
* Necessary to define size array compile time i.e. int array[6];
* initialize array : int Arr[] = {2,3,4,5,6,7};
* concatenation: s1 += s2;
* comparison: strcmp(s1, s2), s1 == s2;
* reverse -> 

##Number Theory - 1
* Euclid: B == 0 ? A : return GCD(B, A % B);



#debugging
void pause() {
	int x;
	cout << "Paused... Please enter a key to continue";
	cin >> x;
	return;
}
system("PAUSE");
#dynamic programming
The idea behind dynamic programming is that you're caching (memoizing) solutions to subproblems, though I think there's more to it than that.
given: 1000 * 1340 solve by first finding 1000*1000 then doing 1000 * 340 and then adding the two
#backtracking algorithm - finding all or some solutions to some computational problem

In backtracking algorithms you try to build a solution one step at a time. If at some step it become clear that the current path that you are on cannot lead to a solution you go back to the previous step (backtrack) and choose a different path. Basically once you exhaust all your options at a certain step you go back. The classic example for backtracking is the Eight queens puzzle. In this backtracking solution you place queen i on row i in some column j and check that it does not threaten a queen in the i-1 rows.

#greedy algorithms

Always takes the highest values first.
Making locally optimal solution.

#strings
use stoi to get an int
islower
isupper





#numbers in computers
##constants to remember
0xA = 1010 = 10
0xC = 1100 = 12
0xF = 1111 = 15
255 = 11111111 = 0xFF

##binary to hex
1. split into groups of 4 bits
2. convert each group of 4 bits into a hex char

##binary to decimal
just use powers of two to calculate

##hex to binary
reverse of binary to hex process
take each hex digit and change it into binary then string them together

##hex to decimal
take every hex digit and times it by the appropriate hex power
e.g.
7DE
(7 * 16^2) + (13 * 16^1) + (14 * 16^0)
7DE = 2014

##decimal to binary (large)
for smaller numbers just find the first 2^x that is greater than the whole value
and work down from that point

for larger numbers, continuously divide by 2 and count the remainders up. stop when needed
i.e. 
13 to binary
13%2 = 1
6%2 = 0
3%2 = 1
1%2 = 1 quotient = 0

##decimal to hex
same process as decimal to binary but using base 16 and converting all characters to hexadecimal representation
i.e. 
1128%16 = 8
70%16 = 6
4%16 = 4
reading bot to top = 468

##negative number and twos complement and ones complement
the role of 1s and 0s are reversed in twos complements
0000 = 0
1111 = -0 the most significant bit indicates sign
###ones complement
just flip the bits ~ to get the negative value of the positive value.
###twos complement
original value, to get the negative
1. flip bits
2. add one
allows addition and nice calculation of numbers

#bitshifting (note order of operations)
##order of operations
~, << >> , &, ^, |, &&, ||
toggle: 
number ^= 1  << x;
setting bit:
number |= 1 << x;

clearing a bit:
number &= ~(1 << x)

multiply by 2:
number << 1




