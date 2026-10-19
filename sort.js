function generateNumberTriangle(numRows) {
    const triangle = [];
    
    for (let i = 0; i < numRows; i++) {
        triangle[i] = [];
        const rowLength = i + 2; 
        // Row 1 has 2 elements, Row 2 has 3, etc.
        
        for (let j = 0; j < rowLength; j++) {
            const above = (i > 0 && triangle[i - 1][j] !== undefined) ? triangle[i - 1][j] : 0;
            const left = (j > 0) ? triangle[i][j - 1] : 0;
            
            if (i === 0 && j === 0) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = above + left;
            }
        }
    }
    
    return triangle;
}

// Example usage (4 rows):
const triangle = generateNumberTriangle(4);
triangle.forEach((row, index) => {
    console.log(`Row ${index + 1}:`, row.join(' '));
});