import axios from "axios";
import { selectors } from "./selectors";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select'



const API_KEY = "live_iOrcxGPLNh9qtia2MFXzkQ97Pfy4zCdnyp5ETGT9VccjJnn1hQ9aiRiVSIRvKFLi"
axios.defaults.headers.common["x-api-key"] = API_KEY;




fetchBreeds()

selectors.breedSelect.addEventListener('change', onChangeBreed)


function onChangeBreed(event) {
    const selectedCat = event.currentTarget.value
    fetchCatByBreed(selectedCat)
}

