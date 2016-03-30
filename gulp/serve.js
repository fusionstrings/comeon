import {create} from 'browser-sync';

const {init, reload} = create();

export default function (){
	init({
		server: './',
		logPrefix: 'Comeon'
	});
}