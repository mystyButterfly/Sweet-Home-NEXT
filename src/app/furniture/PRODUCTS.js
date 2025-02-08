export const PRODUCTS = [
  {
    id: 101,
    title: "Rustic Solid Wood Dining Table",
    type: "tables",
    price: 600,
    oldPrice: 700,
    bestChoice: true,
    material: "wood",
    color: "brown",
    eco: "1",
    imageSmall: "/assets/tables/t3s.jpg",
    feachers: `
Material: Solid hardwood
Dimensions: 72" L x 36" W x 30" H
Finish: Natural stain with protective sealant
Seating Capacity: Comfortably seats 6-8 people
Assembly: Some assembly required`,
    description:
      "Elevate your dining experience with our Rustic Solid Wood Dining Table. Crafted from premium natural hardwood, this table combines durability with timeless charm, making it the perfect centerpiece for family gatherings or intimate dinners. Each piece features unique grain patterns, ensuring no two tables are alike.",
    keyBenefits: `
    Handcrafted Quality: Each table is handcrafted by skilled artisans for a unique touch.
Sustainably Sourced: Made from sustainably sourced wood to support environmentally friendly practices.
Versatile Style: Fits any decor, from rustic farmhouse to modern minimalism.`,
    shippingReturn: `
    
    Free shipping on orders over $100.
Delivery within 5-7 business days.
Assembly service available for an additional fee.
Return Policy:30-day satisfaction guarantee. Full refund available if returned in original condition.`,
    imagesLarge: ["/assets/tables/t3l.jpg", "/assets/tables/t3e.jpg"],
    reviews: [
      {
        customer: "Sarah J.",
        star: 5,
        comment:
          "Absolutely in love with this table! The quality is outstanding.",
      },
      {
        customer: "John D.",
        star: 4,
        comment: "Perfect for our dining area. Highly recommend!",
      },
    ],
  },
  {
    id: 102,
    title: "Modern Glass Coffee Table",
    type: "tables",
    price: 300,
    oldPrice: 350,
    material: "wood and glass",
    color: "brown",
    eco: "0",
    imageSmall: "/assets/tables/t2s.jpg",
    feachers: `
Material: Tempered glass
Dimensions: 48" L x 24" W x 18" H
Finish: Polished edges
Assembly: No assembly required`,
    description:
      "The Modern Glass Coffee Table boasts a sleek and stylish design that enhances any living space. With its minimalist aesthetic and durable tempered glass construction, this table is perfect for showcasing decor or serving snacks during gatherings.",
    keyBenefits: `
    Sleek Design: Enhances the modern aesthetic of your living room.
Durable: Made from high-quality tempered glass for safety and resilience.
Versatile: Ideal for any decor style, from contemporary to industrial.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 3-5 business days.
Returns accepted within 14 days.`,
    imagesLarge: ["/assets/tables/t2l.jpg", "/assets/tables/t2e.jpg"],
    reviews: [
      {
        customer: "David M.",
        star: 5,
        comment: "Stylish and very sturdy. Love it!",
      },
      {
        customer: "Emily C.",
        star: 4,
        comment: "Great addition to my living room. Light and easy to clean.",
      },
    ],
  },
  {
    id: 103,
    title: "Industrial Dining Table",
    type: "tables",
    price: 700,
    oldPrice: 800,
    material: "plastic",
    color: "white",
    eco: "0",
    imageSmall: "/assets/tables/t4s.jpg",
    feachers: `
Material: Reclaimed wood and metal
Dimensions: 72" L x 36" W x 30" H
Finish: Rough texture with a protective coating
Seating Capacity: Comfortably seats 6-8 people
Assembly: Some assembly required`,
    description:
      "Bring a sophisticated touch to your dining room with our Industrial Dining Table. Combining reclaimed wood and metal, this table not only provides strength and durability but also adds character and warmth to your space.",
    keyBenefits: `
    Eco-Friendly Materials: Made from reclaimed wood to reduce waste.
Sturdy Construction: Built with a solid metal base for stability.
Unique Character: Each table has its own distinctive look due to the natural variations in the wood.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-10 business days.
Returns accepted within 30 days for a full refund.`,
    imagesLarge: ["/assets/tables/t4l.jpg", "/assets/tables/t4e.jpg"],
    reviews: [
      {
        customer: "Michael T.",
        star: 5,
        comment: "Stunning table! Compliments my decor perfectly.",
      },
      {
        customer: "Anna S.",
        star: 4,
        comment: "Beautiful design, a bit heavy but worth it.",
      },
    ],
  },

  // start chairs
  {
    id: 104,
    title: "Classic Wooden Dining Chair",
    type: "chairs",
    price: 120,
    oldPrice: 150,
    bestChoice: true,
    material: "wood",
    color: "cream",
    eco: "1",
    imageSmall: "/assets/chairs/c1s.jpg",
    feachers: `
Material: Solid wood
Dimensions: 18" W x 20" D x 36" H
Weight Capacity: Supports up to 250 lbs
Assembly: Some assembly required`,
    description:
      "The Classic Wooden Dining Chair combines timeless style and comfort. With its solid wood construction, this chair is meant to last while providing the perfect seating for your dining table.",
    keyBenefits: `
    Timeless Design: Features a classic silhouette that fits any decor.
Comfortable: Ergonomically designed for comfort during long meals.
Durable: Made from high-quality materials for lasting use.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
30-day return policy for unused items.`,
    imagesLarge: ["/assets/chairs/c1l.jpg", "/assets/chairs/c1e.jpg","/assets/chairs/c1e1.jpg","/assets/chairs/c1e2.jpg"],
    reviews: [
      {
        customer: "Laura R.",
        star: 5,
        comment: "Sturdy and beautiful! Love the color.",
      },
      {
        customer: "Chris P.",
        star: 4,
        comment: "Great chairs for the price, very comfortable.",
      },
    ],
  },
  {
    id: 105,
    title: "Modern Upholstered Dining Chair",
    type: "chairs",
    price: 150,
    oldPrice: 180,
    material: "fabric and wood",
    color: "gray",
    eco: "0",
    imageSmall: "/assets/chairs/c2s.jpg",
    feachers: `
Material: Upholstered fabric with wooden legs
Dimensions: 18" W x 22" D x 40" H
Weight Capacity: Supports up to 300 lbs
Assembly: No assembly required`,
    description:
      "Upgrade your dining experience with our Modern Upholstered Dining Chair. Featuring soft fabric upholstery and sturdy wooden legs, it provides comfort without sacrificing style.",
    keyBenefits: `
    Comfort First: Padded seat and back provide excellent comfort.
Stylish Look: Modern design complements any dining table.
Sturdy Build: Made from quality materials to ensure durability.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 3-5 business days.
Hassle-free returns within 30 days.`,
    imagesLarge: ["/assets/chairs/c2l.jpg", "/assets/chairs/c2e.jpg"],
    reviews: [
      {
        customer: "Megan L.",
        star: 5,
        comment: "So comfortable! Stylish too!",
      },
      {
        customer: "Rick T.",
        star: 4,
        comment: "Perfect for our dining room, love the fabric.",
      },
    ],
  },
  {
    id: 106,
    title: "Mid-Century Modern Chair",
    type: "chairs",
    price: 180,
    oldPrice: 220,
    material: "wood and fabric",
    color: "white",
    eco: "0",
    imageSmall: "/assets/chairs/c3s.jpg",
    feachers: `
Material: Fabric upholstery with wooden legs
Dimensions: 22" W x 24" D x 32" H
Weight Capacity: Supports up to 250 lbs
Assembly: Some assembly required`,
    description:
      "Our Mid-Century Modern Chair is the perfect accent piece for any room. Its vibrant color and sleek design make it a trendy addition while ensuring comfort and style.",
    keyBenefits: `
    Stylish Design: Adds a pop of color and charm to your space.
Comfortable: Padded seat and back for enhanced comfort.
Durable Construction: Made with high-quality materials for longevity.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
30-day return policy for unused products.`,
    imagesLarge: ["/assets/chairs/c3l.jpg", "/assets/chairs/c3e.jpg"],
    reviews: [
      {
        customer: "Sophia D.",
        star: 5,
        comment: "Absolutely beautiful! It's a standout piece.",
      },
    ],
  },
  {
    id: 107,
    title: "Folding Outdoor Chair",
    type: "chairs",
    price: 45,
    oldPrice: 60,
    material: "wood",
    color: "blue",
    eco: "0",
    imageSmall: "/assets/chairs/c4s.png",
    feachers: `
Material: Plastic seat with steel frame
Dimensions: 18" W x 25" D x 35" H
Weight Capacity: Supports up to 300 lbs
Assembly: No assembly required`,
    description:
      "This Folding Outdoor Chair is perfect for your backyard or patio. Lightweight and portable, it’s easy to store or take to events while offering comfort and support.",
    keyBenefits: `
    Compact Design: Folds flat for easy storage and transport.
Durable: Made to withstand the elements and frequent use.
Affordable: Great value for outdoor furniture.`,
    shippingReturn: `
    Free shipping on orders over $50.
Delivery within 5-10 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/chairs/c4l.png", "/assets/chairs/c4e.png"],
    reviews: [
      {
        customer: "Linda G.",
        star: 4,
        comment: "Great chair for BBQs. Lightweight and easy to carry.",
      },
    ],
  },
  {
    id: 108,
    title: "Classic High Back Chair",
    type: "chairs",
    price: 300,
    oldPrice: 350,
    material: "leather and wood",
    color: "grey",
    eco: "0",
    imageSmall: "/assets/chairs/c5s.jpg",
    feachers: `
Material: Genuine leather with solid wood frame
Dimensions: 24" W x 26" D x 40" H
Weight Capacity: Supports up to 350 lbs
Assembly: Some assembly required`,
    description:
      "The Classic High Back Chair is perfect for any office or study. With its luxurious leather upholstery and sturdy construction, it combines elegance with comfort.",
    keyBenefits: `
    Elegant Design: Timeless style suitable for any professional setting.
Comfortable: High back and padded seat provide excellent support.
Durable: Made from high-quality materials ensuring longevity.`,
    shippingReturn: `
    Free shipping on orders over $150.
Delivery within 5-7 business days.
30-day satisfaction guarantee.`,
    imagesLarge: ["/assets/chairs/c5l.jpg", "/assets/chairs/c5e.jpg"],
    reviews: [
      {
        customer: "Karen J.",
        star: 4,
        comment: "Very comfortable for long hours. Highly recommended!",
      },
    ],
  },
  // start shelfs
  {
    id: 109,
    title: "5-Tier Bookshelf",
    type: "shelfs",
    price: 250,
    oldPrice: 300,
    material: "wood",
    color: "walnut",
    eco: "1",
    imageSmall: "/assets/shelfs/s1s.jpg",
    feachers: `
Material: Solid wood
Dimensions: 30" W x 12" D x 72" H
Assembly: Some assembly required`,
    description:
      "Organize your space with our stylish 5-Tier Bookshelf. Crafted from solid wood, this shelf offers ample storage while enhancing your room's decor.",
    keyBenefits: `
    Spacious Storage: Ideal for books, decor, or collectibles.
Stylish Design: Complements any room style.
Sturdy Construction: Made with high-quality materials for durability.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/shelfs/s1l.jpg", "/assets/shelfs/s1e.jpg"],
    reviews: [],
  },
  {
    id: 110,
    title: "Industrial Metal Shelf",
    type: "shelfs",
    price: 220,
    oldPrice: 270,
    material: "wood",
    color: "brown",
    eco: "0",
    imageSmall: "/assets/shelfs/s2s.jpg",
    feachers: `
Material: Steel
Dimensions: 36" W x 14" D x 60" H
Assembly: Some assembly required`,
    description:
      "Our Industrial Metal Shelf is perfect for showcasing your favorite items or pictures. Its sturdy design and stylish appearance will set the tone for any room.",
    keyBenefits: `
    Modern Look: Adds an industrial touch to your decor.
Durable: Strong frame capable of supporting heavier items.
Versatile: Suitable for any room, from the living room to the garage.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 3-5 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/shelfs/s2l.jpg", "/assets/shelfs/s2e.jpg"],
    reviews: [
      {
        customer: "Nancy F.",
        star: 5,
        comment: "Great addition to my study! Very functional.",
      }
    ],
  },
  {
    id: 111,
    title: "Floating Wall Shelf",
    type: "shelfs",
    price: 70,
    oldPrice: 90,
    bestChoice: true,
    material: "wood",
    color: "black",
    eco: "1",
    imageSmall: "/assets/shelfs/s3s.jpg",
    feachers: `
Material: MDF
Dimensions: 24" W x 7" D x 2" H
Assembly: Some assembly required`,
    description:
      "Maximize your space with our Floating Wall Shelf. This sleek design allows you to display decor without taking up floor space, making it ideal for smaller homes.",
    keyBenefits: `
    Space-Saving: Perfect for small rooms, creating display space.
Stylish Design: Modern look that fits any decor.
Easy to Install: Simple guidelines for quick installation.`,
    shippingReturn: `
    Free shipping on orders over $50.
Delivery within 5-7 business days.
30-day return policy for unused items.`,
    imagesLarge: ["/assets/shelfs/s3l.jpg", "/assets/shelfs/s3e.jpg"],
    reviews: [],
  },
  {
    id: 112,
    title: "Corner Shelf Unit",
    type: "shelfs",
    price: 150,
    oldPrice: 180,
    material: "wood",
    color: "oak",
    eco: "1",
    imageSmall: "/assets/shelfs/s4s.jpg",
    feachers: `
Material: Engineered wood
Dimensions: 24" W x 24" D x 48" H
Assembly: Some assembly required`,
    description:
      "Utilize every nook in your home with our Corner Shelf Unit. This versatile shelf fits perfectly in any corner, providing additional storage for books, plants, and decorative items.",
    keyBenefits: `
    Space Efficient: Designed for corners to maximize storage.
Versatile Use: Great for any room, including kitchens and offices.
Stylish Design: Contemporary look adds elegance to your decor.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
30-day return policy for unused items.`,
    imagesLarge: ["/assets/shelfs/s4l.jpg", "/assets/shelfs/s4e.jpg"],
    reviews: [
      {
        customer: "Lisa A.",
        star: 4,
        comment: "Great use of space, looks good too.",
      },
    ],
  },
  {
    id: 113,
    title: "Industrial Storage Shelf",
    type: "shelfs",
    price: 320,
    oldPrice: 380,
    material: "metal and wood",
    color: "blue",
    eco: "0",
    imageSmall: "/assets/shelfs/s5s.jpg",
    feachers: `
Material: Reclaimed wood with metal frame
Dimensions: 40" W x 18" D x 72" H
Assembly: Some assembly required`,
    description:
      "The Industrial Storage Shelf provides ample space for all your belongings while adding a rugged charm to any space. This unique design combines reclaimed wood and metal for a truly stunning look.",
    keyBenefits: `
    Sturdy Construction: Built to last with quality materials.
Unique Style: No two shelves are alike due to the natural wood variations.
Ample Space: Provides plenty of storage for a variety of items.`,
    shippingReturn: `
    Free shipping on orders over $150.
Delivery within 5-10 business days.
30-day return policy for unused items.`,
    imagesLarge: ["/assets/shelfs/s5l.jpg", "/assets/shelfs/s5e.jpg"],
    reviews: [],
  },
  // bench
  {
    id: 114,
    title: "Simple Outdoor Bench",
    type: "benchs",
    price: 150,
    oldPrice: 180,
    material: "wood",
    color: "natural",
    eco: "1",
    imageSmall: "/assets/benchs/b1s.jpg",
    feachers: `
Material: Solid cedar wood
Dimensions: 48" L x 18" W x 18" H
Weight Capacity: Supports up to 500 lbs
Assembly: Some assembly required`,
    description:
      "Add a rustic touch to your outdoor space with our Simple Outdoor Bench. Built from solid cedar wood for lasting durability, this bench is perfect for gardens, patios, or yards.",
    keyBenefits: `
    Weather-Resistant: Suitable for outdoor use year-round.
Spacious: Room for multiple people to sit comfortably.
Elegant Design: Simple yet elegant look to enhance your outdoor decor.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
30-day satisfaction guarantee.`,
    imagesLarge: ["/assets/benchs/b1l.jpg", "/assets/benchs/b1e.jpg"],
    reviews: [
      {
        customer: "Rachel S.",
        star: 5,
        comment: "Looks beautiful on my patio! Very sturdy.",
      },
      {
        customer: "Patrick H.",
        star: 4,
        comment: "Perfect for my garden! Easy to assemble.",
      },
    ],
  },
  {
    id: 115,
    title: "Storage Bench with Cushion",
    type: "benchs",
    price: 180,
    oldPrice: 220,
    material: "wood and fabric",
    color: "gray",
    eco: "0",
    imageSmall: "/assets/benchs/b2s.jpg",
    feachers: `
Material: Wood frame with upholstered cushion
Dimensions: 40" L x 18" W x 18" H
Weight Capacity: Supports up to 400 lbs
Assembly: Some assembly required`,
    description:
      "Our Storage Bench with Cushion is perfect for keeping your space organized. This bench features a comfortable cushioned top and hidden storage, making it functional and stylish.",
    keyBenefits: `
    Double Use: Offers seating and storage in one.
Stylish Look: Modern design fits well in any room.
Comfortable: Soft cushion provides relaxed seating.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/benchs/b2l.jpg", "/assets/benchs/b2e.jpg"],
    reviews: [
      {
        customer: "Kevin B.",
        star: 4,
        comment: "Good quality and very functional.",
      },
    ],
  },
  //beds
  {
    id: 116,
    title: "Queen Size Bed Frame",
    type: "beds",
    price: 450,
    oldPrice: 500,
    bestChoice: true,
    material: "wood",
    color: "espresso",
    eco: "1",
    imageSmall: "/assets/beds/b1s.jpg",
    feachers: `
Material: Solid pine wood
Dimensions: 60" W x 80" L x 14" H
Weight Capacity: Supports up to 600 lbs
Assembly: Some assembly required`,
    description:
      "Sleep in style with our Queen Size Bed Frame. Built from solid pine wood, this bed frame combines sturdiness with elegance and is designed to fit any decor.",
    keyBenefits: `
    Sturdy Build: Supports weight with ease.
Timeless Design: Classic style that blends with any bedroom decor.
Eco-Friendly Materials: Sustainably sourced wood ensures peace of mind.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/beds/b1.jpg", "/assets/beds/b1.jpg"],
    reviews: [
      {
        customer: "Hannah W.",
        star: 5,
        comment: "Absolutely love this bed frame! So sturdy.",
      },
      {
        customer: "Sam L.",
        star: 4,
        comment: "Great value for the price!",
      },
    ],
  },
  {
    id: 117,
    title: "King Size Upholstered Bed",
    type: "beds",
    price: 750,
    oldPrice: 850,
    material: "fabric and wood",
    color: "beige",
    eco: "0",
    imageSmall: "/assets/beds/b2s.jpg",
    feachers: `
Material: Upholstered fabric with solid wood frame
Dimensions: 76" W x 80" L x 56" H
Weight Capacity: Supports up to 800 lbs
Assembly: Some assembly required`,
    description:
      "Experience luxury with our King Size Upholstered Bed. Featuring a plush headboard and a sturdy wood frame, this bed provides both comfort and style for a restful night's sleep.",
    keyBenefits: `
    Luxurious Design: Soft upholstery adds elegance to your bedroom.
Sturdy Construction: Designed for stability and durability.
Ample Space: Perfect for couples or those who enjoy space while sleeping.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-10 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/beds/b2.jpg", "/assets/beds/b2.jpg"],
    reviews: [
      {
        customer: "Elaina C.",
        star: 5,
        comment: "So comfortable! Stylish addition to my room.",
      },
    ],
  },
  {
    id: 118,
    title: "Twin Size Metal Bed Frame",
    type: "beds",
    price: 250,
    oldPrice: 300,
    material: "metal",
    color: "white",
    eco: "0",
    imageSmall: "/assets/beds/b3s.jpg",
    feachers: `
Material: Steel
Dimensions: 39" W x 75" L x 14" H
Weight Capacity: Supports up to 400 lbs
Assembly: Some assembly required`,
    description:
      "Our Twin Size Metal Bed Frame offers a modern solution to your sleeping needs. With its sturdy steel construction, this frame is perfect for small spaces and guest rooms.",
    keyBenefits: `
    Lightweight: Easy to move and assemble.
Durable: Crafted from high-quality steel for lasting use.
Sleek Design: Minimalist look fits any room style.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/beds/b3.jpg", "/assets/beds/b3.jpg"],
    reviews: [
      {
        customer: "Stacey A.",
        star: 4,
        comment: "Simple and effective. Perfect for my guest room.",
      },
      {
        customer: "Miranda A.",
        star: 5,
        comment: "I like it!.",
      },
      {
        customer: "John R.",
        star: 4,
        comment: "Good quality for the price!",
      },
    ],
  },
  {
    id: 119,
    title: "Full Size Water Resistant Bed",
    type: "beds",
    price: 350,
    oldPrice: 400,
    material: "fabric",
    color: "grey",
    eco: "0",
    imageSmall: "/assets/beds/b4s.jpg",
    feachers: `
Material: Water-resistant fabric
Dimensions: 54" W x 75" L x 14" H
Weight Capacity: Supports up to 600 lbs
Assembly: Some assembly required`,
    description:
      "The Full Size Water Resistant Bed is perfect for home and guest rooms alike. Designed with a stylish water-resistant fabric, this bed ensures durability and easy maintenance.",
    keyBenefits: `
    Practical Design: Great for homes with children or pets.
Stylish: Modern look works with any decor.
Easy Care: Fabric is easy to clean and maintain.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/beds/b4.jpg", "/assets/beds/b4.jpg"],
    reviews: [
            {
        customer: "Jay M.",
        star: 4,
        comment: "Good quality, a bit heavy to move.",
      },
    ],
  },
  {
    id: 120,
    title: "Cozy Queen Canopy Bed",
    type: "beds",
    price: 900,
    oldPrice: 1000,
    material: "wood and fabric",
    color: "black",
    eco: "0",
    imageSmall: "/assets/beds/b5s.jpg",
    feachers: `
Material: Solid wood with fabric drapes
Dimensions: 60" W x 80" L x 84" H
Weight Capacity: Supports up to 700 lbs
Assembly: Some assembly required`,
    description:
      "Transform your bedroom into a serene oasis with our Cozy Queen Canopy Bed. This elegant bed features beautiful fabric drapes and a sturdy wood frame, creating a dreamy atmosphere for a good night's sleep.",
    keyBenefits: `
    Luxurious Ambiance: Creates a romantic and calming environment.
Sturdy Design: Built to support your mattress with style.
Easy Assembly: Simple instructions make setup a breeze.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-10 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/beds/b5.jpg", "/assets/beds/b5jpg"],
    reviews: [
      {
        customer: "Ella T.",
        star: 5,
        comment: "Such a beautiful bed! I feel like royalty.",
      },
      {
        customer: "Andrew Z.",
        star: 4,
        comment: "Love the design, a bit pricey but worth it.",
      },
    ],
  },
  {
    id: 121,
    title: "Wooden Tall Cabinet",
    type: "cabinets",
    price: 500,
    oldPrice: 600,
    material: "wood",
    color: "dark walnut",
    eco: "1",
    imageSmall: "/assets/cabinets/cl1s.jpg",
    feachers: `
Material: Solid wood
Dimensions: 36" W x 14" D x 72" H
Assembly: Some assembly required`,
    description:
      "Our Wooden Tall Cabinet provides ample storage while adding warmth to your space. Constructed from solid wood, it’s both stylish and functional, perfect for any room.",
    keyBenefits: `
    Spacious Storage: Ideal for books, dishes, or collectibles.
Elegant Finish: Beautiful natural wood grain adds character.
Eco-Friendly: Made from sustainably sourced wood.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/cabinets/cl1.jpg", "/assets/cabinets/cl1.jpg"],
    reviews: [
      {
        customer: "Cathy E.",
        star: 5,
        comment: "Perfect for my living room! Great quality.",
      },
      
    ],
  },
  {
    id: 122,
    title: "Elegant Glass Cabinet",
    type: "cabinets",
    price: 700,
    oldPrice: 800,
    material: "glass",
    color: "black",
    eco: "0",
    imageSmall: "/assets/cabinets/cl2s.jpg",
    feachers: `
Material: Metal frame with glass doors
Dimensions: 32" W x 16" D x 60" H
Assembly: Some assembly required`,
    description:
      "Showcase your prized possessions with our Elegant Glass Cabinet. The metal frame and glass doors provide a modern look while allowing you to display your collectibles in style.",
    keyBenefits: `
    Contemporary Style: Sleek and chic design fits any decor.
Durability: Constructed with high-quality materials for longevity.
Versatile Use: Suitable for dining rooms, living rooms, or offices.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-7 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/cabinets/cl2.jpg", "/assets/cabinets/cl2.jpg"],
    reviews: [
      {
        customer: "Julie A.",
        star: 5,
        comment: "Absolutely love this cabinet! Looks so elegant.",
      },
      {
        customer: "Mark S.",
        star: 4,
        comment: "Great for displaying my collectibles, easy to assemble.",
      },
    ],
  },
  {
    id: 123,
    title: "L-Shaped Sectional Sofa",
    type: "sofas",
    price: 950,
    oldPrice: 1100,
    material: "fabric",
    color: "gray",
    eco: "0",
    imageSmall: "/assets/sofas/1s.jpg",
    feachers: `
Material: Fabric upholstery with foam cushions
Dimensions: 90" L x 70" D x 36" H
Weight Capacity: Seats up to 6 people
Assembly: Some assembly required`,
    description:
      "Our L-Shaped Sectional Sofa provides modern design and comfort in one. Great for entertaining or family movie nights, this sofa is versatile and stylish.",
    keyBenefits: `
    Spacious Seating: Plenty of room for family and friends.
Stylish Aesthetic: Complements any living room decor.
Durable: Sturdy construction ensures lasting use.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-10 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/sofas/1.jpg", "/assets/sofas/1.jpg"],
    reviews: [
      {
        customer: "Pamela R.",
        star: 5,
        comment: "Love my new sectional! So comfy!",
      },
      
    ],
  },
  {
    id: 124,
    title: "Chic Fabric Sofa",
    type: "sofas",
    price: 700,
    oldPrice: 800,
    material: "fabric",
    color: "navy blue",
    eco: "0",
    imageSmall: "/assets/sofas/2s.jpg",
    feachers: `
Material: Velvet upholstery with wooden legs
Dimensions: 84" L x 34" D x 30" H
Weight Capacity: Seats up to 5 people
Assembly: Some assembly required`,
    description:
      "Enhance your living area with our Chic Fabric Sofa. The rich color and luxurious fabric will create an inviting space for family and guests.",
    keyBenefits: `
    Modern Style: Adds a contemporary touch to your home.
Comfortable: Soft upholstery provides lasting comfort.
Versatile Use: Ideal for living rooms, offices, or lounges.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-10 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/sofas/2.jpg", "/assets/sofas/2.jpg"],
    reviews: [
      {
        customer: "Kathy M.",
        star: 5,
        comment: "Gorgeous! Looks expensive but affordable.",
      }
    ],
  },
  {
    id: 125,
    title: "Retro Leather Sofa",
    type: "sofas",
    price: 800,
    oldPrice: 900,
    material: "leather",
    color: "black",
    eco: "0",
    imageSmall: "/assets/sofas/3s.jpg",
    feachers: `
Material: Genuine leather with sturdy frame
Dimensions: 76" L x 32" D x 30" H
Weight Capacity: Seats up to 4 people
Assembly: Some assembly required`,
    description:
      "Our Retro Leather Sofa combines classic design and comfort for a truly timeless piece. Made from high-quality leather, this sofa is perfect for both formal and casual settings.",
    keyBenefits: `
    Timeless Design: Classic look that never goes out of style.
Comfortable: Thick cushions ensure a relaxing experience.
Durable: Crafted from quality materials for long-lasting use.`,
    shippingReturn: `
    Free shipping on orders over $100.
Delivery within 5-10 business days.
Returns accepted within 30 days.`,
    imagesLarge: ["/assets/sofas/3.jpg", "/assets/sofas/3.jpg"],
    reviews: [
      {
        customer: "Leonard N.",
        star: 5,
        comment: "Stunning! Adds charm to my living room.",
      },
      {
        customer: "Lisa T.",
        star: 4,
        comment: "Great comfort and style for a reasonable price.",
      },
    ],
  },
];
