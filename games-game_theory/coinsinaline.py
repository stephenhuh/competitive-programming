## two players, player A and B, player A goes first, left or right ends of line
## Given initial input of coins in the line (even) and continuous input of player B's moves 
## make agent so player A always wins.
## no need for memoization for now. only use lists
import random

def play_game(line: int) -> list:
    turns = [None] * len(line)

    first_turn = round(random.uniform(0,1))

    ### play the first turn
    if first_turn is 0:
        coin = line[0]
        turns.append(coin)
        del(line[0]) 
    else:
        coin = line.pop()
        turns.append(coin)

    while line:
        b = input(
                'Pick between front: {front} back: {back}'
                .format(front=line[0], back=line[-1])
            )

        a_total = 0
        b_total = 0

        if b is 'front':

    


def main():
    play_game([5, 10, 25, 5])

main()

