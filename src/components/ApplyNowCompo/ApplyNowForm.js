"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Globe2, MapPin, ArrowLeft, Loader2 } from "lucide-react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Standard UI components
const Input = ({ label, required, error, ...props }) => (
  <div className="space-y-1.5 w-full">
    <label className="block text-sm font-semibold text-gray-700">
      {label} {required && <span className="text-brand-secondary">*</span>}
    </label>
    <input 
      className={`w-full px-4 py-3 bg-gray-50/50 rounded-[1rem] border ${error ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-brand-secondary/20'} focus:ring-4 focus:border-brand-secondary outline-none transition-all placeholder:text-gray-400 font-medium`}
      {...props}
    />
    {error && <p className="text-xs text-red-500 font-medium mt-1">{error}</p>}
  </div>
);

const NativeSelect = ({ label, required, error, options, ...props }) => (
  <div className="space-y-1.5 w-full">
    <label className="block text-sm font-semibold text-gray-700">
      {label} {required && <span className="text-brand-secondary">*</span>}
    </label>
    <div className="relative">
      <select 
        className={`w-full px-4 py-3 bg-gray-50/50 rounded-[1rem] border ${error ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-brand-secondary/20'} focus:ring-4 focus:border-brand-secondary outline-none transition-all appearance-none font-medium cursor-pointer ${props.value ? 'text-gray-900' : 'text-gray-500'}`}
        {...props}
      >
        <option value="" disabled>Select...</option>
        {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
    {error && <p className="text-xs text-red-500 font-medium mt-1">{error}</p>}
  </div>
);

const Checkbox = ({ label, required, error, ...props }) => (
  <div className="flex items-start gap-3 mt-4">
    <div className="flex items-center h-5 mt-0.5">
      <input 
        type="checkbox" 
        className="w-5 h-5 rounded border-gray-300 text-brand-secondary focus:ring-brand-secondary"
        {...props}
      />
    </div>
    <div className="flex-1">
      <label className="text-sm text-gray-600 font-medium leading-relaxed">
        {label} {required && <span className="text-brand-secondary">*</span>}
      </label>
      {error && <p className="text-xs text-red-500 font-medium mt-1">{error}</p>}
    </div>
  </div>
);

// React Select Custom Styling matching Tailwind theme
const selectStyles = {
  control: (base, state) => ({
    ...base,
    padding: '2px 6px',
    borderRadius: '1rem',
    borderWidth: '1px',
    borderColor: state.isFocused ? '#26b2e6' : '#e5e7eb', // brand-secondary or gray-200
    backgroundColor: 'rgba(249, 250, 251, 0.5)',
    boxShadow: state.isFocused ? '0 0 0 4px rgba(38, 178, 230, 0.2)' : 'none',
    '&:hover': {
      borderColor: state.isFocused ? '#26b2e6' : '#e5e7eb',
    },
    transition: 'all 0.2s ease',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#012759' : state.isFocused ? '#f3f4f6' : 'white',
    color: state.isSelected ? 'white' : '#374151',
    cursor: 'pointer',
    fontWeight: '500',
    '&:active': {
      backgroundColor: '#26b2e6',
      color: 'white'
    }
  }),
  singleValue: (base) => ({ ...base, color: '#111827', fontWeight: '500' }),
  placeholder: (base) => ({ ...base, color: '#9ca3af' })
};

// Top 50 Common Countries for International form (can be expanded later easily)
const countryOptions = [
  "Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bangladesh","Belgium","Brazil",
  "Canada","China","Colombia","Denmark","Egypt","Ethiopia","France","Germany","Ghana","Greece",
  "India","Indonesia","Iran","Iraq","Ireland","Italy","Japan","Kenya","Malaysia","Mexico","Morocco",
  "Myanmar","Nepal","Netherlands","New Zealand","Nigeria","Pakistan","Philippines","Poland","Russia",
  "Saudi Arabia","South Africa","South Korea","Spain","Sri Lanka","Sweden","Switzerland",
  "Tanzania","Thailand","Turkey","Uganda","United Arab Emirates","United Kingdom","United States","Vietnam","Zimbabwe"
].map(c => ({ label: c, value: c }));

// Study Locations for UK flow
const studyLocations = [
  "London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Sheffield", "Bristol", 
  "Nottingham", "Leicester", "Coventry", "Remote/Online"
].map(c => ({ label: c, value: c }));

// General Subjects
const subjectOptions = [
  "Business & Management", "Health & Social Care", "IT & Computer Science", 
  "Engineering", "Arts & Design", "Law", "Finance & Accounting", "Other"
].map(s => ({ label: s, value: s }));


export default function ApplyNowForm({ isStandalone = false }) {
  const [step, setStep] = useState(0); 
  const [origin, setOrigin] = useState(null); 
  
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", nationality: "", englishLevel: "", 
    liveInEngland: "", studyLocation: null, residencyStatus: "", callDate: "", acceptedTerms: false,
    country: null, city: "", interestedSubject: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const validateUkStep1 = () => {
    const errs = {};
    if (!formData.firstName) errs.firstName = "First Name is required";
    if (!formData.lastName) errs.lastName = "Last Name is required";
    if (!formData.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.phone) errs.phone = "Phone is required";
    if (!formData.nationality) errs.nationality = "Nationality is required";
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateUkStep2 = () => {
    const errs = {};
    if (!formData.englishLevel) errs.englishLevel = "Required";
    if (!formData.liveInEngland) errs.liveInEngland = "Required";
    if (!formData.studyLocation) errs.studyLocation = "Required";
    if (!formData.residencyStatus) errs.residencyStatus = "Required";
    if (!formData.acceptedTerms) errs.acceptedTerms = "Required to proceed";
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateInternational = () => {
    const errs = {};
    if (!formData.country) errs.country = "Required";
    if (!formData.city) errs.city = "Required";
    if (!formData.phone) errs.phone = "Required";
    if (!formData.email) errs.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email formatting";
    if (!formData.interestedSubject) errs.interestedSubject = "Required";
    if (!formData.englishLevel) errs.englishLevel = "Required";
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateUkStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    let isValid = false;
    if (origin === 'uk') isValid = validateUkStep2();
    if (origin === 'international') isValid = validateInternational();

    if (isValid) {
      setIsSubmitting(true);
      
      try {
        const payload = {
          origin,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          nationality: formData.nationality,
          englishLevel: formData.englishLevel,
          liveInEngland: formData.liveInEngland,
          studyLocation: formData.studyLocation?.value || formData.studyLocation,
          residencyStatus: formData.residencyStatus,
          callDate: formData.callDate,
          country: formData.country?.value || formData.country,
          city: formData.city,
          interestedSubject: formData.interestedSubject?.value || formData.interestedSubject,
        };

        const res = await fetch('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error("Failed to submit");
        
        setIsSubmitting(false);
        setStep(4);
      } catch (error) {
        console.error("Submission error:", error);
        alert("There was an error submitting your application. Please try again.");
        setIsSubmitting(false);
      }
    }
  };

  const variants = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  };

  return (
    <div className={isStandalone ? "w-full" : "min-h-screen bg-[#f3f4f6] flex flex-col pt-32 pb-20 px-4 sm:px-6"}>
      <style>{`
        .react-datepicker-wrapper { width: 100%; }
        .react-datepicker {
          font-family: inherit;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          font-size: 0.9rem;
        }
        .react-datepicker__header {
          background-color: transparent;
          border-bottom: 1px solid #f3f4f6;
          padding-top: 1rem;
          padding-bottom: 0.5rem;
        }
        .react-datepicker__current-month, .react-datepicker-time__header {
          color: #012759;
          font-weight: 800;
          font-size: 1.1rem;
        }
        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
          width: 2.2rem;
          line-height: 2.2rem;
          margin: 0.166rem;
        }
        .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
          background-color: #26b2e6 !important;
          color: #fff !important;
          border-radius: 0.5rem;
          font-weight: bold;
        }
        .react-datepicker__day:hover {
          background-color: #f3f4f6;
          border-radius: 0.5rem;
        }
        .react-datepicker__time-container {
          border-left: 1px solid #e5e7eb;
        }
        .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
          background-color: #26b2e6 !important;
          color: white;
          font-weight: bold;
        }
      `}</style>
      <div className={isStandalone ? "w-full" : "max-w-5xl w-full mx-auto"}>
        
        {!isStandalone && step !== 4 && (
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Apply <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Now</span>
            </h1>
            <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto font-medium">
              Start your educational journey with London School of Excellence.
            </p>
          </div>
        )}

        <div className={`bg-white rounded-[2rem] ${isStandalone ? "" : "shadow-xl shadow-gray-200/50 border border-gray-100 md:flex-row"} overflow-hidden flex flex-col min-h-[550px]`}>
          
          {origin === 'uk' && step !== 4 && step !== 0 && (
            <div className={`${isStandalone ? 'flex w-full p-6 sm:p-8' : 'hidden md:flex w-1/3 p-10'} bg-brand-primary text-white flex-col justify-between relative overflow-hidden`}>
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-brand-secondary opacity-30 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white/95">Eligibility Requirements</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5 drop-shadow-sm" />
                    <span className="text-white/80 text-sm leading-relaxed font-medium">Must be currently living in the UK.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5 drop-shadow-sm" />
                    <span className="text-white/80 text-sm leading-relaxed font-medium">Must hold Pre-settled, Settled, ILR, or another eligible visa status.</span>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 mt-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-brand-secondary tracking-wider uppercase">Application Progress</span>
                  <span className="text-xs font-bold text-white/60">Step {step} of 2</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: step === 1 ? '50%' : '100%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-brand-secondary to-blue-400"
                  />
                </div>
              </div>
            </div>
          )}

          <div className={`p-6 sm:p-10 flex-1 relative ${origin === 'uk' && step !== 0 && !isStandalone ? 'md:w-2/3' : 'w-full'} flex flex-col justify-center`}>
            <AnimatePresence mode="wait">
              
              {/* STEP 0 */}
              {step === 0 && (
                <motion.div key="step0" variants={variants} initial="initial" animate="animate" exit="exit" className="max-w-2xl mx-auto w-full text-center py-10">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-10 tracking-tight">Where are you applying from?</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <button 
                      onClick={() => { setOrigin('uk'); setStep(1); }}
                      className={`group flex flex-col items-center justify-center gap-5 ${isStandalone ? 'p-6' : 'p-10'} rounded-[2rem] border-2 border-gray-100 bg-white hover:border-brand-secondary/50 hover:bg-sky-50/30 transition-all shadow-sm hover:shadow-xl active:scale-95`}
                    >
                      <div className="w-20 h-20 rounded-[1.5rem] bg-indigo-50 flex items-center justify-center group-hover:-translate-y-2 transition-transform shadow-inner border border-indigo-100/50">
                        <MapPin className="w-10 h-10 text-brand-primary" />
                      </div>
                      <span className="font-bold text-gray-800 text-xl tracking-tight leading-snug">Applying from<br/>the UK</span>
                    </button>

                    <button 
                      onClick={() => { setOrigin('international'); setStep(3); }}
                      className={`group flex flex-col items-center justify-center gap-5 ${isStandalone ? 'p-6' : 'p-10'} rounded-[2rem] border-2 border-gray-100 bg-white hover:border-brand-secondary/50 hover:bg-sky-50/30 transition-all shadow-sm hover:shadow-xl active:scale-95`}
                    >
                      <div className="w-20 h-20 rounded-[1.5rem] bg-teal-50 flex items-center justify-center group-hover:-translate-y-2 transition-transform shadow-inner border border-teal-100/50">
                        <Globe2 className="w-10 h-10 text-brand-secondary" />
                      </div>
                      <span className="font-bold text-gray-800 text-xl tracking-tight leading-snug">Applying from<br/>Outside the UK</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 1 UK */}
              {step === 1 && origin === 'uk' && (
                <motion.div key="uk1" variants={variants} initial="initial" animate="animate" exit="exit" className="w-full">
                  <button onClick={() => setStep(0)} className="flex items-center text-sm font-bold text-gray-400 hover:text-brand-primary mb-8 transition-colors uppercase tracking-wider">
                    <ArrowLeft className="w-4 h-4 mr-1.5" /> Start Over
                  </button>
                  <h2 className="text-3xl font-extrabold text-brand-primary mb-8">Personal Details</h2>
                  
                  <div className="space-y-6">
                    <div className={`grid grid-cols-1 ${!isStandalone ? 'sm:grid-cols-2' : ''} gap-6`}>
                      <Input label="First Name" required value={formData.firstName} onChange={(e) => updateField('firstName', e.target.value)} error={errors.firstName} placeholder="John" />
                      <Input label="Last Name" required value={formData.lastName} onChange={(e) => updateField('lastName', e.target.value)} error={errors.lastName} placeholder="Doe" />
                    </div>
                    
                    <Input label="Email Address" type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} error={errors.email} placeholder="john@example.com" />
                    
                    <div className="space-y-1.5 w-full">
                      <label className="block text-sm font-semibold text-gray-700">Phone Number <span className="text-brand-secondary">*</span></label>
                      <div className="flex shadow-sm rounded-2xl">
                        <span className="inline-flex items-center justify-center px-4 bg-gray-100 border border-r-0 border-gray-200 rounded-l-[1rem] text-gray-600 font-bold text-sm">
                          +44
                        </span>
                        <input 
                          type="tel"
                          className={`w-full px-4 py-3 bg-gray-50/50 rounded-r-[1rem] border ${errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-brand-secondary/20'} focus:ring-4 focus:border-brand-secondary outline-none transition-all font-medium`}
                          placeholder="7123 456789"
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-500 font-medium mt-1">{errors.phone}</p>}
                    </div>

                    <NativeSelect 
                      label="Nationality" required 
                      options={["British", "Irish", "European (EU)", "Non-European", "Other"]}
                      value={formData.nationality} onChange={(e) => updateField('nationality', e.target.value)}
                      error={errors.nationality}
                    />

                    <button 
                      onClick={handleNext}
                      className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:shadow-lg hover:-translate-y-0.5 text-white font-bold py-4 px-6 rounded-[1rem] shadow-md transition-all flex justify-center items-center gap-2 mt-10 active:scale-[0.98]"
                    >
                      Next Step <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2 UK */}
              {step === 2 && origin === 'uk' && (
                <motion.div key="uk2" variants={variants} initial="initial" animate="animate" exit="exit" className="w-full">
                  <button onClick={() => setStep(1)} className="flex items-center text-sm font-bold text-gray-400 hover:text-brand-primary mb-8 transition-colors uppercase tracking-wider">
                    <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Details
                  </button>
                  <h2 className="text-3xl font-extrabold text-brand-primary mb-8">Eligibility & Study Info</h2>

                  <div className="space-y-6">
                    <NativeSelect 
                      label="English Level" required 
                      options={["Beginner / A1-A2", "Intermediate / B1-B2", "Advanced / C1-C2", "Native"]}
                      value={formData.englishLevel} onChange={(e) => updateField('englishLevel', e.target.value)}
                      error={errors.englishLevel}
                    />

                    <NativeSelect 
                      label="Do you live in England?" required 
                      options={["Yes", "No"]}
                      value={formData.liveInEngland} onChange={(e) => updateField('liveInEngland', e.target.value)}
                      error={errors.liveInEngland}
                    />

                    <div className="space-y-1.5 w-full">
                      <label className="block text-sm font-semibold text-gray-700">
                        Where would you like to study? <span className="text-brand-secondary">*</span>
                      </label>
                      <CreatableSelect 
                        styles={selectStyles}
                        options={studyLocations}
                        placeholder="Search or type a city name..."
                        value={formData.studyLocation}
                        onChange={(val) => updateField('studyLocation', val)}
                      />
                      {errors.studyLocation && <p className="text-xs text-red-500 font-medium mt-1">{errors.studyLocation}</p>}
                    </div>

                    <NativeSelect 
                      label="Residency Status" required 
                      options={["Pre-settled", "Settled", "ILR", "Student Visa", "Other eligible visa"]}
                      value={formData.residencyStatus} onChange={(e) => updateField('residencyStatus', e.target.value)}
                      error={errors.residencyStatus}
                    />

                    <div className="space-y-1.5 w-full">
                      <label className="block text-sm font-semibold text-gray-700">
                        Preferred Call Date & Time (Optional)
                      </label>
                      <DatePicker 
                        selected={formData.callDate ? new Date(formData.callDate) : null}
                        onChange={(date) => updateField('callDate', date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        placeholderText="Select date and time..."
                        className="w-full px-4 py-3 bg-gray-50/50 rounded-[1rem] border border-gray-200 focus:ring-brand-secondary/20 focus:ring-4 focus:border-brand-secondary outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900"
                        wrapperClassName="w-full"
                      />
                    </div>

                    <div className="pt-4 border-t border-gray-100 mt-6">
                      <Checkbox 
                        label="I agree to the Terms & Conditions and consent to LSOE processing my personal data according to the Privacy Policy."
                        required
                        checked={formData.acceptedTerms}
                        onChange={(e) => updateField('acceptedTerms', e.target.checked)}
                        error={errors.acceptedTerms}
                      />
                    </div>

                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary hover:bg-brand-primary/90 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none text-white font-bold py-4 px-6 rounded-[1rem] shadow-xl shadow-brand-primary/10 transition-all flex justify-center items-center mt-10 active:scale-[0.98]"
                    >
                      {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Submit Application"}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3 INT */}
              {step === 3 && origin === 'international' && (
                <motion.div key="int1" variants={variants} initial="initial" animate="animate" exit="exit" className="w-full max-w-2xl mx-auto">
                  <button onClick={() => setStep(0)} className="flex items-center text-sm font-bold text-gray-400 hover:text-brand-secondary mb-6 transition-colors uppercase tracking-wider">
                    <ArrowLeft className="w-4 h-4 mr-1.5" /> Start Over
                  </button>
                  <h2 className="text-3xl font-extrabold text-brand-primary mb-2">International Application</h2>
                  <p className="text-gray-500 text-base mb-8 font-medium">Create your profile to begin the admission process.</p>

                  <div className="space-y-6">
                    
                    <div className={`grid grid-cols-1 ${!isStandalone ? 'sm:grid-cols-2' : ''} gap-6`}>
                      <div className="space-y-1.5 w-full">
                        <label className="block text-sm font-semibold text-gray-700">Country <span className="text-brand-secondary">*</span></label>
                        <Select 
                          styles={selectStyles}
                          options={countryOptions}
                          placeholder="Search country..."
                          value={formData.country}
                          onChange={(val) => updateField('country', val)}
                        />
                        {errors.country && <p className="text-xs text-red-500 font-medium mt-1">{errors.country}</p>}
                      </div>

                      <Input label="City" required value={formData.city} onChange={(e) => updateField('city', e.target.value)} error={errors.city} placeholder="e.g. Mumbai" />
                    </div>

                    <Input label="Phone Number (include country code)" required type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} error={errors.phone} placeholder="+91 98765 43210" />
                    
                    <Input label="Email Address" required type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} error={errors.email} placeholder="you@example.com" />

                    <div className="space-y-1.5 w-full">
                      <label className="block text-sm font-semibold text-gray-700">Interested Subject <span className="text-brand-secondary">*</span></label>
                      <CreatableSelect 
                        styles={selectStyles}
                        options={subjectOptions}
                        placeholder="Search or type a subject..."
                        value={formData.interestedSubject}
                        onChange={(val) => updateField('interestedSubject', val)}
                      />
                      {errors.interestedSubject && <p className="text-xs text-red-500 font-medium mt-1">{errors.interestedSubject}</p>}
                    </div>

                    <NativeSelect 
                      label="English Level" required 
                      options={["Beginner", "Intermediate", "Advanced", "Native"]}
                      value={formData.englishLevel} onChange={(e) => updateField('englishLevel', e.target.value)}
                      error={errors.englishLevel}
                    />

                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:shadow-lg hover:-translate-y-0.5 disabled:bg-gray-200 disabled:shadow-none text-white font-bold py-4 px-6 rounded-[1rem] shadow-xl shadow-brand-secondary/20 transition-all flex justify-center items-center mt-10 active:scale-[0.98]"
                    >
                      {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Submit Application"}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SUCCESS */}
              {step === 4 && (
                <motion.div key="success" variants={variants} initial="initial" animate="animate" exit="exit" className="w-full text-center py-20 max-w-lg mx-auto">
                  <div className="w-28 h-28 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-brand-secondary/10 rounded-full animate-ping"></div>
                    <CheckCircle2 className="w-14 h-14 text-brand-secondary" />
                  </div>
                  <h2 className="text-4xl font-black text-brand-primary mb-4 tracking-tight">Application Submitted!</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                    Thank you for applying to the London School of Excellence. A member of our admissions team will be in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => { setStep(0); setOrigin(null); setFormData({
                      firstName: "", lastName: "", email: "", phone: "", nationality: "", englishLevel: "", liveInEngland: "", studyLocation: null, residencyStatus: "", callDate: "", acceptedTerms: false, country: null, city: "", interestedSubject: null
                    }); window.scrollTo({top:0, behavior:"smooth"}); }}
                    className="bg-gray-100 hover:bg-gray-200 text-brand-primary font-bold py-3.5 px-8 rounded-full shadow-sm transition-all"
                  >
                    Return to Start
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
