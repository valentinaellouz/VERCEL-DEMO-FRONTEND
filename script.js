console.log("connecté");

fetch("https://verce-ldemobackend.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.year;
  });
