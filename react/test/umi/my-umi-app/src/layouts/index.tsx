import { Link, NavLink, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <NavLink
            to="about" // 支持相对路径（基于当前 URL）
            className={({ isActive }) => (isActive ? "selected" : "")} // 动态类名
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })} // 动态样式
            end // 替代 exact，严格匹配路径末尾
          >
            关于我们
          </NavLink>
        </li>
        <li>
          <Link to="/eventBus">eventBus</Link>
        </li>
        <li>
          <Link to="/redux">redux</Link>
        </li>
        <li>
          <Link to="/test">测试</Link>
        </li>
        <li>
          <Link to="/css">css</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
