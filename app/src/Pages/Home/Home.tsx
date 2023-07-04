import { useState } from "react";
import md5 from "md5";

const Home = () => {
  const date = Number(new Date());
  const publicKey = "1ca3e633852222c3b29a64774a0f63f3";
  const privateKey = "1bfd13d742e0f5986887a831719eb52fef411820";
  const hash = md5(date + privateKey + publicKey);
  
  const [comics, setComics] = useState([]);

  return <div>Home</div>;
};

export default Home;
