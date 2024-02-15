"use client";

import React, { useState } from 'react'
import { filter } from "@/app/interface";

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
    <div role="tablist">
      {filters.map((filter, index) => (
        <div role="tab" className="career-filter" key={filter.name} onClick={(e) =>handleSelectedPill(index)}>
          <div className="career-filter__name">{filter.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Pills;
