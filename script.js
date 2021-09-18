let app = new function(){
  let harga1 = 100000000
  let hargaNinja = document.querySelector('.hargaNinja')
  hargaNinja.innerHTML = "Rp " + harga1.toLocaleString()
  let kelipatan = 500000

  let nama = []
  let buttonBid = document.querySelector('#bid1')

  this.el = document.querySelector(".bidding")
  this.bidding = []

  this.FetchAll = function() {
    let data = ""

    // if (nama.length === 0) {
    //   data += '<div class="alert alert-danger alert-dismissible fade show" role="alert">'
    //   data += 'Anda belum input nama!</div>'
    //   data += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button'
    // }

    if (this.bidding.length > 0 && this.bidding.length < 4) {
      let belumAda = document.querySelector('.belumAda')
      belumAda.style.display = 'none'

      let tawar = document.querySelector('.tawar')
      tawar.innerHTML = 'Bid Selanjutnya'

        let hargaSelanjutnya = this.bidding[0] + kelipatan
        hargaNinja.innerHTML = hargaSelanjutnya.toLocaleString()
        
      

      if (this.bidding.length === 2) {
        console.log('2 jalan');
        let temp1 = this.bidding[0]
        this.bidding[0] = this.bidding[1]
        this.bidding[1] = temp1

        // Nama
        let tempNama = nama[0]
        nama[0] = nama[1]
        nama[1] = tempNama

        for (let i = 0; i < this.bidding.length; i++) {
          console.log(nama[i]);
          data += '<div class="row text-center">'
          data += '<div class="col">'
          data += '<p class="nama">' + nama[i].toUpperCase() + '</p>'
          if (i === 0) {
            data += '<span class="badge bg-success">Rp. ' + this.bidding[i].toLocaleString() +'</span></div></div>' 
          } else {
            data += '<span class="badge bg-dark">Rp. ' + this.bidding[i].toLocaleString() +'</span></div></div>' 
          }
        }
      } else if (this.bidding.length === 3){
        console.log('3 jalan');
        let temp1 = this.bidding[0]
        this.bidding[0] = this.bidding[2]
        this.bidding[2] = temp1

        let temp2 = this.bidding[1]
        this.bidding[1] = this.bidding[2]
        this.bidding[2] = temp2

        // Nama
        let tempNama1 = nama[0]
        nama[0] = nama[2]
        nama[2] = tempNama1

        let tempNama = nama[1]
        nama[1] = nama[2]
        nama[2] = tempNama

        for (let i = 0; i < this.bidding.length; i++) {

          data += '<div class="row text-center">'
          data += '<div class="col">'
          data += '<p class="nama">' + nama[i].toUpperCase() + '</p>'
          if (i === 0) {
            data += '<span class="badge bg-success">Rp. ' + this.bidding[i].toLocaleString() +'</span></div></div>' 
          } else {
            data += '<span class="badge bg-dark">Rp. ' + this.bidding[i].toLocaleString() +'</span></div></div>' 
          }
        }
      } else {
        for (let i = 0; i < this.bidding.length; i++) {

          data += '<div class="row text-center">'
          data += '<div class="col">'
          data += '<p class="nama">' + nama[i].toUpperCase() + '</p>'
          data += '<span class="badge bg-success">Rp. ' + this.bidding[i].toLocaleString() +'</span></div></div>' 
        }
      }
      
    } else if (this.bidding.length === 4){
        let belumAda = document.querySelector('.belumAda')
        belumAda.style.display = 'none'

        let tawar = document.querySelector('.tawar')
        tawar.innerHTML = 'Bid Selanjutnya'
        console.log('4 jalan');

        let temp1 = this.bidding[2]
        this.bidding[2] = this.bidding[3]
        this.bidding[3] = temp1

        let temp2 = this.bidding[0]
        this.bidding[0] = this.bidding[2]
        this.bidding[2] = temp2

        let temp3 = this.bidding[1]
        this.bidding[1] = this.bidding[2]
        this.bidding[2] = temp3

        this.bidding.pop()

        // Nama
        let tempNama2 = nama[2]
        nama[2] = nama[3]
        nama[3] = tempNama2

        let tempNama3 = nama[0]
        nama[0] = nama[2]
        nama[2] = tempNama3

        let tempNama4 = nama[1]
        nama[1] = nama[2]
        nama[2] = tempNama4

        nama.pop()

        for (let i = 0; i < this.bidding.length; i++) {

          data += '<div class="row text-center">'
          data += '<div class="col">'
          data += '<p class="nama">' + nama[i].toUpperCase() + '</p>'
          if (i === 0) {
            data += '<span class="badge bg-success">Rp. ' + this.bidding[i].toLocaleString() +'</span></div></div>' 
          } else {
            data += '<span class="badge bg-dark">Rp. ' + this.bidding[i].toLocaleString() +'</span></div></div>' 
          }
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
      if (input1[i] !== '.') {
        result += input1[i]
      }
    }
    console.log(result);
    result = Number(result)
    
    

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