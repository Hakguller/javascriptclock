//Saat bölümü
function showTime() {
    var date = new Date(); /*Zaman sınıfının oluşturulması */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour); /*Güncelleme kısmı*/
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("myClock").innerText = hour + " : " + min + " : " + sec; /*ekleme satırı */
      var time = setTimeout(function(){ showTime() }, 1000); /* zamanın ayarlanması */
  }
  /*Rakamın 10'dan küçük olma koşulunda 12'lik saat dilimi için gösterilme koşulu*/
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  showTime();


//isim bölümü
let userName = prompt("Adınız nedir?") 
let myName = document.querySelector('#myName') 
myName.innerHTML = `${userName}` 

