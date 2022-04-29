// const productos = [ {id: '1', name: 'iphone 12 pro max',description: 'iphone',stock: 10, image: 'https://www.imgacademy.com/sites/default/files/IMG-UltimateSportsCamp-2022.png'},
//                     {id: '2', name: 'lenovo alInOne', description: 'notebook' ,stock:40, image: 'https://www.imgacademy.com/sites/default/files/IMG-UltimateSportsCamp-2022.png'},
//                     {id: '3', name: 'Lg 55 pulgadas', description: 'TV' ,stock: 20,image:'https://www.imgacademy.com/sites/default/files/IMG-UltimateSportsCamp-2022.png' }]

const productos = [ 
  {
  id: '1',
  price: 140,
  title: "Frank Plaid Zip LS Shirt",
  description: 'Jacket',
  stock: 10, 
  image: '../media/men/men1a.webp',
  image2: "media/men/men1b.webp"
  },
  {
  id: '2',
  price: 227,
  title: "Washed Canvas Shop Jacket",
  description: 'Jacket',
  stock: 10,
  image: "../media/men/men2a.webp",
  image2: "media/men/men2b.webp"
  },
  {
  id: '3',
  price: 100,
  title: "Sami JM planted T-shirt",
  description: 'T-Shirt',
  stock: 10,
  image: "../media/men/men3a.webp",
  image2: "media/men/men3b.webp"
  },
  {
  id: '4',
  price: 96,
  title: "Palmes Middle Shorts",
  description: 'Shorts',
  stock: 10,
  image: "../media/men/men4a.webp",
  image2: "media/men/men4b.webp"
  },
  {
  id: '5',
  price: 360,
  title: "Deller tech jacket",
  description: 'Jacket',
  stock: 10,
  image: "../media/men/men5a.webp",
  image2: "media/men/men5b.webp"
  },
  {
  id: '6',
  price: 250,
  title: "Will heavy twill trousers",
  description:'Pants',
  stock: 10,
  image: "../media/men/men6a.webp",
  image2: "media/men/men6b.webp"
  },
  {
  id: '7',
  price: 279,
  title: "M Sherpa Nuptse Jacket",
  description: 'Jacket',
  stock: 10,
  image: "../media/men/men7a.webp",
  image2: "media/men/men7b.webp"
  },
  {
  id: '8',
  price: 245,
  title: "Jacquard / AW-Knit . LS",
  description: 'Sweater',
  stock: 10,
  image: "../media/men/men8a.webp",
  image2: "media/men/men8b.webp"
  },
  {
  id: '9',
  price: 101,
  title: "M Color Block Fleece Pant",
  description:'Pants',
  stock: 10,
  image: "../media/men/men9a.webp",
  image2: "media/men/men9b.webp"
  },
  {
  id: '10',
  price: 79,
  title: "M NRG Kr LS Shooting",
  description: 'T-Shirt',
  stock: 10,
  image: "../media/men/men10a.webp",
  image2: "media/men/men10b.webp"
  },
  {
  id: '11',
  price: 700,
  title: "Casey JC nylon bomber",
  description: 'Jacket',
  stock: 10,
  image: "../media/men/men11a.webp",
  image2: "media/men/men11b.webp"
  },
  {
  id: '12',
  price: 144,
  title: "Denim Work Pant",
  description:'Pants',
  stock: 10,
  image: "../media/men/men12a.webp",
  image2: "media/men/men12b.webp"
  }
]


export const getFetch = new Promise ((resolve, reject) => {
  //Acciones
  let condition = true
  if (condition) {
    setTimeout(() =>{
      resolve(productos)
    }, 3000)
  } else {
    reject('400 - not found')
  }
})