const letters = [
		['J', 'E', 'J', 'S', 'O', 'U', 'J', 'E', 'D', 'N', 'A'],//
		['D', 'E', 'V', 'E', 'T', 'P', 'E', 'T', 'D', 'V', 'E'],//
		['S', 'E', 'D', 'M', 'D', 'V', 'A', 'N', 'A', 'C', 'T'],//
		['D', 'E', 'S', 'E', 'T', 'R', 'I', 'S', 'E', 'S', 'T'],//
		['O', 'S', 'M', 'J', 'E', 'D', 'E', 'N', 'A', 'C', 'T'],//
		['C', 'T', 'I', 'R', 'I', 'A', 'D', 'E', 'S', 'E', 'T'],//
		['D', 'V', 'A', 'C', 'E', 'T', 'R', 'I', 'C', 'E', 'T'],//
		['P', 'A', 'T', 'N', 'A', 'C', 'T', 'N', 'U', 'L', 'A'],//
		['M', 'E', 'C', 'T', 'Y', 'R', 'I', 'C', 'E', 'T', 'M'],//
		['P', 'A', 'D', 'E', 'S', 'A', 'T', 'D', 'P', 'E', 'T'],//
		
]

export const Matrix = letters.map(row =>
    row.map(letter => ({
        letter: letter,
        active: false
    }))
);
