import { Flex, Divider } from "antd";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import MyNavLink from "./components/MyNavLink";

import "./App.css";

function App() {
  let element = useRoutes(routes);
  return (
    <div className="App">
      <Flex wrap gap="small">
        <MyNavLink to="/menu1">菜单一</MyNavLink>
        <MyNavLink to="/menu2">菜单二</MyNavLink>
        <MyNavLink to="/menu3">菜单三</MyNavLink>
      </Flex>
      <Divider style={{ borderColor: "#7cb305" }}></Divider>
      {element}
    </div>
  );
}

export default App;
