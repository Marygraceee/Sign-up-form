let errortext = document.getElementById("errormsg")
let password = document.getElementById("password")
let confirmpsw = document.getElementById("confirm")

function checkpsw() {
    
    document.addEventListener("click", e => {
        if(e.target.className === "createacc"){

  
  if (confirmpsw.value !== password.value){
      errortext.textContent = "*passwords don't match"
      password.style.cssText = "border: 2px solid red"
      confirmpsw.style.cssText = "border: 2px solid red"
  }
  if (confirmpsw.value === password.value){
      errortext.textContent = ""
      password.style.cssText = "border: 1px solid black"
      confirmpsw.style.cssText = "border: 1px solid black"
  }
  
        }
    })
}
 
 


checkpsw()




