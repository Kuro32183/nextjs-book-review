import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const ReadSingleItem = (props) => {
  return (
    <div>
      <Head>
        <title>{props.singleItem.title}</title>
      </Head>
      <div>
        {/*<Image
          src={props.singleItem.image}
          width="750px"
          height="500px"
          alt="item-image"
  />*/}
      </div>
      <div>
        <h1 className="text-[2rem]">{props.singleItem.title}</h1>
        <h2 className="text-[1.5rem] mt-5">¥{props.singleItem.price}</h2>
        <hr />
        <p className="pt-[1rem]">{props.singleItem.description}</p>
        <div className="mt-5 flex gap-5">
          <Link href={`/item/update/${props.singleItem._id}`}>
            <a className="text-[1.3rem] ">レビュー編集</a>
          </Link>
          <Link href={`/item/delete/${props.singleItem._id}`}>
            <a className="text-[1.3rem]">レビュー削除</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadSingleItem;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://nextjs-movie-review.vercel.app//api/item/${context.query.id}`
  );
  const singleItem = await response.json();
  return { props: singleItem };
};
