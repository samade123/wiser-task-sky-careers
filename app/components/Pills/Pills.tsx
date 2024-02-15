"use client";

import React, { useState } from 'react'
import { filter } from "@/app/interface";
import './Pills.scss'
// import {classNames}

interface Prop {
  filters: filter[];
  selectFilter: (index: number) => void,
}

const Pills = ({ filters, selectFilter }: Prop) => {
    let [selectedFilterPill, selectFilterPill] = useState(0);
    let handleSelectedPill = (index: number) => {
        selectFilterPill(index)
        console.log(index)
        selectFilter(index);
    }

    

  return (
    <div role="tablist" className='career-filter-wrapper'>
      {filters.map((filter, index) => (
        <div role="tab" tabIndex={0} className={`career-filter ${selectedFilterPill == index ? 'career-filter--selected' : ''}`} key={filter.name} onClick={(e) =>handleSelectedPill(index)}>
          <div className="career-filter__name">{filter.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Pills;
