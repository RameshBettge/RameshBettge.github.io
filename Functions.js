
// resize grid element's height
$(document).ready(GetHighestOverflow);
$(window).resize(GetHighestOverflow);


// Video Controls
var isPlaying = {};


function TogglePlay(name)
{
  
  var vid = document.getElementById(name);
  play = document.getElementById(name + "_o");
  
  if(!vid.controls)
  {
    vid.controls = true;
  }

  if(!isPlaying[vid] || vid.ended)
  {
      vid.play();
      isPlaying[vid] = true;
      // play.style.display = "none";
  }
  else
  {
      vid.pause();
      isPlaying[vid] = false;
      // play.style.display = "block";
  }

}

function ShowPlay(name, on)
{
    var vid = document.getElementById(name);

    var play = document.getElementById(name + "_o");

    if(on)
    {
        play.style.display = "block";
    }
    else
    {
        play.style.display = "none";
    }
}
function Reset(name)
{
    var vid = document.getElementById(name);
    vid.currentTime = 0;
}


function PasteHTML(ContainerName, FileName)
{
  var hidden = document.getElementById("ProjectContainer");
  hidden.style.display = "block";
  $('#' + ContainerName).load(FileName + '.html');
}


// Switch project Content
function DisplayProject(ProjectName)
{

  // Make sure the project content and the navigational arrows are displayed.
  var hidden = document.getElementById("ProjectContainer");
  hidden.style.display = "block";


  var directory = 'ProjectContent/'

  // Note: occassional error in firefox('XML-Verarbeitungsfehler: "Junk" nach Dokument-Element') may be caused by the following line.
  $('#ProjectText').load(directory + ProjectName + '.html');
  $('#ProjectSubNavigation').load(directory + ProjectName + "_nav.html");
}

function GetHighestOverflow()
{
  var gridTexts = document.getElementsByClassName("limit-height");
  
  var highestOverflow = 0;

  for(var i = 0; i<gridTexts.length; i++)
  {
    $(gridTexts).eq(i).css('height', ("0px")); // set height to 0

    var currentOverflow = gridTexts[i].scrollHeight - gridTexts[i].clientHeight;

    if(currentOverflow > highestOverflow)
    {
      highestOverflow = currentOverflow
    	}
  }

  for(var i = 0; i<gridTexts.length; i++)
  {
    $(gridTexts).eq(i).css('height', (highestOverflow.toString() + 'px'));
  }
}

function SetAllFiltersActive(filterCategory1, filterCategory2)
{
  // Apply Filters
  SetFilterCategory(filterCategory1, true);
  SetFilterCategory(filterCategory2, true);

  // Tint the allButton black
  var allButton = document.getElementById("AllButton")
  allButton.className = "w3-button w3-black";

  var categoryButton1 = document.getElementById(filterCategory1 + "Button");
  var categoryButton2 = document.getElementById(filterCategory2 + "Button");

  categoryButton1.className = "w3-button w3-white";
  categoryButton2.className = "w3-button w3-white";
}

function SetFilterActive(activeFilterCategory, inactiveFilterCategory)
{
  // Apply Filters
  SetFilterCategory(activeFilterCategory, true);
  SetFilterCategory(inactiveFilterCategory, false);


  // Tint activeFilterCategory button Black
  var categoryButton = document.getElementById(activeFilterCategory + "Button");
  categoryButton.className = "w3-button w3-black";
  
  var allButton = document.getElementById("AllButton");
  var otherCategoryButton = document.getElementById(inactiveFilterCategory + "Button");
  allButton.className = "w3-button w3-white";
  categoryButton.className = "w3-button w3-white";
}

function SetFilterCategory(filterCategoryName, bVisible)
{
  var teams = document.getElementsByClassName(filterCategoryName);
  ToggleVisibility(teams, bVisible);
}

// Filter
function SetActiveFilter(buttonNumber)
{
  var allButton = document.getElementById("AllButton");
  var soloButton = document.getElementById("SoloButton");
  var teamButton = document.getElementById("TeamButton");

  if(buttonNumber == 0) // if all button
  {
    SetTeam(true);
    SetSolo(true);
    allButton.className = "w3-button w3-black";
  }
  else
  {
    allButton.className = "w3-button w3-white";
  }

  if(buttonNumber == 1) // if solo button
  {
    SetSolo(true);
    SetTeam(false);
    soloButton.className = "w3-button w3-dark-grey";
  }
  else
  {
    soloButton.className = "w3-button w3-white";
  }

  if(buttonNumber == 2) // if team button
  {
    SetSolo(false);
    SetTeam(true);
    teamButton.className = "w3-button w3-dark-grey";
  }
  else
  {
    teamButton.className = "w3-button w3-white";
  }
}

function SetTeam(bVisible)
{
  var teams = document.getElementsByClassName("Team");
  ToggleVisibility(teams, bVisible);
}

function SetSolo(bVisible)
{
  var solos = document.getElementsByClassName("Solo");
  ToggleVisibility(solos, bVisible);
}

function ToggleVisibility(collection, bVisible)
{
  for(var i = 0; i < collection.length; i++)
  {
    if (bVisible) 
    {
      collection[i].style.display = "block";
    } 
    else 
    {
      collection[i].style.display = "none";
    }
  }
}


// Turns every jump using href on the same page into a smooth transition.
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top}, 800); // last number controls the speed. // removed -50 after target.offset().top
        return false;
      }
    }
  });
});

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}