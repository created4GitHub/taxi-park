import { Button } from "../../regularComponents/button/Button";

interface Props {
    resetFilters: () => void;
}

export default function ResetButton({ resetFilters }: Props) {
    return (
        <div className="reset-filter-button">
            <Button
                onClick={resetFilters}
                btnText={"Reset"}
            />
        </div>
    );
}