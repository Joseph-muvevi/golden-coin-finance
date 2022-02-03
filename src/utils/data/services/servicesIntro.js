import { BsArrowRight } from "react-icons/bs"

export const serviceIntroHeader = `
	How can we help you?
`

export const serviceIntroCards = [
	{
		header : `Financing`,
		content: `
			We offer different packages of capital loans 
			to help stimulate your business. Our loans are 
			easy to service, with a workable grace period of 
			at least two years.
			`,
		action: {
			name: `See the requirements here`,
			link: "",
			icon: <BsArrowRight/>
		}
	},
	{
		header : `Investment Banking`,
		content: `
			We offer investment banking advisory offerings 
			for mergers, acquisitions, IPOs and different 
			financial transactions, vital to the development 
			of your corporation.
		`,
		action: {
			name: `Get in touch`,
			link: ``,
			icon: <BsArrowRight/>
		}
	},
	{
		header : `Brokerage`,
		content: `
			We provide a wide variety of finance options - this 
			means you give your clients the deals they are 
			looking for.
		`,
		action: {
			name: `Get in touch`,
			link: ``,
			icon: <BsArrowRight/>
		}
	},
]