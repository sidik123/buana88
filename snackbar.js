function loadlink(){
    var angka_acak = Math.floor(Math.random() * (1001-50)+50);

    function maketextnumber(n) {
      for (var r = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], e = n, t = new Array, a = 0; a <= e - 1; a++) {
        t[a] = r[parseInt(Math.random() * r.length)];
        t = t;
        randomtextnumber = t.join("")
      }
    }

    var huruf_acak = (maketextnumber(8), randomtextnumber);
    var huruf_belakang = huruf_acak.substring(6);
    var huruf_depan = huruf_acak.substring(0, 2);

    const rupiah = (number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(number);
    };

    var nominal = rupiah(angka_acak+"000");

    var baris = huruf_depan+"***"+huruf_belakang+" Berhasil Withdraw "+nominal;

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    document.getElementById("withdraw").innerHTML = huruf_depan+"****"+huruf_belakang+" Berhasil Withdraw "+nominal;

      var randomText = ["Infini88 Gate Of Olympus!", "Infini88 Starlight Princess!", "Gates Of Olympus!", "Starlight Princess!", "Gates Of Gatot Kaca!", "Bonanza Gold!", "Fruit Party!", "Wild West Gold!", "The Dog House!", "5 Lions Gold!", "Great Rhino Deluxe!", "Mahjong Ways!", "Mahjong Ways 2!", "Lucky Neko!", "Wild Bounty Showdown!", "Caishen Wins!", "The Great Icescape!", "Fortune Ox!", "Tree Of Fortune!", "Mahjong Ways 3!", "Sugar Craze Bonanza!", "Masters Of Olympus!", "Lucky Twins Wilds!"];
      var randomIndex = Math.floor(Math.random() * randomText.length);
      document.getElementById("Permainan").innerHTML = "Permainan: " + randomText[randomIndex];
    }

  loadlink();
  setInterval(function(){
    loadlink()
  }, 6000);
