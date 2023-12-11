import ProfileIcon from "./components/profileIcon";
import Window from "./components/window";

function Query() {
  return (
    <>
      <div className="float-end p-5">
        <ProfileIcon />
      </div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <Window title="Faça a sua consulta" />
      </div>
    </>
  );
}
export default Query;