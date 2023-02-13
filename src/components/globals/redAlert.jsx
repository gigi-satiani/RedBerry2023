import goodinput from "../../symbols/goodInput.png";
import badinput from "../../symbols/badInput.png";

export const RedAlert = () => {
  return (
    <div className="redParent">
      <img
        src={goodinput}
        style={{
          width: "20px",
          position: "absolute",
          right: "10px",
          top: "15px",
          display: "none",
        }}
      ></img>
      <img
        src={badinput}
        style={{
          width: "20px",
          height: "20px",
          marginTop: "12px",
          display: "none",
        }}
      ></img>
    </div>
  );
};
