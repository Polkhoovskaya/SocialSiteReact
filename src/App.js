import React from 'react';
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { inintializeAppThunkCreator } from './redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';


// const App = ({ state }) => {
//   return (
//     <BrowserRouter>
//       <div className='app-wrapper'>
//         <HeaderContainer />
//         <Navbar state={state.sideBar} />
//         <Route render={() => <ProfileContainer />} path='/profile/:userId?' />
//         <Route render={() => <DialogsContainer />} path='/dialogs' />
//         <Route render={() => <UsersContainer />} path='/users' />
//         <Route render={() => <Login />} path='/login' />
//       </div>
//     </BrowserRouter>
//   );
// }

class App extends React.Component {

  componentDidMount() {
    this.props.inintializeAppThunkCreator();
  }

  render() {
    if (!this.props.initialized) { return <Preloader /> }

    return (
      // <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar state={this.props.state.sideBar} />
        <Route render={() => <ProfileContainer />} path='/profile/:userId?' />
        <Route render={() => <DialogsContainer />} path='/dialogs' />
        <Route render={() => <UsersContainer />} path='/users' />
        <Route render={() => <Login />} path='/login' />
      </div>
      // {/* </BrowserRouter > */ }
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.auth.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, { inintializeAppThunkCreator })
)(App);
