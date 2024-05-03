const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  addName,
}) => {
  return (
    <form>
      <div>
        name:{" "}
        <input
        type="text"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </div>
      <div>
        number:{" "}
        <input
        type="number"
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={(e) => addName(e)}
        >
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
