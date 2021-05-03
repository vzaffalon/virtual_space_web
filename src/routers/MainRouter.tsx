import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoomsListScreen from "../screens/rooms_list/RoomsListScreen";
import JoinRoomScreen from "../screens/join_room/JoinRoomScreen";
import ChatRoomScreen from "../screens/chat_room/ChatRoomScreen";

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