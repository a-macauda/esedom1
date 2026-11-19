let paragrafi = document.querySelectorAll('p')
let buttonRandomColor = document.querySelector('#random-color')
let buttonStrong = document.querySelector('#strong')
let buttonDisappear = document.querySelector('#disappear')

buttonRandomColor.addEventListener('click', () => {
    Paragrafi.forEach((paragrafo) => {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        paragrafo.style.color = `rgb(${r}, ${g}, ${b})`
    });
})


buttonStrong.addEventListener('click', () => {
    paragrafi.forEach((paragrafo) => {
        paragrafo.style.fontWeight = 'bold'
    });  
})

buttonDisappear.addEventListener('click', () => {
    paragrafi.forEach((paragrafo) => {
        if(paragrafo.style.display == 'block') {
            paragrafo.style.display = 'none'
        } else {
            paragrafo.style.display = 'block'
        }
    })
})
