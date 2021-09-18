let a = [2, 5, 10]

let max = a[0]
let min = a[0]
let yangLain = 0
for (let i = 0; i < a.length; i++) {
    if (max < a[i]) {
        max = a[i]
    } else if (min > a[i]){
        min = a[i]
    }
}

yangLain = 0
for (let i = 0; i < a.length; i++) {
    if (a[i] !== max && a[i] !== min) {
        yangLain = a[i]
    }
    
}

console.log(max, yangLain, min);



let max = this.bidding[0]
let min = this.bidding[0]
if (this.bidding.length < 4 && this.bidding.length > 1) {
  for (let i = 0; i < this.bidding.length; i++) {
    if (this.bidding[i] > max){
      max = ths.bidding[i]
    } else if (this.bidding[i] < min){
      min = this.bidding[i]
    }
  }
}


}

if (this.bidding.length === 3) {
let yangLain = 0
for (let i = 0; i < this.bidding.length; i++) {
  if (this.bidding[i] !== max && this.bidding[i] !== min) {
    yangLain = this.bidding[i]
  }
  this.bidding[0] = max
  this.bidding[1] = yangLain
  this.bidding[2] = min
}