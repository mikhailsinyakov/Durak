import React, { Component } from 'react';
import websocket from '../websocket';
import '../stylesheets/WaitPage.css';

class WaitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinedUsers: [],
      userConfirms: false,
      allUsersConfirm: false
    };

    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  updateJoinedUsers(joinedUsers) {
    this.setState({ joinedUsers, playersNumber: this.state.playersNumber });
  }

  confirm() {
    this.setState({ userConfirms: true });
    websocket.send({ type: 'confirm' });
  }

  allUsersConfirm() {
    this.props.startMultiplayGame();
  }

  cancel() {
    this.props.cancelWaiting();
    websocket.close();
  }

  connectToWebsocket() {
    websocket.connect();
    websocket.listen((type, msgObj) => {
      if (type === 'message') {
        if (msgObj.type === 'joinedUsers') this.updateJoinedUsers(msgObj.data.joinedUsers);
        if (msgObj.type === 'allUsersConfirm') this.allUsersConfirm();
      }
      if (type === 'closed') this.cancel();
    });
    websocket.send({ 
      type: 'addData',
      username: this.props.username,
      groupSize: this.props.playersNumber
    });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isWaiting && !prevProps.isPlaying && this.props.isWaiting) {
      this.connectToWebsocket();
      this.setState({ joinedUsers: [], userConfirms: false, allUsersConfirm: false });
    }
  }

  render() {
    const { isWaiting, playersNumber } = this.props;
    const { joinedUsers, userConfirms } = this.state;

    return (
      <div className={`wait-page ${!isWaiting ? 'hide' : ''}`}>
        <h1>Wait for Users</h1>
        <div className="info">
          {!!joinedUsers.length && 
            <p><b>Joined Users: </b>
              {joinedUsers.map((user, i) => 
                <span key={i}>{i ? ', ' + user : ' ' + user}</span>)}
            </p>
          }
          <p><b>Remains to wait:</b> {playersNumber - joinedUsers.length}</p>
          {userConfirms && <p>Waiting for Users to Confirm</p>}
        </div>
        <div className="buttons">
          <button className="cancel-button" onClick={this.cancel}>Cancel</button>
          {
            joinedUsers.length === playersNumber && !userConfirms &&
            <button className="confirm-button" onClick={this.confirm}>Confirm</button>
          }
        </div>
      </div>
    );
  }
}

export default WaitPage;