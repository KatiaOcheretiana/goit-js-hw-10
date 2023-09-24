import axios from "axios";

import { selectors } from "./selectors";
import {showLoader, hideLoader, hideSelect, showSelect, hideCatInfo, showCatInfo, showError} from "./show-hide-el.js";


export function fetchBreeds() {
    const BASE_URL = "https://api.thecatapi.com/v1/breeds"

hideSelect()
showLoader()


    axios.get(BASE_URL)
        .then(function (response) {
            const data = response.data;

    const result = data.map(item => {
        return `<option value=${item.id}>${item.name}</option>`
    })
          selectors.breedSelect.innerHTML = result.join('')
          
})
        .catch(function (error) {
 showError()
         
    console.log(error);
  })
    .finally(function () {
hideLoader();
      showSelect()
  });  
}


export function fetchCatByBreed(breedId) {
    const BASE_URL = "https://api.thecatapi.com/v1/images/search"

hideCatInfo()
showLoader()

    selectors.catInfo.innerHTML = "";

     axios.get(`${BASE_URL}?breed_ids=${breedId}`)
        .then(function (response) {
            const catData = response.data[0];

    const result = `<div class="cat-img"><img src=${catData.url} alt=${catData.breeds[0].name}/></div>
                 <div class="text-content"><h1 class="cat-name">${catData.breeds[0].name}</h1>
                 <p>${catData.breeds[0].description}</p>
                 <p><span class="cat-temperament">Temperament: </span>${catData.breeds[0].temperament
}</p></div>`
          selectors.catInfo.innerHTML = result
            
         })
         .catch(function (error) {
showError()
    console.log(error);
  })
    .finally(function () {
hideLoader();
showCatInfo()
  });  
}


