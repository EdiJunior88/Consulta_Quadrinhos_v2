import axios from "axios";

const url = "https://gateway.marvel.com/v1/public/";

async function ComicsGet() {
  try {
    const response = await axios.get(`${url}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default ComicsGet;
