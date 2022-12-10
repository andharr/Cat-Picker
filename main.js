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
//let moreInfo = document.querySelector("[href='moreInfo']")
let catName = document.querySelector('#catName')


 fetch(url,{headers: {'x-api-key': api_key}})
    .then(response => {
        return response.json();
    })

    .then(data => {
        // const breedsObject = data.message; //turn the message into an object
        //const breedsArray = Object.keys(breedsObject) //turn the object into an array
        //console.log(breedsArray[51].name)
        breedsArray = data
        //console.log(breedsArray)

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

            //image.scr = breed.image.url
        }
    })

selector.addEventListener('change', event => {
    //console.log(event.target.value)
    //console.log(breedsArray[event.target.value.name])
    image.src = breedsArray[event.target.value].image.url
    lifespan.innerText = breedsArray[event.target.value].life_span
    origin.innerText = breedsArray[event.target.value].origin
    description.innerText = breedsArray[event.target.value].description
    temperament.innerText = breedsArray[event.target.value].temperament
    moreInfo.textContent = breedsArray[event.target.value].wikipedia_url
    moreInfo.pathname = breedsArray[event.target.value].wikipedia_url
    catName.innerText = breedsArray[event.target.value].name
})