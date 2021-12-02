import Tabel from './tabel'

const TableSection = (props: any) => {
    return (
        <div className="table_section_isActive">
            <Tabel item={props}/>
        </div>
    )
}

export default TableSection;
