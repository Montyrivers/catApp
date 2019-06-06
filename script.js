console.log('it worked')

const dropdown = document.querySelector("select");
const button = document.querySelector("#cat-me");
const catPic = document.querySelector("#try-pic");
const apiKey = "2b10a7f1-ef02-4f4f-bc53-80397377780f"





button.addEventListener("click", async () => {
  //console.log('click')
  const response = await axios.get("https://api.thecatapi.com/v1/images/search?category_ids=1",
    {
      "x-api-key": apiKey
    })
  //console.log(response.data[0].url);
  const pic = response.data[0].url;
  catPic.innerHTML = `<img src=${pic} />`
})






