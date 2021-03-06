"use strict"

// REZA RAKA NUGRAHA
// question 1 assignment at PT Five Jack

const solution = (record) => {
    // handle user input, make them into string and turn it again into array
    let users = record.join(' ').replace(/,/g, "").split(" ")

    // handle users input
    let input = users.join('')
    if (input.length > 100000) {
        return "error input users string must be 1 ~ 100.000"
    }

    let 
    // prepare the output variable
    answer = [],
    // this variable use to store user data
    data = [],
    // this variable is use to notifying where index is user leaved 
    outIndex = []

    //create loop to notifying where index is user leaved 
    for(let r=0; r < record.length; r++) {
        const word = record[r].split(' ')
        if (word.length == 2) {
            outIndex.push(r)
        }
    }

    // this variable use to handle increment for new user data
    let id = 0

    // looping for handle enter and change nickname action input
    for(let i = 0; i < users.length; i++) {
        // handle to leave before enter
        if(users[0] == "Leave") {
            return "You must enter the chat first before leaving the app."
        // handle to change nickname before enter
        } else if(users[0] == "Change") {
            return "You must enter the chat first before change the nickname."
        // add user who enter the room
        } else if (users[i] == "Enter") {  
            for(let j = 0; j < data.length; j++) {
                if (users[i+1] == data[j].id) {
                    data[j].name = users[i+2]
                }
            }  
            // insert user data who has enter the room
            data[id] = {
                'action': users[i],
                'id': users[i+1],
                'name': users[i+2]
            }
            id++
        // handle user who want to change nickname
        } else if (users[i] == "Change") {  
            for(let j = 0; j < data.length; j++) {
                if (users[i+1] == data[j].id) {
                    data[j].name = users[i+2]
                }
            }  
        } 
    }

    // looping for show who users enter the room
    for(let j = 0; j < data.length; j++) {
        if(data[j].action == "Enter") {
            answer.push(data[j].name + " came in.")
        }
    }  

    // looping for show who users left the room
    for(let i = 1; i < users.length; i++) {
        if (users[i] == "Leave") {  
            for(let j = 1; j < data.length; j++) {
                if (users[i+1] == data[j].id) {
                    for(let k=0; k < outIndex.length; k++) {
                        answer.splice(outIndex, 0, data[j].name + " has left.")
                    }       
                }
            }  
        } 
    }
   
    // return output variable
    return answer
}

// call the function
console.log( solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]) ) 
