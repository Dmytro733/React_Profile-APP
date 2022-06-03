import { connect } from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
  return {
    sidebarData: state.Sidebar
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer;