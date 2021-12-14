import { useDispatch } from "react-redux";

import addObj from "../../../img/addObj.svg";
import deleteObj from "../../../img/deleteObj.svg";
import { Button } from "../../regularComponents/button/Button";

interface Props {
  updateIsAddNewUnit: (payload: string | null) => {
    type: string;
  };
}

const AddNewButton = ({ updateIsAddNewUnit }: Props) => {
  const dispatch = useDispatch();

  const closeAddingField = () => dispatch(updateIsAddNewUnit(null));

  return (
    <div className="table_section_buttons">
      <Button
        type="submit"
        className="table_section-button"
        btnText={<img src={addObj} className="addUnit" alt="alt" />}
      />
      <Button
        onClick={closeAddingField}
        className="table_section-button"
        btnText={<img src={deleteObj} className="closeUnit" alt="alt" />}
      />
    </div>
  );
}

export default AddNewButton;