function getModelsFromMake(allMakes, formMake, formModel, includeOther = true) {
	// if includeOther, add it to the makes field
	includeOther && formMake.add(new Option("Other", "Other"));

	formMake.addEventListener(
		"change",
		function () {
			const makeId = parseInt(this.value);

			if (this.value == "Other" && includeOther) {
				clearField(formModel);

				formModel.add(new Option("Other", "Other"));
			} else {
				clearField(formModel);

				// map through available models
				const selectedMake = allMakes.data.filter(m => {
					return m.id === makeId;
				})
				selectedMake[0].models.map((m) => {
					let newOption = new Option(m.title, m.id);
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