const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  const data = res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: 'servicesError', message: data };
  }
}

export default class ExternalServices {
  // constructor(category) {
  //   this.category = category;
  //   this.path = `../json/${this.category}.json`;
  // }
  constructor() {

  }
  // getData() {
  //   return fetch(this.path)
  //     .then(convertToJson)
  //     .then((data) => data);
  // }
  async getData(category) {
    // console.log(category);
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    console.log(data.Result);
    return data.Result;
  }
  async findProductById(id) {
    // const products = await this.getData();
    // return products.find((item) => item.Id === id);
    
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    // console.log(data.Result);
    return data.Result;
  }
  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(`${baseURL}checkout/`, options).then(convertToJson);
  }
}
