export const categoryStructure = {
  'Flavoured Coffee': [],
  'Plain Coffee': ['Spray Dried', 'Agglomerated', 'Freeze Dried'],
  'Premix': {
    'Tea Premix': ['Cafe Premix', 'Vending Machine Premix'],
    'Coffee Premix': ['Cafe Premix', 'Vending Machine Premix']
  },
  'Coffee Beans': {
    'Green Beans': [],
    'Roasted Beans': ['Arabia Cherry', 'Arabia Plantation']
  },
  'NDC': [],
  'Tea': {
    'Instant Tea': ['Block', 'Green'],
    'Iced Tea': ['Flavours'],
    'Amrutuleya': ['Plain', 'Puneri', 'Jaggery', 'Chai-Masala', 'Kesar', 'Elaichi', 'Basundi'],
    'CTC Tea': ['BOP', 'BP', 'OF', 'PD', 'RD', 'D(Dust)'],
    'Flavoured Tea': [],
    'Tea Extract': ['Black', 'Green']
  },
  'Crystal Coffee': []
};

export const products = [
  {
    id: 1,
    name: 'Premium Vanilla Coffee',
    category: 'Flavoured Coffee',
    description: 'Rich vanilla-flavored coffee blend with aromatic beans',
    detailedDescription: 'Our Premium Vanilla Coffee combines the finest Arabica beans with natural vanilla extracts to create a smooth, aromatic blend perfect for cafes and restaurants. Each batch is carefully roasted to bring out the perfect balance of coffee richness and vanilla sweetness.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    features: ['100% Arabica Beans', 'Natural Vanilla Extract', 'Medium Roast', 'Bulk Packaging Available'],
    rating: 4.9,
    price: 'From ₹450/kg',
    specifications: {
      'Bean Type': '100% Arabica',
      'Roast Level': 'Medium',
      'Flavor Profile': 'Vanilla, Smooth',
      'Packaging': '1kg, 5kg, 25kg',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 2,
    name: 'Spray Dried Coffee',
    category: 'Plain Coffee',
    subcategory: 'Spray Dried',
    description: 'High-quality spray dried instant coffee powder',
    detailedDescription: 'Our Spray Dried Coffee is produced using advanced spray drying technology to preserve the natural coffee aroma and flavor. Perfect for instant coffee preparations and industrial applications.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg',
    features: ['Instant Solubility', 'Rich Aroma', 'Long Shelf Life', 'Industrial Grade'],
    rating: 4.8,
    price: 'From ₹380/kg',
    specifications: {
      'Process': 'Spray Dried',
      'Moisture Content': 'Max 5%',
      'Solubility': '99.5%',
      'Packaging': '25kg bags',
      'Shelf Life': '24 months'
    }
  },
  {
    id: 3,
    name: 'Agglomerated Coffee',
    category: 'Plain Coffee',
    subcategory: 'Agglomerated',
    description: 'Premium agglomerated instant coffee with enhanced solubility',
    detailedDescription: 'Our Agglomerated Coffee undergoes a special agglomeration process that creates larger, more porous granules for superior solubility and flavor release. Ideal for premium instant coffee products.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg',
    features: ['Enhanced Solubility', 'Premium Quality', 'Uniform Granules', 'Superior Flavor'],
    rating: 4.7,
    price: 'From ₹420/kg',
    specifications: {
      'Process': 'Agglomerated',
      'Granule Size': '0.5-2.0mm',
      'Bulk Density': '0.35-0.45 g/ml',
      'Packaging': '25kg bags',
      'Shelf Life': '24 months'
    }
  },
  {
    id: 4,
    name: 'Freeze Dried Coffee',
    category: 'Plain Coffee',
    subcategory: 'Freeze Dried',
    description: 'Premium freeze-dried coffee with exceptional flavor retention',
    detailedDescription: 'Our Freeze Dried Coffee is processed using advanced freeze-drying technology that preserves the original coffee flavor and aroma better than any other method. This premium product offers the closest taste to freshly brewed coffee.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg',
    features: ['Superior Flavor', 'Freeze Dried Process', 'Premium Quality', 'Excellent Aroma'],
    rating: 4.9,
    price: 'From ₹650/kg',
    specifications: {
      'Process': 'Freeze Dried',
      'Moisture Content': 'Max 4%',
      'Flavor Retention': '95%+',
      'Packaging': '10kg, 25kg',
      'Shelf Life': '36 months'
    }
  },
  {
    id: 5,
    name: 'Tea Cafe Premix',
    category: 'Premix',
    subcategory: 'Tea Premix',
    subSubcategory: 'Cafe Premix',
    description: '3-in-1 tea premix for cafes and restaurants',
    detailedDescription: 'Our Tea Cafe Premix is a perfectly balanced blend of tea, sugar, and creamer designed specifically for commercial use. Just add hot water for a consistent, delicious cup every time.',
    image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg',
    features: ['3-in-1 Formula', 'Consistent Quality', 'Easy Preparation', 'Commercial Grade'],
    rating: 4.6,
    price: 'From ₹320/kg',
    specifications: {
      'Components': 'Tea, Sugar, Creamer',
      'Preparation': 'Just add hot water',
      'Serving Size': '15-20g per cup',
      'Packaging': '1kg, 25kg',
      'Shelf Life': '18 months'
    }
  },
  {
    id: 6,
    name: 'Coffee Vending Machine Premix',
    category: 'Premix',
    subcategory: 'Coffee Premix',
    subSubcategory: 'Vending Machine Premix',
    description: 'Specially formulated coffee premix for vending machines',
    detailedDescription: 'Our Coffee Vending Machine Premix is engineered for optimal performance in automatic vending machines. It dissolves completely and consistently, ensuring every cup meets quality standards.',
    image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg',
    features: ['Vending Optimized', 'Complete Dissolution', 'Consistent Taste', 'Machine Compatible'],
    rating: 4.5,
    price: 'From ₹280/kg',
    specifications: {
      'Formulation': 'Vending Machine Specific',
      'Dissolution Time': '< 30 seconds',
      'Particle Size': 'Fine mesh',
      'Packaging': '25kg bags',
      'Shelf Life': '18 months'
    }
  },
  {
    id: 7,
    name: 'Premium Green Coffee Beans',
    category: 'Coffee Beans',
    subcategory: 'Green Beans',
    description: 'Premium green coffee beans for roasting',
    detailedDescription: 'Sourced from the finest coffee estates, our Premium Green Coffee Beans are perfect for custom roasting. High-quality beans with excellent flavor potential.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
    features: ['Premium Grade', 'Custom Roasting', 'High Quality', 'Traceable Source'],
    rating: 4.8,
    price: 'From ₹450/kg',
    specifications: {
      'Bean Type': '100% Arabica',
      'Grade': 'AA/AAA',
      'Processing': 'Washed/Natural',
      'Packaging': '60kg jute bags',
      'Shelf Life': '12 months'
    }
  },
  {
    id: 8,
    name: 'Arabia Cherry Roasted Beans',
    category: 'Coffee Beans',
    subcategory: 'Roasted Beans',
    subSubcategory: 'Arabia Cherry',
    description: 'Premium Arabia Cherry roasted coffee beans',
    detailedDescription: 'Our Arabia Cherry roasted beans offer exceptional flavor with fruity and wine-like characteristics. Perfect for specialty coffee applications.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
    features: ['Arabia Cherry Variety', 'Fruity Notes', 'Premium Roast', 'Specialty Grade'],
    rating: 4.9,
    price: 'From ₹650/kg',
    specifications: {
      'Bean Type': 'Arabia Cherry',
      'Roast Level': 'Medium',
      'Flavor Profile': 'Fruity, Wine-like',
      'Packaging': '1kg, 5kg bags',
      'Shelf Life': '6 months'
    }
  },
  {
    id: 9,
    name: 'NDC Milk Powder',
    category: 'Milk Powder',
    subcategory: 'NDC',
    description: 'Non-Dairy Creamer powder for coffee applications',
    detailedDescription: 'Our NDC Milk Powder is a high-quality non-dairy creamer specifically formulated for coffee applications. It provides excellent whitening, smooth texture, and enhanced mouthfeel to coffee beverages.',
    image: 'https://images.pexels.com/photos/4117625/pexels-photo-4117625.jpeg',
    features: ['Non-Dairy', 'Excellent Whitening', 'Smooth Texture', 'Coffee Optimized'],
    rating: 4.4,
    price: 'From ₹240/kg',
    specifications: {
      'Type': 'Non-Dairy Creamer',
      'Fat Content': '28-32%',
      'Protein': '2-4%',
      'Packaging': '25kg bags',
      'Shelf Life': '24 months'
    }
  },
  {
    id: 10,
    name: 'Instant Tea Block',
    category: 'Tea',
    subcategory: 'Instant Tea',
    subSubcategory: 'Block',
    description: 'High-quality instant tea in block form',
    detailedDescription: 'Our Instant Tea Block provides rich tea flavor in a convenient block format. Perfect for commercial tea preparations.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    features: ['Instant Preparation', 'Rich Flavor', 'Block Format', 'Commercial Grade'],
    rating: 4.7,
    price: 'From ₹180/kg',
    specifications: {
      'Form': 'Block',
      'Solubility': 'Instant',
      'Caffeine': '40-50mg per cup',
      'Packaging': '5kg, 20kg blocks',
      'Shelf Life': '24 months'
    }
  },
  {
    id: 11,
    name: 'Amrutuleya Puneri Tea',
    category: 'Tea',
    subcategory: 'Amrutuleya',
    subSubcategory: 'Puneri',
    description: 'Traditional Puneri style Amrutuleya tea blend',
    detailedDescription: 'Our Amrutuleya Puneri Tea is a traditional blend that captures the authentic taste of Pune-style tea. Rich in flavor and aroma.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    features: ['Traditional Recipe', 'Puneri Style', 'Rich Aroma', 'Authentic Taste'],
    rating: 4.8,
    price: 'From ₹220/kg',
    specifications: {
      'Style': 'Puneri Traditional',
      'Blend': 'Tea with spices',
      'Origin': 'Maharashtra',
      'Packaging': '1kg, 10kg',
      'Shelf Life': '18 months'
    }
  },
  {
    id: 12,
    name: 'CTC Tea BOP Grade',
    category: 'Tea',
    subcategory: 'CTC Tea',
    subSubcategory: 'BOP',
    description: 'Premium CTC Tea Broken Orange Pekoe grade',
    detailedDescription: 'Our CTC Tea BOP Grade offers superior quality with excellent color and flavor. Perfect for commercial tea service.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    features: ['BOP Grade', 'Strong Color', 'Rich Flavor', 'Premium Quality'],
    rating: 4.6,
    price: 'From ₹200/kg',
    specifications: {
      'Grade': 'BOP (Broken Orange Pekoe)',
      'Process': 'CTC',
      'Color': 'Strong',
      'Packaging': '20kg boxes',
      'Shelf Life': '24 months'
    }
  },
  {
    id: 13,
    name: 'Crystal Coffee',
    category: 'Crystal Coffee',
    description: 'Revolutionary crystal coffee with enhanced clarity and taste',
    detailedDescription: 'Our new Crystal Coffee represents a breakthrough in coffee processing technology. Using advanced crystallization techniques, we create coffee crystals that dissolve instantly while maintaining exceptional clarity and pure coffee taste.',
    image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg',
    features: ['Crystal Clear', 'Instant Dissolution', 'Pure Taste', 'Innovative Technology'],
    rating: 4.9,
    price: 'From ₹580/kg',
    isNew: true,
    specifications: {
      'Process': 'Advanced Crystallization',
      'Clarity': 'Crystal Clear',
      'Dissolution': 'Instant',
      'Packaging': '500g, 5kg',
      'Shelf Life': '24 months'
    }
  },
];

export const categories = Object.keys(categoryStructure);

// Helper function to flatten nested category structure
export const getFlatCategoryStructure = () => {
  const flatStructure = {};
  
  Object.keys(categoryStructure).forEach(category => {
    const subcategories = categoryStructure[category];
    
    if (Array.isArray(subcategories)) {
      flatStructure[category] = subcategories;
    } else if (typeof subcategories === 'object') {
      flatStructure[category] = Object.keys(subcategories);
      
      // Add sub-subcategories
      Object.keys(subcategories).forEach(subcat => {
        if (Array.isArray(subcategories[subcat])) {
          flatStructure[`${category}-${subcat}`] = subcategories[subcat];
        }
      });
    } else {
      flatStructure[category] = [];
    }
  });
  
  return flatStructure;
};

// API-like functions
export const getProducts = () => products;
export const getCategories = () => categories;
export const getCategoryStructure = () => categoryStructure;
export const getProductsByCategory = (category) => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};
export const getProductsBySubcategory = (subcategory) => {
  return products.filter(product => product.subcategory === subcategory);
};
export const searchProducts = (searchTerm) => {
  if (!searchTerm) return products;
  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm.toLowerCase()))
  );
};