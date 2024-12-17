function getNumber() {
    let num = Math.round(Math.random() * 10)

    while (num > 6 || num < 1) {
        num = Math.round(Math.random() * 10)
    }
  return num

}

const src = {
    1: 'img/1.png',
    2: 'img/2.png',
    3: 'img/3.png',
    4: 'img/4.png',
    5: 'img/5.png',
    6: 'img/6.png',
}

function dice() {
    let num1 = getNumber()
    let num2 = getNumber()

    let img1 = document.getElementById('dice1')
    img1.src = src[num1]

    let img2 = document.getElementById('dice2')
    img2.src = src[num2]

    console.log(num1, num2);
    
}
























