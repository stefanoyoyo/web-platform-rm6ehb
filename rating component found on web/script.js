function ratingStar(event, starIndex, actionType) {
  if (actionType !== 'click' && actionType !== 'hover') return;
  console.log(starIndex); 
  console.log(actionType); 
  var checkValue = document.querySelectorAll("input");
  var checkStar = document.querySelectorAll("label");
  var checkSmiley = document.querySelectorAll("i");
  var checkCount = 0;
  for(var i=0; i<checkValue.length; i++){
      if(checkValue[i]==event.target){
          checkCount = i+1;
      }
  }
  for(var j=0; j<checkCount; j++){
      checkValue[j].checked = true;
      checkStar[j].className = "rated";
      checkSmiley[j].style.display = "none";
  }
  
  for(var k=checkCount; k<starIndex; k++){
      checkValue[k].checked = false;
    //   if (actionType === 'click') checkStar[k].style.opacity = 1;
    //   if (actionType === 'hover') checkStar[k].style.opacity = 0.5;
      checkStar[k].className = "check"
      checkSmiley[k].style.display = "none";	
  }
  if(checkCount == 1){
      document.querySelectorAll("i")[0].style.display = "block";
  }
  if(checkCount == 2){
      document.querySelectorAll("i")[1].style.display = "block";
  }
  if(checkCount == 3){
      document.querySelectorAll("i")[2].style.display = "block";
  }
  if(checkCount == 4){
      document.querySelectorAll("i")[3].style.display = "block";
  }
  if(checkCount == 5){
      document.querySelectorAll("i")[4].style.display = "block";
  }
}