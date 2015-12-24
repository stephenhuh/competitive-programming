//You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

//Write a function to determine if the starting player can guarantee a win.

//For example, given s = "++++", return true. The starting player can guarantee a win by flipping the middle "++" to become "+--+".
//
//
//truths: string
//return bool.
//if there are no consecutive +, there is no move available, so return false
//if there is more than one set of consecutive ++, 
//string is not cyclical
//has to do with the number of sets of consecutive ++
//
//cases: +++, true
//++++, true
//+++++, false
//++++++, false
//+---++, true
class Solution {
public:
    bool canWin(string s) {


        
    }
};
