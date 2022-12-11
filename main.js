const url = `https://api.thecatapi.com/v1/breeds`
const api_key = 'live_GAjdb3jqQjbUNPw27dxbtS3jbqsNYsYXkzjAcnUW8sacDSGeSNHG7IckbDkcHDES'
const selector = document.querySelector('#selection')
const image = document.querySelector('img')
let breedsArray = []

let lifespan = document.querySelector('#life-span')
let origin = document.querySelector('#origin')
let description = document.querySelector('#description')
let temperament = document.querySelector('#temperament')
let moreInfo = document.getElementById('moreInfo')
let catName = document.querySelector('#catName')


 fetch(url,{headers: {'x-api-key': api_key}})
    .then(response => {
        return response.json();
    })

    .then(data => {
        breedsArray = data

        for (let i = 0; i < breedsArray.length; i++){
            const breed = breedsArray[i]
            const option = document.createElement('option')

            //skip breeds without images
            if(!breed.image)continue
            
            option.value = i
            //Mayanwolfe uses this instead:
            //option.value = breedsArray[i]

            option.innerText = breed.name
            
            selector.appendChild(option)
        }
    })

selector.addEventListener('change', event => {
    image.src = breedsArray[event.target.value].image.url
    lifespan.innerText = breedsArray[event.target.value].life_span
    origin.innerText = breedsArray[event.target.value].origin
    description.innerText = breedsArray[event.target.value].description
    temperament.innerText = breedsArray[event.target.value].temperament
    moreInfo.innerText = 'More Information'
    catName.innerText = breedsArray[event.target.value].name

    document.getElementById('moreInfo').href = breedsArray[event.target.value].wikipedia_url
})