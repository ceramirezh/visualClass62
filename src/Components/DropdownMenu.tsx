const DropDownMenu = ({
  dataFields,
  onOptionChangeHandler,
  years,
  eventHandler,
}: any) => {
  return (
    <>
      <div className="dynamic">
        <div className="boxes">
          <p>Choose a Category</p>
          <select onChange={onOptionChangeHandler}>
            <option>Choose one option</option>

            {dataFields.map((option: any, index: any) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>
        <div className="boxes">
          <p>Choose a Year: {years}</p>
          <input
            className="slider"
            type="range"
            min="1921"
            max="2020"
            value={years}
            id="myRange"
            onChange={eventHandler}
          />
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
