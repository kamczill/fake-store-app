import React from "react";

const DropdownSelect = ({ sort, setSort }) => {
  const handleChangeSort = (e) => setSort(e.target.value);

  return (
    <div className="border w-fit mt-6 p-3">
      <label htmlFor="cars">Sortuj:</label>
      <select name="cars" id="cars" value={sort} onChange={handleChangeSort}>
        <option value="default" defaultChecked>
          Domyślnie
        </option>
        <option value="title-asc">Tytuł(A-Z)</option>
        <option value="title-desc">Tytuł(Z-A)</option>
        <option value="price-asc">Cena(rosnąco)</option>
        <option value="price-desc">Cena(malejąco)</option>
      </select>
    </div>
  );
};

export default DropdownSelect;
