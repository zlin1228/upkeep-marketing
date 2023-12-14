import axios from 'axios';
import Cookies from "js-cookie";
const getDeviceType = () => {
	const upkeep_user_device = Cookies.get('upkeep_user_device') || localStorage.getItem('upkeep_user_device')
	if(upkeep_user_device){
		return true
	}
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		Cookies.set('upkeep_user_device', 'tablet')
		localStorage.setItem('upkeep_user_device', 'tablet')
		return "tablet";
	}
	if (
		/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
			ua
		)
	) {
		Cookies.set('upkeep_user_device', 'mobile')
		localStorage.setItem('upkeep_user_device', 'mobile')
		return "mobile";
	}
	Cookies.set('upkeep_user_device', 'desktop')
	localStorage.setItem('upkeep_user_device', 'desktop')
	return "desktop";
};
export const GetUserInfo=()=>{
	getDeviceType()
	let ip_info = localStorage.getItem('upkeep_user_ip_addr')
	let ip_info_cookie = Cookies.get('upkeep_user_ip_addr')
	if(! ip_info && !ip_info_cookie){
		axios.get('https://www.cloudflare.com/cdn-cgi/trace')
		.then(response=> {
			let infoArray = response.data.split('\n')
			if(infoArray.length>0){
				for(let i=0;i<infoArray.length;i++){
					if(infoArray[i].indexOf('ip=')>-1){
						let ip_addr = infoArray[i].substr(3)
						Cookies.set("upkeep_user_ip_addr", ip_addr);
					} else if(infoArray[i].indexOf('loc=')>-1){
						let country = infoArray[i].substr(4)
						Cookies.set("upkeep_user_country", country.toLowerCase());
					}
				}
			}
		})
		.catch(error=> {
			console.log('Request failed', error)
		});
	} else {
		if(!ip_info){
			localStorage.setItem('upkeep_user_ip_addr', ip_info_cookie)
			localStorage.setItem('upkeep_user_country', Cookies.get('upkeep_user_country'))
		}
		if(!ip_info_cookie){
			Cookies.set('upkeep_user_ip_addr', ip_info)
			Cookies.set('upkeep_user_country', localStorage.getItem('upkeep_user_country'))
		}
	}
}