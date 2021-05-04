import { useState, useEffect } from "react";
import { Input, Button } from "antd";

function JoinRoomScreen() {


  useEffect(() => {
  }, []);

  return (
    <div>
      <h3>What is your name?</h3>
      <Input></Input>
      <Button>Enter the room</Button>
    </div>
  );
}

export default JoinRoomScreen;
