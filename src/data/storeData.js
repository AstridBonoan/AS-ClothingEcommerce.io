export const navItems = [
  { label: 'Women', slug: 'women' },
  { label: 'Men', slug: 'men' },
  { label: 'Juniors', slug: 'juniors' },
  { label: 'Baby & Kids', slug: 'baby-kids' },
  { label: 'Shoes & Accessories', slug: 'shoes-accessories' },
  { label: 'Beauty', slug: 'beauty' },
  { label: 'Home', slug: 'home' },
  { label: 'Sale', slug: 'sale' },
]

export const homeHero = {
  eyebrow: "Spring Event | This Week's Deals",
  title: 'Fresh picks for every aisle in your life.',
  subtitle:
    'Shop new arrivals, seasonal favorites, and budget-friendly bundles across fashion, beauty, and home.',
  ctaPrimary: { text: 'Shop New Arrivals', href: '/department/women' },
  ctaSecondary: { text: 'Explore Sale', href: '/department/sale' },
  image:
    'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=80',
}

export const departments = [
  {
    name: 'Women',
    slug: 'women',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Workwear, dresses, denim, and effortless daily staples.',
  },
  {
    name: 'Men',
    slug: 'men',
    image:
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Polished layers, elevated basics, and active essentials.',
  },
  {
    name: 'Juniors',
    slug: 'juniors',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Trend-led fits and graphics designed for everyday style.',
  },
  {
    name: 'Baby & Kids',
    slug: 'baby-kids',
    image:
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Soft sets, school-ready outfits, and playful accessories.',
  },
  {
    name: 'Shoes & Accessories',
    slug: 'shoes-accessories',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Finish every look with bags, sneakers, and statement details.',
  },
  {
    name: 'Beauty',
    slug: 'beauty',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Skincare, makeup, and wellness picks for your routine.',
  },
  {
    name: 'Home',
    slug: 'home',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Decor, kitchen upgrades, and modern home essentials.',
  },
  {
    name: 'Sale',
    slug: 'sale',
    image:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Limited-time markdowns across every department.',
  },
]

export const promoTiles = [
  {
    title: 'Flash Sale',
    subtitle: 'Up to 60% off select styles',
    href: '/department/sale',
    image:
      'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Mother’s Day Gifts',
    subtitle: 'Thoughtful picks ready to ship',
    href: '/department/beauty',
    image:
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Everyday Denim',
    subtitle: 'The newest fits for the season',
    href: '/department/women',
    image:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Home Refresh',
    subtitle: 'Cozy accents from room to room',
    href: '/department/home',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80',
  },
]

export const departmentContent = {
  women: {
    spotlight: 'Summer Linen Edit',
    categories: ['Dresses', 'Workwear', 'Denim', 'Shoes'],
    products: [
      { name: 'Belted Linen Blazer', price: '$64.99', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Striped Midi Dress', price: '$49.99', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80' },
      { name: 'Wide-Leg Cropped Denim', price: '$42.00', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  men: {
    spotlight: 'Smart Casual Layers',
    categories: ['Shirts', 'Polos', 'Chinos', 'Sneakers'],
    products: [
      { name: 'Classic Oxford Shirt', price: '$34.99', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
      { name: 'Stretch Chino Pant', price: '$45.00', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80' },
      { name: 'Weekend Crew Sweatshirt', price: '$39.99', image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  juniors: {
    spotlight: 'Campus Trend Drop',
    categories: ['Graphics', 'Sets', 'Denim', 'Accessories'],
    products: [
      { name: 'Boxy Graphic Tee', price: '$19.99', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80' },
      { name: 'Cargo Mini Skirt', price: '$29.99', image: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=800&q=80' },
      { name: 'Oversized Zip Hoodie', price: '$37.50', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  'baby-kids': {
    spotlight: 'Playtime Essentials',
    categories: ['Baby', 'Toddler', 'School', 'Shoes'],
    products: [
      { name: 'Organic Cotton Set', price: '$24.99', image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=800&q=80' },
      { name: 'Character Backpack', price: '$21.99', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80' },
      { name: 'Kids Sneaker Duo', price: '$34.99', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  'shoes-accessories': {
    spotlight: 'Statement Finishers',
    categories: ['Sneakers', 'Handbags', 'Jewelry', 'Watches'],
    products: [
      { name: 'Everyday White Sneaker', price: '$52.00', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80' },
      { name: 'Convertible Crossbody', price: '$39.99', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80' },
      { name: 'Layered Gold Necklace', price: '$18.50', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  beauty: {
    spotlight: 'Glow Routine',
    categories: ['Skincare', 'Makeup', 'Fragrance', 'Wellness'],
    products: [
      { name: 'Hydration Starter Kit', price: '$28.99', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Tinted Lip & Cheek Duo', price: '$16.99', image: 'https://images.unsplash.com/photo-1583241800698-5b6bbf88f045?auto=format&fit=crop&w=800&q=80' },
      { name: 'Botanical Perfume Mist', price: '$22.00', image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  home: {
    spotlight: 'Modern Home Refresh',
    categories: ['Living Room', 'Kitchen', 'Bedroom', 'Bath'],
    products: [
      { name: 'Textured Throw Blanket', price: '$31.99', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80' },
      { name: 'Stoneware Dinner Set', price: '$48.00', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80' },
      { name: 'Glass Vase Pair', price: '$26.50', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80' },
    ],
  },
  sale: {
    spotlight: 'Clearance Event',
    categories: ['Under $20', 'Under $40', 'Bundle Deals', 'Last Chance'],
    products: [
      { name: '2-Pack Essential Tees', price: '$15.99', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
      { name: 'Weekend Tote Bag', price: '$14.50', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80' },
      { name: 'Home Decor Bundle', price: '$19.99', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80' },
    ],
  },
}

export const supplementalProducts = [
  {
    name: 'Member Favorite Tee',
    price: '$19.99',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Signature Sneaker',
    price: '$54.00',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Everyday Crossbody',
    price: '$37.99',
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Home Comfort Throw',
    price: '$27.50',
    image:
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Hydrating Essentials Kit',
    price: '$24.99',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Seasonal Style Bundle',
    price: '$44.99',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
  },
]
