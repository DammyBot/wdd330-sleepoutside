export default class Alert {
  constructor() {
    this.url = "./json/alerts.json";
  }
  async init() {
    const data = await this.fetchData();
    createData(data);
  }
  async fetchData() {
    const data = await fetch(this.url);
    if (data.ok) {
      const result = data.json();
      return result;
    }
  }
}

function createData(data) {
  data.forEach((datum) => {
    const section = document.createElement("section");
    section.classList.add("alert-list");
    section.style.backgroundColor = datum.background;
    section.style.color = datum.color;

    const text = document.createElement("p");
    text.textContent = datum.message;
    text.style.textAlign = "center";

    section.append(text);
    document.querySelector("main").prepend(section);
  });
}
