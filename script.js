const items = [
    {
      name: 'SanSilk',
      category: 'sampo',
      price: 12000
    },
    {
      name: 'LiveBoy',
      category: 'sabun',
      price: 3000
    },
    {
      name: 'Getol',
      category: 'sabun',
      price: 7000
    },
    {
      name: 'Novu',
      category: 'sabun',
      price: 3000
    },
    {
      name: 'Pantin',
      category: 'sampo',
      price: 30000
    }
  ]
  
  // 1. Buatlah fungsi program getTotal yang mengembalikan:
  // - total harga dari semua barang
  
  function getTotal(list) {
    let totalPrice = 0
    for (const i in list) {
    totalPrice += list[i].price
    }
    return totalPrice
  }
  
  console.log(getTotal(items)); // 55000
  
  // Buatlah fungsi program getAverage yang mengembalikan:
  // - rata-rata harga dari semua barang
  
  function getAverage(barangBarang) {
    return getTotal(barangBarang) / barangBarang.length
  }
  
  console.log(getAverage(items)) // 11000
  
  // Buatlah grouping item sesuai dengan categorynya !
  
  function groupingByCategory(list) {
    let result = {}
    for (const i in list) {
        if (result[list[i].category] === undefined){
            result[list[i].category] = []
        }
        result[list[i].category].push(list[i].name)
    }
    return result
  }
  
  console.log(groupingByCategory(items));
  
  /*
  {
    sampo: ['SanSilk', 'Pantin'],
    sabun: ['LiveBoy', 'Getol', 'Novu']
  }
  */