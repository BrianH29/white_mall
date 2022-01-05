import ListView from '@/views/ListView';

export default function createListView(name) {
  return {
    name,
    render(createElement) {
      return createElement(ListView);
    },
  };
}
