function solve(n) {
    if (n <= 0) return 0n;
    
    let currentRow = [1n, 1n];
    
    for (let i = 1; i < n; i++) {
        const nextRow = new Array(i + 2);
        nextRow[0] = 1n;
        
        for (let j = 1; j < nextRow.length; j++) {
            const above = j < currentRow.length ? currentRow[j] : 0n;
            const left = nextRow[j - 1];
            nextRow[j] = above + left;
        }
        
        currentRow = nextRow;
    }
    
    return currentRow[currentRow.length - 1];
}