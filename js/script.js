var data;
var bMname = document.getElementById("bookmakerName");
var webUrl = document.getElementById("websiteurl");
var row = document.getElementById("data-bookmaker");



if(localStorage.getItem("content") ==null )
{
    data =[];
}
else
{
    data=JSON.parse(localStorage.getItem("content")) ;
    show();
}


function add()
{
    var product=
    {
        name:bMname.value,
        url:webUrl.value,
        
    }
    data.push(product);
    var temp=JSON.stringify(data)
    localStorage.setItem("content",temp)
    show();
    clearForm();
}



function show()
{
    var col="";
    for(var i=0; i<data.length;i++)
    {
        col+=`<div class="col-md-12">
        <div class="min">
        <h1>`+data[i].name+`</h1>
        <div>
        <button class="btn btn-primary  btnvisit"  onClick="location.href='`+data[i].url+`'">Visit</button>
        <button class="btn btn-danger btndelete" onclick="Delet(`+i+`)">Delete</button>
        </div>
        </div>
        </div>`
    }
    document.getElementById("data-bookmaker").innerHTML= col;
}


function clearForm()
{

    bMname.value ="";
    webUrl.value ="";

}


function Delet(index)
{
    data.splice(index,1)
    var temp =JSON.stringify( data)
    localStorage.setItem("content",temp);
    show();

}




