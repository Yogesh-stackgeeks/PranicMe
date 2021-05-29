import validator from 'is_js';

const checkEmpty = (val, key) => {
	if (validator.empty(val)) {
		return `${key}`;
	} else {
		return '';
	}
};

const checkMinLength = (val, minLength, key) => {
	if (val.trim().length < minLength) {
		return `Please enter valid ${key}`;
	} else {
		return '';
	}
};

const checkAlpbhaBetic = (name) => {
	const checkAlpha = /^(?:[A-Za-z]+)$/.test(name)
	console.log("check alphat,", checkAlpha)
	if (!checkAlpha) {
		return `First name & Last name should be alphabetic e.g(A-z).`
	} else {
		return '';
	}
}

export default function (data) {
	let error = '';
	const {
		firstName,
		lastName,
		email,
		phoneNumber,
		streetName,
		zipCode,
		location,
		password,
		confirmPassword,
		thumbnail,
		new_password,
		otp,
		comment,
		selectedTime
	} = data;

	console.log(data,'the data value')
	if (thumbnail !== undefined) {
		let emptyValidationText = checkEmpty(thumbnail, 'Please select a profile');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}

	}

	if (firstName !== undefined) {
		let emptyValidationText = checkEmpty(firstName, 'Please enter first name');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(firstName, 1, 'Name');
			if (minLengthValidation !== '') {
				return minLengthValidation;
			}
		}
	}

	if (lastName !== undefined) {
		let emptyValidationText = checkEmpty(lastName, 'Please enter last name');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(lastName, 1, 'Name');
			if (minLengthValidation !== '') {
				return minLengthValidation;
			}
		}
	}

	if (firstName !== undefined) {
		let alphabetical = checkAlpbhaBetic(firstName.trim())
		if (alphabetical !== '') {
			return alphabetical
		}
	}
	if (lastName !== undefined) {
		let alphabetical = checkAlpbhaBetic(lastName.trim())
		if (alphabetical !== '') {
			return alphabetical
		}
	}


	if (email !== undefined) {
		let emptyValidationText = checkEmpty(email, 'Please enter email');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			if (!validator.email(email)) {
				return 'Please enter valid email';
			}
		}
	}

	if (phoneNumber !== undefined) {
		let emptyValidationText = checkEmpty(phoneNumber, 'Please enter phone number');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
		if (!/^[0][1-9]$|^[1-9]\d{8,10}$/.test(phoneNumber)) {
			return 'Please enter valid mobile number';
		}
	}
	if (selectedTime !== undefined) {
		let emptyValidationText = checkEmpty(selectedTime, 'Please select time');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
	}

	

	if (streetName !== undefined) {
		let emptyValidationText = checkEmpty(streetName, 'Please enter street name');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
	}

	if (zipCode !== undefined) {
		let emptyValidationText = checkEmpty(zipCode, 'Please enter zip code');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
	}

	if (location !== undefined) {
		let emptyValidationText = checkEmpty(location, 'Please enter location');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
	}


	if (password !== undefined) {
		let emptyValidationText = checkEmpty(password, 'Please enter password');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(password, 6, 'password');
			if (minLengthValidation !== '') {
				if (confirmPassword != undefined) {
					return "Password requires minimum 6 characters"
				}
				return "Password is incorrect";
			}
		}
	}

	if (new_password !== undefined) {
		let emptyValidationText = checkEmpty(new_password, 'new_password');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
	}

	if (confirmPassword !== undefined) {
		let emptyValidationText = checkEmpty(confirmPassword, 'Please confirm your password');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
		if (new_password) {
			if (confirmPassword != new_password) {
				return "New password and confirm Password didn't matched"
			}
		} else {
			if (confirmPassword != password || new_password) {
				return "Password and confirm Password didn't matched"
			}
		}

	}


	if (otp !== undefined) {
		let emptyValidationText = checkEmpty(otp, 'Please enter your otp');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
	}

	if (comment !== undefined) {
		let emptyValidationText = checkEmpty(comment, 'Please enter your comment');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
	}


	return '';
}
