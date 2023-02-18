let products = {
    data: [{
        productName: "Regular Blue T-Shirt",
        category: "Topwear",
        price: "30",
        image: "tsirt.webp",
    },
    {
        productName: "Brown Cloak",
        category: "Topwear",
        price: "60",
        image: "cloak.webp",
    },
    {
        productName: "Grey Pants Relax",
        category: "Bottomwear",
        price: "40",
        image: "greypant.webp",
    },
    {
        productName: "Colorful Gympant for women",
        category: "Bottomwear",
        price: "90",
        image: "gympant.webp",
    },
    {
        productName: "Black Jacket Man",
        category: "Jacket",
        price: "80",
        image: "jacket.webp",
    },
    {
        productName: "Regular Pant Darkblue",
        category: "Bottomwear",
        price: "50",
        image: "pants.webp",
    },
    {
        productName: "Regular Shirt",
        category: "Topwear",
        price: "70",
        image: "shirt.webp",
    },
    {
        productName: "Black Skirt for women",
        category: "Bottomwear",
        price: "50",
        image: "skirt.webp",
    },
    {
        productName: "Watch for Men",
        category: "Watch",
        price: "140",
        image: "watch.webp",
    },
    ],
};

for (let i of products.data) {
    //create Card
    let card = document.createElement("div");
    //Card should hace category and should stay hidden initially
    card.classList.add("card",i.category,"hide");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    // price
    let price = document.createElement("h6");
    price.innerText = i.price + "₺";
    container.appendChild(price);
    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
};

//parameter passed from button ( Parameter same as category)

function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value quals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        };
    });


    // select all cards
    let elements = document.querySelectorAll(".card");
    //loop trough all card 
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if(value == "all") {
            element.classList.remove("hide");
        }
        else{
            //check if element contains category classs
            if(element.classList.contains(value)){
                //display element bases on category
                element.classList.remove("hide");
            }
            else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    })

};

//Search button click

document.getElementById("search").addEventListener("click",() => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    

    //loop through all elements
    elements.forEach((element,index) => {
        //check if text includes the searc value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove("hide");
        }
        else {
            // hide others
            cards[index].classList.add("hide");
        }
    })
})

//initially display all products

window.onload = () => {
    filterProduct("all");
}