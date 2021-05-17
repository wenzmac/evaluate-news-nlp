function handleSubmit(event) {
  const inputText = document.getElementById('name').value;
  //event.preventDefault()
  //check what text was put into the form field
  if(Client.checkForName(inputText)){
    //Fetch request
    fetch('http://localhost:8081/getSentiment',{
      method: 'POST',
      cache: "no-cache",
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type':'application/json',
      },
      body:JSON.stringify({inputText}),
    })
    .then((res) => res.json())
    .then(function(data){
      console.log(data);
      // Calls update user interface function
      Client.updateUI();
    });
    console.log("::: Form Submitted :::");
    }
  else {
    alert("Please enter a valid URL");
    console.log("Not valid url");
  }
}

export { handleSubmit }
