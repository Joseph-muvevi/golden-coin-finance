import { 
	BsFacebook,
	BsTwitter,
	BsYoutube,
	BsInstagram,
	BsWhatsapp
} from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

export const getInTouch = {
	header : "Get in Touch",
	items : [
		{
			icon: <FaMapMarkerAlt/>,
			text: "A3212, Grosvenor Road, London U.K"
		},
		{
			icon: <BsWhatsapp/>,
			text: "A3212, Grosvenor Road, London U.K"
		},
	]
}

export const socialMedia = {
	header : "Follow us",
	icons : [
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