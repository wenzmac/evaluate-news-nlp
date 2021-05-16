let baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
const apiKey = 'process.env.API_KEY'

// Async post function
const postData = async (url='', data={}) => {
  const response = await fetch(url, {
    method: 'POST',
    //credentials: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

function handleSubmit(event) {
    event.preventDefault()
    console.log("::: Form Submitted :::")
    getURL (baseURL, apiKey, userURL)
    .then(function(data){
      console.log(data);
      postData('http://localhost:8081/getSentiment', {overallSentiment: data.score_tag, agreement:data.agreement, confidence:data.confidence, irony: data.irony, subjectivity: data.subjectivity});
      // Calls update user interface function
      //updateUI();
    });
  }

//Async post that creates the URL and returns data
const getURL = async (baseURL, apiKey, userURL)=>{
  const userURL = document.getElementById('name').value;
  const response = await fetch(baseURL + apiKey + "&of=json&url=" + userURL + "&lang=en");
  try {
    const data = await response.json();
      console.log(data);
      return data;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
  }
}

export { handleSubmit }
