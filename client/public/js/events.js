//Subscription onload function
function showSubscription(){
    //getting the pop up element
    var popUp = document.getElementById("subscription");
  
    //showing the pop up
    popUp.style.display = "block";
  
    //Adding an event listener to the yes button for a click
    var yes = document.getElementById("yes-button")
    yes.addEventListener("click", function() {
      alert("Congrats! You are Subscribed to Oversteer!")
      popUp.style.display = "none";
    } );
    
    //Adding an event listener to the close button to close out the display
    var closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", function() {
      popUp.style.display = "none";
    });
  }

//Load the funciton
window.addEventListener("load", showSubscription);

//Events for hovering over the images
//Reference to the image element
var img1 = document.getElementById("img1");

//Mouseover event listener to increase the image size
img1.addEventListener("mouseover", function() {
    img1.style.transform = "scale(1.1)"
})

//Mouseout event for after the user moves away
img1.addEventListener("mouseout", function() {
    img1.style.transform = "scale(1)"
})

//Repeat for second image
//Mouseover event listener to increase the image size
img2.addEventListener("mouseover", function() {
    img2.style.transform = "scale(1.1)"
})

//Mouseout event for after the user moves away
img2.addEventListener("mouseout", function() {
    img2.style.transform = "scale(1)"
})