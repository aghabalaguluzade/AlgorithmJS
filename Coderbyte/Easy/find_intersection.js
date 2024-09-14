const FindIntersection = (strArr) => {
	const list1 = strArr[0].split(',').map(Number);
	const list2 = strArr[1].split(',').map(Number);
	
	const intersection = list1.filter(value => list2.includes(value));
	
	if(intersection.length === 0) {
		return false;
	};
	
	return intersection.join(',');
	
};

console.log(FindIntersection());