/** Nav Menu **/

var nav_links = document.getElementsByClassName("nav");


/** Dropdown Nav Vars **/

var tab = document.getElementsByTagName('table');
var table = tab[0];
var table_div = document.getElementById('table_div');
var isOnDiv = false;
var drop_content = document.getElementsByTagName('td');






/* *************************************************************** */
nav_links[1].style.height="35px";
nav_links[1].style.borderBottom = "1px solid #F5F5F5";
nav_links[1].addEventListener('mouseover',showSubList,false);
nav_links[1].addEventListener('mouseout',hideSubList,false);
table_div.addEventListener('mouseout',hideSubList,false);


/* *************************************************************** */

function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}

clean(document.body);

/* *************************************************************** */

$('table').mouseenter(function()
{
    isOnDiv = true;
});
                                    
$('table').mouseleave(function()
{
    isOnDiv = false;
});

/* *************************************************************** */


function showSubList()
{
    table_div.style.display="block";
}

function hideSubList()
{
    if(isOnDiv == false)
    {
        table_div.style.display="none";
    }
}



/* *************************************************************** */

for(var i = 0; i < drop_content.length; i ++)
{	
	drop_content[i].style.borderBottom = "1px solid black";
	drop_content[i].addEventListener('mouseover',highLight,false);
        drop_content[i].addEventListener('mouseout',deLight,false);
}

function highLight()
{
   table_div.style.display="block";
   this.style.backgroundColor = "#989898";
}


function deLight()
{
   this.style.backgroundColor = "white";
}








