function CategoryShow(){
  const gatelist=  document.getElementById("barter-first-category-plaza");

   gatelist.style.display = "block";
  
    }

  function  Categoryhide(){
    const gatelist=document.getElementById("barter-first-category-plaza");
    const catehide=document.getElementById("demo");
    const javascript=document.getElementById("javascript").value;
    catehide.innerHTML=javascript;
    gatelist.style.display = "none";
  
  }