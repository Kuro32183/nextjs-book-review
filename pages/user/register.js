import { useState } from "react";
import Head from "next/head";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://nextjs-movie-review.vercel.app//api/user/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("ユーザー登録失敗");
    }
  };
  return (
    <div>
      <Head>
        <title>ユーザー登録</title>
      </Head>
      <h1 className="page-title text-[1.5rem]">ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="名前"
          required
          className="mt-5 p-2"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="メールアドレス"
          required
          className="mt-5 p-2"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          placeholder="パスワード"
          required
          className="mt-5 p-2"
        />
        <button className="mt-5 p-3 text-[1.3rem] bg-green-400">登録</button>
      </form>
    </div>
  );
};
export default Register;
