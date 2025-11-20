'use client';

import React from "react";
import SelectMultiple from "react-select";
import { Controller } from "react-hook-form";

const UniversityList = ({ label, values = [], control }) => {
  const options = values.map((value) => ({
    label: value,
    value: value,
  }));
  return (
    <div>
      <Controller
        name={"university"}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <SelectMultiple
              options={options}
              placeholder={"Choose one or more Universities..."}
              isMulti={true}
              onChange={(options) =>
                onChange(options?.map((option) => option.value))
              }
              onBlur={onBlur}
              value={options.filter((option) => value?.includes(option.value))}
              defaultValue={options.filter((option) =>
                value?.includes(option.value)
              )}
            />
          );
        }}
      />
    </div>
  );
};

export default UniversityList;
