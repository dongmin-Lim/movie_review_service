import "./Nav.css";

// interface ChildProps {
//   text: string;
// }

function Nav() {
  return (
    <div className="nav">
      <div className="main">
        <input type="text" className="input" placeholder="Search..." />
        <div className="button_div">
          <button className="button">랭킹</button>
          <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
