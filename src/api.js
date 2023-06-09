import axios from "axios";

const searchImages = async (term) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Q0w7OJvQuEEkWZO_EZIDsDjPu8Kj5xENwqQjhQG_0yU",
    },
    params: {
      query: term,
    },
  });

  return res.data.results;
};

export default searchImages;
