import "./DropDown.scss";
import { groceryCategories } from "../../data/groceryCategories";
export const DropDown = (props) => {

  const handleCatogory = (data) => {
    console.log(data);
  };

  return (
    <div className="DropDown" style={{ display: `${props.hide}` }}>
      <div className="category">
        {groceryCategories.map((data, index) => {
          return (
            <div key={index} className="supCat">
              <p onClick={() => handleCatogory(data)}>{data.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Notify = () => {
  
  return (
    <div className="notify">
    </div>
  );
};
