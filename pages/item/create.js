import { useState } from "react";
import Head from "next/head";
import useAuth from "../../utils/useAuth";
import ImgInput from "../../components/imgInput";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://nextjs-movie-review.vercel.app//api/item/create",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title: title,
            price: price,
            image: image,
            description: description,
            rating: rating,
          }),
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("アイテム作成失敗");
    }
  };

  const loginUser = useAuth();

  if (loginUser) {
    return (
      <div>
        <Head>
          <title>レビュー作成</title>
        </Head>
        <h1 className="page-title text-[1.5rem]">レビュー作成</h1>
        <ImgInput image={image} setImage={setImage} />
        <form onSubmit={handleSubmit} className="">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="作品名"
            required
            className="mt-5 p-2"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="price"
            placeholder="価格"
            required
            className="mt-5 p-2"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            name="image"
            placeholder="画像"
            required
            className="mt-5 p-2"
          />
          {/*<StarRating
            value={rating}
            onChange={(e) => setRating(e.target.value)}
    />*/}

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            rows="15"
            placeholder="レビュー内容"
            required
            className="mt-5 p-2"
          ></textarea>

          <button className="mt-5 p-3 text-[1.3rem] bg-green-400 ">作成</button>
        </form>
      </div>
    );
  }
};

export default CreateItem;
