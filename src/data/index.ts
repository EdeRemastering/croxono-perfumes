import { ladyPerfumes } from './lady-perfumes';
import { gentlemanPerfumes } from './gentlemen-perfumes';
import { arabicPerfumes } from './arabic-perfumes';

// Exportar todos los perfumes organizados por categorías
export { ladyPerfumes } from './lady-perfumes';
export { gentlemanPerfumes } from './gentlemen-perfumes';
export { arabicPerfumes } from './arabic-perfumes';

// Exportar interfaces
export type { LadyPerfume } from './lady-perfumes';
export type { GentlemanPerfume } from './gentlemen-perfumes';
export type { ArabicPerfume } from './arabic-perfumes';

// Función para obtener todos los perfumes combinados
export const getAllPerfumes = () => {
  return [
    ...ladyPerfumes.map(perfume => ({ ...perfume, category: 'Mujeres' })),
    ...gentlemanPerfumes.map(perfume => ({ ...perfume, category: 'Hombres' })),
    ...arabicPerfumes.map(perfume => ({ 
      ...perfume, 
      category: perfume.type === 'Femenino' ? 'Mujeres' : 
                perfume.type === 'Masculino' ? 'Hombres' : 'Unisex' 
    }))
  ];
};

// Función para obtener perfumes por categoría
export const getPerfumesByCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'mujeres':
    case 'damas':
    case 'lady':
      return [
        ...ladyPerfumes,
        ...arabicPerfumes.filter(perfume => perfume.type === 'Femenino')
      ];
    case 'hombres':
    case 'caballeros':
    case 'gentlemen':
      return [
        ...gentlemanPerfumes,
        ...arabicPerfumes.filter(perfume => perfume.type === 'Masculino')
      ];
    case 'unisex':
    case 'arabic':
    case 'árabe':
      return arabicPerfumes.filter(perfume => perfume.type === 'Unisex');
    default:
      return getAllPerfumes();
  }
};

// Estadísticas de perfumes
export const getPerfumeStats = () => {
  const allPerfumes = getAllPerfumes();
  return {
    total: allPerfumes.length,
    ladies: ladyPerfumes.length,
    gentlemen: gentlemanPerfumes.length,
    arabic: arabicPerfumes.length,
    categories: {
      mujeres: allPerfumes.filter(p => p.category === 'Mujeres').length,
      hombres: allPerfumes.filter(p => p.category === 'Hombres').length,
      unisex: allPerfumes.filter(p => p.category === 'Unisex').length,
    }
  };
}; 