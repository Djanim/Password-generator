const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passEL_1 = document.getElementById("randomPassword_1")
let passEL_2 = document.getElementById("randomPassword_2")

function generate() {
    let password = ""
    var PassLenght = document.getElementById("PasswordLength").value
    for (let i = 0 ; i < PassLenght ; i++) {
        let char = characters[Math.floor(Math.random()*characters.length)]
        password = password + char
        
        
    }
    return password
}


function print() {
    passEL_1.textContent = generate()
    passEL_2.textContent = generate()
}



// copy generated password


 function CopyText() {
    
   // Get the text field
   let copyText = document.getElementById('randomPassword_1')
   //console.log(copyText.innerHTML)

   // Copy the text inside the text field
   navigator.clipboard.writeText(copyText.innerHTML)
   alert("Text copied")
 }