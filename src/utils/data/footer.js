import { 
	BsFacebook,
	BsTwitter,
	BsYoutube,
	BsInstagram
} from "react-icons/bs";

export const footerLeft = {
	logo : {
		logo: "LOGO HERE",
		alt: "logo alt content here"
	},
	content: `
		A3212, Grosvenor Road, London U.K
		info@goldencoinfinance.com
	`
}

export const footerRight = {
	links: [
		{
			path: "/",
			name: "Home"
		},
		{
			path: "/services",
			name: "Services"
		},
		{
			path: "/about",
			name: "About"
		},
		{
			path: "/team",
			name: "meet our team"
		},
		{
			path: "/contact",
			name: "Contact"
		},
	],
	socialMedia : [
		{
			icon: <BsTwitter/>,
			link: "https://twitter.com/?lang=en"
		},
		{
			icon: <BsYoutube/>,
			link: "https://www.instagram.com/"
		},
		{
			icon: <BsFacebook/>,
			link: "https://www.facebook.com/"
		},
		{
			icon: <BsInstagram/>,
			link: "https://www.instagram.com/"
		},
	]
}