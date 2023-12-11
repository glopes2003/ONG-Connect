import goBackArrow from "../../assets/go-back-arrow.svg";

function GoBackBtn() {
  return (
    <div className="d-flex">
      <span className="p-3 rounded-circle border-secundary profile">
        <img src={goBackArrow} />
      </span>
    </div>
  );
}

export default GoBackBtn;