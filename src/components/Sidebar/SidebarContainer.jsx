import Sidebar from "./Sidebar";

const SidebarContainer = (props) => {

  let state = props.store.getState();

  return (
    <Sidebar sidebarData={state.Sidebar} />
  );
};

export default SidebarContainer;