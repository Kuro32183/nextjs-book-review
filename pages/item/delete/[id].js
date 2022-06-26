import Image from "next/image";
import Head from "next/head";
import useAuth from "../../../utils/useAuth";

const DeleteItem = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://nextjs-movie-review.vercel.app//api/item/delete/${props.singleItem._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("アイテム削除失敗");
    }
  };
  const loginUser = useAuth();
  if (loginUser === props.singleItem.email) {
    return (
      <div>
        <Head>
          <title>レビュー削除</title>
        </Head>
        <h1 className="page-title">レビュー削除</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>{props.singleItem.title}</h2>
            <Image
              src={props.singleItem.image}
              width="750px"
              height="500px"
              alt="item-image"
            />

            <h3>¥{props.singleItem.price}</h3>
            <hr />
            <p>{props.singleItem.description}</p>
          </div>

          <button type="submit" className="mt-5 p-3 text-[1.3rem] bg-green-400">
            削除
          </button>
        </form>
      </div>
    );
  } else {
    return <h1>権限がありません</h1>;
  }
};

export default DeleteItem;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://nextjs-movie-review.vercel.app//api/item/${context.query.id}`
  );
  const singleItem = await response.json();
  return { props: singleItem };
};
