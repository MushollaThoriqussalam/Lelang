let app = new function(){
  let harga1 = 100000000
  let hargaNinja = document.querySelector('.hargaNinja')
  hargaNinja.innerHTML = "Rp " + harga1.toLocaleString()

  let nama = []
  let buttonBid = document.querySelector('#bid1')

  buttonBid.addEventListener('click', function(){
    if (nama === '') {
      console.log('nama kosong');
    }
  })

  this.el = document.querySelector(".bidding")
  this.bidding = []

  this.FetchAll = function() {
    let data = ""

    if (this.bidding.length > 0) {
      let belumAda = document.querySelector('.belumAda')
      belumAda.style.display = 'none'

      for (let i = 0; i < this.bidding.length; i++) {

          data += '<div class="row text-center">'
          data += '<div class="col">'
          data += '<p class="nama">' + nama[i] + '</p>'
          data += '<span class="badge bg-success">Rp. ' + this.bidding[i].toLocaleString() +'</span></div></div>' 
      }
    }

    return this.el.innerHTML = data;
  }

  this.Add = function () {
    // el = document.getElementById('add-todo');
    // // Get the value
    // var task = el.value;

    // if (task) {
    //   // Add the new value
    //   this.tasks.push(task.trim());
    //   // Reset input value
    //   el.value = '';
    //   // Dislay the new list
    //   this.FetchAll();
    // }
    let inputNama = document.querySelector('.inputNamaText')
    let inputNamaValue = inputNama.value

    if (inputNamaValue) {
      nama.push(inputNamaValue)
    } else {
      nama.push("Nama Anda Kosong")
    }


    let pasangHarga = document.getElementById('input1')
    let input1 = pasangHarga.value;

    let result = ""
    for (let i = 0; i < input1.length; i++) {
      if (input1[i] !== '.' || input1[i] !== ',') {
        result += input1[i]
      }
    }
    
    if (result) {
      harga1 = result
      this.bidding.push(result)
      result = ''
      this.FetchAll()
    }
  };
}

app.FetchAll()
// let input1 = document.querySelector("#input1")
// let submit1 = document.querySelector(".bid1Submit")

// submit1.addEventListener('click', function (event){
//   console.log(input1.value);
// })

{/* <div class="row text-center">
<div class="col">
  <p class="nama">Deris Satrio</p>
  <span class="badge bg-success">Rp. 100.000.000</span>
</div>
</div> */}