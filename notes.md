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
