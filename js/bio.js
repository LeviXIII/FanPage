$(document).ready(() => {    
  revealPic("#michaelleague", "./images/michaelLeague.jpg");
  revealPic("#coryhenry", "./images/coryHenry.jpg");
  revealPic("#robertsearight", "./images/robertSearight.png");
});

//This function reveals a picture after hovering over it.
revealPic = (idName, newSource) => {
      $(idName).hover(() => {
          $(idName).attr("src", newSource);
      });
};