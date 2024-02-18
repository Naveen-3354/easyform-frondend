import "./InputFeild.scss";
import { useState } from "react";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

export const InputFeild = (props) => {
  const { name, handleChange, type, error, placeholder, style } = props;

  return (
    <div className="inputFeild">
      <div className="input">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          style={{ ...style }}
          onChange={handleChange}
        />
        <p>{"error"}</p>
      </div>
    </div>
  );
};

export const PasswordFeild = (props) => {
  const { name, handleChange, error, placeholder, style } = props;
  const [passwordHide, setPasswordHide] = useState(false);
  const handleVisibility = () => {
    setPasswordHide(!passwordHide);
  };
  return (
    <div className="inputFeild">
      <div className="input password">
        <input
          type={passwordHide ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          style={{ ...style }}
          onChange={handleChange}
        />
        <div className="visibility" onClick={handleVisibility}>
          {passwordHide ? (
            <VisibilityRoundedIcon className="eyeIcon" />
          ) : (
            <VisibilityOffRoundedIcon className="eyeIcon" />
          )}
        </div>
        <p>{"error"}</p>
      </div>
    </div>
  );
};
