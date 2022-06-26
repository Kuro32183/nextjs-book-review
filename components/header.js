import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between  items-center">
      <div>
        <Link href="/">
          <a>
            <h1 className="text-red-400 text-[3rem] md:text-[5rem]">
              Movie <span>Review</span>
            </h1>
          </a>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href="/user/register">
              <a>ユーザー登録</a>
            </Link>
          </li>
          <li>
            <Link href="/user/login">
              <a>ログイン</a>
            </Link>
          </li>
          <li>
            <Link href="/item/create">
              <a>レビュー作成</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
