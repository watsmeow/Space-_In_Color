const APIKey = 'LI1OxzpcKUPF212NqfA15LhCWZWqZ2qeP36DYMdG'

fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
    .then(res => res.json())
    .then(data => {

    document.getElementById('image1').src = data.hdurl
    document.getElementById('photoInfo1').style.display = 'block'
    document.getElementById('title1').innerText = data.title
    document.getElementById('information1').innerText = data.explanation

    document.getElementById('getphotoButton').addEventListener('click', dateChosen)
})

function dateChosen() {

    const APIKey = 'LI1OxzpcKUPF212NqfA15LhCWZWqZ2qeP36DYMdG'

    const date = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}&date=${date}`)
        .then(res => res.json())
        .then(data => {

        document.getElementById('image1').src = data.hdurl
        document.getElementById('photoInfo1').style.display = 'block'
        document.getElementById('title1').innerText = data.title
        document.getElementById('information1').innerText = data.explanation
    })
}
