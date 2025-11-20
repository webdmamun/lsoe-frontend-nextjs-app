'use client';

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AreaOfJobList from "../shared/FormField/AreaOfJobList";
import FieldOfJobList from "../shared/FormField/FieldOfJobList";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FindATalentForm = () => {
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
  }, []);

  const onSubmit = (data) => {
    fetch("http://localhost:8000/manageapllications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Wow! Your Application Submitted Successfully!");
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
                  Company Information
                </p>
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    {/* <div className="col-span-6 sm:col-span-3">
                      <select
                        {...register("title")}
                        className="input input-bordered input-sm w-full"
                      >
                        <option disabled selected>
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
                      >
                        <option disabled selected>
                          Gender...
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div> */}

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="text"
                        placeholder="Name of your Company"
                        className="input input-bordered input-sm w-full"
                        {...register("companyName", {
                          required: {
                            value: true,
                            message: "First Name is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.companyName?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.companyName.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="text"
                        placeholder="Website of your Company"
                        className="input input-bordered input-sm w-full"
                        {...register("companyWebsite", {
                          required: {
                            value: true,
                            message: "First Name is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.companyWebsite?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.companyWebsite.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="text"
                        placeholder="Name of Contact Person"
                        className="input input-bordered input-sm w-full"
                        {...register("contactPerson", {
                          required: {
                            value: true,
                            message: "First Name is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.contactPerson?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.contactPerson.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="number"
                        placeholder="Phone Number of Contact Person"
                        className="input input-bordered input-sm w-full"
                        {...register("contactPersonPhone", {
                          required: {
                            value: true,
                            message:
                              "Phone Number of Contact Person is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.contactPersonPhone?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.contactPersonPhone.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="email"
                        placeholder="Email Address of Contact Person"
                        className="input input-bordered input-sm w-full"
                        {...register("contactPersonEmail", {
                          required: {
                            value: true,
                            message:
                              "Email Address of Contact Person is Required",
                          },
                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Provide a valid Email",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.contactPersonEmail?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.contactPersonEmail.message}
                          </span>
                        )}
                        {errors.contactPersonEmail?.type === "pattern" && (
                          <span className="label-text-alt text-red-500">
                            {errors.contactPersonEmail.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <select
                        {...register("typeOfJob", {
                          required: {
                            value: true,
                            message: "Nationality is Required",
                          },
                        })}
                        className="input input-bordered input-sm w-full"
                        defaultValue=""
                      >
                        <label className="label">
                          {errors.typeOfJob?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.typeOfJob.message}
                            </span>
                          )}
                        </label>
                        <option value="" disabled>
                          Which type of job are you offering?
                        </option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <select
                        {...register("modeOfJob", {
                          required: {
                            value: true,
                            message: "Nationality is Required",
                          },
                        })}
                        className="input input-bordered input-sm w-full"
                        defaultValue=""
                      >
                        <label className="label">
                          {errors.modeOfJob?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.modeOfJob.message}
                            </span>
                          )}
                        </label>
                        <option value="" disabled>
                          Mode of job are you offering?
                        </option>
                        <option>Temporary Job</option>
                        <option>Permanent Job</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <select
                        {...register("DBSCRBDone", {
                          required: {
                            value: true,
                            message: "Nationality is Required",
                          },
                        })}
                        className="input input-bordered input-sm w-full"
                        defaultValue=""
                      >
                        <label className="label">
                          {errors.DBSCRBDone?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.DBSCRBDone.message}
                            </span>
                          )}
                        </label>
                        <option value="" disabled>
                          Are you looking for someone who has already had a DBS
                          or CRB check?
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="number"
                        placeholder="Minimum Salary Offered for the Job in GBP"
                        className="input input-bordered input-sm w-full"
                        {...register("minSalaryOffered", {
                          required: {
                            value: true,
                            message:
                              "Phone Number of Contact Person is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.minSalaryOffered?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.minSalaryOffered.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-full">
                      <input
                        type="number"
                        placeholder="Maximum Salary Offered for the Job in GBP"
                        className="input input-bordered input-sm w-full"
                        {...register("maxSalaryOffered", {
                          required: {
                            value: true,
                            message:
                              "Phone Number of Contact Person is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.maxSalaryOffered?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.maxSalaryOffered.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6">
                      <input
                        type="text"
                        placeholder="Full Address of your company"
                        name="street-address"
                        autoComplete="street-address"
                        className="input input-bordered input-sm w-full"
                        {...register("companyAddress", {
                          required: {
                            value: true,
                            message: "Street Address is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.companyAddress?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.companyAddress.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6">
                      <input
                        type="text"
                        placeholder="Full Address of Job Location"
                        name="street-address"
                        autoComplete="street-address"
                        className="input input-bordered input-sm w-full"
                        {...register("jobAddress", {
                          required: {
                            value: true,
                            message: "Street Address is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.jobAddress?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.jobAddress.message}
                          </span>
                        )}
                      </label>
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
                    {/* End single input group */}
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

export default FindATalentForm;
