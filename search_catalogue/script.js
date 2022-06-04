let products = {
    data: [
      {
        productName: "iPhone 9",
        category: "Smartphones",
        price: "899",
        image: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      },
      {
        productName: "iPhone X",
        category: "smartohones",
        price: "594",
        image: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      },
      {
        productName: "Samsung Universe 9",
        category: "smartphones",
        price: "1249",
        image: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
      },
      {
        productName: "OPPOF19",
        category: "smartphones",
        price: "280",
        image: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
      },
      {
        productName: "Huawei P30",
        category: "smartphones",
        price: "499",
        image: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
      },
      {
        productName: "MacBook Pro",
        category: "laptops",
        price: "1749",
        image: "https://dummyjson.com/image/i/products/6/thumbnail.png",
      },
      {
        productName: "Samsung Galaxy Book",
        category: "laptops",
        price: "189",
        image: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
      },
      {
        productName: "Microsoft Surface Laptop 4",
        category: "laptops",
        price: "1499",
        image: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
      },
      {
        productName: "Infinix INBOOK",
        category: "laptops",
        price: "1099",
        image: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
      },
      {
        productName: "HP Pavilion 15-DK1056WM",
        category: "laptops",
        price: "1099",
        image: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
      },
      {
        productName: "perfume Oil",
        category: "fragrances",
        price: "13",
        image: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
      },
      {
        productName: "Brown Perfume",
        category: "fragrances",
        price: "40",
        image: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
      },
      {
        productName: "Fog Scent Xpressio Perfume",
        category: "fragrances",
        price: "13",
        image: "https://dummyjson.com/image/i/products/13/thumbnail.webp",
      },
      {
        productName: "Non-Alcoholic Concentrated Perfume Oil",
        category: "fragrances",
        price: "120",
        image: "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
      },
      {
        productName: "Eau De Perfume Spray",
        category: "fragrences",
        price: "30",
        image: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
      },
      {
        productName: "Hyaluronic Acid Serum",
        category: "skincare",
        price: "19",
        image: "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
      },
      {
        productName: "Oil Free Moisturizer 100ml",
        category: "skincare",
        price: "40",
        image: "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
      },
      {
        productName: "Skin Beauty Serum.",
        category: "skincare",
        price: "46",
        image: "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
      },
      {
        productName: "Freckle Treatment Cream- 15gm",
        category: "skincare",
        price: "70",
        image: "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
      },
      {
        productName: "- Daal Masoor 500 grams",
        category: "groceries",
        price: "20",
        image: "https://dummyjson.com/image/i/products/21/thumbnail.png",
      },
      {
        productName: "Elbow Macaroni - 400 gm",
        category: "groceries",
        price: "14",
        image: "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
      },
      {
        productName: "Orange Essence Food Flavou",
        category: "groceries",
        price: "14",
        image: "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
      },
      {
        productName: "cereals muesli fruit nuts",
        category: "groceries",
        price: "46",
        image: "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
      },
      {
        productName: "Gulab Powder 50 Gram",
        category: "groceries",
        price: "70",
        image: "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
      },
      {
        productName: "Plant Hanger For Home",
        category: "groceries",
        price: "41",
        image: "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
      },
      {
        productName: "Flying Wooden Bird",
        category: "home-decoration",
        price: "51",
        image: "https://dummyjson.com/image/i/products/27/thumbnail.webp",
      },
      {
        productName: "3D Embellishment Art Lamp",
        category: "home-decoration",
        price: "20",
        image: "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
      },
      {
        productName: "Key Holder",
        category: "home-decoration",
        price: "30",
        image: "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
      },
      
    ],
  };

  
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };