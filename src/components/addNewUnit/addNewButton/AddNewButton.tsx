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

  const buttons: Button[] = [
    {
      onClick: () => checkFormValues(),
      src: addObj,
    },
    {
      onClick: () => dispatch(updateIsAddNewUnit(false)),
      src: deleteObj,
    },
  ];

  return (
    <div className="table_section_buttons">
      {buttons?.map(({ src, onClick }: Button) => {
        return (
          <Button
            key={src}
            onClick={onClick}
            className="table_section-button"
            btnText={<img src={src} alt="alt" />}
          />
        )
      })}
    </div>
  );
}

export default AddNewButton;
