function checkpsw() {
    document.addEventListener("click", e => {
        if(e.target.className === "createacc"){
            let password = document.getElementsByClassName(".psw")
  let confirmPassowrd = document.getElementsByClassName(".confirmpsw")
  if (confirmPassowrd !== password){
      console.log("ciao!")
  }
        }
    })
}
 
 


checkpsw()




