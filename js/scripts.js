"use strict"

const moreBtn = document.getElementById('show-more-btn');
const moreInfoDiv = document.getElementById('more-info-div');

moreBtn.addEventListener('click', () => {
    if (moreInfoDiv.classList.contains('hideContent')) {
        moreInfoDiv.classList.remove('hideContent')
    } else {
        moreInfoDiv.classList.add('hideContent');
    }
})