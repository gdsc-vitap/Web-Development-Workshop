const tempF = [ 98.2 , 99 , 96.5 , 98.9 , 97.6]

const filterAbove98 = function(tempInF){
    if(tempInF >= 98)
        return true
    else 
        return false
}

const tempF_filtered = tempF.filter(filterAbove98);

console.log(tempF_filtered)