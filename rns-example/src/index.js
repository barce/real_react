import React from 'react';
import ReactDOM from 'react-dom';
import NotificationSystem from 'react-notification-system';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this._notificationSystem = null;
    this._addNotification = this._addNotification.bind(this);
  }

  _addNotification =  (event) => {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Oy vey',
      level: 'success'
    });
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  render() {
    return (
      <div>
        <button onClick={this._addNotification}>Add notification</button>
        <NotificationSystem ref="notificationSystem" />
      </div>
     );
  }
}

ReactDOM.render(
  React.createElement(MyComponent),
  document.getElementById('app')
);
