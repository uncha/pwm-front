import { Link } from "react-router-dom";

function Guide() {
  const menu = ["button", "form", "card"];
  const menuList = menu.map((item, idx) => (
    <li key={idx}>
      <Link to={`/guide/${item}`}>{item}</Link>
    </li>
  ));
  return (
    <div>
      <h1 className="text-center">Seegene Guide Page</h1>
      <ul className="mt-5">{menuList}</ul>
    </div>
  );
}

export default Guide;
