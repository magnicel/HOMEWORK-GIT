let numMonth = prompt ('Write the number of the month to determine the time of year', '');


 if (numMonth >= 3 && numMonth < 6)
{
  result = 'Spring';  
}

else if (numMonth >= 6 && numMonth < 9)
  {
    result = 'Summer';
  }

else if (numMonth >= 9 && numMonth < 12)
  {
    result = 'Autumn';
  }
else if (numMonth >= 12 || numMonth >= 1 || month >= 2)
  {
    result = 'Winter';
  }
alert(result);