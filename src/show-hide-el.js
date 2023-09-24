import { selectors } from "./selectors";

export function showLoader() {
  selectors.loader.classList.remove("hidden");
}

export function hideLoader() {
  selectors.loader.classList.add("hidden");
}

import Notiflix from 'notiflix';


export function hideSelect() {
  selectors.breedSelect.classList.add("hidden");
}

export function showSelect() {
  selectors.breedSelect.classList.remove("hidden");
}

export function hideCatInfo() {
  selectors.catInfo.classList.add("hidden");
}

export function showCatInfo() {
  selectors.catInfo.classList.remove("hidden");
}

export function showError() {
     Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
}