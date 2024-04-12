import './style.css'


async function loadProducts() {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    console.dir(data)
    const products = data.products
    const content = document.querySelector('#content')
    for (const product of products) {
        const div = document.createElement("div")
        div.classList.add(...("flex flex-col gap-2 m-2 items-center border rounded-lg shadow-lg".split(" ")))
        const img = document.createElement("img")
        img.src = product.thumbnail
        img.classList.add("object-contain", "w-40", "h-16")
        div.appendChild(img)

        const title = document.createElement("div")
        title.textContent = product.title
        div.appendChild(title)

        content.appendChild(div)
    }
}

loadProducts()