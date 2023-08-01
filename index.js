import express from "express";
import axios from "axios";

const app = new express();
const port = 3000;
const API_URL = "https://cataas.com";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const imageResponse = await axios.get(API_URL + "/cat", {
      responseType: "arraybuffer",
    }); // endppint return random cat image
    let returnedB64 = Buffer.from(imageResponse.data).toString("base64");
    let catImage = `<img id=catImage" height="500" alt="cat" src="data:image;base64,${returnedB64}" />`;
    //console.log(catImage);
    //console.log("image res:" + returnedB64);

    res.render("index.ejs", { catImage });
  } catch (error) {
    //console.log(error.response.data);
    console.log(error.message);
    res.status(error.message);
    //use cat error message here?
  }
});

app.get("/gif", async (req, res) => {
  try {
    const imageResponse = await axios.get(API_URL + "/cat/gif", {
      responseType: "arraybuffer",
    }); // endppint return random cat image
    let returnedB64 = Buffer.from(imageResponse.data).toString("base64");
    let catImage = `<img id=catImage" height="500" alt="cat" src="data:image;base64,${returnedB64}" />`;
    //console.log(catImage);
    //console.log("image res:" + returnedB64);

    res.render("index.ejs", { catImage });
  } catch (error) {
    //console.log(error.response.data);
    console.log(error.message);
    res.status(error.message);
    //use cat error message here?
  }
});

app.post("/", (req, res) => {
  res.redirect("/");
});

app.post("/gif", (req, res) => {
  res.redirect("/gif");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
