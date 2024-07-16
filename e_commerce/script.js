var result;
async function  getData(page){
    const url=`https://fakestoreapi.com/products`;
    var respnose=await fetch(url);
    const data=await respnose.json();
     result=data;
   // console.log(result);
      if(page ==1)
      { 
        document.getElementById('container').innerHTML = "";
        result=data.slice(0,4)}
      else if(page==2)
        {
          document.getElementById('container').innerHTML = "";
          result=data.slice(4,8);
        } 
      else if(page==3)
        {
          document.getElementById('container').innerHTML = "";
          result=data.slice(8,12)
        } 
      else if(page==4)
        {
          document.getElementById('container').innerHTML = "";
          result=data.slice(12,16)
        } 
        else if(page==5)
          {
            document.getElementById('container').innerHTML = "";
            result=data.slice(16,21)
          } 
        else {
          document.getElementById('container').innerHTML = "";
          result="No Data Found";
        }
   result.map(card=> {
        var cardDiv = document.createElement('div');
        cardDiv.className = "card";
        var priceOption = document.createElement('option');
        priceOption.innerHTML=` ${card.price}`;
        cardDiv.innerHTML = `
       <img src="${card.image}"/>
            <h3>${card.title}</h3>
            <p>${card.price}</p>
            <div>
             <button class="btn">View Details</button>
             <button class="btn">Add to Cart</button>
            </div>
                      `
        document.getElementById('container').appendChild(cardDiv);
        document.getElementById('PriceSelect').appendChild(priceOption);
      })
       
}getData(1);
async function getCategoryData(){
     const url=`https://fakestoreapi.com/products/categories`;
     var respnose=await fetch(url);
     const data=await respnose.json();
          data.map(category=> {
            var option = document.createElement('option');
            option.innerHTML = `
            ${category}
                          `
            document.getElementById('CatgorySelect').appendChild(option);
          })
}
getCategoryData();
async function FilterData(){
  var menu = document.getElementById('CatgorySelect');
  var text = menu.options[menu.selectedIndex].text;

   var arr= result.filter((eventData)=> {
     if(eventData.category.toLowerCase()==text)
     {return eventData;}
    });
    console.log(arr)
}