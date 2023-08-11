function FilterList({ className, children, onClick }) {
  return (
    <li className={className} onClick={onClick}>
      {children}
    </li>
  );
}

export default FilterList;
