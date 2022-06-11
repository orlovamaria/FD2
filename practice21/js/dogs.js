//https://dog.ceo/dog-api/  


const url_dog = 'https://dog.ceo/api/breeds/image/random';
const dogsList = document.querySelector('#dogs')
dogsList.innerHTML = ''

const generateDogImages = (count) => {
    fetch(`${url_dog}/${count}`)
    
    .then(    
    (res) => {
        // console.log(res.json)
        return res.json();
    })

    .then(
        (data) => {
            console.log(data)
        data.message.forEach(element => {
            dogsList.innerHTML += 
        `
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <img src="${element}" alt="dog">  
              <span class="card-title">Good boy or good girl!</span>
            </div>
          </div>
        `
        });

        flag = true;
        }
    )
}

var flag = true;

window.addEventListener('scroll', function(){
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    if(windowRelativeBottom < document.documentElement.clientHeight + 50 && flag){
        flag = false;

        generateDogImages(3);

    }
})

generateDogImages(3)





