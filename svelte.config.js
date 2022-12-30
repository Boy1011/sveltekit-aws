//import adapter from '@sveltejs/adapter-auto';

///** @type {import('@sveltejs/kit').Config} */
//const config = {
//	kit: {
//		adapter: adapter()
//	}
//};

//export default config;

//awd amplify adapter
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
  },
};

export default config;
