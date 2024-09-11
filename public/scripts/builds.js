function getModelsFromMake(allModels, formMake, formModel, includeOther = true, slug = false) {
	// if includeOther, add it to the makes field
	includeOther && formMake.add(new Option("Other", "Other"));

	formMake.addEventListener(
		"change",
		function () {
			if (this.value == "Other" && includeOther) {
				clearField(formModel);

				formModel.add(new Option("Other", "Other"));
			} else {
				clearField(formModel);

				// map through available models
				allModels.map((i) => {
					if (i.data.make.id.includes(this.value.toLowerCase())) {
						let newOption = new Option(i.data.title, slug ? i.data.slug : i.data.title);
						formModel.add(newOption);
					}
				});

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