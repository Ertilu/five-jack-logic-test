"use strict"

// REZA RAKA NUGRAHA
// question 3 assignment at PT Five Jack

const solution = (relation) => {
    let answer = 0 // prepare the output variable

    if(relation.length > 20) { // input handling for rows
        return "Error the length of the row relation must 1 ~ 20"
    }  

    for(let h=0; h < relation.length; h++) {   
        if(relation[h].length > 8) { // input handling for column
            return "Error the length of the relation column must 1 ~ 8"
        } 
        for(let j=0; j < relation[h].length; j++) {
            if(relation[h][j].length > 8) { // input handling for user string  
                return "Error the length of all strings in relation must 1 ~ 8"
            }    
        }
    }

    // create variable to store every data
    let i0 = [], i1 = [], i2 = [], i3 = [], i4 = [], i5 = [], i6 = [], i7 = []

    // create variable to store extra data if candidate key has not found yet
    let i0_1 = [], i0_2 = [], i0_3 = [], i0_4 = [], i0_5 = [], i0_6 = [], i0_7 = []
    let i1_2 = [], i1_3 = [], i1_4 = [], i1_5 = [], i1_6 = [], i1_7 = []
    let i2_3 = [], i2_4 = [], i2_5 = [], i2_6 = [], i2_7 = []
    let i3_4 = [], i3_5 = [], i3_6 = [], i3_7 = []
    let i4_5 = [], i4_6 = [], i4_7 = []
    let i5_6 = [], i5_7 = []
    let i6_7 = []

    let candidateKey = [] // to notifyn where is candidate key located

    const hasDuplicates = (array) => {
        return (new Set(array)).size !== array.length
    } // this function to check is there are duplicated values 

    // loop for insert every data to check every values is there are a duplicated data 
    for(let a = 0; a < relation.length; a++ ) {
        // insert data for zero index
        i0.push(relation[a][0]) 
        i0_1.push(relation[a][0] + relation[a][1])
        i0_2.push(relation[a][0] + relation[a][2])
        i0_3.push(relation[a][0] + relation[a][3])
        i0_4.push(relation[a][0] + relation[a][4])
        i0_5.push(relation[a][0] + relation[a][5])
        i0_6.push(relation[a][0] + relation[a][6])
        i0_7.push(relation[a][0] + relation[a][7])

        // insert data for first index
        i1.push(relation[a][1]) 
        i1_2.push(relation[a][1] + relation[a][2])
        i1_3.push(relation[a][1] + relation[a][3])
        i1_4.push(relation[a][1] + relation[a][4])
        i1_5.push(relation[a][1] + relation[a][5])
        i1_6.push(relation[a][1] + relation[a][6])
        i1_7.push(relation[a][1] + relation[a][7])

        // insert data for second index
        i2.push(relation[a][2]) 
        i2_3.push(relation[a][2] + relation[a][3])
        i2_4.push(relation[a][2] + relation[a][4])
        i2_5.push(relation[a][2] + relation[a][5])
        i2_6.push(relation[a][2] + relation[a][6])
        i2_7.push(relation[a][2] + relation[a][7])

        // insert data for third index
        i3.push(relation[a][3]) 
        i3_4.push(relation[a][3] + relation[a][4])
        i3_5.push(relation[a][3] + relation[a][5])
        i3_6.push(relation[a][3] + relation[a][6])
        i3_7.push(relation[a][3] + relation[a][7])

        // insert data for fourth index
        i4.push(relation[a][4]) 
        i4_5.push(relation[a][4] + relation[a][5])
        i4_6.push(relation[a][4] + relation[a][6])
        i4_7.push(relation[a][4] + relation[a][7])

        // insert data for fifth index
        i5.push(relation[a][5]) 
        i5_6.push(relation[a][5] + relation[a][6])
        i5_7.push(relation[a][5] + relation[a][7])

        // insert data for sixth index
        i6.push(relation[a][6]) 
        i6_7.push(relation[a][6] + relation[a][7])

        // insert data for seventh index
        i7.push(relation[a][7])
    }

    // check all values is there are duplicated if false then it should be candidate key
    if (!hasDuplicates(i0) && i0 !== undefined) {
        answer++
        candidateKey.push(i0)
    } else {
        if(!hasDuplicates(i0_1) && i0_1 !== undefined) {
            answer++
            candidateKey.push(i0_1)
        } else if(!hasDuplicates(i0_2) && i0_2 !== undefined) {
            answer++
            candidateKey.push(i0_2)
        } else if(!hasDuplicates(i0_3) && i0_3 !== undefined) {
            answer++
            candidateKey.push(i0_3)
        } else if(!hasDuplicates(i0_4) && i0_4 !== undefined) {
            answer++
            candidateKey.push(i0_4)
        } else if(!hasDuplicates(i0_5) && i0_5 !== undefined) {
            answer++
            candidateKey.push(i0_5)
        } else if(!hasDuplicates(i0_6) && i0_6 !== undefined) {
            answer++
            candidateKey.push(i0_6)
        } else if(!hasDuplicates(i0_7) && i0_7 !== undefined) {
            answer++
            candidateKey.push(i0_7)
        }
    }

    if (!hasDuplicates(i1) && i1 !== undefined) {
        answer++
        candidateKey.push(i1)
    } else {
        if(!hasDuplicates(i1_2) && i1_2 !== undefined) {
            answer++
            candidateKey.push(i1_2)
        } else if(!hasDuplicates(i1_3) && i1_3 !== undefined) {
            answer++
            candidateKey.push(i1_3)
        } else if(!hasDuplicates(i1_4) && i1_4 !== undefined) {
            answer++
            candidateKey.push(i1_4)
        } else if(!hasDuplicates(i1_5) && i1_5 !== undefined) {
            answer++
            candidateKey.push(i1_5)
        } else if(!hasDuplicates(i1_6) && i1_6 !== undefined) {
            answer++
            candidateKey.push(i1_6)
        } else if(!hasDuplicates(i1_7) && i1_7 !== undefined) {
            answer++
            candidateKey.push(i1_7)
        }
    }

    if (!hasDuplicates(i2) && i2 !== undefined) {
        answer++
        candidateKey.push(i2)
    } else {
        if(!hasDuplicates(i2_3) && i2_3 !== undefined) {
            answer++
            candidateKey.push(i2_3)
        } else if(!hasDuplicates(i2_4) && i2_4 !== undefined) {
            answer++
            candidateKey.push(i2_4)
        } else if(!hasDuplicates(i2_5) && i2_5 !== undefined) {
            answer++
            candidateKey.push(i2_5)
        } else if(!hasDuplicates(i2_6) && i2_6 !== undefined) {
            answer++
            candidateKey.push(i2_6)
        } else if(!hasDuplicates(i2_7) && i2_7 !== undefined) {
            answer++
            candidateKey.push(i2_7)
        }
    }

    if (!hasDuplicates(i3) && i3 !== undefined) {
        answer++
        candidateKey.push(i3)
    } else {
        if(!hasDuplicates(i3_4) && i3_4 !== undefined) {
            answer++
            candidateKey.push(i3_4)
        } else if(!hasDuplicates(i3_5) && i3_5 !== undefined) {
            answer++
            candidateKey.push(i3_5)
        } else if(!hasDuplicates(i3_6) && i3_6 !== undefined) {
            answer++
            candidateKey.push(i3_6)
        } else if(!hasDuplicates(i3_7) && i3_7 !== undefined) {
            answer++
            candidateKey.push(i3_7)
        }
    }

    if (!hasDuplicates(i4) && i4 !== undefined) {
        answer++
        candidateKey.push(i4)
    } else {
        if(!hasDuplicates(i4_5) && i4_5 !== undefined) {
            answer++
            candidateKey.push(i4_5)
        } else if(!hasDuplicates(i4_6) && i4_6 !== undefined) {
            answer++
            candidateKey.push(i4_6)
        } else if(!hasDuplicates(i4_7) && i4_7 !== undefined) {
            answer++
            candidateKey.push(i4_7)
        }
    }

    if (!hasDuplicates(i5) && i5 !== undefined) {
        answer++
        candidateKey.push(i5)
    } else {
        if(!hasDuplicates(i5_6) && i5_6 !== undefined) {
            answer++
            candidateKey.push(i5_6)
        } else if(!hasDuplicates(i5_7) && i5_7 !== undefined) {
            answer++
            candidateKey.push(i5_7)
        }
    }

    if (!hasDuplicates(i6) && i6 !== undefined) {
        answer++
        candidateKey.push(i6)
    } else if(!hasDuplicates(i6_7) && i6_7 !== undefined) {
        answer++
        candidateKey.push(i6_7)
    }

    if (!hasDuplicates(i7) && i7 !== undefined) {
        answer++
        candidateKey.push(i7)
    }

    return "Candidate key available is: " + answer + ". Candidate key located at: " + candidateKey.join(' -~ and ~- ')
}
 
console.log( "Test case 1: \n" + solution([ ["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"],["700", "raka", "computer", "2"] ]) )
