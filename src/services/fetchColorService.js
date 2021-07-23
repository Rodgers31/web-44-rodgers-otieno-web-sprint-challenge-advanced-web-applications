import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
	return axiosWithAuth()
		.get('/colors')
		.then((res) => {
			console.log('getting colors:', res);
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export default fetchColorService;
