const hammingDistance = (x, y) => {
    const binaryBase = 2;
    const _x = x.toString(binaryBase);
    const _y = x.toString(binaryBase);
    const _z = _x ^ _y; //string
    _z = _z.toString(10).split('');
    return _z.reduce((acc, curr) => {
        return curr === '1' ? acc + 1 : acc;
    }, 0)
}

test('general case: should compute correctly', () => {
    expect(hammingDistance(3, 7)).toBe(1);
});
