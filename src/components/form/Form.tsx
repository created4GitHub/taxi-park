
import massObj from "./testMass";
import FormSection from "./formSection/FormSection";
import "./formDriver.min.scss";
import { Context } from "./context";

const Form = () => {
  return (
    <div className="table">
      {massObj.map((item, index) => {
        return (
          <Context.Provider value={item} key={index}>
            <div key={index}>
              <FormSection {...item} />;
            </div>
          </Context.Provider>
        );
      })}
    </div>
  );
};

export default Form;
