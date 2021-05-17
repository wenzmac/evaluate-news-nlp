import 'regenerator-runtime/runtime'

const updateUI = async () => {
  const request = await fetch('http://localhost:8081/getSentiment');
  try {
      const allData = await request.json();
      console.log(allData);
      const newScore_tag = Client.rankScore(allData.score_tag);
      document.getElementById('score_tag').innerHTML = `The overall sentiment: ${newScore_tag}`
      document.getElementById('agreement').innerHTML = `Agreeability: ${allData.agreement}`
      document.getElementById('confidence').innerHTML = `Confidence: ${allData.confidence}`
      document.getElementById('irony').innerHTML = `Irony: ${allData.irony}`
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${allData.subjectivity}`
  }
  catch (error) {
      console.log("error", error);
  }
}

export { updateUI }
