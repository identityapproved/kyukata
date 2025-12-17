// https://www.codewars.com/kata/525c65e51bf619685c000059

/* Pete likes to bake some cakes.He has some recipes and ingredients.Unfortunately he is not good in maths.Can you help him to find out, how many cakes he could bake considering his recipes ?

Write a function cakes(), which takes the recipe(object) and the available ingredients(also an object) and returns the maximum number of cakes Pete can bake(integer).For simplicity there are no units for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).Ingredients that are not present in the objects, can be considered as 0. */

/* function cakes(recipe, available) {
	let counts = null;
	for (const ingredient in recipe) {
		const recipeAmount = recipe[ingredient];
		if (!available[ingredient]) {
			return 0
		} else if (Object.keys(available).includes(ingredient)) {
			const howMany = Math.floor(available[ingredient] / recipeAmount)

			if (counts === null) {
				counts = howMany
			} else if (howMany < counts) {
				counts = howMany
			}
		}
	}
	return counts
} */

/* function cakes(recipe, available) {
	let numCakes;
	for (const ingredient in recipe) {
		if (available[ingredient]) {
			const recipeAmount = recipe[ingredient];
			const availableAmount = available[ingredient];
			const possibleNumCakes = Math.floor(availableAmount / recipeAmount)
			if (!numCakes || possibleNumCakes < numCakes) {
				numCakes = possibleNumCakes
			}
			if (numCakes === 0) return 0
		}
		else {
			return 0
		}
	}
	return numCakes
} */

/* function cakes(recipe, available) {
	return Object.keys(recipe).reduce((numCakes, ingredient) => {
		if (numCakes && available[ingredient]) {
			const recipeAmount = recipe[ingredient];
			const availableAmount = available[ingredient];
			const possibleNumCakes = Math.floor(availableAmount / recipeAmount)
			if (possibleNumCakes < numCakes) {
				numCakes = possibleNumCakes
			}
			return numCakes
		} else {
			return 0
		}

	}, Infinity)

} */

// clever
const cakes = (needs, has) => Math.min(
	...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)


// must return 2
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }))
// must return 0
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))

// must return 1
console.log(cakes({ crumbles: 5, nuts: 5, sugar: 5, cream: 4 }, {
	flour: 17,
	eggs: 17,
	oil: 10,
	milk: 20,
	apples: 18,
	sugar: 13,
	cream: 4,
	pears: 11,
	butter: 18,
	nuts: 2,
	chocolate: 9,
	cocoa: 9,
	crumbles: 12
}))