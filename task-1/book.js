function isBookApplicable(searchString) {
  
  const bookTitle = "The fundamentals of JavaScript";
  const normalizedTitle = bookTitle.toLowerCase();
  const normalizedSearch = searchString.trim().toLowerCase();

  if (normalizedTitle.includes(normalizedSearch)) {
    return true;
  } else {
    return false;
  }
}


console.log(isBookApplicable("javascript"));   
console.log(isBookApplicable("javascript "));  
console.log(isBookApplicable("python"));      
console.log(isBookApplicable("JavaScript"));   
console.log(isBookApplicable("JAVASCRIPT"));   
