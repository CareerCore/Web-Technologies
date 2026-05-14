// ========== NARS Cosmetics - script.js ==========

// ===== THEME TOGGLE =====
const html = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

// Load saved theme
const savedTheme = localStorage.getItem('narsTheme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeBtn && themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('narsTheme', next);
  showToast(next === 'light' ? '☀️ Light mode activated' : '🌙 Dark mode activated');
});

// ===== PRODUCT DATA =====
const PRODUCTS = {
  afterglowlipbalm: {
    name: 'Afterglow Lip Balm',
    category: 'Lip',
    price: 'PKR 1500',
    desc: 'A luxuriously hydrating lip balm infused with nourishing ingredients that leaves lips looking soft, smooth, and beautifully tinted. Perfect for everyday wear with a buildable, sheer finish.',
    shade: 'Deep Throat (sheer pink)',
    finish: 'Glossy / Hydrating',
    size: '2g / 0.07 oz',
    skin: 'All Skin Types',
    tags: ['Hydrating', 'Cruelty-Free', 'Long-Lasting'],
    swatches: ['#c8627a', '#e07a9a', '#a04060', '#d48090'],
    img: 'pic1.webp'
  },
  orgasm: {
    name: 'Orgasm Blush',
    category: 'Cheek',
    price: 'PKR 4200',
    desc: 'The iconic NARS blush that has been a fan favourite since 1999. A flattering peachy-pink with golden shimmer that gives skin a naturally flushed, radiant glow suitable for all skin tones.',
    shade: 'Orgasm — peachy pink with golden shimmer',
    finish: 'Satin / Luminous',
    size: '4.8g / 0.16 oz',
    skin: 'All Skin Tones',
    tags: ['Iconic', 'Buildable Coverage', 'All-Day Wear'],
    swatches: ['#e8907a', '#d4705a', '#c85040', '#f0a080'],
    img: 'pic2.jfif'
  },
  foundation: {
    name: 'Light Reflecting Foundation',
    category: 'Face',
    price: 'PKR 65000',
    desc: 'A medium-to-full coverage foundation that blurs imperfections and reflects light for a luminous, skin-like finish. Powered by Light Reflecting Complex technology for a radiant, all-day glow.',
    shade: 'Syracuse (medium beige)',
    finish: 'Radiant / Luminous',
    size: '30ml / 1 fl oz',
    skin: 'Normal to Dry',
    tags: ['Full Coverage', 'SPF 25', 'Transfer-Resistant'],
    swatches: ['#f0c8a0', '#e0a870', '#c88050', '#a06030'],
    img: 'pic3.jfif'
  },
  mascara: {
    name: 'Climax Mascara',
    category: 'Eye',
    price: 'PKR 1500',
    desc: 'An extreme volume mascara that delivers maximum impact with zero clumping. The plush, full-bristle brush grabs and coats every lash from root to tip for an intensely bold, full-volume effect.',
    shade: 'Explicit Black',
    finish: 'Matte / Intense',
    size: '8.5g / 0.30 oz',
    skin: 'All Eye Types',
    tags: ['Volume', 'No Smudge', 'Buildable'],
    swatches: ['#1a1a1a', '#2d2d2d', '#000000'],
    img: 'pic6.jfif'
  },
  palette: {
    name: 'Eyeshadow Palette',
    category: 'Eye',
    price: 'PKR 8000',
    desc: 'A curated collection of 9 complementary eyeshadow shades ranging from everyday neutrals to dramatic statement hues. Blendable, buildable, and long-wearing — everything you need for any eye look.',
    shade: 'Rated R (neutral to warm tones)',
    finish: 'Matte, Shimmer & Glitter',
    size: '12g multi-pan',
    skin: 'All Skin Tones',
    tags: ['9 Shades', 'Versatile', '48-Hour Wear'],
    swatches: ['#c09060', '#8a5030', '#3a2018', '#e0c090', '#a07050', '#604030', '#201008', '#d4a060', '#704020'],
    img: 'pic7.jfif'
  },
  concealer: {
    name: 'Radiant Creamy Concealer',
    category: 'Face',
    price: 'PKR 7400',
    desc: 'A creamy, full-coverage concealer that brightens and conceals with a smooth, natural-looking finish. Hydrating ingredients prevent creasing for long-wearing comfort throughout the day.',
    shade: 'Chantilly (fair with neutral undertones)',
    finish: 'Radiant / Natural',
    size: '6ml / 0.22 fl oz',
    skin: 'All Skin Types',
    tags: ['Full Coverage', 'Crease-Proof', 'Hydrating'],
    swatches: ['#f8e8d0', '#f0d8b8', '#e0c090', '#c8a068'],
    img: 'Radiant Creamy Concealer.jfif'
  },

powder: {
  name: 'Loose powder',
  category: 'Face',
  price: 'PKR 2500',
  desc: 'A finely milled loose powder that sets makeup and controls shine for a natural, flawless finish. Lightweight formula blurs pores and imperfections beautifully.',
  shade: 'Translucent',
  finish: 'Matte / Natural',
  size: '10g',
  skin: 'All Skin Types',
  tags: ['Setting Powder', 'Oil Control', 'Lightweight'],
  swatches: ['#f5e6d3', '#e8d5c0', '#d4b896', '#c09060'],
  img: 'pic4.jfif'
},
Highlighter: {
  name: 'Highlighter',
  category: 'Face',
  price: 'PKR 3000',
  desc: 'A luminous highlighter that adds a radiant, lit-from-within glow to the high points of the face. Buildable formula for subtle shimmer or intense highlight.',
  shade: 'Champagne Gold',
  finish: 'Shimmer / Luminous',
  size: '7g',
  skin: 'All Skin Types',
  tags: ['Glow', 'Buildable', 'Long-Lasting'],
  swatches: ['#f0d080', '#e0c060', '#c8a040', '#b08030'],
  img: 'pic5.jfif'
},
Primer: {
  name: 'Primer',
  category: 'Face',
  price: 'PKR 4500',
  desc: 'A smoothing face primer that creates a perfected canvas for makeup. Minimizes the appearance of pores and fine lines for long-lasting makeup wear.',
  shade: 'Clear',
  finish: 'Smooth / Velvet',
  size: '30ml',
  skin: 'All Skin Types',
  tags: ['Pore-Minimizing', 'Long Wear', 'Smooth'],
  swatches: ['#f8f0e8', '#f0e8dc', '#e8dcd0'],
  img: 'pic8.jfif'
},
contour: {
  name: 'Contour',
  category: 'Face',
  price: 'PKR 4000',
  desc: 'A precision contour powder that sculpts and defines facial features with a natural shadow effect. Easy to blend for a seamless, professional finish.',
  shade: 'Cool Taupe',
  finish: 'Matte / Natural',
  size: '8g',
  skin: 'All Skin Types',
  tags: ['Sculpting', 'Blendable', 'Buildable'],
  swatches: ['#c09070', '#a07050', '#806040', '#604030'],
  img: 'pic9.jfif'
},
'Sculpt & blend': {
  name: 'Sculpt & Blend Set Contour',
  category: 'Face',
  price: 'PKR 3500',
  desc: 'A complete sculpting and blending set that includes everything you need to contour, highlight, and perfect your complexion. Professional results at home.',
  shade: 'Universal',
  finish: 'Matte & Shimmer',
  size: 'Multi-piece set',
  skin: 'All Skin Types',
  tags: ['Set', 'Contour', 'Sculpt'],
  swatches: ['#e0c090', '#c09060', '#a07040', '#806030'],
  img: 'pic10.jfif'
},
Linear: {
  name: 'Linear',
  category: 'Eye',
  price: 'PKR 2500',
  desc: 'A precise liquid eyeliner that delivers intense, long-lasting color with a fine-tip brush for perfect lines every time. Waterproof and smudge-proof formula.',
  shade: 'Explicit Black',
  finish: 'Matte / Intense',
  size: '1.2ml',
  skin: 'All Eye Types',
  tags: ['Waterproof', 'Precise', 'Long-Lasting'],
  swatches: ['#1a1a1a', '#000000', '#2d2d2d'],
  img: 'Linear.png'
},
'Liquid Blush': {
  name: 'Liquid Blush',
  category: 'Cheek',
  price: 'PKR 840',
  desc: 'A buildable liquid blush that gives a natural, flushed look that lasts all day. The lightweight formula blends seamlessly into skin for a fresh, radiant finish.',
  shade: 'Orgasm (peachy pink)',
  finish: 'Satin / Natural',
  size: '15ml',
  skin: 'All Skin Types',
  tags: ['Buildable', 'Long-Lasting', 'Natural'],
  swatches: ['#e8908a', '#d07070', '#c05060', '#f0a0a0'],
  img: 'liquid2.jfif'
},
Facepowder: {
  name: 'Facepowder',
  category: 'Face',
  price: 'PKR 6800',
  desc: 'A silky face powder that sets makeup and gives skin a soft, airbrushed finish. Controls shine while keeping skin looking fresh and natural throughout the day.',
  shade: 'Translucent',
  finish: 'Satin / Soft',
  size: '12g',
  skin: 'All Skin Types',
  tags: ['Setting', 'Oil Control', 'Airbrushed'],
  swatches: ['#f8ead8', '#f0dcc8', '#e0c8a8', '#c8a880'],
  img: 'face.jfif'
},

  lippencil: {
    name: 'Velvet Matte Lip Pencil',
    category: 'Lip',
    price: 'PKR 2200',
    desc: 'An ultra-pigmented, velvety matte lip pencil that can be used to line, define, or fill in the entire lip. The rich formula is incredibly comfortable and long-lasting for all-day bold colour.',
    shade: 'Dragon Girl — vivid red',
    finish: 'Matte / Velvet',
    size: '2.4g / 0.08 oz',
    skin: 'All Lip Types',
    tags: ['Vegan', 'All-Day Wear', 'Intense Pigment'],
    swatches: ['#c01020', '#a00018', '#e02030', '#800010'],
    img: 'Velvet Matte Lip Pencil.jfif'
  },
  pigment: {
    name: 'Powermatte Lip Pigment',
    category: 'Lip',
    price: 'PKR 2600',
    desc: 'A limited-edition, intensely pigmented liquid lip colour with a bold matte finish. Delivers full-coverage colour in one stroke with a lightweight, non-drying feel that lasts all day.',
    shade: 'American Woman — warm brownish red',
    finish: 'Matte / Bold',
    size: '5.5ml / 0.18 fl oz',
    skin: 'All Lip Types',
    tags: ['Limited Edition', 'Full Coverage', 'Long-Lasting'],
    swatches: ['#8a2010', '#7a1808', '#a03020', '#c04030'],
    img: 'Powermatte Lip Pigment.jfif'
  },
  
  softconcealer: {
    name: 'Soft Matte Concealer.jfif',
    category: 'Face',
    price: 'PKR 6800',
    desc: 'A soft, blendable concealer with a natural matte finish that controls oil and minimises the appearance of pores. Ideal for oily or combination skin types seeking a shine-free, long-wear finish.',
    shade: 'Creme Brûlée — light golden',
    finish: 'Matte / Natural',
    size: '6.2ml / 0.21 fl oz',
    skin: 'Oily / Combination',
    tags: ['Oil-Control', 'Pore-Minimising', '16-Hour Wear'],
    swatches: ['#f0d8a8', '#e0c890', '#c8a870', '#b09050'],
    img: 'Soft Matte Concealer.jfif'
  },
'Lip Set': {
  name: 'Define And Glow Lip Set',
  category: 'Cheek',
  price: 'PKR 6500',
  desc: 'A complete lip duo set featuring a velvet liner and glossy lip shine. Defines and enhances lip shape with long-lasting pigment and a luminous finish.',
  shade: 'Orgasm — peachy pink with shimmer',
  finish: 'Matte + Glossy',
  size: '2-piece set',
  skin: 'All Skin Types',
  tags: ['Set', 'Lip Duo', 'Long-Wear'],
  swatches: ['#c8001e', '#a80015', '#8f0013', '#6b000e'],
  img: 'Define And Glow Lip Set.jfif'
},

'Multiple': {
  name: 'The Multiple',
  category: 'Cheek',
  price: 'PKR 8200',
  desc: 'A multi-use cream stick that adds a luminous flush of color to cheeks, eyes, and lips. Buildable, blendable, and perfect for a dewy sun-kissed finish.',
  shade: 'Orgasm — peachy gold',
  finish: 'Luminous / Cream',
  size: '14g / 0.49 oz',
  skin: 'All Skin Types',
  tags: ['Multi-Use', 'Cream', 'Dewy Finish'],
  swatches: ['#f0b890', '#e09870', '#c87850', '#a85830'],
  img: 'The Multiple.jfif'
},

'Cream': {
  name: 'Laguna Bronzing Cream',
  category: 'Cheek',
  price: 'PKR 4200',
  desc: 'A creamy bronzer that melts into skin to give a natural sun-kissed glow. Lightweight, buildable formula warms the complexion without looking muddy or orange.',
  shade: 'Laguna — warm golden bronze',
  finish: 'Satin / Natural',
  size: '15g / 0.52 oz',
  skin: 'All Skin Types',
  tags: ['Cream Bronzer', 'Sun-Kissed', 'Buildable'],
  swatches: ['#d4996a', '#c07e50', '#a86238', '#8a4a24'],
  img: 'Laguna Bronzing Cream.jfif'
},

'Luminizing Powder': {
  name: 'Light Reflecting\u2122 Luminizing Powder',
  category: 'Cheek',
  price: 'PKR 4000',
  desc: 'A finely-milled illuminating powder infused with light-reflecting minerals that create a glass-like luminosity. Wears over or under foundation for a lit-from-within glow.',
  shade: 'Albatross — icy champagne shimmer',
  finish: 'Luminous / Highlighter',
  size: '11.5g / 0.4 oz',
  skin: 'All Skin Types',
  tags: ['Highlighter', 'Light-Reflecting', 'Luminous'],
  swatches: ['#fff8e0', '#f8e8c0', '#f0d8a0', '#e0c070'],
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4q_TgT1otA17rhtI3fG7cai3hJFDEEg3jA&s'
},

'Cheek Palette': {
  name: 'Hot Escape Cheek Palette',
  category: 'Cheek',
  price: 'PKR 3800',
  desc: 'A curated palette of blush, bronzer, and highlighter shades for a complete sculpted look. Perfect for contouring, warming, and highlighting in one compact.',
  shade: 'Hot Escape — warm coral, bronze, champagne',
  finish: 'Mixed: Satin / Shimmer',
  size: '3 x 4g',
  skin: 'All Skin Types',
  tags: ['Palette', 'Sculpting', 'All-in-One'],
  swatches: ['#e88060', '#c07040', '#d4996a', '#f8e0a0'],
  img: 'Hot Escape Cheek Palette.jfif'
},

'Blush Brush': {
  name: 'Blush Brush',
  category: 'Cheek',
  price: 'PKR 2900',
  desc: 'A fluffy, dome-shaped brush crafted with ultra-soft synthetic bristles for precise blush application. Picks up and deposits color evenly for a natural, buildable flush.',
  shade: 'N/A — brush',
  finish: 'N/A',
  size: 'Full size',
  skin: 'All Skin Types',
  tags: ['Brush', 'Synthetic', 'Soft Bristles'],
  swatches: [],
  img: 'Blush Brush.jfif'
},

'Wardrobe Set': {
  name: 'The Cheek Wardrobe Set',
  category: 'Cheek',
  price: 'PKR 8100',
  desc: 'A complete cheek collection set featuring fan-favourite blush, bronzer, and highlighter shades. Everything you need to sculpt, bronze, and illuminate in one luxurious set.',
  shade: 'Assorted — blush, bronze, highlight',
  finish: 'Mixed Finishes',
  size: 'Multi-piece set',
  skin: 'All Skin Types',
  tags: ['Gift Set', 'Complete Look', 'Value Set'],
  swatches: ['#f4a98c', '#d4996a', '#f8e0a0', '#e24b4a'],
  img: 'The Cheek Wardrobe Set.jfif'
},

'Blush': {
  name: 'Blush',
  category: 'Cheek',
  price: 'PKR 4200',
  desc: 'A silky, buildable powder blush available in a range of flattering shades. Highly pigmented formula blends effortlessly for a natural, long-wearing flush of color.',
  shade: 'Multiple shades available',
  finish: 'Satin / Matte',
  size: '4.8g / 0.17 oz',
  skin: 'All Skin Types',
  tags: ['Buildable', 'Long-Wear', 'Pigmented'],
  swatches: ['#f4a98c', '#e88070', '#d86858', '#c04840'],
  img: 'Blush.jfif'
},

'The Laguna Eye & Lip Set': {
  name: 'The Laguna Eye & Lip Set',
  category: 'Cheek',
  price: 'PKR 4100',
  desc: 'A curated set combining Laguna bronzing essentials with eye and lip must-haves for a complete sun-kissed look. Warm, wearable shades perfect for everyday and travel.',
  shade: 'Laguna — warm bronze tones',
  finish: 'Mixed Finishes',
  size: 'Multi-piece set',
  skin: 'All Skin Types',
  tags: ['Gift Set', 'Bronzer', 'Complete Look'],
  swatches: ['#d4996a', '#c07e50', '#a86238', '#8a4a24'],
  img: 'The Laguna Eye & Lip Set.jfif'
},

'Face Palette': {
  name: 'Laguna Ultimate Face Palette',
  category: 'Cheek',
  price: 'PKR 8200',
  desc: 'An all-in-one face palette featuring the ultimate Laguna bronzing and highlighting shades for a perfectly sculpted, sun-kissed complexion. Ideal for contouring and glowing.',
  shade: 'Laguna — bronze, highlight, blush',
  finish: 'Satin / Shimmer',
  size: 'Multi-pan palette',
  skin: 'All Skin Types',
  tags: ['Palette', 'Sculpting', 'Bronzer'],
  swatches: ['#d4996a', '#c07e50', '#f8e0a0', '#f4a98c'],
  img: 'Laguna Ultimate Face Palette.jfif'
},

'Foundation': {
  name: 'Advanced Skincare Foundation',
  category: 'Face',
  price: 'PKR 7000',
  desc: 'A buildable, skin-loving foundation infused with skincare actives that nourish while covering. Provides medium coverage with a natural, breathable finish all day long.',
  shade: 'Multiple shades available',
  finish: 'Natural / Breathable',
  size: '30ml / 1 fl oz',
  skin: 'All Skin Types',
  tags: ['Skincare-Infused', 'Buildable', 'Long-Wear'],
  swatches: ['#faf0e0', '#f0e0c8', '#d4a878', '#b88450'],
  img: 'Advanced Skincare Foundation.jfif'
},

'Glow set': {
  name: 'The Radiant Glow Set',
  category: 'Face',
  price: 'PKR 4800',
  desc: 'A curated glow set featuring a radiant foundation, creamy highlighter, and setting powder for a complete luminous look. Skin that looks lit from within, all day long.',
  shade: 'Glow — luminous neutral tones',
  finish: 'Radiant / Glass Skin',
  size: 'Multi-piece set',
  skin: 'Normal / Dry',
  tags: ['Gift Set', 'Glow', 'Complete Look'],
  swatches: ['#fff8e0', '#f0e0c8', '#f8e8c0'],
  img: 'The Radiant Glow Set.jfif'
},

'Firming Serum': {
  name: 'Firming Serum',
  category: 'Face',
  price: 'PKR 5800',
  desc: 'An advanced firming serum with peptides and hyaluronic acid that visibly tightens, lifts, and plumps skin. Reduces the appearance of fine lines and improves elasticity over time.',
  shade: 'N/A — skincare',
  finish: 'N/A',
  size: '30ml / 1 fl oz',
  skin: 'Mature / All Skin Types',
  tags: ['Anti-Ageing', 'Firming', 'Peptides'],
  swatches: [],
  img: 'Firming Serum.jfif'
},

'Toning Treatment Lotion': {
  name: 'Toning Treatment Lotion',
  category: 'Face',
  price: 'PKR 3800',
  desc: 'A lightweight toning lotion that refines, balances, and hydrates skin. Formulated with botanical extracts to minimise pores, even skin tone, and prep skin for the next steps in your routine.',
  shade: 'N/A — skincare',
  finish: 'N/A',
  size: '150ml / 5 fl oz',
  skin: 'All Skin Types',
  tags: ['Toner', 'Hydrating', 'Pore-Refining'],
  swatches: [],
  img: 'Toning Treatment Lotion.jfif'
},

'Moisturizer': {
  name: 'Moisturizer',
  category: 'Face',
  price: 'PKR 2800',
  desc: 'A rich yet lightweight daily moisturizer that provides 24-hour hydration. Strengthens the skin barrier, smooths texture, and leaves skin soft, plump, and comfortable all day.',
  shade: 'N/A — skincare',
  finish: 'N/A',
  size: '50ml / 1.7 fl oz',
  skin: 'Normal / Dry / Combination',
  tags: ['24-Hour Hydration', 'Barrier-Repair', 'Daily Moisturizer'],
  swatches: [],
  img: 'Moisturizer.jfif'
},

'Face & Body Powder': {
  name: 'Face & Body Powder',
  category: 'Face',
  price: 'PKR 3800',
  desc: 'A versatile, finely-milled powder that can be used on both the face and body. Sets makeup, controls shine, and leaves skin with a smooth, velvety finish from head to toe.',
  shade: 'Multiple shades available',
  finish: 'Velvet / Natural',
  size: '25g / 0.88 oz',
  skin: 'All Skin Types',
  tags: ['Face & Body', 'Setting Powder', 'Versatile'],
  swatches: ['#faf8f5', '#f0e0c8', '#d4a878'],
  img: 'Face & Body Powder.jfif'
},

'The Multiple & Foundation Set': {
  name: 'The Multiple & Foundation Set',
  category: 'Face',
  price: 'PKR 6800',
  desc: 'A power duo set combining the iconic The Multiple cream stick with a matching foundation for a seamless, unified look. Perfect for a complete, radiant face in one set.',
  shade: 'Orgasm — peachy gold tones',
  finish: 'Luminous / Natural',
  size: '2-piece set',
  skin: 'Normal / Dry',
  tags: ['Gift Set', 'Multi-Use', 'Complete Look'],
  swatches: ['#faf0e0', '#f0d8b0', '#e0b880'],
  img: 'The Multiple & Foundation Set.jfif'
},

'Setting Powder Pressed': {
  name: 'Setting Powder Pressed',
  category: 'Face',
  price: 'PKR 3800',
  desc: 'A pressed setting powder that locks makeup in place and controls shine for a smooth, matte finish. Travel-friendly compact with a buildable formula that never looks cakey.',
  shade: 'Translucent — universal',
  finish: 'Matte / Natural',
  size: '8g / 0.28 oz',
  skin: 'All Skin Types',
  tags: ['Setting Powder', 'Pressed', 'Travel-Friendly'],
  swatches: ['#faf8f5'],
  img: 'Setting Powder Pressed.jfif'
},

'Setting Powder': {
  name: 'Gold Dust Setting Powder',
  category: 'Face',
  price: 'PKR 6800',
  desc: 'A luxurious gold-infused loose setting powder that sets makeup while adding a subtle lit-from-within glow. Blurs imperfections and enhances skin with a warm, golden luminosity.',
  shade: 'Gold Dust — warm champagne',
  finish: 'Luminous / Soft Shimmer',
  size: '10g / 0.35 oz',
  skin: 'Normal / Dry',
  tags: ['Gold', 'Luminous', 'Setting Powder'],
  swatches: ['#f8e8c0', '#f0d090', '#e0b860'],
  img: 'gold dust setting powder.jfif'
},

'Prismatic Powder Loose': {
  name: 'Prismatic Powder Loose',
  category: 'Face',
  price: 'PKR 2800',
  desc: 'A multi-dimensional loose powder with prismatic pigments that catch light from every angle. Creates a radiant, holographic glow on cheeks, eyelids, and collarbones.',
  shade: 'Multiple prismatic shades',
  finish: 'Holographic / Prismatic',
  size: '3.5g / 0.12 oz',
  skin: 'All Skin Types',
  tags: ['Highlighter', 'Prismatic', 'Multi-Use'],
  swatches: ['#f8e8e0', '#e8d8f0', '#d8e8f8', '#f0f0a0'],
  img: 'Prismatic Powder Loose.png'
},

'Powder Brush': {
  name: 'Powder Brush',
  category: 'Face',
  price: 'PKR 1800',
  desc: 'A large, fluffy powder brush with ultra-soft synthetic bristles for effortless powder application. Picks up and sweeps product evenly for a flawless, airbrushed finish.',
  shade: 'N/A — brush',
  finish: 'N/A',
  size: 'Full size',
  skin: 'All Skin Types',
  tags: ['Brush', 'Synthetic', 'Powder Application'],
  swatches: [],
  img: 'Powder Brush.jfif'
},

'Sheer Glow Foundation Pump': {
  name: 'Sheer Glow Foundation Pump',
  category: 'Face',
  price: 'PKR 800',
  desc: 'A convenient pump attachment designed for the Sheer Glow Foundation bottle. Provides precise, hygienic dispensing for mess-free application every time.',
  shade: 'N/A — accessory',
  finish: 'N/A',
  size: 'Universal fit',
  skin: 'N/A',
  tags: ['Accessory', 'Pump', 'Foundation'],
  swatches: [],
  img: 'Sheer Glow Foundation Pump.jfif'
},

'Longwear Eyeliner': {
  name: 'High-Pigment Longwear Eyeliner',
  category: 'Eye',
  price: 'PKR 5800',
  desc: 'A highly pigmented, smudge-proof eyeliner with an ultra-fine tip for precise lines. Stays put for up to 16 hours without fading, creasing, or smudging throughout the day.',
  shade: 'Via Appia — matte black',
  finish: 'Matte / Intense',
  size: '0.15g / 0.005 oz',
  skin: 'All Skin Types',
  tags: ['Smudge-Proof', '16-Hour Wear', 'Waterproof'],
  swatches: ['#1a1a1a', '#000000'],
  img: 'High-Pigment Longwear Eyeliner.png'
},

'Eyeshadow Stick': {
  name: 'Total Seduction Eyeshadow Stick',
  category: 'Eye',
  price: 'PKR 3800',
  desc: 'A creamy, blendable eyeshadow stick for effortless one-stroke application. Long-wearing, transfer-resistant formula delivers rich colour with a smoky or precise finish.',
  shade: 'Multiple shades available',
  finish: 'Satin / Metallic',
  size: '1.6g / 0.056 oz',
  skin: 'All Skin Types',
  tags: ['Cream', 'Long-Wear', 'Easy Application'],
  swatches: ['#c0001a', '#606030', '#280808'],
  img: 'Total Seduction Eyeshadow Stick.jfif'
},

'Eye Makeup Remover': {
  name: 'Gentle Oil-Free Eye Makeup Remover',
  category: 'Eye',
  price: 'PKR 3500',
  desc: 'A gentle, oil-free bi-phase eye makeup remover that effectively dissolves even waterproof mascara and liner without tugging. Leaves the eye area clean, calm, and irritation-free.',
  shade: 'N/A — remover',
  finish: 'N/A',
  size: '100ml / 3.3 fl oz',
  skin: 'All Skin Types / Sensitive',
  tags: ['Oil-Free', 'Gentle', 'Waterproof Remover'],
  swatches: [],
  img: 'Gentle Oil-Free Eye Makeup Remover.jfif'
},

'Shaping Gel': {
  name: 'Brow Shaping Gel',
  category: 'Eye',
  price: 'PKR 1800',
  desc: 'A clear, lightweight brow gel that grooms, sets, and holds brows in place all day. Flexible formula keeps brows looking naturally defined without stiffness or flaking.',
  shade: 'Clear — universal',
  finish: 'Natural / Clear',
  size: '5ml / 0.17 fl oz',
  skin: 'All Skin Types',
  tags: ['Brow Gel', 'Long-Hold', 'Natural Look'],
  swatches: [],
  img: 'Brow Shaping Gel.jfif'
},

'Curler': {
  name: 'Eyelash Curler',
  category: 'Eye',
  price: 'PKR 1900',
  desc: 'A professional-grade eyelash curler designed to lift and curl lashes for a wide-eyed, dramatic effect. Ergonomic handle and curved jaw fit the natural shape of the eye.',
  shade: 'N/A — tool',
  finish: 'N/A',
  size: 'Standard',
  skin: 'N/A',
  tags: ['Tool', 'Lash Curler', 'Ergonomic'],
  swatches: [],
  img: 'Eyelash Curler.jfif'
},

'Eyeshadow Base': {
  name: 'Smudge Proof Eyeshadow Base',
  category: 'Eye',
  price: 'PKR 2000',
  desc: 'A lightweight eyeshadow primer that creates a smooth, crease-proof base for eyeshadow. Extends wear, intensifies colour payoff, and prevents fading or smudging all day.',
  shade: 'Nude — universal primer',
  finish: 'Matte / Primer',
  size: '2.8g / 0.098 oz',
  skin: 'All Skin Types',
  tags: ['Primer', 'Crease-Proof', 'Extends Wear'],
  swatches: ['#f0d8c0'],
  img: 'Smudge Proof Eyeshadow Base.jfif'
},

'Eyeshadow Brush': {
  name: 'Eyeshadow Brush',
  category: 'Eye',
  price: 'PKR 1300',
  desc: 'A precision eyeshadow brush with a flat, dome-shaped head for seamless shadow application and blending. Ultra-soft synthetic bristles pick up and deposit colour evenly.',
  shade: 'N/A — brush',
  finish: 'N/A',
  size: 'Full size',
  skin: 'N/A',
  tags: ['Brush', 'Blending', 'Precision Application'],
  swatches: [],
  img: 'Eyeshadow Brush.jfif'
},

'Eyeshadow': {
  name: 'Quad Eyeshadow',
  category: 'Eye',
  price: 'PKR 5800',
  desc: 'A curated quad of 4 harmonious eyeshadow shades ranging from sheer to intense. Highly pigmented, blendable formula creates everything from subtle daytime to dramatic evening looks.',
  shade: 'Multiple quads available',
  finish: 'Matte / Shimmer / Satin',
  size: '4 x 1.3g',
  skin: 'All Skin Types',
  tags: ['Quad', 'Highly Pigmented', 'Versatile'],
  swatches: ['#f0e8d8', '#c8b090', '#806040', '#281808'],
  img: 'Quad Eyeshadow.jfif'
},

'Eye Brightener': {
  name: 'Eye Brightener',
  category: 'Eye',
  price: 'PKR 6800',
  desc: 'A multi-use eye brightener that instantly illuminates the inner corner of the eye and brow bone to make eyes appear wider, brighter, and more awake. Blendable and long-lasting.',
  shade: 'Nude — champagne shimmer',
  finish: 'Shimmer / Luminous',
  size: '1.4g / 0.049 oz',
  skin: 'All Skin Types',
  tags: ['Brightener', 'Multi-Use', 'Luminous'],
  swatches: ['#fff8e0', '#f8e8c0'],
  img: 'Eye Brightene.jfif'
},

'Lip color': {
  name: 'Air Matte Lip Color',
  category: 'Lip',
  price: 'PKR 600',
  desc: 'A featherlight matte lip colour that feels like nothing on the lips while delivering buildable, intense pigment. Comfortable, non-drying formula wears beautifully for hours.',
  shade: 'Multiple shades available',
  finish: 'Matte / Airy',
  size: '7.5ml / 0.25 fl oz',
  skin: 'All Skin Types',
  tags: ['Matte', 'Lightweight', 'Long-Wear'],
  swatches: ['#c0001a', '#a80015', '#8c0011'],
  img: 'Air Mette Lip Color.jfif'
},

'Lipstick': {
  name: 'Powermatte Lipstick',
  category: 'Lip',
  price: 'PKR 5,600',
  desc: 'A bold, intensely pigmented matte lipstick with a comfortable, hydrating feel. Rich, full-coverage colour in a classic bullet format — iconic NARS pigmentation meets all-day wear.',
  shade: 'Multiple shades available',
  finish: 'Matte / Full Coverage',
  size: '3.4g / 0.12 oz',
  skin: 'All Skin Types',
  tags: ['Full Coverage', 'Matte', 'Classic Bullet'],
  swatches: ['#c8001e', '#c0001a', '#8c0011', '#600010'],
  img: 'Powermatte Lipstick.jfif'
},

'Lip Duo': {
  name: 'Line & Shine Lip Duo',
  category: 'Lip',
  price: 'PKR 2600',
  desc: 'A compact lip duo set featuring a matching velvet liner and glossy lip shine. Effortlessly define and gloss lips for a polished, long-lasting look in one sleek set.',
  shade: 'Orgasm — peachy pink',
  finish: 'Matte + Glossy',
  size: '2-piece set',
  skin: 'All Skin Types',
  tags: ['Set', 'Liner + Gloss', 'Duo'],
  swatches: ['#f8d0b8', '#f0b898', '#e09878'],
  img: 'Line & Shine Lip Duo.jfif'
},

'Lip Shine Set': {
  name: 'The Line & Shine Set',
  category: 'Lip',
  price: 'PKR 3600',
  desc: 'A complete lip set featuring a precision lip liner and a complementary glossy shine. Define, fill, and top with shine for a polished, dimensional lip look that lasts.',
  shade: 'Multiple shades available',
  finish: 'Matte + Gloss',
  size: '2-piece set',
  skin: 'All Skin Types',
  tags: ['Gift Set', 'Liner + Shine', 'Complete Lip Look'],
  swatches: ['#f8d0b8', '#f0b898', '#c0001a'],
  img: 'The Line & Shine Set.jfif'
},

'Lip Brush': {
  name: 'Lip Brush',
  category: 'Lip',
  price: 'PKR 600',
  desc: 'A precise, retractable lip brush for applying and blending lipstick or gloss with accuracy. Tapered tip enables clean definition and effortless shaping for a professional finish.',
  shade: 'N/A — brush',
  finish: 'N/A',
  size: 'Retractable',
  skin: 'N/A',
  tags: ['Brush', 'Precision', 'Retractable'],
  swatches: [],
  img: 'Lip Brush.png'
},

'Lip Linear': {
  name: 'Precision Lip Linear',
  category: 'Lip',
  price: 'PKR 1800',
  desc: 'A creamy, long-wearing lip liner that defines, shapes, and fills lips with precision. Prevents feathering and keeps lip colour in place all day — the perfect base for any lip look.',
  shade: 'Dragon Girl — classic red',
  finish: 'Matte / Velvety',
  size: '0.5g / 0.017 oz',
  skin: 'All Skin Types',
  tags: ['Anti-Feather', 'Long-Wear', 'Defines Lips'],
  swatches: ['#c0001a', '#a80015', '#8c0011', '#6e000c'],
  img: 'Precision Lip Linear.jfif'
},

'afterglow': {
  name: 'Afterglow Lip Shine',
  category: 'Lip',
  price: 'PKR 2500',
  desc: 'A buttery-soft lip shine infused with nourishing ingredients that leave lips plump, hydrated, and luminous. Delivers a sheer wash of buildable colour with a glossy finish.',
  shade: 'Orgasm — sheer peachy pink with golden shimmer',
  finish: 'Glossy / Luminous',
  size: '1.9g / 0.067 oz',
  skin: 'All Skin Types',
  tags: ['Hydrating', 'Glossy Finish', 'Sheer Colour'],
  swatches: ['#f8d0b8', '#f0b898', '#e09878', '#c87858'],
  img: 'Afterglow Lip Shine.jfif'
},

'afterglowBalm': {
  name: 'Afterglow Lip Balm',
  category: 'Lip',
  price: 'PKR 2500',
  desc: 'A nourishing, sheer lip balm that delivers a soft wash of colour with a glossy, comfortable finish. Infused with nourishing oils that leave lips soft, plump, and hydrated all day.',
  shade: 'Orgasm — sheer peachy pink',
  finish: 'Glossy / Sheer',
  size: '2.2g / 0.07 oz',
  skin: 'All Skin Types',
  tags: ['Hydrating', 'Sheer Colour', 'Nourishing Oils'],
  swatches: ['#f8d0b8', '#f0b898', '#e09878'],
  img: 'Afterglow Lip Balm.jfif'
},



  bronzer: {
    name: 'Laguna Bronzing Powder',
    category: 'Cheek',
    price: 'PKR 9000',
    desc: 'The original NARS bronzer — a warm golden-brown bronzing powder that creates a naturally sun-kissed glow. Blend lightly for a subtle warmth or build up for a more intense bronzed finish.',
    shade: 'Laguna — warm golden brown',
    finish: 'Satin / Glowing',
    size: '8g / 0.28 oz',
    skin: 'Light to Medium Skin Tones',
    tags: ['Sun-Kissed', 'Buildable', 'Iconic'],
    swatches: ['#c8803a', '#a05820', '#e0a850', '#804018'],
    img: 'Laguna Bronzing Powder.jfif'
  }
  

};

// ===== OPEN PRODUCT MODAL =====
function openProductModal(id) {
  const p = PRODUCTS[id];
  if (!p) return;

  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalShade').textContent = p.shade;
  document.getElementById('modalFinish').textContent = p.finish;
  document.getElementById('modalSize').textContent = p.size;
  document.getElementById('modalSkin').textContent = p.skin;

  // Tags
  const tagsEl = document.getElementById('modalTags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // Shade swatches
  const swatchesEl = document.getElementById('modalSwatches');
  swatchesEl.innerHTML = p.swatches.map((c, i) =>
    `<div class="swatch ${i === 0 ? 'active' : ''}" style="background:${c}" title="${c}" onclick="selectSwatch(this)"></div>`
  ).join('');

  // Add to bag button
  const addBtn = document.getElementById('modalAddBag');
  addBtn.onclick = () => {
    addToBag(p.name);
  };

  // Wishlist button
  const wishBtn = document.getElementById('modalWishlist');
  wishBtn.onclick = () => {
    addToWishlist(p.name);
  };

  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectSwatch(el) {
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

// Close modal
document.getElementById('modalCloseBtn') && document.getElementById('modalCloseBtn').addEventListener('click', closeProductModal);
document.getElementById('productModal') && document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('productModal')) closeProductModal();
});

function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeVideoModal();
  }
});

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if (cursor) { cursor.style.left = (mx - 5) + 'px'; cursor.style.top = (my - 5) + 'px'; }
});
function animFollower() {
  fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12;
  if (follower) { follower.style.left = (fx - 15) + 'px'; follower.style.top = (fy - 15) + 'px'; }
  requestAnimationFrame(animFollower);
}
animFollower();

// ===== SCROLL FADE-UP =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.background = window.scrollY > 60
    ? (html.getAttribute('data-theme') === 'light' ? 'rgba(63, 56, 44, 0.99)' : 'rgba(5,5,5,0.99)')
    : '';
});

// ===== SEARCH =====
function toggleSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.classList.toggle('open');
  if (input.classList.contains('open')) input.focus(); else input.value = '';
}
const searchEl = document.getElementById('searchInput');
searchEl && searchEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const q = e.target.value.trim().toLowerCase();
    if (q) {
      const found = Object.values(PRODUCTS).filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
      if (found.length > 0) showToast('🔍 Found: ' + found.map(p => p.name).join(', '));
      else showToast('No products found for "' + q + '"');
      searchEl.classList.remove('open'); searchEl.value = '';
    }
  }
  if (e.key === 'Escape') { searchEl.classList.remove('open'); searchEl.value = ''; }
});

// ===== BAG =====
let bag = [];
let wishlist = [];

function addToBag(name) {
  if (!bag.includes(name)) {
    bag.push(name);
    showToast('🛍️ "' + name + '" added to bag!');
    document.querySelectorAll('.product-add').forEach(btn => {
      const n = btn.closest('.product-card')?.querySelector('.product-name')?.textContent;
      if (n === name) { btn.textContent = '✓ Added'; btn.style.background = '#2d7a2d'; }
    });
  } else {
    showToast('"' + name + '" is already in your bag!');
  }
}

function addToWishlist(name) {
  if (!wishlist.includes(name)) {
    wishlist.push(name);
    showToast('♡ "' + name + '" added to wishlist!');
  } else {
    showToast('"' + name + '" is already in your wishlist!');
  }
}

const bagBtn = document.getElementById('bagBtn');
bagBtn && bagBtn.addEventListener('click', () => {
  showBagModal();
});

function showBagModal() {
  const existing = document.getElementById('bagModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'bagModal';
  modal.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.7);
    z-index: 99999; display: flex; align-items: center; justify-content: center;
  `;

  const isDark = html.getAttribute('data-theme') === 'dark';
  const bg = isDark ? '#1a1a1a' : '#ffffff';
  const color = isDark ? '#f5f0eb' : '#1a1a1a';
  const border = '1px solid #b8955a';

  const total = bag.reduce((sum, name) => {
    const p = Object.values(PRODUCTS).find(p => p.name === name);
    const price = p ? parseInt(p.price.replace(/[^0-9]/g, '')) : 0;
    return sum + price;
  }, 0);

  const items = bag.length === 0
    ? `<p style="text-align:center; color:#888; margin:30px 0;">Your bag is empty</p>`
    : bag.map((name, i) => {
        const p = Object.values(PRODUCTS).find(p => p.name === name);
        return `
        <div style="display:flex; justify-content:space-between; align-items:center;
          padding: 12px 0; border-bottom: 1px solid #333;">
          <div>
            <div style="font-size:0.85rem;">${name}</div>
            <div style="font-size:0.75rem; color:#b8955a;">${p ? p.price : ''}</div>
          </div>
          <button onclick="removeFromBag(${i})" style="
            background: none; border: ${border}; color: #b8955a;
            padding: 4px 10px; cursor: pointer; font-size: 0.75rem;
            font-family: 'Montserrat', sans-serif;">Remove</button>
        </div>`;
      }).join('');

  modal.innerHTML = `
    <div style="background:${bg}; color:${color}; width:90%; max-width:520px;
      padding:30px; border:${border}; position:relative; max-height:90vh; overflow-y:auto;">
      <button onclick="document.getElementById('bagModal').remove()"
        style="position:absolute; top:15px; right:20px; background:none;
        border:none; color:${color}; font-size:1.2rem; cursor:pointer;">✕</button>

      <h3 style="font-family:'Playfair Display',serif; margin:0 0 20px;">
        Your Bag (${bag.length})
      </h3>

      ${items}

      ${bag.length > 0 ? `
        <div style="margin-top:16px; text-align:right; font-size:0.9rem;">
          Total: <strong style="color:#b8955a;">PKR ${total.toLocaleString()}</strong>
        </div>

        <hr style="border-color:#333; margin:20px 0;"/>

        <h4 style="font-family:'Playfair Display',serif; margin:0 0 16px;">
          Delivery Details
        </h4>

        <div style="display:flex; flex-direction:column; gap:10px;">
          <input id="orderName" type="text" placeholder="Full Name"
            style="padding:10px; background:transparent; border:${border};
            color:${color}; font-family:'Montserrat',sans-serif; font-size:0.8rem;"/>

          <input id="orderPhone" type="text" placeholder="Phone Number"
            style="padding:10px; background:transparent; border:${border};
            color:${color}; font-family:'Montserrat',sans-serif; font-size:0.8rem;"/>

          <input id="orderAddress" type="text" placeholder="Delivery Address"
            style="padding:10px; background:transparent; border:${border};
            color:${color}; font-family:'Montserrat',sans-serif; font-size:0.8rem;"/>

          <select id="orderCity"
            style="padding:10px; background:${bg}; border:${border};
            color:${color}; font-family:'Montserrat',sans-serif; font-size:0.8rem;">
            <option value="">-- Select City --</option>
            <option>Karachi</option>
            <option>Lahore</option>
            <option>Islamabad</option>
            <option>Rawalpindi</option>
            <option>Faisalabad</option>
            <option>Peshawar</option>
            <option>Quetta</option>
            <option>Multan</option>
          </select>

          <select id="orderPayment"
            style="padding:10px; background:${bg}; border:${border};
            color:${color}; font-family:'Montserrat',sans-serif; font-size:0.8rem;">
            <option value="">-- Payment Method --</option>
            <option>Cash on Delivery</option>
            <option>EasyPaisa</option>
            <option>JazzCash</option>
            <option>Bank Transfer</option>
          </select>
        </div>

        <button onclick="placeOrder()" style="
          margin-top:20px; width:100%; padding:14px;
          background:#b8955a; color:#fff; border:none;
          font-family:'Montserrat',sans-serif; font-size:0.8rem;
          letter-spacing:2px; cursor:pointer; text-transform:uppercase;">
          Place Order — PKR ${total.toLocaleString()}
        </button>
      ` : ''}
    </div>
  `;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });

  document.body.appendChild(modal);
}

function placeOrder() {
  const name = document.getElementById('orderName')?.value.trim();
  const phone = document.getElementById('orderPhone')?.value.trim();
  const address = document.getElementById('orderAddress')?.value.trim();
  const city = document.getElementById('orderCity')?.value;
  const payment = document.getElementById('orderPayment')?.value;

  if (!name || !phone || !address || !city || !payment) {
    showToast('⚠️ Please fill in all delivery details!');
    return;
  }

  const orderedItems = [...bag];
  bag = [];

  // Reset all buttons
  document.querySelectorAll('.product-add').forEach(btn => {
    btn.textContent = 'Add to Bag';
    btn.style.background = '';
  });

  document.getElementById('bagModal')?.remove();

  showOrderConfirmation(name, orderedItems, city, payment);
}

function showOrderConfirmation(name, items, city, payment) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.85);
    z-index: 99999; display: flex; align-items: center; justify-content: center;
  `;

  const isDark = html.getAttribute('data-theme') === 'dark';
  const bg = isDark ? '#1a1a1a' : '#ffffff';
  const color = isDark ? '#f5f0eb' : '#1a1a1a';

  modal.innerHTML = `
    <div style="background:${bg}; color:${color}; width:90%; max-width:440px;
      padding:40px; border:1px solid #b8955a; text-align:center;">
      <div style="font-size:2.5rem; margin-bottom:16px;">✓</div>
      <h3 style="font-family:'Playfair Display',serif; margin:0 0 10px; color:#b8955a;">
        Order Placed!
      </h3>
      <p style="font-size:0.85rem; margin:0 0 20px;">
        Thank you, <strong>${name}</strong>! Your order has been received.
      </p>
      <div style="text-align:left; font-size:0.8rem; border:1px solid #333;
        padding:16px; margin-bottom:20px; line-height:2;">
        <div><span style="color:#b8955a;">Items:</span> ${items.join(', ')}</div>
        <div><span style="color:#b8955a;">City:</span> ${city}</div>
        <div><span style="color:#b8955a;">Payment:</span> ${payment}</div>
      </div>
      <p style="font-size:0.75rem; color:#888; margin:0 0 20px;">
        We will contact you shortly to confirm your order.
      </p>
      <button onclick="this.closest('div[style]').remove()" style="
        padding:12px 30px; background:#b8955a; color:#fff;
        border:none; cursor:pointer; font-family:'Montserrat',sans-serif;
        font-size:0.75rem; letter-spacing:2px; text-transform:uppercase;">
        Continue Shopping
      </button>
    </div>
  `;

  document.body.appendChild(modal);
}

function removeFromBag(index) {
  const name = bag[index];
  bag.splice(index, 1);

  document.querySelectorAll('.product-add').forEach(btn => {
    const n = btn.closest('.product-card')?.querySelector('.product-name')?.textContent;
    if (n === name) { btn.textContent = 'Add to Bag'; btn.style.background = ''; }
  });

  showToast('"' + name + '" removed from bag!');
  showBagModal();
}

const wishlistBtn = document.getElementById('wishlistBtn');
wishlistBtn && wishlistBtn.addEventListener('click', () => {
  if (wishlist.length === 0) showToast('♡ Your wishlist is empty!');
  else showToast('♡ Wishlist: ' + wishlist.join(', '));
});

// ===== ADD TO BAG (product grid) =====
document.querySelectorAll('.product-add').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.product-card') || btn.closest('.col-card');
    const name = card?.querySelector('.product-name, .col-name')?.textContent;
    if (name) addToBag(name);
  });
});



// ===== SLIDER =====
const track = document.getElementById('sliderTrack');
if (track) {
  const cards = track.querySelectorAll('.slide-card');
  let idx = 0;
  const cardW = () => cards[0] ? cards[0].offsetWidth + 24 : 300;
  const maxIdx = () => Math.max(0, cards.length - Math.floor(track.parentElement.offsetWidth / cardW()));
  document.getElementById('nextBtn')?.addEventListener('click', () => {
    if (idx < maxIdx()) { idx++; track.style.transform = `translateX(-${idx * cardW()}px)`; }
  });
  document.getElementById('prevBtn')?.addEventListener('click', () => {
    if (idx > 0) { idx--; track.style.transform = `translateX(-${idx * cardW()}px)`; }
  });
}

// ===== VIDEO MODAL =====
const playBtn = document.querySelector('.play-btn');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const videoCloseBtn = document.getElementById('videoModalClose');

playBtn && playBtn.addEventListener('click', () => {
  if (videoModal) { videoModal.classList.add('open'); modalVideo?.play(); document.body.style.overflow = 'hidden'; }
});
videoCloseBtn && videoCloseBtn.addEventListener('click', closeVideoModal);
videoModal && videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });

function closeVideoModal() {
  if (videoModal) { videoModal.classList.remove('open'); document.body.style.overflow = ''; }
  if (modalVideo) { modalVideo.pause(); modalVideo.currentTime = 0; }
}

// ===== NEWSLETTER =====
const newsletterSubmit = document.querySelector('.newsletter-submit');
newsletterSubmit && newsletterSubmit.addEventListener('click', () => {
  const input = document.querySelector('.newsletter-input');
  if (input?.value.includes('@')) { showToast('✨ Subscribed! Welcome to the NARS world.'); input.value = ''; }
  else showToast('⚠️ Please enter a valid email address.');
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
contactForm && contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('contactName')?.value.trim();
  const email = document.getElementById('contactEmail')?.value.trim();
  const msg = document.getElementById('contactMsg')?.value.trim();
  if (!name || !email || !msg) { showToast('⚠️ Please fill in all fields!'); return; }
  if (!email.includes('@')) { showToast('⚠️ Enter a valid email address!'); return; }
  showToast('✅ Message sent! We\'ll contact you soon, ' + name + '!');
  contactForm.reset();
});

// ===== FILTER (collections page) =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.col-card').forEach(card => {
      const cat = card.getAttribute('data-cat');
      card.classList.toggle('hidden', filter !== 'all' && cat !== filter);
    });
  });
});

// ===== TOAST =====
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  const isDark = html.getAttribute('data-theme') === 'dark';
  toast.style.cssText = `
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
    background: ${isDark ? '#1a1a1a' : '#ffffff'};
    color: ${isDark ? '#f5f0eb' : '#1a1a1a'};
    border: 1px solid #b8955a;
    padding: 14px 28px; font-size: 0.75rem;
    letter-spacing: 1px; font-family: 'Montserrat', sans-serif;
    z-index: 99999; opacity: 0;
    transition: opacity 0.3s ease;
    white-space: nowrap; max-width: 90vw;
    box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.style.opacity = '1', 10);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
}