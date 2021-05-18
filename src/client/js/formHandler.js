function handleSubmit(event) {
  const inputText = document.getElementById('name').value;
  event.preventDefault()
  console.log("::: Form Submitted :::")
  //check what text was put into the form field
  if(Client.checkForName(inputText)){
    // Fetch request
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
    .then (res => {
      console.log(res)
      return res.json()
    })
    .then (function (response) {
        console.log("Updating UI")
        const newScore_tag = Client.rankScore(response.score_tag);
        document.getElementById('score_tag').innerHTML = `Overall sentiment: ${newScore_tag}`
        document.getElementById('agreement').innerHTML = `Agreeability: ${response.agreement}`
        document.getElementById('confidence').innerHTML = `Confidence: ${response.confidence}`
        document.getElementById('irony').innerHTML = `Irony: ${response.irony}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${response.subjectivity}`
    })
    //.then((res) => res.json())
    //.then(function(data){
    //  console.log(data);
      // Calls update user interface function
    //  Client.updateUI(response);
  //  });
    }
  else {
    alert("Please enter a valid URL");
    console.log("Not valid url");
  }
}

export { handleSubmit }
