'use client';

import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AreaOfJobList from "../shared/FormField/AreaOfJobList";
import FieldOfJobList from "../shared/FormField/FieldOfJobList";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FindAJobForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    control,
  } = useForm();

  useEffect(() => {
    (async () => {
      await sleep(50);
      setValue("course", [], { shouldValidate: true });
      reset({
        course: [],
      });
    })();
  }, [setValue, reset]);


  const onSubmit = (data) => {
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
    fetch(`${API_URL}/manage-applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Wow! Your Application Submitted Successfully!");
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
        toast.error("Failed to submit application. Please try again.");
      });
  };

  return (
    <>
      <div className="flex items-center justify-center py-5 bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="overflow-hidden">
                <p className="font-bold text-xl text-dark text-center mt-5">
                  Personal Information
                </p>
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <select
                        {...register("title")}
                        className="input input-bordered input-sm w-full"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Title...
                        </option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                        <option>Miss.</option>
                        <option>Dr.</option>
                        <option>Prof.</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <select
                        {...register("gender")}
                        className="input input-bordered input-sm w-full"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Gender...
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered input-sm w-full"
                        {...register("fullName", {
                          required: {
                            value: true,
                            message: "First Name is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.fullName?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.fullName.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <Controller
                        control={control}
                        name="date-input"
                        {...register("dateOfBirth", {
                          required: "Date is required",
                        })}
                        render={({ field }) => (
                          <DatePicker
                            className="input input-bordered input-sm w-full"
                            placeholderText="Date of Birth"
                            showIcon
                            isClearable
                            showMonthDropdown
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={50}
                            maxDate={new Date()}
                            dropdownMode="select"
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                          />
                        )}
                      />
                      <label className="label">
                        {errors.dateOfBirth?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.dateOfBirth.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <select
                        {...register("nationality", {
                          required: {
                            value: true,
                            message: "Nationality is Required",
                          },
                        })}
                        className="input input-bordered input-sm w-full"
                        defaultValue=""
                      >
                        <label className="label">
                          {errors.nationality?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.nationality.message}
                            </span>
                          )}
                        </label>
                        <option value="" disabled>
                          Nationality
                        </option>
                        {/* {countries.map((country) => (
                          <option> {country.name}</option>
                        ))} */}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        className="input input-bordered input-sm w-full"
                        {...register("telephone", {
                          required: {
                            value: true,
                            message: "Telephone Number is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.telephone?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.telephone.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        className="input input-bordered input-sm w-full"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is Required",
                          },
                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Provide a valid Email",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.email?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.email.message}
                          </span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span className="label-text-alt text-red-500">
                            {errors.email.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="number"
                        placeholder="Additional Phone Number"
                        className="input input-bordered input-sm w-full"
                        {...register("additonalTelephone", {
                          required: {
                            value: true,
                            message: "Telephone Number is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.additonalTelephone?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.additonalTelephone.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6">
                      <input
                        type="text"
                        placeholder="Street address"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="input input-bordered input-sm w-full"
                        {...register("streetAdress", {
                          required: {
                            value: true,
                            message: "Street Address is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.streetAdress?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.streetAdress.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <input
                        {...register("city")}
                        type="text"
                        placeholder="City"
                        className="input input-bordered input-sm w-full"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <input
                        type="text"
                        placeholder="State / Province"
                        {...register("region")}
                        autoComplete="address-level1"
                        className="input input-bordered input-sm w-full"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <input
                        {...register("postalCode")}
                        type="text"
                        placeholder="ZIP / Postal code"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="input input-bordered input-sm w-full"
                      />
                    </div>

                    <p className="font-bold text-xl text-dark text-center col-span-6 my-3">
                      Job Selection
                    </p>

                    <div className="col-span-6">
                      {/* course selection from react select start  */}
                      <AreaOfJobList
                        name={"jobArea"}
                        control={control}
                        values={[
                          "Administration",
                          "Health Care / Medical",
                          "Hotel & Hospitality",
                          "Security",
                          "Cleaning & Housekeeping",
                        ]}
                      />
                      {/* course selection from react select end  */}
                    </div>

                    <div className="col-span-6">
                      {/* course selection from react select start  */}
                      <FieldOfJobList
                        name={"jobField"}
                        control={control}
                        values={[
                          "Area of Job Administration",
                          "Project Manager",
                          "Public Relation Manager",
                          "Chartered Accountants",
                          "Accountant/Cashier",
                          "Secretary/Executives",
                          "Clerk/Typist/Receptionist",
                          "Sales Personnel/Store Keeper",
                          "Computer Operator",

                          "Area of Job Health Care / Medical",
                          "Care Support Worker",
                          "Nurse",
                          "Pharmacist",

                          "Area of Job Hotel & Hospitality",
                          "Western, Italian, Chinese food production (Cooking and preservation)",
                          "Food & Beverage Service (Waiter, Bartender)",
                          "Front Office Management (Receptionist call operator)",
                          "Room Boy/Laundry Man/Cleaners",

                          "Area of Job Security",
                          "Security Guard",
                          "Residential/Private Security",
                          "Official/Bank Security",
                          "Industrial Security",

                          "Area of Job Cleaning & Housekeeping",
                          "Office Boy",
                          "Cleaner (Hospital, School, Mosque, Office etc.)",
                          "Housekeeper",
                          "Care Giver",
                        ]}
                      />
                      {/* course selection from react select end  */}
                    </div>

                    <p className="font-bold text-xl text-dark text-center col-span-6 my-3">
                      Additional Information
                    </p>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <input
                        type="number"
                        placeholder="Minimun Salary Expectation"
                        className="input input-bordered input-sm w-full"
                        {...register("minSalary")}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <input
                        type="number"
                        placeholder="Maximum Salary Expectation"
                        className="input input-bordered input-sm w-full"
                        {...register("maxSalary")}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <select
                        {...register("jobType", {
                          required: {
                            value: true,
                            message: "Job Type is Required",
                          },
                        })}
                        className="input input-bordered input-sm w-full"
                        defaultValue=""
                      >
                        <label className="label">
                          {errors.jobType?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.jobType.message}
                            </span>
                          )}
                        </label>
                        <option value="" disabled>
                          Select Job Type
                        </option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                      </select>
                    </div>

                    <p className="font-bold text-xl text-dark text-center col-span-6 my-3">
                      Documents
                    </p>

                    <div className="col-span-6 ">
                      <label className="block text-sm font-medium text-gray-700">
                        Curriculum Vitae
                      </label>
                      <input
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        type="file"
                        {...register("cv", {
                          required: {
                            value: true,
                            message: "Upload Curriculum Vitae is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.cv?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.cv.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 ">
                      <label className="block text-sm font-medium text-gray-700">
                        Official Photo ID or Passport
                      </label>
                      <input
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        type="file"
                        {...register("passport", {
                          required: {
                            value: true,
                            message: "Upload Passport is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.passport?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.passport.message}
                          </span>
                        )}
                      </label>
                    </div>

                    {/* End single input group */}

                    <p className="font-bold text-xl text-accent text-center col-span-6 my-3">
                      Loged in User Details
                    </p>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        User Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered input-sm w-full"
                        {...register("logedInUserName", { required: true })}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        User Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered input-sm w-full"
                        {...register("logedInUserEmail", { required: true })}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className=" w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindAJobForm;
