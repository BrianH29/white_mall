import ListView from '@/views/ListView';
import bus from '@/utils/bus';

export default function createListView(name) {
  return {
    name,
    mounted() {
      bus.$emit('off:loading');
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
