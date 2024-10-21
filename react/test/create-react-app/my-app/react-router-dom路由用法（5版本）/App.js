import { Flex, Divider } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import MyNavLink from "./components/MyNavLink";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import Menu3 from "./pages/Menu3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Flex wrap gap="small">
        <MyNavLink to="/menu1">菜单一</MyNavLink>
        <MyNavLink to="/menu2">菜单二</MyNavLink>
        <MyNavLink to="/menu3">菜单三</MyNavLink>
      </Flex>
      <Divider style={{ borderColor: "#7cb305" }}></Divider>
      <Switch>
        <Route path="/menu1" component={Menu1}></Route>
        <Route path="/menu2" component={Menu2}></Route>
        <Route path="/menu3" component={Menu3}></Route>
        <Redirect to="/menu3"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
