
const TabButton = ({ children, isSelected, ...props }) => {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
    </li>
  );
}
export default TabButton