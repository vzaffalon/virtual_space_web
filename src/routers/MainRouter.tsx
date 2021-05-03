import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoomsListScreen from "../screens/RoomsListScreen";
import JoinRoomScreen from "../screens/JoinRoomScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RoomsListScreen />
        </Route>
        <Route exact path="/join">
          <JoinRoomScreen />
        </Route>
        <Route exact path="/room">
          <ChatRoomScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;