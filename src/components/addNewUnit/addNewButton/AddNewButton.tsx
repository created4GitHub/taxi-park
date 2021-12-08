import { useDispatch } from "react-redux";

import addObj from "../../../img/addObj.svg";
import deleteObj from "../../../img/deleteObj.svg";
import { Button } from "../../regularComponents/button/Button";

interface Button {
  onClick: () => void;
  src: string;
}

interface Props {
  checkFormValues: () => void;
  updateIsAddNewUnit: (payload: boolean) => {
    type: string;
  };
}

const AddNewButton = ({ checkFormValues, updateIsAddNewUnit }: Props) => {
  const dispatch = useDispatch();

  const checkForm = () => checkFormValues();
  const closeAddingField = () => dispatch(updateIsAddNewUnit(false));

  return (
    <div className="table_section_buttons">
      <Button
        onClick={checkForm}
        className="table_section-button"
        btnText={<img src={addObj} alt="alt" />}
      />
      <Button
        onClick={closeAddingField}
        className="table_section-button"
        btnText={<img src={deleteObj} alt="alt" />}
      />
    </div>
  );
}

export default AddNewButton;
