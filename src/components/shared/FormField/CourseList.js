'use client';

import React from "react";
import SelectMultiple from "react-select";
import { Controller } from "react-hook-form";

const CourseList = ({ label, values = [], control }) => {
  const options = values.map((value) => ({
    label: value,
    value: value,
  }));
  return (
    <div>
      <Controller
        name={"course"}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <SelectMultiple
              options={options}
              placeholder={"Choose one or more Courses..."}
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

export default CourseList;
