import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, logoutThunkCreator } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    };
}
export default connect(mapStateToProps, { setAuthUserData, logoutThunkCreator })(HeaderContainer);