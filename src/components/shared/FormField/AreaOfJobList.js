'use client';

import React from "react";
import SelectMultiple from "react-select";
import { Controller } from "react-hook-form";

const AreaOfJobList = ({ label, values = [], control }) => {
  const options = values.map((value) => ({
    label: value,
    value: value,
  }));
  return (
    <div>
      <Controller
        name={"jobArea"}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <SelectMultiple
              options={options}
              placeholder={"Choose the job area(s) you are looking for."}
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

export default AreaOfJobList;
