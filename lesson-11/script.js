const plantNeedsWater = (day) => {
   if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}
 let day = prompt("Enter the day of the week: ");

alert(plantNeedsWater(day));