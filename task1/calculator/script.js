const buttons=document.querySelectorAll('button');
const output=document.getElementById('inputbox');

let string="";
const btn = Array.from(buttons);
btn.forEach(button => {
    button.addEventListener('click',(e) =>{
       try {
            if(e.target.innerHTML == "="){
                string =eval(string);
                output.value=string;
            }
            else if(e.target.innerHTML == "AC"){
                string="";
                output.value=string;
            }
            else if(e.target.innerHTML == "DEL"){
            string= string.substring(0,string.length-1); 
            output.value=string;  
            }
            else{
                string+=e.target.innerHTML;
                output.value=string;
            }
       } 
       catch (error) {
        output.value="error";
       }
    })
})

