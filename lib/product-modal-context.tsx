// Use client component to allow hooks
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from './products';

interface ProductModalContextValue {
  openProduct: Product | null;
  openModal: (product: Product) => void;
  closeModal: () => void;
}

const ProductModalContext = createContext<ProductModalContextValue | undefined>(undefined);

export const ProductModalProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const [openProduct, setOpenProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setOpenProduct(product);
  };

  const closeModal = () => {
    setOpenProduct(null);
  };

  return (
    <ProductModalContext.Provider value={{ openProduct, openModal, closeModal }}>
      {children}
    </ProductModalContext.Provider>
  );
};

export const useProductModal = () => {
  const context = useContext(ProductModalContext);
  if (context === undefined) {
    throw new Error('useProductModal must be used within a ProductModalProvider');
  }
  return context;
};