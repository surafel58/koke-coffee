export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "coffee" | "tea" | "pastry";
}

export const products: Product[] = [
  // Coffee
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    price: 120,
    description: "Premium single-origin coffee with floral and fruity notes, sourced from the birthplace of coffee.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    category: "coffee",
  },
  {
    id: "2",
    name: "Sidamo Blend",
    price: 110,
    description: "Rich and full-bodied blend from the Sidamo region with hints of chocolate and berries.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    category: "coffee",
  },
  {
    id: "3",
    name: "Koke House Special",
    price: 150,
    description: "Our signature blend crafted with the finest Ethiopian beans, a true taste of African heritage.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    category: "coffee",
  },
  {
    id: "4",
    name: "Traditional Jebena Coffee",
    price: 100,
    description: "Experience the authentic Ethiopian coffee ceremony with our traditional jebena-brewed coffee.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    category: "coffee",
  },
  {
    id: "5",
    name: "Espresso",
    price: 85,
    description: "Bold and intense single shot of pure Ethiopian coffee perfection.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80",
    category: "coffee",
  },
  {
    id: "6",
    name: "Macchiato",
    price: 95,
    description: "Espresso marked with a dollop of velvety steamed milk.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=80",
    category: "coffee",
  },
  {
    id: "7",
    name: "Cappuccino",
    price: 110,
    description: "Perfect balance of espresso, steamed milk, and creamy foam.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
    category: "coffee",
  },
  {
    id: "8",
    name: "Latte",
    price: 115,
    description: "Smooth and creamy espresso with silky steamed milk.",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80",
    category: "coffee",
  },
  // Tea & Others
  {
    id: "9",
    name: "Spiced Chai",
    price: 85,
    description: "Warming blend of black tea with aromatic African spices.",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
    category: "tea",
  },
  {
    id: "10",
    name: "Fresh Juice",
    price: 95,
    description: "Freshly squeezed seasonal fruits, bursting with natural flavors.",
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=800&q=80",
    category: "tea",
  },
  {
    id: "11",
    name: "Hot Chocolate",
    price: 100,
    description: "Rich and creamy chocolate made with premium cocoa.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80",
    category: "tea",
  },
  {
    id: "12",
    name: "Iced Coffee",
    price: 105,
    description: "Chilled Ethiopian coffee over ice, perfect for warm days.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    category: "coffee",
  },
  // Pastries
  {
    id: "13",
    name: "Chocolate Cake",
    price: 120,
    description: "Decadent layers of rich chocolate sponge with smooth ganache.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    category: "pastry",
  },
  {
    id: "14",
    name: "Croissant",
    price: 85,
    description: "Buttery, flaky layers of golden perfection, freshly baked daily.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    category: "pastry",
  },
  {
    id: "15",
    name: "Blueberry Muffin",
    price: 90,
    description: "Soft, moist muffin loaded with juicy blueberries.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80",
    category: "pastry",
  },
  {
    id: "16",
    name: "Cinnamon Roll",
    price: 95,
    description: "Warm, gooey swirl of cinnamon with sweet cream cheese glaze.",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800&q=80",
    category: "pastry",
  },
  {
    id: "17",
    name: "Cheesecake Slice",
    price: 130,
    description: "Creamy New York style cheesecake with buttery graham crust.",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80",
    category: "pastry",
  },
  {
    id: "18",
    name: "Cookies (3 pcs)",
    price: 80,
    description: "Freshly baked assorted cookies - chocolate chip, oatmeal, and butter.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    category: "pastry",
  },
  {
    id: "19",
    name: "Tiramisu",
    price: 140,
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    category: "pastry",
  },
  {
    id: "20",
    name: "Brownie",
    price: 95,
    description: "Fudgy, rich chocolate brownie with a crackly top.",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800&q=80",
    category: "pastry",
  },
];

export const siteConfig = {
  name: "Koke Coffee",
  tagline: "Timeless Roots. Contemporary Brews.",
  description: "A refined Ethiopian coffee experience in a modern, art-filled sanctuary. Where ceremony meets contemporary design.",
  location: "Jemo-1, Addis Ababa, Ethiopia",
  locationAmharic: "ጀሞ 1 / 1ኛ በር ከሩት ህንፃ ጀርባ",
  phone: "+251970777222",
  email: "hello@kokecoffee.com",
  hours: {
    weekdays: "7:00 AM - 10:00 PM",
    weekends: "8:00 AM - 11:00 PM",
  },
  social: {
    tiktok: "https://www.tiktok.com/@kokecoffee1",
    instagram: "#",
    facebook: "#",
  },
};
