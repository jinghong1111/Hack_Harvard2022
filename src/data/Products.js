// this is the file we will use to store the scraped product data from Amazon, Ebay and Walmart 

// amazon data
export const  products=[{
    "id": "1",
    "name": "Cherry",
    "image": "https://www.canr.msu.edu/uploads/236/58624/cherries.jpg",
    "price": "$1.99",
    "colors": ["red", "green", "blue"],
    "condition": "Fresh",
    "description": "Two Cherries",
    "vendors": ["Fresh Fruits Market", "Fruit Ninja"]
  },
  {
    // ebay data
    "id": "2",
    "name": "Orange",
    "image": "https://s3-eu-west-1.amazonaws.com/nucig/Flavours/eliquid-orange-flavour-500.jpg",
    "price": "$2.99",
    "colors": ["green", "blue"],
    "condition": "Frozen",
    "description": "Giant Orange",
    "vendors": ["Families Market"]
  },
  {
    // walmart data
    "id": "3",
    "name": "Nuts",
    "image": "https://images-na.ssl-images-amazon.com/images/I/71Y0nx6ayfL._SX425_.jpg",
    "price": "$1.00",
    "colors": ["red"],
    "condition": "Frozen",
    "description": "Mixed Nuts",
    "vendors": ["Amazon Distributor"]
  }
]
