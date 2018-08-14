var outercircles = document.getElementsByClassName('circle');
var slide_images = document.getElementsByClassName('slide_image');
var left_arrow = document.getElementById('left-arrow');
var right_arrow = document.getElementById('right-arrow');

var img_counter = 0;

/* *************************************************************** */

   for ( var i = 0; i < slide_images.length; i ++)
   {
      slide_images[i].style.display = "none";
   }

   slide_images[0].style.display = "block";
   outercircles[img_counter].style.border = "2px solid black";

/* *************************************************************** */

   left_arrow.style.display="none";
   right_arrow.style.display="none";

   left_arrow.addEventListener('click',prevPic,false);
   right_arrow.addEventListener('click',nextPic,false);

   

   function prevPic()
   {
     if(img_counter > 0)
     {
       outercircles[img_counter].style.border = "0px";
       img_counter = img_counter - 1;

       for(var i = 0; i < slide_images.length; i ++)
       {
        slide_images[i].style.display = "none";
       }

       slide_images[img_counter].style.display = "block";
       outercircles[img_counter].style.border = "2px solid black";
     }
   }

   function nextPic()
   {
      if(img_counter < 7)
      {
        outercircles[img_counter].style.border = "0px";
        img_counter = img_counter + 1;

      for(var i = 0; i < slide_images.length; i ++)
       {
        slide_images[i].style.display = "none";
       }

       slide_images[img_counter].style.display = "block";
        outercircles[img_counter].style.border = "2px solid black";
      }
   }

/* *************************************************************** */

function hideNav()
{
   for ( var i = 0; i < outercircles.length; i ++)
    {
        outercircles[i].style.display="none";
    }

     left_arrow.style.display = "none";
    right_arrow.style.display = "none";
}

function showNav()
{
      for ( var i = 0; i < outercircles.length; i ++)
    {
        outercircles[i].style.display="inline-block";
    }

    left_arrow.style.display = "block";
    right_arrow.style.display = "block";
}

hideNav();

document.getElementById("images_div").addEventListener('mouseover',showNav,false);
document.getElementById("images_div").addEventListener('mouseout',hideNav,false);


/* *************************************************************** */

for ( var i = 0; i < outercircles.length; i ++)
{
    outercircles[i].addEventListener('mouseover',flash,false);
    outercircles[i].addEventListener('mouseout',unflash,false);
    outercircles[i].addEventListener('click',showPic,false);
}

function flash()
{
  var child = this.childNodes[0];
  child.style.backgroundColor = "#E8E8E8";
  
}

function unflash()
{
    var child = this.childNodes[0];
    child.style.backgroundColor = "#808080";
}

function showPic()
{  
  outercircles[img_counter].style.border = "0px";
    
   for ( var i = 0; i < outercircles.length; i ++)
   {
       if (this === outercircles[i])
       {
           img_counter = i;
       }
   }

   for ( var i = 0; i < slide_images.length; i ++)
   {
      slide_images[i].style.display = "none";
   }
   
   slide_images[img_counter].style.display = "block";
   outercircles[img_counter].style.border = "2px solid black";
    
}

/* *************************************************************** */





