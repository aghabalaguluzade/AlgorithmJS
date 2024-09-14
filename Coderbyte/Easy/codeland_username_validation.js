const CodelandUsernameValidation = (str) => {
	 if(str.length >= 4 && str.length <= 25 && (/[a-zA-Z]/).test(str.slice(0,1)) /* alternative str.charAt(0) */ && (/^\w+$/).test(str) && (/[a-zA-Z0-9]/).test(str.slice(-1)) /* alternative str.charAt(str.length -1) */) {
		return true;
	}
	return false;
}

console.log(CodelandUsernameValidation());