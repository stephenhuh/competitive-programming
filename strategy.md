#backtracking algorithm - finding all or some solutions to some computational problem

In backtracking algorithms you try to build a solution one step at a time. If at some step it become clear that the current path that you are on cannot lead to a solution you go back to the previous step (backtrack) and choose a different path. Basically once you exhaust all your options at a certain step you go back. The classic example for backtracking is the Eight queens puzzle. In this backtracking solution you place queen i on row i in some column j and check that it does not threaten a queen in the i-1 rows.

