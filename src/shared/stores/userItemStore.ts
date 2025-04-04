import { create } from 'zustand';
import { items } from '../../entities/items';

const useItemStore = create<{
  hotItems: HotItem[];
  newItems: HotItem[];
  fetchItems: () => Promise<void>;
}>((set) => ({
  hotItems: [],
  newItems: [],
  fetchItems: async () => {
    // const response = await fetch('https://api-sample.test/limit=5');
    // const { popular, new } = response.json();
    set({
      hotItems: items.hotItems,
      newItems: items.newItems
    })
  }
}));

export default useItemStore;