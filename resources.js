function getInfo(info) {
    let card = document.getElementsByClassName('navCard');
    document.getElementById(info).classList.add("d-flex");
    for (y = 0; y < card.length; y++) {
      card[y].classList.add("d-none");
    }
    document.getElementById('backButton').classList.remove('d-none');
  }
  function hideInfo() {
    let info = document.getElementsByClassName('info');
    let card = document.getElementsByClassName('navCard');
    for (x = 0; x < info.length; x++) {
        info[x].classList.remove('d-flex');
    }
    for (i = 0; i < card.length; i++) {
      card[i].classList.remove('d-none');
    }
    document.getElementById('backButton').classList.add("d-none");
  }
  function hoverStart(card){
    document.getElementById(card).style.backgroundColor='#FBA90A';
  }
  function hoverEnd(card){
    document.getElementById(card).style.backgroundColor='#B6A9F0';
  }