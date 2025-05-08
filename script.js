let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
const exams = [
  {
    
    moduleName: "CAO216D",
    examDate: new Date("2025-06-02T08:45"),
    durationMinutes: 180
  },
  {
    moduleName: "ADS216D",
    examDate: new Date("2025-06-05T13:45"),
    durationMinutes: 180
  },
  {
    moduleName: "DTP216D",
    examDate: new Date("2025-06-09T08:45"),
    durationMinutes: 240
  },
  {
    moduleName: "OOP216D",
    examDate: new Date("2025-06-12T08:45"),
    durationMinutes: 240
  }
  
];



const dateTarget = new Date(2025, 5, 2);
let myInt = setInterval(updateTime,1000);


function updateTime() {
  const currentTime = new Date();

  let difference = dateTarget.getTime() - currentTime.getTime();
  
  days.innerText = format(Math.floor(difference / 86_400_000));
  let temp = difference % 86_400_000;
  hours.innerText = format(Math.floor(temp / 3_600_000));
  temp = temp % 3_600_000;
  minutes.innerText = format(Math.floor(temp / 60_000));
  temp = temp % 60_000;
  seconds.innerText = format(Math.floor(temp / 1000));
  
  
}
function format(x){
  return x < 10 ? `0${x}`: `${x}`;
}

function populateExamTable(){
  const tableBody = document.getElementById('examTableBody');
  tableBody.innerHTML = '';
  let iCount = 0;
  exams.forEach(exam =>{
    iCount++;
    const row = document.createElement('tr');

    //exam counter that appends automatically
    const iCountCell = document.createElement('th');
    iCountCell.textContent = iCount;
    row.appendChild(iCountCell);

    //module name
    const moduleCell = document.createElement('td');
    moduleCell.textContent = exam.moduleName;
    row.appendChild(moduleCell);

    //date column
    const dateCell = document.createElement('td');
    dateCell.textContent = formatDate(exam.examDate);
    row.appendChild(dateCell);

    //duration column
    const durCell = document.createElement('td');
    durCell.textContent = exam.durationMinutes / 60 + " hours";
    row.appendChild(durCell);

    //countdown
    const countdownCell = document.createElement('td');
    countdownCell.textContent = getDaysRemaining(exam.examDate);
    row.appendChild(countdownCell);

    tableBody.appendChild(row);
  });
}
//cDate is currentDate
//eDate is examDate
function getDaysRemaining(date) {
  const examDate = new Date(date);
  const currentDate = new Date();
  
  // Calculate difference in milliseconds
  const diffInMs = examDate.getTime() - currentDate.getTime();
  
  // Convert to days (86400000 ms per day)
  const diffInDays = Math.floor(diffInMs / 86400000);
  
  // Handle pluralization and negative values
  if (diffInDays < 0) {
    return "Exam passed";
  } else if (diffInDays === 0) {
    return "Today";
  } else if (diffInDays === 1) {
    return "1 day remaining";
  } else {
    return `${diffInDays} days remaining`;
  }
}
// function getDaysRemaining(date){
//   let eDate = new Date(date);
//   let cDate = new Date();
//   //the difference then we divide it by that huge ass number to
//   // get the number of days
//   let dDate = Math.floor( (eDate.getTime() - cDate.getTime() / 86_400_000));



//   return dDate < 2 ? `${dDate} remaining` : `${dDate}'s remaining`;
// }
function formatDate(date){
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let result = new Date(date);
  let d, m, y;
  d = result.getDate();
  m = months[result.getMonth()];
  y = result.getFullYear();
  let strFormat = `${d} ${m} ${y}`;

  return strFormat
}
populateExamTable();






