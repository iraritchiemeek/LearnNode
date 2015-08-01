var sum = 0
for (var i = process.argv.length - 1; i >= 0; i--) {
	if (i > 1) {
		sum += Number(process.argv[i])
	}
};

console.log(sum)