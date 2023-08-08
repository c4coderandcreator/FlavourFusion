function toggleSignUp() {
    const h1 = document.getElementById("hd1")
    const h2 = document.getElementById("hd2")
    const h3 = document.getElementById("hd3")
    const h4 = document.getElementById("hd4")
    h1.classList.toggle('d-none')
    h1.classList.toggle('fIn')
    h2.classList.toggle('d-none')
    h2.classList.toggle('fOut')
    h3.classList.toggle('d-none')
    h3.classList.toggle('fOut')
    h4.classList.toggle('d-none')
    h4.classList.toggle('fIn')
  }
  
  function toggleSignIn() {
    const h1 = document.getElementById("hd1")
    const h2 = document.getElementById("hd2")
    const h3 = document.getElementById("hd3")
    const h4 = document.getElementById("hd4")
    h1.classList.toggle('d-none')
    h1.classList.toggle('fOut')
    h2.classList.toggle('d-none')
    h2.classList.toggle('fIn')
    h3.classList.toggle('d-none')
    h3.classList.toggle('fIn')
    h4.classList.toggle('d-none')
    h4.classList.toggle('fOut')
  }