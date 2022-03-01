import ListView from '@/views/ListView';
import bus from '@/utils/bus';
import store from '@/store';

export default function createListView(name) {
  return {
    name,

    async created() {
      try {
        bus.$emit('on:loading');
        const res = await store.dispatch(
          `FETCH_CATEGORY_PRD`,
          this.$route.name,
        );
        if (res.status === '200') {
          bus.$emit('off:loading');
        }
      } catch (error) {
        new Error(`fail to fetch ${error}`);
      }
    },

    // mounted() {
    //   bus.$emit('off:loading');
    // },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
