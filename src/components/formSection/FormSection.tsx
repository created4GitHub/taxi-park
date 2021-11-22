import FormSectionTab from "../formSectionTab/FormSectionTab";

import './formSection.style.scss'

const FormSection = (props: any) => {
  let infoEntries = Object.entries(props.info) as any;
  return (
    <div className="table_section">
      {infoEntries.map((item: any, index: any) => {
        return <FormSectionTab key={index} {...{ ...props, item: item }} />;
      })}
    </div>
  );
};

export default FormSection;
