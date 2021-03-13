let Counter = 0;


function Change(Wanted){
    
    let rect = document.getElementById(Wanted);

    let rect1 = document.getElementById("rect1")
    let rect2 = document.getElementById("rect2")
    let rect3 = document.getElementById("rect3")
    let rect4 = document.getElementById("rect4")
    let rect5 = document.getElementById("rect5")
    let rect6 = document.getElementById("rect6")

    let rect1C = "green"
    let rect2C = "green"
    let rect3C = "salmon"
    let rect4C = "salmon"
    let rect5C = "red"
    let rect6C = "red"

    let Endcol;
    let Endcol2;

   

    switch(Counter){

        case 0:
            Endcol = rect.style.backgroundColor = eval(Wanted +"C");
            Counter++;
            break;
        case 1:
            Endcol2 = rect.style.backgroundColor = eval(Wanted +"C");
            if(Endcol == Endcol2 & Endcol != null){
                alert("Match!!")
            }
            Counter++;
            break;
        case 2:
            rect1.style.backgroundColor = "#5ace73";
            rect2.style.backgroundColor = "#5ace73";
            rect3.style.backgroundColor = "#5ace73";
            rect4.style.backgroundColor = "#5ace73";
            rect5.style.backgroundColor = "#5ace73";
            rect6.style.backgroundColor = "#5ace73";
            Counter = 0;
            break;
    }
    

    


};
