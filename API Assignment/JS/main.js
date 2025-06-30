function getNumberFact(){
    fetch('http://numbersapi.com/random/trivia')
        .then(response => response.text())
        .then(fact => {
            document.getElementById('factTarget').textContent = fact;
        })
        .catch(error => {
            document.getElementById('factTarget').textContent = "404, fact not found.";
        });
}