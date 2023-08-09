import images from "./images";

const juices = [
	{
		title: "Sunshine Splash",
		price: "$56",
		tags: "AU | Bottle",
	},
	{
		title: "Tropical Tango",
		price: "$59",
		tags: "AU | Bottle",
	},
	{
		title: "Mango Madness",
		price: "$44",
		tags: "FR | 750 ml",
	},
	{
		title: "Citrus Squeeze",
		price: "$31",
		tags: "CA | 750 ml",
	},
	{
		title: "Blueberry Breeze",
		price: "$26",
		tags: "IE | 750 ml",
	},
];

const cocktails = [
	{
		title: "Pina Colada",
		price: "$20",
		tags: "Pineapple juice | Coconut milk | soda | 30 ml",
	},
	{
		title: "Berry Sparkler",
		price: "$16",
		tags: "Mixed berry juice | lime juice | soda",
	},
	{
		title: "Sunrise Mocktail",
		price: "$10",
		tags: "Orange | Cranberry | Pineapple | syrup",
	},
	{
		title: "Virgin Mojito",
		price: "$31",
		tags: "Fresh mint leaves | Lime juice | Club soda",
	},
	{
		title: "Shirley Temple",
		price: "$26",
		tags: "Lime soda | Grenadine syrup | cherry garnish",
	},
];

const awards = [
	{
		imgUrl: images.award02,
		title: "Bib Gourmond",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award01,
		title: "Rising Star",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award05,
		title: "AA Hospitality",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award03,
		title: "Outstanding Chef",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
];

export default { juices, cocktails, awards };
