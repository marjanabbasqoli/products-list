const setCookie = (name, value, days = 1) => {
	document.cookie = `${name}=${value}; max-age=${days * 24 * 60 * 60};`;
	return true;
};

const getCookie = (cookieName) => {
	const value = `; ${document.cookie}`;
	const parts = value?.split(`; ${cookieName}=`);
	if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
};

export { setCookie, getCookie };
