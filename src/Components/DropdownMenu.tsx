const DropDownMenu = ({
  dataFields,
  onOptionChangeHandler,
  years,
  eventHandler,
}: any) => {
  return (
    <>
      <div className="dynamic">
        <div>
          Choose a Category
          <select onChange={onOptionChangeHandler}>
            <option>Please choose one option</option>

            {dataFields.map((option: any, index: any) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>
        <div>
          <p>Slide Years</p>
          <p>{years}</p>
          <input
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
