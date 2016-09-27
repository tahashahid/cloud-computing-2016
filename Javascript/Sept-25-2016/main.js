var ticketNum = 0;
function genTicket(users, index){
    setTimeout(function(){
        ticketNum++;
        console.log(users[index] + " " + ticketNum);
        index++;
        if(index < users.length) {
            genTicket(users, index);
        }
    }, 1000)
}


var users = ["User A", "User B", "User C"];
genTicket(users, 0);

// for(var i = 0 ; i <users.length; i++){
//     genTicket();
//     console.log(users[i] + ":" + ticketNum);
    
// }
