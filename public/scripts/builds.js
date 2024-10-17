function getModelsFromMake(allMakes, allModels, formMake, formModel, includeOther = true) {
	// if includeOther, add it to the makes field
	includeOther && formMake.add(new Option("Other", "Other"));

	formMake.addEventListener(
		"change",
		function () {
			const makeId = this.value;

			if (this.value == "Other" && includeOther) {
				clearField(formModel);

				formModel.add(new Option("Other", "Other"));
			} else {
				clearField(formModel);

				// map through available models
				const selectedMake = allMakes.filter(m => {
					return m.data.id === makeId;
				})
				const filteredModels = allModels.filter(m => {
					//console.log(m)
					return m.data.make.slug === makeId;
				})

				filteredModels.map((m) => {
					console.log(m)
					let newOption = new Option(m.data.title, m.id);
					formModel.add(newOption);
				})

				includeOther && formModel.add(new Option("Other", "Other"));
				formModel.selectedIndex = 0;
			}
		},
		false,
	);
}

// clear a select box
function clearField(field) {
	while (field.options.length > 0) {
		field.remove(0);
	}
}