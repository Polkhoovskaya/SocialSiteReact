import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, logoutThunkCreator } from '../../redux/auth-reducer';
// import { getAuth } from '../../api/api';

class HeaderContainer extends React.Component {
    // переносим в App
    // componentDidMount() {
    //     // getAuth().
    //     //     then(data => {
    //     //         if (data.resultCode === 0) {
    //     //             this.props.setAuthUserData(data.data);
    //     //         }
    //     //     })
    //     this.props.setAuthUserDataThunkCreator();
    // }

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

// export default connect(mapStateToProps, { setAuthUserData, setAuthUserDataThunkCreator, logoutThunkCreator })(HeaderContainer);

export default connect(mapStateToProps, { setAuthUserData, logoutThunkCreator })(HeaderContainer);