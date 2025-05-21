const Clock = () =>{
    let dates = new Date()
    let hours = dates.getHours()
    let minutes = dates.getMinutes()
    let seconds = dates.getSeconds()
    let month = dates.getMonth()
    let date = dates.getDate()
    let year = dates.getFullYear()
    let day = dates.getDay()

    // time
    document.getElementById("time").innerHTML = 
    `${hours}:${minutes}:${seconds}`

    //date
    document.getElementById("date").innerHTML = `${date}`

    //year
    document.getElementById("year").innerHTML = `${year}`


    //days
    if(day == 1){
        document.getElementById("day").innerHTML = "Monday"
    }else if(day == 2){
        document.getElementById("day").innerHTML = "Tuesday"
    }else if(day == 3){
        document.getElementById("day").innerHTML = "Wednesday"
    }else if(day == 4){
        document.getElementById("day").innerHTML = "Thursday"
    }else if(day == 5){
        document.getElementById("day").innerHTML = "Friday"
    }else if(day == 6){
        document.getElementById("day").innerHTML = "Saturday"
    }else if(day == 7){
        document.getElementById("day").innerHTML = "Sunday"
    }    

    
    //months
    if(month == 1){
        document.getElementById("month").innerHTML = "February"
    }else if(month == 2){
        document.getElementById("month").innerHTML = "March"
    }else if(month == 3){
        document.getElementById("month").innerHTML = "April"
    }else if(month == 4){
        document.getElementById("month").innerHTML = "May"
    }else if(month == 5){
        document.getElementById("month").innerHTML = "June"
    }else if(month == 6){
        document.getElementById("month").innerHTML = "July"
    }else if(month == 7){
        document.getElementById("month").innerHTML = "August"
    }else if(month == 8){
        document.getElementById("month").innerHTML = "September"
    }else if(month == 9){
        document.getElementById("month").innerHTML = "October"
    }else if(month == 10){
        document.getElementById("month").innerHTML = "November"
    }else if(month == 11){
        document.getElementById("month").innerHTML = "December"
    }else if(month == 0){
        document.getElementById("month").innerHTML = "January"
    }

}
setInterval(Clock, 1000)