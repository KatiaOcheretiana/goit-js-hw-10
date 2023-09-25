import axios from "axios";

import { selectors } from "./selectors";
import {showLoader, hideLoader, hideSelect, showSelect, hideCatInfo, showCatInfo, showError} from "./show-hide-el.js";


export function fetchBreeds() {
    const BASE_URL = "https://api.thecatapi.com/v1/breeds"

   return axios.get(BASE_URL)
        .then(function (response) {
          const data = response.data;
   return data
})
        .catch(function (error) {
 showError()
  })
     
}

export function fetchCatByBreed(breedId) {
    const BASE_URL = "https://api.thecatapi.com/v1/images/search"
     return axios.get(`${BASE_URL}?breed_ids=${breedId}`)
        .then(function (response) {
            const catData = response.data[0];
            return catData
         })
         .catch(function (error) {
showError()
  })
}
