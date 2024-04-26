import React from 'react';
import style from "./filtersCard.module.css"

export default function FiltersCard() {
  return (
    <div className={style.filters_card}>

      <div className={style.filter_item}>
        <label>Sort by: </label>
        <select>
          <option value="high">Price hight to low</option>
          <option value="low">Price low to high</option>
          <option value="electric">Electric vehicles first</option>
        </select>
      </div>

      <div className={style.filter_item}>
        <label>Vehicle type: </label>
        <select>
          <option value="all">All</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="honda">Honda</option>
          <option value="honda">Honda</option>
          <option value="honda">Honda</option>
          <option value="honda">Honda</option>
          <option value="honda">Honda</option>
        </select>
      </div>

      <div className={style.filter_item}>
        <label>Gearshift: </label>
        <select>
          <option value="manual">Manual</option>
          <option value="auto">Automatic</option>
        </select>
      </div>

      <div className={style.filter_item}>
        <label>Passengers: </label>
        <select>
          <option value="four">4+</option>
          <option value="five">5+</option>
          <option value="six">6+</option>
          <option value="seven">7+</option>
          <option value="eight">8+</option>
          <option value="nine">9+</option>
          <option value="ten">10+</option>
        </select>
      </div>

      <div className={style.filter_item}>
        <label>Bags: </label>
        <select>
          <option value="one">1+</option>
          <option value="two">2+</option>
          <option value="three">3+</option>
          <option value="four">4+</option>
          <option value="five">5+</option>
        </select>
      </div>

    </div>
  );
}

