function superbowlWin(array){
    for (const object of array)
    if (object.result === "W"){
        return object.year
    }
}

record.find(superbowlWin)