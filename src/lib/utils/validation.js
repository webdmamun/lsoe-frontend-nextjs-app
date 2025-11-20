// Form Validation Utilities

/**
 * Validate required field
 * @param {any} value - Value to validate
 * @returns {boolean} True if value exists
 */
export const validateRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined && value !== '';
};

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const validateEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (international format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone
 */
export const validatePhone = (phone) => {
  if (!phone) return false;
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  // Check if it's between 10-15 digits
  return cleaned.length >= 10 && cleaned.length <= 15;
};

/**
 * Validate UK postcode
 * @param {string} postcode - Postcode to validate
 * @returns {boolean} True if valid UK postcode
 */
export const validateUKPostcode = (postcode) => {
  if (!postcode) return false;
  const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i;
  return postcodeRegex.test(postcode.trim());
};

/**
 * Validate minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum length required
 * @returns {boolean} True if meets minimum length
 */
export const validateMinLength = (value, minLength) => {
  if (!value) return false;
  return value.trim().length >= minLength;
};

/**
 * Validate maximum length
 * @param {string} value - Value to validate
 * @param {number} maxLength - Maximum length allowed
 * @returns {boolean} True if within maximum length
 */
export const validateMaxLength = (value, maxLength) => {
  if (!value) return true; // Empty is valid for max length
  return value.trim().length <= maxLength;
};

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL
 */
export const validateURL = (url) => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate date is in the past
 * @param {Date|string} date - Date to validate
 * @returns {boolean} True if date is in the past
 */
export const validatePastDate = (date) => {
  if (!date) return false;
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj < new Date();
};

/**
 * Validate date is in the future
 * @param {Date|string} date - Date to validate
 * @returns {boolean} True if date is in the future
 */
export const validateFutureDate = (date) => {
  if (!date) return false;
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj > new Date();
};

/**
 * Validate age (must be 18 or older)
 * @param {Date|string} birthDate - Birth date to validate
 * @returns {boolean} True if 18 or older
 */
export const validateAge18Plus = (birthDate) => {
  if (!birthDate) return false;
  const dateObj = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
  const today = new Date();
  const age = today.getFullYear() - dateObj.getFullYear();
  const monthDiff = today.getMonth() - dateObj.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateObj.getDate())) {
    return age - 1 >= 18;
  }
  return age >= 18;
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} Validation result with strength level
 */
export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, strength: 'none', message: 'Password is required' };
  }

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return { 
      isValid: false, 
      strength: 'weak', 
      message: `Password must be at least ${minLength} characters` 
    };
  }

  let strength = 'weak';
  let strengthScore = 0;

  if (password.length >= minLength) strengthScore++;
  if (hasUpperCase) strengthScore++;
  if (hasLowerCase) strengthScore++;
  if (hasNumbers) strengthScore++;
  if (hasSpecialChar) strengthScore++;

  if (strengthScore >= 4) strength = 'strong';
  else if (strengthScore >= 3) strength = 'medium';

  return {
    isValid: strengthScore >= 3,
    strength,
    message: strength === 'strong' ? 'Strong password' : 'Password could be stronger',
    checks: {
      hasMinLength: password.length >= minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar,
    },
  };
};

/**
 * Validate file type
 * @param {File} file - File to validate
 * @param {string[]} allowedTypes - Array of allowed MIME types
 * @returns {boolean} True if file type is allowed
 */
export const validateFileType = (file, allowedTypes) => {
  if (!file) return false;
  return allowedTypes.includes(file.type);
};

/**
 * Validate file size
 * @param {File} file - File to validate
 * @param {number} maxSizeMB - Maximum size in megabytes
 * @returns {boolean} True if file size is within limit
 */
export const validateFileSize = (file, maxSizeMB) => {
  if (!file) return false;
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
};

/**
 * Validate credit card number (Luhn algorithm)
 * @param {string} cardNumber - Card number to validate
 * @returns {boolean} True if valid card number
 */
export const validateCreditCard = (cardNumber) => {
  if (!cardNumber) return false;
  const cleaned = cardNumber.replace(/\D/g, '');
  
  if (cleaned.length < 13 || cleaned.length > 19) return false;

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

/**
 * Validate form data object
 * @param {object} formData - Form data to validate
 * @param {object} rules - Validation rules
 * @returns {object} Validation errors object
 */
export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const rule = rules[field];
    const value = formData[field];

    if (rule.required && !validateRequired(value)) {
      errors[field] = rule.requiredMessage || 'This field is required';
      return;
    }

    if (rule.email && value && !validateEmail(value)) {
      errors[field] = rule.emailMessage || 'Invalid email address';
      return;
    }

    if (rule.phone && value && !validatePhone(value)) {
      errors[field] = rule.phoneMessage || 'Invalid phone number';
      return;
    }

    if (rule.minLength && value && !validateMinLength(value, rule.minLength)) {
      errors[field] = rule.minLengthMessage || `Minimum ${rule.minLength} characters required`;
      return;
    }

    if (rule.maxLength && value && !validateMaxLength(value, rule.maxLength)) {
      errors[field] = rule.maxLengthMessage || `Maximum ${rule.maxLength} characters allowed`;
      return;
    }

    if (rule.custom && typeof rule.custom === 'function') {
      const customError = rule.custom(value, formData);
      if (customError) {
        errors[field] = customError;
      }
    }
  });

  return errors;
};
