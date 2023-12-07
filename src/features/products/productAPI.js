// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    const response=await fetch('https://dummyjson.com/products')
    const data=await response.json();
    // console.log("data is here ",data["products"])
    resolve({data})
  }
  );
}
export function fetchAllCategories() {
  return new Promise(async (resolve) =>{
    const response=await fetch('https://dummyjson.com/products/categories')
    const data=await response.json();
    // console.log("data is here ",data["products"])
    resolve({data})
  }
  );
}
export function fetchProductsByCategory(category) {
  return new Promise(async (resolve) =>{
    const response=await fetch('https://dummyjson.com/products/category/'+category)
    const data=await response.json();
    // console.log("data is here ",data["products"])
    resolve({data})
  }
  );
}
export function fetchProductsByPage(page) {
  return new Promise(async (resolve) =>{
    const response=await fetch(`https://dummyjson.com/products?skip=${page*10}&limit=10`)
    const data=await response.json();
    console.log("here is data".data)
    // console.log("data is here ",data["products"])
    resolve({data})
  }
  );
}
export function fetchProductsBysearch(search) {
  return new Promise(async (resolve) =>{
    const response=await fetch(`https://dummyjson.com/products/search?q=${search}`)
    const data=await response.json();
    console.log("here is data".data)
    // console.log("data is here ",data["products"])
    resolve({data})
  }
  );
}
