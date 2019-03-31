def main(items, maxWeight):
    return recurse(0, items, 0, 0, 0, maxWeight)


def recurse(idx, items, cv, mv, cw, mw):
    if idx >= len(items):
        return mv

    zero = recurse(idx + 1, items, cv, mv, cw, mw)
    mv = max(zero, mv)

    cw += items[idx][0]
    cv += items[idx][1]

    if cv > mv and cw <= mw:
        mv = cv

    one = recurse(idx + 1, items, cv, mv, cw, mw)

    return max(mv, one)

print(main([(1,3), (2,1), (5,8)], 5));
print(main([(1,8), (2,4), (3,0), (2,5), (2,3)], 4));
print(main([(1384,86), (778, 115), (1794, 135), (1387,92), (650, 21), (363, 27), (691, 59), (1764, 126), (541, 26), (1173, 136), (1212, 168), (568, 29), (1783, 130), (863, 123), (68, 135), (1930, 2), (23, 58), (1070, 167), (1394, 56), (1012, 42)], 2000)) #475
