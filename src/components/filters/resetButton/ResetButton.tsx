import { FormattedMessage } from "react-intl";
import { Button } from "../../regularComponents/button/Button";

interface Props {
    resetFilters: () => void;
}

const ResetButton = ({ resetFilters }: Props) => {
    return (
        <div className="reset-filter-button">
            <Button
                onClick={resetFilters}
                btnText={<FormattedMessage id='Reset' />}
            />
        </div>
    );
}

export default ResetButton;
