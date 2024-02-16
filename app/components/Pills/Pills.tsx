"use client";

import React, { useState } from "react";
import { SubTeamCard, filter } from "@/app/interface";
import "./Pills.scss";
import "./Pills-mobile.scss";
import { usePrefetchImages } from "@/app/functions/prefetch";

// import {classNames}

interface Prop {
  filters: filter[];
  subTeamCards: SubTeamCard[];
  selectFilter: (index: number) => void;
}

const Pills = ({ filters, selectFilter, subTeamCards }: Prop) => {
  usePrefetchImages(subTeamCards);
  let [selectedFilterPill, selectFilterPill] = useState(0);
  let [buttonTitle, setButtonTitle] = useState("Select a Sub-team");
  let [showMobilePopUp, setMobilePopUpState] = useState(false);
  let [closePopUpTransitionState, setPopUpTranstionState] = useState(false);
  let handleSelectedPill = (index: number) => {
    selectFilterPill(index);
    // console.log(index);
    selectFilter(index);
    setButtonTitle(filters[index].name);
  };
  let handleMobileSelectFilter = (
    closeBtn: boolean = false,
    close: boolean,
    index: number = 0
  ) => {
    let img = document.getElementById("pop-up-list");
    if (close) {
      setPopUpTranstionState(false);

      if (img !== null) {
        img.addEventListener(
          "transitionend",
          (ev) => {
            setMobilePopUpState(false);
          },
          { once: true }
        );
      } else {
        setMobilePopUpState(false);
      }

      if (closeBtn == false) {
        setTimeout(() => {
          handleSelectedPill(index);
        }, 100);
      }
    } else {
      setMobilePopUpState(true);
      setTimeout(() => {
        setPopUpTranstionState(true);
      }, 100);
    }
  };

  return (
    <>
      <div role="tablist" className="career-filter-wrapper">
        {filters.map((filter, index) => (
          <div
            role="tab"
            tabIndex={0}
            className={`career-filter ${
              selectedFilterPill == index ? "career-filter--selected" : ""
            }`}
            key={filter.name}
            onClick={(e) => handleSelectedPill(index)}
          >
            <div className="career-filter__name">{filter.name}</div>
          </div>
        ))}
      </div>

      <div className="career-filter-wrapper">
        <button
          title="select filter"
          className={"career-filter-button".concat(` ${buttonTitle == "Select a Sub-team" ? "career-filter-button--empty" : ""}`)}
          onClick={(e) => handleMobileSelectFilter(false, false)}
        >
          {buttonTitle}
          <i className="career-filter-button__icon">
            <svg
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 1L9.5 9L1.5 1"
                stroke="black"
                strokeOpacity="0.35"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 1L9.5 9L1.5 1"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 1L9.5 9L1.5 1"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 1L9.5 9L1.5 1"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </button>
        {showMobilePopUp ? (
          <div className={"mobile-pop-up"}>
            <div
              className={
                "pop-up-list" +
                `${!closePopUpTransitionState ? " pop-up-list--close" : ""}`
              }
              id="pop-up-list"
            >
              <div className="pop-up-list__title">
                <h5>Select a Sub-team</h5>{" "}
                <i onClick={(e) => handleMobileSelectFilter(true, true, 0)}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L1 11"
                      stroke="black"
                      strokeOpacity="0.35"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L6 6L1 11"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L6 6L1 11"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L6 6L1 11"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 11L6 6L11 1"
                      stroke="black"
                      strokeOpacity="0.35"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 11L6 6L11 1"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 11L6 6L11 1"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 11L6 6L11 1"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div className="pop-up-list__filters">
                {filters.map((filter, index) => (
                  <div
                    className={
                      "pop-up-list__filter" +
                      `${
                        filter.name == buttonTitle
                          ? " pop-up-list__filter--chosen"
                          : ""
                      }`
                    }
                    key={index}
                    onClick={(e) =>
                      handleMobileSelectFilter(false, true, index)
                    }
                  >
                    {filter.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}{" "}
      </div>
    </>
  );
};

export default Pills;
