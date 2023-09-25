import axios from "axios";
import { selectors } from "./selectors";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import {showLoader, hideLoader, hideSelect, showSelect, hideCatInfo, showCatInfo, showError} from "./show-hide-el.js";


const API_KEY = "live_iOrcxGPLNh9qtia2MFXzkQ97Pfy4zCdnyp5ETGT9VccjJnn1hQ9aiRiVSIRvKFLi"
axios.defaults.headers.common["x-api-key"] = API_KEY;



fetchBreeds().then (data => {
    hideSelect()
    showLoader()
    const result = data.map(item => {
        return `<option value=${item.id}>${item.name}</option>`
    })
    selectors.breedSelect.innerHTML = result.join('')
      
})
.finally(function () {
hideLoader();
      showSelect()
  }); 


selectors.breedSelect.addEventListener('change', onChangeBreed)


function onChangeBreed(event) {
         selectors.catInfo.innerHTML = "";
            hideCatInfo();
            showLoader();
    const selectedCat = event.currentTarget.value
    fetchCatByBreed(selectedCat).then(catData => {
    createMarkup(catData)}  
    )
.finally(function () {
hideLoader();
showCatInfo()
  });  
}

function createMarkup(catData) {
         const result = `<div class="cat-img"><img src=${catData.url} alt=${catData.breeds[0].name}/></div>
                 <div class="text-content"><h1 class="cat-name">${catData.breeds[0].name}</h1>
                 <p>${catData.breeds[0].description}</p>
                 <p><span class="cat-temperament">Temperament: </span>${catData.breeds[0].temperament
}</p></div>`
    selectors.catInfo.innerHTML = result
}