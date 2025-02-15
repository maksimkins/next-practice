import { ProductProps } from '@/components/helpers/interfaces/product';
import { StoredProductProps } from '@/components/helpers/interfaces/storedProducts';
import { create } from 'zustand';

export const useProductStore = create<{
    storedProducts: StoredProductProps[];
    setProducts: (update: (prev: StoredProductProps[]) => StoredProductProps[]) => void
}>(set => (
    {
        storedProducts: [],
        setProducts: update => set(state => ({ storedProducts: update(state.storedProducts) }))
    }
))