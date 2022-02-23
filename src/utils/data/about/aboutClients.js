import Image from "../../../assets/person with laptop.jpg"

export const aboutClient = {
	header : `What Our Clients Say`,
	body: [
		{
			stars : 4,
			content : `
				We managed to secure a loan of over $200M with Golden
				Coin Finance and we have already applied for a 
				second one since we are almost through with 
				servicing the first. Good job guys!
			`,
			author : {
				name: `Alfred Nixon`,
				title: `C.E.O Dalton Group of Companies, USA`,
				image: {
					image: Image,
					alt: "Alfred Nixon's image"
				},
			}
		},
		{
			stars : 5,
			content : `
				The swiftness with which Operating Capital Network LLC executes 
				their bureaucracies is top notch. in less than two weeks 
				our application had been processed and the loan granted.
			`,
			author : {
				image: {
					image: Image,
					alt: "Lucy Wambui's Image"
				},
				name: `Lucy Wambui`,
				title: `Coordinator, Dreamland Mercy Network, Uganda`
			}
		},
		{
			stars : 4.5,
			content : `
				I just cant' describe enough how satisfied I was with 
				the level of professionalism I found at Operating Capital Network LLC. 
				I can't wait for my loan to be approved as I have 
				already applied and met all the requirements.
			`,
			author : {
				image: {
					image: Image,
					alt: "Daniela Ping's Image"
				},
				name: `Daniela Ping`,
				title: `C.E.O, Xing Furnitures, Hong Kong`
			}
		},
		{
			stars : 4.5,
			content : `
				I got my quick loan of $12M last year and this has helped me a 
				lot to boost my business since we have been adversely affected 
				by COVID-19. I can't be thankful enough to Operating Capital Network LLC.
			`,
			author : {
				image: {
					image: Image,
					alt: "Nahim Ahmed"
				},
				name: `Nahim Ahmed`,
				title: `Founder, NAHEM Electronics, India`
			}
		},
	]
}