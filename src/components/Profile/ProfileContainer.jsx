import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {setUserId, setProfile, toogleIsFetching} from "../../redux/reducerProfilePage"
import Profile from "./Profile";
import { useParams } from "react-router-dom";

const withRouter = WrappedComponent => props => {
  const params = useParams();
  return <WrappedComponent {...props}  params={params} />
};

class ProfileContainer extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.toogleIsFetching(true)
    this.props.setUserId(this.props.params.id?this.props.params.id:1)
    setTimeout(() => {
      axios.get(`https://mocki.io/v1/0c2a1ba4-d955-4a6b-8d44-da6929357c34`)
      .then(response => {
        const userData = response.data.userData;
        userData.forEach((user) => {
          if (user.id == this.props.userId){
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
    userId: state.ProfilePage.userId
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserId, setProfile, toogleIsFetching })(WithUrlDataContainerComponent);