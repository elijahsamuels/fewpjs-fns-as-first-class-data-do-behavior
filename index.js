/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/



/* Write your implementation of greet() */


function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

function greet(timeStr){
  const time = parseInt(timeStr, 10);
  if ( time < 12) return "Good Morning"
  if ( time > 17) return "Good Evening"
  return "Good Afternoon"
}



//   time = Time.now()
//   if (time < 12pm) {
//     string =  "Good Morning";
    
    
//   }
//     else if time < 12pm && time < 5pm;
//     return "Good Afternoon";
    
//     else 
//     return "Good Evening";

// }

// let result;
// if (a > 0) {
//   result = 'positive';
// } else {
//   result = 'NOT positive';
// }
// return result;
// }




// - If the time is earlier than 12pm, return "Good Morning".
// - If the time is between 12pm and 5pm, return "Good Afternoon".
// - If the time is later than 5pm, return "Good Evening".

/* Write your implementation of displayMessage() */
