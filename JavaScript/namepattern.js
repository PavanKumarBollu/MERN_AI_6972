// pavan


const height = 5;

for (let row = 0; row < height; row++) {
    let lineStr = "";
    
    // Total width spans all 5 letters + spaces between them
    for (let col = 0; col < 35; col++) {
        
        // --- Letter P (Columns 0 to 4) ---
        if (col >= 0 && col <= 4) {
            if (col === 0 || row === 0 || row === 2 || (col === 4 && row === 1)) {
                lineStr += "*";
            } else {
                lineStr += " ";
            }
        }
        
        // --- Letter A (Columns 6 to 10) ---
        else if (col >= 6 && col <= 10) {
            let c = col - 6; // Normalize column index for this letter
            if (row === 0 && c === 2) lineStr += "*";
            else if (row === 1 && (c === 1 || c === 3)) lineStr += "*";
            else if (row === 2) lineStr += "*";
            else if (row > 2 && (c === 0 || c === 4)) lineStr += "*";
            else lineStr += " ";
        }
        
        // --- Letter V (Columns 12 to 16) ---
        else if (col >= 12 && col <= 16) {
            let c = col - 12;
            if ((row === 0 || row === 1) && (c === 0 || c === 4)) lineStr += "*";
            else if ((row === 2 || row === 3) && (c === 1 || c === 3)) lineStr += "*";
            else if (row === 4 && c === 2) lineStr += "*";
            else lineStr += " ";
        }
        
        // --- Second Letter A (Columns 18 to 22) ---
        else if (col >= 18 && col <= 22) {
            let c = col - 18;
            if (row === 0 && c === 2) lineStr += "*";
            else if (row === 1 && (c === 1 || c === 3)) lineStr += "*";
            else if (row === 2) lineStr += "*";
            else if (row > 2 && (c === 0 || c === 4)) lineStr += "*";
            else lineStr += " ";
        }
        
        // --- Letter N (Columns 24 to 28) ---
        else if (col >= 24 && col <= 28) {
            let c = col - 24;
            if (c === 0 || c === 4 || row === c) {
                lineStr += "*";
            } else {
                lineStr += " ";
            }
        }
        
        // --- Spaces between the letters ---
        else {
            lineStr += " ";
        }
    }
    
    console.log(lineStr);
}
