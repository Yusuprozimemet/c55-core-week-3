function parseDateString(dateString) {
    if (dateString.startsWith("MDY")) {
        return { 
            day: Number(dateString.substring(7, 9)), 
            month: Number(dateString.substring(4, 6)), 
            year: Number(dateString.substring(10, 14)) 
        };
    } else {
        return { 
            day: Number(dateString.substring(4, 6)), 
            month: Number(dateString.substring(7, 9)), 
            year: Number(dateString.substring(10, 14)) 
        };
    }
}

console.log(parseDateString("MDY 10-21-1983")); 
console.log(parseDateString("DMY 21-10-1983")); 
console.log(parseDateString("MDY 03-15-2024"));
console.log(parseDateString("DMY 15-03-2024"));