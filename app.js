const heading = 'Please Meet Our Team'
let i = 0
const typing = () => {
    if (i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i)
        i++
        setTimeout(typing, 150)
    }
}

const darkModeBtn = document.getElementById('darkMode')
const containerEle = document.querySelector('.container')
const cardEle = document.querySelectorAll('.card')
const profileImgEle = document.querySelectorAll('.profile-image')
const jobEle = document.querySelectorAll('.job')
const aboutMeEle = document.querySelectorAll('.about-me')



darkModeBtn.addEventListener('click', () => {

    if (darkModeBtn.classList.contains('far')) {
        darkModeBtn.classList.remove('far')
        darkModeBtn.classList.add('fas')
    } else {
        darkModeBtn.classList.add('far')
        darkModeBtn.classList.remove('fas')
    }

    containerEle.classList.toggle('dark')
    cardEle.forEach(element => {
        element.classList.toggle('card-dark') 
    });
    jobEle.forEach(element => {
        element.classList.toggle('job-dark') 
    });
    profileImgEle.forEach(element => {
        element.classList.toggle('profile-image-dark') 
    });
    aboutMeEle.forEach(element => {
        element.classList.toggle('about-me-dark') 
    });


})

typing()