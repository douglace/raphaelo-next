export const WHATSAPP_URL = 'https://wa.me/237690909076?text=Bonjour%2C%20je%20souhaite%20commander%20une%20pizza';
export const WHATSAPP_DOUALA = 'tel:+237695762814';
export const WHATSAPP_YAOUNDE = 'tel:+237690909076';
export const EMAIL = 'raphaelopizza237@gmail.com';

export const PIZZAS = [
  { name: 'New York Cheese', type: 'CLASSIC', price: '2 500 — 6 500', ingredients: { fr: 'Sauce Tomate, Herbes, Fromage', en: 'Tomato Sauce, Herbs, Mozzarella' }, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80' },
  { name: 'Azzura Cheese', type: 'CLASSIC', price: '2 500 — 6 500', ingredients: { fr: 'Sauce Tomate, Saucisson, Fromage', en: 'Sausage, Tomato Sauce, Cheese' }, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80' },
  { name: 'Hawaienne', type: 'CLASSIC', price: '2 500 — 6 500', ingredients: { fr: 'Jambon, Ananas, Sauce Tomate, Fromage', en: 'Ham, Pineapple, Tomato Sauce, Cheese' }, image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&q=80' },
  { name: 'Margherita', type: 'PREMIUM', price: '4 000 — 8 000', ingredients: { fr: 'Sauce Tomate, Olives Noirs, Fromage', en: 'Black Olives, Tomato Sauce, Cheese' }, image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&q=80' },
  { name: 'Regina', type: 'PREMIUM', price: '4 500 — 8 000', ingredients: { fr: 'Jambon, Champignon, Sauce Tomate, Fromage', en: 'Ham, Mushroom, Tomato Sauce, Cheese' }, image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&q=80' },
  { name: 'Belle Paysanne', type: 'PREMIUM', price: '4 500 — 9 000', ingredients: { fr: 'Lardon, Jambon, Champignon, Fromage', en: 'Bacon, Ham, Mushroom, Cheese' }, image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80' },
  { name: 'Suisse', type: 'PREMIUM', price: '4 500 — 8 000', ingredients: { fr: 'Saucisson, Champignon, Crème Fraîche, Fromage', en: 'Sausage, Mushroom, Cream, Cheese' }, image: 'https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=800&q=80' },
  { name: 'All American', type: 'SIGNATURE', price: '6 000 — 10 500', ingredients: { fr: 'Poulet, Viande Hachée, Jambon, Crème, Fromage', en: 'Chicken, Minced Meat, Ham, Cream, Cheese' }, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80' },
  { name: 'Sicilia', type: 'SIGNATURE', price: '5 000 — 8 500', ingredients: { fr: 'Sardines, Maïs Doux, Crème Fraîche, Fromage', en: 'Sardines, Sweet Corn, Cream, Cheese' }, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80' },
  { name: 'Mexicaine', type: 'SIGNATURE', price: '6 000 — 10 500', ingredients: { fr: 'Viande Hachée, Maïs Doux, Crème Fraîche, Fromage', en: 'Minced Meat, Sweet Corn, Cream, Cheese' }, image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80' },
] as const;

export const LOCATIONS = [
  { name: 'EKIE', city: 'Yaoundé', rating: 4.6, reviews: 179, services: ['Dine-in', 'Pickup', 'Delivery'], featured: true },
  { name: 'Awaé Escalier', city: 'Yaoundé', rating: 4.4, reviews: 340, services: ['Drive-through', 'Delivery'], featured: false },
  { name: 'Vogt', city: 'Yaoundé', rating: 4.3, services: ['Dine-in', 'Takeaway'], featured: false },
  { name: 'Simbock', city: 'Yaoundé', rating: 4.4, services: ['Dine-in', 'Takeaway'], featured: false },
  { name: 'Douala', city: 'Douala', rating: 4.5, phone: '695 762 814', services: ['Dine-in', 'Delivery'], featured: false },
] as const;
