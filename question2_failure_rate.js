"use strict"

// REZA RAKA NUGRAHA
// question 2 assignment at PT Five Jack

const solution = (N, users = []) => {
    // handle users input
    if (N > 500) {
        return "error total stage must be 1 ~ 500"
    } else if (users.length > 200000) {
        return "error length of users must be 1 ~ 200.000"
    }

    let    
    answer = [], // prepare output variable
    stages = [], // how many stages there are
    usersPlay = [], // user play the game
    usersLose = [], // user lose the game
    data = [],  // store user data   
    failureRate = [] // store failure rate of every stage

    let survivorPlayers = users.length  // to count how many users available after lose the game

    users.sort((a,b) => a-b) // sort all input of users
    let current = null
    let counter = 0

    // loop for create how many stages there are
    for(let s = 1; s <= N; s++) {
        stages.push(s)
    }

    // loop to check where are the user has lose at the same stage
    for (let i = 0; i < users.length; i++) {
        if(users[i] != current) {
            if(counter > 0) {
                usersPlay.push(current)
                usersLose.push(counter)
            }
            current = users[i]
            counter = 1
        } else {
            counter++
        }
    }
    
    if (current <= N) {
        if(counter > 0) {
            usersPlay.push(current)
            usersLose.push(counter)
        }    
    }
    
    // loop to check where users lose at that stage 
    for(let l = 0; l < stages.length; l++) {
        // check if users lose at the final stage
        if (usersPlay[l] === N) {
            failureRate.push(stages) 
        }
        // check if no one has complete last stage
        else if (usersLose[l] === undefined) {
            failureRate.push(0 / survivorPlayers) 
        } else {
            failureRate.push(usersLose[l] / survivorPlayers) 
        }
        survivorPlayers = survivorPlayers - usersLose[l]

        // failureRate.sort((a,b) => a*b)
        // loop for insert failure rate to the output and then sort them
        for(let d=0; d < failureRate.length; d++) {
            data[d] = {
                stages: stages[d],
                failureRate: failureRate[d]
            }
        }
    } 
    
    // sort the answer object so the return value is descending
    data.sort((a,b) => (a.failureRate < b.failureRate) ? 1 : (a.failureRate === b.failureRate) ? ((a.stages > b.stages) ? 1 : -1) : -1 )
    
    // insert the stages to the output
    for(let x = 0; x < stages.length; x++) {
        answer.push(data[x].stages)
    }

    const allEqual = arr =>arr.every(v => v === arr[0])
    // loop for check if all users has lose at the same stage
    if(allEqual(users)) {
        answer.pop()
        answer.splice(0,0, N)
    }
    //return output
    return answer
}
// call the function
console.log("test case 1 : " + solution(5, [2,1,2,2,4,3,6,3]))
// expected output [3,4,2,1,5]

console.log("test case 2 : " + solution(4, [4,4,4,4,4]))
// expected output [4,1,2,3]
