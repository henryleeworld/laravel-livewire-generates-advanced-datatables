import axios from 'axios';
import SlimSelect from 'slim-select';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.SlimSelect = SlimSelect;
