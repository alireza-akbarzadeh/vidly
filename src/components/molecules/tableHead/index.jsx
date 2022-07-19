import { Th, THead, Tr } from "../table";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const TableHead = (props) => {
  const { columns, setSort, sort } = props;

  const onSort = (path) => {
    const sortColumn = { ...sort };
    if (sortColumn.path === path) {
      sortColumn.path = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    setSort(sortColumn);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sort.path) return null;
    if (sort.order === "asc") return <TiArrowSortedUp fontSize={17} />;
    return <TiArrowSortedDown fontSize={17} />;
  };
  return (
    <THead>
      <Tr>
        {columns.map((column, index) => (
          <Th key={index} onClick={() => onSort(column.path)}>
            <span className='inline-flex items-center cursor-pointer'>
              {column.label}
              {renderSortIcon(column)}
            </span>
          </Th>
        ))}
      </Tr>
    </THead>
  );
};

export default TableHead;
