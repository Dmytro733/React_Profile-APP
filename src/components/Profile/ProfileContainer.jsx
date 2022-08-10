import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {setUserId, setProfile, toogleIsFetching} from "../../redux/reducerProfilePage"
import Profile from "./Profile";

class ProfileContainer extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.toogleIsFetching(true)
    setTimeout(() => {
      axios.get(`https://mocki.io/v1/0c2a1ba4-d955-4a6b-8d44-da6929357c34`)
      .then(response => {
        const userData = response.data.userData;
        userData.forEach((user) => {
          if (user.id == this.props.defaultUserId){
            this.props.setProfile(user)
            this.props.toogleIsFetching(false)
          }
        })
      })
    }, 2000)
  }

  render(){
    return(
      <Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isFetching: state.ProfilePage.isFatching,
    profile: state.ProfilePage.profile,
    defaultUserId: state.ProfilePage.defaultUserId
  }
}

export default connect(mapStateToProps, {setUserId, setProfile, toogleIsFetching })(ProfileContainer);