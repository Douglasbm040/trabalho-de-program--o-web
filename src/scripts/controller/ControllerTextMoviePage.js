import { get } from "/src/scripts/core/CoreRequest.js";
import { main } from "/src/scripts/core/CoreRequest.js";

var data = main();


 

function createpage(ordem,id) {
    const title = document.querySelector(id);
    const snopse = document.querySelector(id);
    
    return{
       title: title.innerHTML = data["results"][ordem]["title"],
       snopse: snopse.innerHTML = data["results"][ordem]["overview"],
       img: document.querySelector(id).src =
        "https://image.tmdb.org/t/p/w500" + data["results"][ordem]["poster_path"]
    }    
}

 const page1 = createpage(0,"#cartaz-1");
 const page2 = createpage(1,"#cartaz-2");
 const page3 = createpage(2,"#cartaz-3");
 const page4 = createpage(3,"#cartaz-4");
 const page5 = createpage(4,"#cartaz-5");
 const page6 = createpage(5,"#cartaz-6");
 const page7 = createpage(6,"#cartaz-7");
 const page8 = createpage(7,"#cartaz-8");
 const page9 = createpage(8,"#cartaz-9");
 const page10 = createpage(9,"#cartaz-10");

 page1;
 page2;
 page3;
 page4;
 page5;
 page6;
 page7;
 page8;
 page9;
 page10;
 


 
