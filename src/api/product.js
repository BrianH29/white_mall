import { product } from '@/api/common/instance-index';

export async function fetchPrd() {
  const apiIndex = await product.get();
  console.log('apiIndex : ', apiIndex);
  return apiIndex;
}

export async function fetchCategory() {
  return await product.get('categories');
}
