const DB = {
  products: [
    {
      id: 1,
      name: 'Aqua JADE RO Water Purifier',
      price: 8499,
      originalPrice: 10499,
      tech: 'RO+UV+Copper',
      capacity: '10L',
      waterstorage: '9L',
      stages: '6-stage',
      warranty: '1 Year',
      desc: 'Ideal for families having 4 to 5 Members.',
      fullDesc: 'Designed with advanced RO, UV, and Copper enrichment technology, this purifier effectively removes dissolved impurities, harmful bacteria, viruses, chlorine, heavy metals, and unpleasant odors while enhancing the water with the goodness of copper.',
      badge: '',
      popular: 3,
      colors: [
        { name: 'Aqua Green', hex: '#10878b', image: 'images/product1.png' },
        { name: 'Blue',  hex: '#87CEEB', image: 'images/jadeblue.png' }, 
        { name: 'Grey',  hex: '#555F6E', image: 'images/jadegrey.png' },
        { name: 'Comrade Blue',  hex: '#105c80', image: 'images/jadecomradeblue.png' },  
        { name: 'Black',  hex: '#000000', image: 'images/jadeblack.png' }, 
      ],
      image: 'images/product1.png'
    },
    {
      id: 2,
      name: 'Aqua Zuric Water Purifier',
      price: 9499,
      originalPrice: 11499,
      tech: 'RO+UV+UF+Copper+Alkaline Water',
      capacity: '12L',
      waterstorage: '9L',
      stages: '7-stage',
      warranty: '1 Year',
      desc: 'RO+UV dual purification with Copper which provides Alkaline Water.',
      fullDesc: 'Smart, Low-Maintenance Design Powered by advanced alkaline technology and featuring RO+UV+UF+Alkaline+Copper+Zinc+TDS Controller, the purifier guarantees 100% pure, mineral-rich, and healthy water with minimal maintenance.',
      badge: 'Best Seller',
      popular: 10,
      colors: [
        { name: 'Pearl White',    hex: '#F0EDE8', image: 'images/product2.png' },
        { name: 'Midnight Black', hex: '#1C1C1E', image: null },  
        { name: 'Ocean Blue',     hex: '#1A6EA8', image: null },  
      ],
      image: 'images/product2.png'
    },
    {
      id: 3,
      name: 'Aqua V5 Water Purifier',
      price: 9499,
      originalPrice: 11499,
      tech: 'BIO+H2AAA(Copper, Alkaline & Zinc)',
      capacity: '12L',
      waterstorage: '9L',
      stages: '7-stage',
      warranty: '1 Years',
      desc: '7-stage triple purification. LED TDS indicator with smart alerts.',
      fullDesc: 'Three-layer protection: BIO+H2AAA(Copper, Alkaline & Zinc) eliminates all types of contaminants. Smart LED display shows real-time TDS levels. Auto-flush, mineralizer, and 1-year comprehensive warranty included.',
      badge: 'Popular',
      popular: 8,
      colors: [
        { name: 'Sangria Maroon',      hex: '#6c2121', image: 'images/product3.png' },
        { name: 'Silky Silver',     hex: '#b5c9ca', image: 'images/v5silkysilver.png' },  
        { name: 'Dark Magnesium Grey', hex: '#9d9d9e', image: 'images/v5darkmagnesiumgrey.png' },  
        { name: 'Energy Blue', hex: '#316fba', image: 'images/v5energyblue.png' }, 
        { name: 'Mirror Black', hex: '#000000', image: 'images/v5mirrorblack.png' }, 
      ],
      image: 'images/product3.png'
    },
    {
      id: 4,
      name: 'Aqua ERA Water Purifier',
      price: 10499,
      originalPrice: 12499,
      tech: 'Copper+Alkaline+Zinc',
      capacity: '15L',
      waterstorage: '9L',
      stages: '7-stage',
      warranty: '1 Years',
      desc: 'Large family purifier. 7-stage purification with high flow rate.',
      fullDesc: 'Built for larger families (6+ members), the purifier delivers 9 litres of stored pure water with a flow rate of 1.5 L/min. 7-stage includes copper+zinc+alkaline media for added minerals and health benefits.',
      badge: 'Best Seller',
      popular: 6,
      colors: [
        { name: 'Silk Blue',   hex: '#108edc', image: 'images/product4.png' },
        { name: 'Urban Grey',    hex: '#708090', image: 'images/color.png' },  
        { name: 'Pearl White', hex: '#ffffff', image: 'images/erapearlwhite.png' },  
        { name: 'Forest Blue', hex: '#1668ba', image: 'images/eraforestblue.png' },
      ],
      image: 'images/product4.png'
    },
    {
      id: 5,
      name: 'Aqua 2090 RAGA Water Purifier',
      price: 10499,
      originalPrice: 12499,
      tech: 'RO+Alkaline+Copper+Zinc',
      capacity: '15L',
      waterstorage: '9L',
      stages: '7-stage',
      warranty: '1 Years',
      desc: 'Smart TDS controller. Auto-adjusts mineral levels for optimal taste.',
      fullDesc: 'The Elite TDS intelligently controls the TDS level of purified water with 9L stored water. Its proprietary TDS controller ensures minerals are retained at optimal levels (between 70-150 ppm) for best taste and health. 3-year warranty with 1 free AMC.',
      badge: 'New',
      popular: 7,
      colors: [
        { name: 'Arctic White', hex: '#F8FAFB', image: 'images/product5.png' },
        { name: 'Teal',         hex: '#0D9E88', image: null },  
        { name: 'Charcoal',     hex: '#36454F', image: null },  
      ],
      image: 'images/product5.png'
    },
    {
      id: 6,
      name: 'Aqua Purosis Water Purifier',
      price: 11799,
      originalPrice: 13799,
      tech: 'RO+UF+Alkaline+Copper+Zinc',
      capacity: '12L',
      waterstorage: '9L',
      stages: '7-stage',
      warranty: '1 Years',
      desc: '7-stage purification with copper-infused water for health benefits.',
      fullDesc: 'Our flagship Copper model infuses purified water with trace amounts of copper using a proprietary process. 7 stages include a copper chamber, and post-mineral cartridge.',
      badge: 'Popular',
      popular: 5,
      colors: [
        { name: 'White',     hex: '#FFFFFF', image: 'images/product6.png' },
        { name: 'Rose Gold', hex: '#B76E79', image: null },  
        { name: 'Navy Blue', hex: '#1B3A6B', image: null },  
      ],
      image: 'images/product6.png'
    },
    {
      id: 7,
      name: 'Aqua Purosis Water Purifier (Pureaqua)',
      price: 12499,
      originalPrice: 14499,
      tech: 'RO+UF+Alkaline+Copper+Zinc',
      capacity: '15L',
      waterstorage: '9L',
      stages: '7-stage',
      warranty: '1 Years',
      desc: 'Our most advanced model. 7-stage purification for borewell & hard water.',
      fullDesc: 'The ultimate purification machine for hard water areas and borewells. 7-stage process includes scale inhibitor, and alkaline cartridge. Also includes massive 15L capacity.',
      badge: 'Premium',
      popular: 4,
      colors: [
        { name: 'Pearl White',   hex: '#F5F0EB', image: 'images/product7.png' },
        { name: 'Metallic Grey', hex: '#A8B2BD', image: null },  
        { name: 'Matte Black',   hex: '#2C2C2C', image: null },  
      ],
      image: 'images/product7.png'
    },
    {
      id: 8,
      name: 'Aqua Purosis (Puroaqua Plus) Water Purifier',
      price: 13499,
      originalPrice: 15499,
      tech: 'RO+UF+Alkaline+Zinc+Minerals+TDS',
      capacity: '15L',
      waterstorage: '14L',
      stages: '8-stage',
      warranty: '1 Year',
      desc: 'Premium looking 8 stage verification heavy body water purifier.',
      fullDesc: 'Massive capacity of 15L with excellent build quality and huge water storage of 14L with Zinc and minerals and attractive Premium Metallic Grey colour.',
      badge: 'Premium',
      popular: 6,
      colors: [
        { name: 'Metallic Grey',   hex: '#A8B2BD', image: 'images/product8.png' },
        { name: 'Champagne Gold',  hex: '#C5A55A', image: null },  
        { name: 'Matte Black',     hex: '#2C2C2C', image: null },  
      ],
      image: 'images/product8.png'
    },
  ],

  enquiries: [
    { id:1, name:'Rajesh Kumar', phone:'9876543210', email:'rajesh@gmail.com', city:'Surat', product:'AQUA TECH RO Smart 10L', message:'Please send demo at home.', date:'2025-06-01', status:'contacted' },
    { id:2, name:'Priya Shah', phone:'9765432109', email:'priya@gmail.com', city:'Ahmedabad', product:'AQUA TECH RO Pro 15L', message:'Looking for family pack discount.', date:'2025-06-03', status:'new' },
    { id:3, name:'Ankit Patel', phone:'9654321098', email:'ankit@gmail.com', city:'Vadodara', product:'AQUA TECH RO Elite TDS 10L', message:'Want to know about AMC plans.', date:'2025-06-05', status:'converted' },
  ],

  serviceRequests: [
    { id:1, name:'Sunita Mehta', phone:'9543210987', type:'General Maintenance', city:'Surat', address:'Adajan, Surat', date:'2025-06-02', status:'done' },
    { id:2, name:'Mahesh Joshi', phone:'9432109876', type:'Filter Replacement', city:'Navsari', address:'Station Rd, Navsari', date:'2025-06-06', status:'pending' },
  ],

  reviews: [
    { id:1, name:'Neha Sharma', city:'Surat', rating:5, product:'Aqua Zuric Water Purifier', text:'Excellent quality! TDS has dropped from 820 to 35. Tastes amazing. The technician was very professional during installation.' },
    { id:2, name:'Vijay Nair', city:'Surat', rating:5, product:'Aqua ERA Water Purifier', text:'Using this for 2 years now. Never had any issues. Service team responds within hours. Highly recommend for families.' },
    { id:3, name:'Rekha Iyer', city:'Surat', rating:4, product:'Aqua Purosis Water Purifier (Pureaqua)', text:'The copper infusion feature is unique. Family loves the taste. Installation was quick. Good value for the price.' },
  ],
};

// ── App state ──
let compareList = [];
let editingProductId = null;
let wizardAnswers = {};



function selectColor(el, productId, colorName, colorImage) {
  // Highlight the selected swatch
  const container = el.closest('.color-swatches');
  if (container) container.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');

  // Update color name label
  const display = document.getElementById('color-name-' + productId);
  if (display) display.textContent = colorName;

  // Swap the product image if a color-specific image is provided
  if (colorImage) {
    // In product cards, the image is inside .product-img img
    const card = el.closest('.product-card');
    if (card) {
      const img = card.querySelector('.product-img img');
      if (img) img.src = colorImage;
    }
    // In detail page, the image is inside .product-detail-img img
    const detail = el.closest('.product-detail-info');
    if (detail) {
      // detail image sits in the sibling .product-detail-img column
      const detailImgWrap = document.querySelector('.product-detail-img img');
      if (detailImgWrap) detailImgWrap.src = colorImage;
    }
  }
}

//  PAGE NAVIGATION

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name)?.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'home') renderHomePage();
  if (name === 'products') renderProductsPage();
  if (name === 'by-price') renderByPricePage();
  if (name === 'compare') renderComparePage();
  if (name === 'contact') populateProductDropdowns();
  populateModalDropdown();
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}


//  RENDER HOME

function renderHomePage() {
  const featured = DB.products.slice(0, 4);
  document.getElementById('home-products').innerHTML = featured.map(p => productCardHTML(p)).join('');
  document.getElementById('home-reviews').innerHTML = DB.reviews.map(r => reviewCardHTML(r)).join('');
}


//  PRODUCT CARD HTML BUILDER


function productCardHTML(p, showCompare = true) {
  const badgeClass = p.badge === 'Popular' ? 'popular' : p.badge === 'Sale' ? 'sale' : '';
  const techClass = p.tech.includes('UF') ? 'uf' : p.tech.includes('UV') ? 'uv' : 'ro';

  // Image rendering: use real image if provided, else show placeholder emoji
  const imageContent = p.image
    ? `<img src="${p.image}" alt="${p.name}">`
    : `<div class="product-img-placeholder">💧</div>`;

  return `<div class="product-card" onclick="showDetail(${p.id})">
    <div class="product-img">
      ${imageContent}
      ${p.badge ? `<div class="product-badge ${badgeClass}">${p.badge}</div>` : ''}
    </div>
    <div class="product-body">
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-specs">
        ${p.tech.split('+').map(t => `<span class="spec-tag ${t.toLowerCase()}">${t}</span>`).join('')}
        <span class="spec-tag">${p.capacity}</span>
        <span class="spec-tag">${p.stages}</span>
      </div>
      ${p.colors && p.colors.length ? `
      <div class="color-options">
        <div class="color-options-label">Colors:</div>
        <div class="color-swatches">
          ${p.colors.map((c, i) => `<span class="color-swatch${i === 0 ? ' selected' : ''}${!c.image ? ' no-image' : ''}" style="background:${c.hex};" title="${c.name}${!c.image ? ' (image coming soon)' : ''}" onclick="event.stopPropagation();selectColor(this,'${p.id}','${c.name}',${c.image ? `'${c.image}'` : 'null'})"></span>`).join('')}
        </div>
        <div class="color-name-display" id="color-name-${p.id}">${p.colors[0].name}</div>
      </div>` : ''}
      <div>
        <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
        ${p.originalPrice ? `<span class="product-price-old">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();enquireProduct('${p.name}')">Enquire</button>
        <button class="btn btn-outline btn-sm" onclick="event.stopPropagation();showDetail(${p.id})">Details</button>
      </div>
      ${showCompare ? `<label class="product-compare-check" onclick="event.stopPropagation()">
        <input type="checkbox" id="cmp-${p.id}" ${compareList.includes(p.id) ? 'checked' : ''} onchange="toggleCompare(${p.id})">
        Add to Compare
      </label>` : ''}
    </div>
  </div>`;
}

function reviewCardHTML(r) {
  const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  const initials = r.name.split(' ').map(n => n[0]).join('');
  return `<div class="testimonial-card">
    <div class="testimonial-stars">${stars}</div>
    <div class="testimonial-text">"${r.text}"</div>
    <div class="testimonial-author">
      <div class="author-avatar">${initials}</div>
      <div>
        <div class="author-name">${r.name}</div>
        <div class="author-city">📍 ${r.city} · ${r.product}</div>
      </div>
    </div>
  </div>`;
}

// ══════════════════════════════════════════════════════
//  PRODUCTS PAGE
// ══════════════════════════════════════════════════════
function renderProductsPage() {
  filterProducts();
}

function filterProducts() {
  const search = (document.getElementById('product-search')?.value || '').toLowerCase();
  const tech = document.getElementById('filter-tech')?.value || '';
  const capacity = document.getElementById('filter-capacity')?.value || '';
  const sortBy = document.getElementById('sort-by')?.value || '';

  let filtered = DB.products.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.tech.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search);
    const matchTech = !tech || p.tech === tech;
    const matchCap = !capacity || p.capacity === capacity;
    return matchSearch && matchTech && matchCap;
  });

  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'popular') filtered.sort((a, b) => b.popular - a.popular);

  const grid = document.getElementById('all-products-grid');
  const noResults = document.getElementById('no-results');
  if (filtered.length === 0) { grid.innerHTML = ''; noResults.style.display = 'block'; }
  else { noResults.style.display = 'none'; grid.innerHTML = filtered.map(p => productCardHTML(p)).join(''); }
}

// ══════════════════════════════════════════════════════
//  BY PRICE PAGE
// ══════════════════════════════════════════════════════
function renderByPricePage() {
  const ranges = [
    { label: '₹8,000 – ₹10,000', min: 8000, max: 10000 },
    { label: '₹10,000 – ₹12,000', min: 10000, max: 12000 },
    { label: 'Above ₹12,000', min: 11999, max: Infinity },
  ];
  let html = '';
  ranges.forEach(r => {
    const products = DB.products.filter(p => p.price >= r.min && p.price < r.max);
    if (products.length > 0) {
      html += `<div class="price-section">
        <div class="price-section-header">
          <div class="price-range-badge">${r.label}</div>
          <span style="color:var(--gray-400);font-size:0.85rem;">${products.length} model${products.length > 1 ? 's' : ''}</span>
        </div>
        <div class="products-grid">${products.map(p => productCardHTML(p)).join('')}</div>
      </div>`;
    }
  });
  document.getElementById('price-range-sections').innerHTML = html;
}

// ══════════════════════════════════════════════════════
//  PRODUCT DETAIL

function showDetail(id) {
  const p = DB.products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('detail-breadcrumb').textContent = p.name;
  const savings = p.originalPrice ? p.originalPrice - p.price : 0;

  // Large image for detail page — uses product image or placeholder
  const detailImage = p.image
    ? `<img src="${p.image}" alt="${p.name}" style="max-width:100%;border-radius:12px;object-fit:contain;max-height:300px;">`
    : `<div class="placeholder-img">💧</div>`;

  document.getElementById('product-detail-content').innerHTML = `
    <div class="product-detail-img">
      ${detailImage}
      ${p.badge ? `<div style="margin-top:1rem;"><span class="product-badge ${p.badge === 'Popular' ? 'popular' : ''}" style="position:static;display:inline-block;">${p.badge}</span></div>` : ''}
    </div>
    <div class="product-detail-info">
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">
        ${p.tech.split('+').map(t => `<span class="spec-tag ${t.toLowerCase()}">${t}</span>`).join('')}
      </div>
      <h1>${p.name}</h1>
      <div class="detail-price">₹${p.price.toLocaleString('en-IN')} ${p.originalPrice ? `<span>₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
        ${savings > 0 ? `<span style="font-size:0.9rem;color:#16a34a;font-weight:700;"> · Save ₹${savings.toLocaleString('en-IN')}</span>` : ''}
      </div>
      <p style="color:var(--gray-600);margin-bottom:1.5rem;">${p.fullDesc || p.desc}</p>
      <table class="specs-table">
        <tr><td>Capacity</td><td>${p.capacity}</td></tr>
        <tr><td>Water Storage</td><td>${p.waterstorage}</td></tr>
        <tr><td>Technology</td><td>${p.tech}</td></tr>
        <tr><td>Purification Stages</td><td>${p.stages}</td></tr>
        <tr><td>Warranty</td><td>${p.warranty}</td></tr>
        <tr><td>Suitable For</td><td>Borewell, Municipal, Tanker</td></tr>
        <tr><td>Power Consumption</td><td>24W</td></tr>
        <tr><td>Installation</td><td>Installation Charges depends on customer location</td></tr>
      </table>
      ${p.colors && p.colors.length ? `
      <div class="color-options color-options-detail">
        <div class="color-options-label">Available Colors:</div>
        <div class="color-swatches">
          ${p.colors.map((c, i) => `<span class="color-swatch color-swatch-lg${i === 0 ? ' selected' : ''}${!c.image ? ' no-image' : ''}" style="background:${c.hex};" title="${c.name}${!c.image ? ' (image coming soon)' : ''}" onclick="selectColor(this,'${p.id}-detail','${c.name}',${c.image ? `'${c.image}'` : 'null'})"></span>`).join('')}
        </div>
        <div class="color-name-display" id="color-name-${p.id}-detail">${p.colors[0].name}</div>
      </div>` : ''}
      <div class="detail-btns">
        <button class="btn btn-primary" onclick="enquireProduct('${p.name}')">📋 Enquire Now</button>
        <a class="btn btn-green" href="https://wa.me/8866338111?text=Hi%20AQUA TECH RO!%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}.%20Please%20provide%20more%20details." target="_blank">💬 WhatsApp</a>
        <button class="btn btn-outline btn-sm" onclick="toggleCompare(${p.id})">⚖️ Compare</button>
      </div>
    </div>
  `;
  const prodReviews = DB.reviews.filter(r => r.product === p.name);
  document.getElementById('detail-reviews').innerHTML = prodReviews.length > 0
    ? `<div class="testimonials-grid">${prodReviews.map(r => reviewCardHTML(r)).join('')}</div>`
    : `<p style="color:var(--gray-400);">No reviews yet for this model.</p>`;
  showPage('detail');
}

// ══════════════════════════════════════════════════════
//  COMPARE
// ══════════════════════════════════════════════════════
function toggleCompare(id) {
  if (compareList.includes(id)) {
    compareList = compareList.filter(x => x !== id);
  } else {
    if (compareList.length >= 3) { alert('You can compare up to 3 products at a time.'); return; }
    compareList.push(id);
  }
  updateCompareBar();
  document.querySelectorAll('[id^="cmp-"]').forEach(el => {
    const pid = parseInt(el.id.split('-')[1]);
    el.checked = compareList.includes(pid);
  });
}

function updateCompareBar() {
  const bar = document.getElementById('compare-bar');
  const items = document.getElementById('compare-items-bar');
  if (compareList.length === 0) { bar.classList.remove('visible'); return; }
  bar.classList.add('visible');
  items.innerHTML = compareList.map(id => {
    const p = DB.products.find(x => x.id === id);
    return `<div class="compare-item-pill">${p.name} <button onclick="toggleCompare(${id})">✕</button></div>`;
  }).join('');
}

function clearCompare() { compareList = []; updateCompareBar(); }

function goCompare() {
  if (compareList.length < 2) { alert('Please select at least 2 products to compare.'); return; }
  renderComparePage();
  showPage('compare');
}

function renderComparePage() {
  const products = compareList.map(id => DB.products.find(x => x.id === id));
  if (products.length < 2) { document.getElementById('compare-table-wrap').innerHTML = '<p style="text-align:center;color:var(--gray-400);padding:3rem;">Select 2-3 products from the product list to compare.</p>'; return; }
  const rows = [
    ['Price', p => `₹${p.price.toLocaleString('en-IN')}`],
    ['Technology', p => p.tech],
    ['Capacity', p => p.capacity],
    ['Purification Stages', p => p.stages],
    ['Warranty', p => p.warranty],
    ['Power Consumption', () => '24W'],
    ['Suitable For', () => 'All water sources'],
    ['Maintenance Cost', p => p.price < 8000 ? '~₹800/yr' : p.price < 15000 ? '~₹1,200/yr' : '~₹1,800/yr'],
  ];
  document.getElementById('compare-table-wrap').innerHTML = `
    <table class="compare-table">
      <thead><tr><th>Feature</th>${products.map(p => `<th>${p.name}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(([label, fn]) => `<tr><td>${label}</td>${products.map(p => `<td>${fn(p)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>`;
}

// ══════════════════════════════════════════════════════
//  RECOMMENDATION WIZARD
// ══════════════════════════════════════════════════════
function initWizard() {
  wizardAnswers = {};
  const steps = [
    { q: 'How many people are in your family?', key: 'family', options: [{ icon: '👤', label: '1–2 People' }, { icon: '👨‍👩‍👧', label: '3–4 People' }, { icon: '👨‍👩‍👧‍👦', label: '5–6 People' }, { icon: '🏠', label: '7+ People' }] },
    { q: 'What is your primary water source?', key: 'source', options: [{ icon: '🌊', label: 'Borewell' }, { icon: '🏙️', label: 'Municipal' }, { icon: '🚛', label: 'Tanker Water' }, { icon: '🤷', label: 'Mixed/Unknown' }] },
    { q: 'What is your budget range?', key: 'budget', options: [{ icon: '💵', label: 'Under ₹5,000' }, { icon: '💰', label: '₹5K–₹10K' }, { icon: '💎', label: '₹10K–₹15K' }, { icon: '👑', label: '₹15K+' }] },
    { q: 'Daily water usage?', key: 'usage', options: [{ icon: '🥤', label: 'Up to 10L' }, { icon: '🚰', label: '10–20L' }, { icon: '💧', label: '20–30L' }, { icon: '🏊', label: '30L+' }] },
  ];
  const progress = document.getElementById('wizard-progress');
  progress.innerHTML = steps.map((_, i) => `<div class="wizard-progress-dot" id="wdot-${i}"></div>`).join('');
  const stepsDiv = document.getElementById('wizard-steps');
  stepsDiv.innerHTML = steps.map((step, i) => `
    <div class="wizard-step ${i === 0 ? 'active' : ''}" id="wstep-${i}">
      <div class="wizard-title">Q${i + 1}. ${step.q}</div>
      <div class="wizard-options">
        ${step.options.map((opt) => `<div class="wizard-option" onclick="selectWizardOption(${i},'${opt.label}','${step.key}',${steps.length})">
          <div class="wizard-option-icon">${opt.icon}</div>
          <div class="wizard-option-label">${opt.label}</div>
        </div>`).join('')}
      </div>
    </div>`).join('') + `<div class="wizard-step" id="wstep-result"><div id="wizard-result"></div></div>`;
  document.getElementById('wdot-0').classList.add('done');
}

function selectWizardOption(stepIdx, value, key, total) {
  wizardAnswers[key] = value;
  document.querySelectorAll(`#wstep-${stepIdx} .wizard-option`).forEach(o => o.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
  setTimeout(() => {
    document.getElementById(`wstep-${stepIdx}`)?.classList.remove('active');
    const nextIdx = stepIdx + 1;
    if (nextIdx < total) {
      document.getElementById(`wstep-${nextIdx}`)?.classList.add('active');
      document.getElementById(`wdot-${nextIdx}`)?.classList.add('done');
    } else {
      document.getElementById('wstep-result')?.classList.add('active');
      showWizardResult();
    }
  }, 300);
}

function showWizardResult() {
  const budget = wizardAnswers.budget || '';
  const family = wizardAnswers.family || '';
  const source = wizardAnswers.source || '';
  let recommended = DB.products.filter(p => {
    if (budget.includes('8K–10K') && (p.price <= 8000 || p.price >= 10000)) return false;
    if (budget.includes('10K–12K') && (p.price <= 10000 || p.price >= 12000)) return false;
    if (budget.includes('12K+') && p.price < 15000) return false;
    if ((family.includes('5–6') || family.includes('7+')) && p.capacity === '7L') return false;
    if (source === 'Borewell' && !p.tech.includes('UF')) return false;
    return true;
  });
  if (recommended.length === 0) recommended = DB.products.slice(0, 2);
  recommended = recommended.slice(0, 3);
  document.getElementById('wizard-result').innerHTML = `
    <div style="margin-bottom:1.5rem;">
      <div style="font-size:1.3rem;font-weight:800;color:var(--gray-900);margin-bottom:0.5rem;">🎉 Your Recommended Models</div>
      <p style="color:var(--gray-500);font-size:0.9rem;">Based on your answers, these models are the best fit:</p>
    </div>
    ${recommended.map((p, i) => `
      <div class="wizard-result-card" onclick="showDetail(${p.id})">
        ${i === 0 ? `<div class="wizard-result-badge">⭐ Best Match</div>` : ''}
        <div style="display:flex;justify-content:space-between;align-items:start;">
          <div>
            <div style="font-weight:700;font-size:1.05rem;">${p.name}</div>
            <div style="font-size:0.85rem;color:var(--gray-500);margin-top:4px;">${p.desc}</div>
            <div style="display:flex;gap:0.5rem;margin-top:0.75rem;flex-wrap:wrap;">${p.tech.split('+').map(t => `<span class="spec-tag ${t.toLowerCase()}">${t}</span>`).join('')}<span class="spec-tag">${p.capacity}</span></div>
          </div>
          <div style="text-align:right;flex-shrink:0;margin-left:1rem;">
            <div style="font-size:1.25rem;font-weight:800;color:var(--blue-600);">₹${p.price.toLocaleString('en-IN')}</div>
            <div style="font-size:0.75rem;color:var(--gray-400);">${p.warranty} warranty</div>
          </div>
        </div>
      </div>`).join('')}
    <div style="display:flex;gap:0.75rem;margin-top:1.5rem;flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="enquireProduct('${recommended[0].name}')">📋 Enquire on Best Match</button>
      <button class="btn btn-outline" onclick="initWizard()">🔄 Start Over</button>
    </div>`;
}

// ══════════════════════════════════════════════════════
//  ENQUIRY
// ══════════════════════════════════════════════════════
function openEnquiry(productName) {
  const modal = document.getElementById('enquiry-modal');
  modal.style.display = 'flex';
  if (productName) {
    const sel = document.getElementById('m-product');
    for (let i = 0; i < sel.options.length; i++) {
      if (sel.options[i].value === productName) { sel.selectedIndex = i; break; }
    }
  }
}
function closeEnquiry() { document.getElementById('enquiry-modal').style.display = 'none'; }
function enquireProduct(name) { openEnquiry(name); }

function populateModalDropdown() {
  ['m-product', 'c-product'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    const current = sel.value;
    sel.innerHTML = `<option value="">Select product (optional)</option>` + DB.products.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
    sel.value = current;
  });
}

function populateProductDropdowns() {
  populateModalDropdown();
}

function submitEnquiry(e, successId) {
  e.preventDefault();
  const prefix = successId === 'modal-success' ? 'm' : 'c';
  const newEnq = {
    id: DB.enquiries.length + 1,
    name: document.getElementById(prefix + '-name')?.value || '',
    phone: document.getElementById(prefix + '-phone')?.value || '',
    email: document.getElementById(prefix + '-email')?.value || '',
    city: document.getElementById(prefix + '-city')?.value || '',
    product: document.getElementById(prefix + '-product')?.value || '',
    message: document.getElementById(prefix + '-message')?.value || '',
    date: new Date().toISOString().split('T')[0],
    status: 'new',
  };
  DB.enquiries.unshift(newEnq);
  document.getElementById(successId).style.display = 'block';
  setTimeout(() => {
    document.getElementById(successId).style.display = 'none';
    if (successId === 'modal-success') closeEnquiry();
  }, 3000);
  e.target.reset();
}

function submitServiceForm(e) {
  e.preventDefault();
  const req = {
    id: DB.serviceRequests.length + 1,
    name: document.getElementById('svc-name').value,
    phone: document.getElementById('svc-phone').value,
    type: document.getElementById('svc-type').value,
    city: document.getElementById('svc-city').value,
    address: document.getElementById('svc-address').value,
    date: new Date().toISOString().split('T')[0],
    status: 'pending',
  };
  DB.serviceRequests.unshift(req);
  document.getElementById('service-success').style.display = 'block';
  setTimeout(() => document.getElementById('service-success').style.display = 'none', 3000);
  e.target.reset();
}

// ══════════════════════════════════════════════════════
//  ADMIN
// ══════════════════════════════════════════════════════
function adminLogin() {
  const user = document.getElementById('admin-user').value;
  const pass = document.getElementById('admin-pass').value;
  if (user === 'admin' && pass === 'admin123') {
    document.getElementById('admin-login-section').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
    renderAdminAnalytics();
    renderAdminProducts();
    renderAdminEnquiries();
    renderAdminServiceRequests();
    renderAdminReviews();
  } else {
    alert('Invalid credentials. Try admin / admin123');
  }
}

function adminLogout() {
  document.getElementById('admin-login-section').style.display = 'block';
  document.getElementById('admin-dashboard').style.display = 'none';
}

function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach((t, i) => {
    const tabs = ['analytics', 'products', 'enquiries', 'service-req', 'reviews'];
    t.classList.toggle('active', tabs[i] === tab);
  });
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.getElementById('admin-' + tab)?.classList.add('active');
}

function renderAdminAnalytics() {
  document.getElementById('analytics-grid').innerHTML = `
    <div class="analytics-card"><div class="analytics-num">${DB.products.length}</div><div class="analytics-label">Total Products</div></div>
    <div class="analytics-card"><div class="analytics-num">${DB.enquiries.length}</div><div class="analytics-label">Total Enquiries</div></div>
    <div class="analytics-card"><div class="analytics-num">${DB.serviceRequests.length}</div><div class="analytics-label">Service Requests</div></div>
    <div class="analytics-card"><div class="analytics-num">${DB.enquiries.filter(e => e.status === 'converted').length}</div><div class="analytics-label">Conversions</div></div>
    <div class="analytics-card"><div class="analytics-num">${DB.reviews.length}</div><div class="analytics-label">Reviews</div></div>
    <div class="analytics-card"><div class="analytics-num">${DB.enquiries.filter(e => e.status === 'new').length}</div><div class="analytics-label">New Enquiries</div></div>
  `;
  const recent = DB.enquiries.slice(0, 5);
  document.getElementById('admin-recent-enquiries').innerHTML = `<table class="admin-table"><thead><tr><th>Name</th><th>Phone</th><th>Product</th><th>Date</th><th>Status</th></tr></thead><tbody>${recent.map(e => `<tr><td>${e.name}</td><td>${e.phone}</td><td>${e.product || '–'}</td><td>${e.date}</td><td><span class="status-badge status-${e.status}">${e.status}</span></td></tr>`).join('')}</tbody></table>`;
}

function renderAdminProducts() {
  document.getElementById('admin-products-table').innerHTML = DB.products.map(p => `<tr>
    <td>${p.id}</td>
    <td><strong>${p.name}</strong></td>
    <td>₹${p.price.toLocaleString('en-IN')}</td>
    <td>${p.tech}</td>
    <td>${p.capacity}</td>
    <td>${p.warranty}</td>
    <td class="admin-actions">
      <button class="admin-btn admin-btn-edit" onclick="editProduct(${p.id})">Edit</button>
      <button class="admin-btn admin-btn-delete" onclick="deleteProduct(${p.id})">Delete</button>
    </td>
  </tr>`).join('');
}

function renderAdminEnquiries(filter = '') {
  const list = filter ? DB.enquiries.filter(e => e.name.toLowerCase().includes(filter) || e.phone.includes(filter) || (e.product || '').toLowerCase().includes(filter)) : DB.enquiries;
  document.getElementById('admin-enquiries-table').innerHTML = list.map(e => `<tr>
    <td>${e.id}</td><td>${e.name}</td><td>${e.phone}</td>
    <td>${e.product || '–'}</td><td>${e.city || '–'}</td><td>${e.date}</td>
    <td>
      <select class="filter-select" style="padding:3px 8px;font-size:0.75rem;" onchange="updateEnquiryStatus(${e.id},this.value)">
        <option ${e.status === 'new' ? 'selected' : ''}>new</option>
        <option ${e.status === 'contacted' ? 'selected' : ''}>contacted</option>
        <option ${e.status === 'converted' ? 'selected' : ''}>converted</option>
      </select>
    </td>
  </tr>`).join('');
}

function renderAdminServiceRequests() {
  document.getElementById('admin-service-table').innerHTML = DB.serviceRequests.map(r => `<tr>
    <td>${r.id}</td><td>${r.name}</td><td>${r.phone}</td>
    <td>${r.type}</td><td>${r.city}</td><td>${r.date}</td>
    <td class="admin-actions">
      <select class="filter-select" style="padding:3px 8px;font-size:0.75rem;" onchange="updateServiceStatus(${r.id},this.value)">
        <option ${r.status === 'pending' ? 'selected' : ''}>pending</option>
        <option ${r.status === 'done' ? 'selected' : ''}>done</option>
      </select>
    </td>
  </tr>`).join('');
}

function renderAdminReviews() {
  const sel = document.getElementById('rf-product');
  if (sel) sel.innerHTML = DB.products.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
  document.getElementById('admin-reviews-table').innerHTML = DB.reviews.map(r => `<tr>
    <td>${r.id}</td><td>${r.name}</td><td>${r.city}</td>
    <td>${'★'.repeat(r.rating)}</td>
    <td style="font-size:0.78rem;">${r.product}</td>
    <td style="font-size:0.8rem;max-width:200px;">${r.text.substring(0, 80)}...</td>
    <td class="admin-actions">
      <button class="admin-btn admin-btn-delete" onclick="deleteReview(${r.id})">Delete</button>
    </td>
  </tr>`).join('');
}

function searchEnquiries(val) { renderAdminEnquiries(val.toLowerCase()); }
function updateEnquiryStatus(id, status) { const e = DB.enquiries.find(x => x.id === id); if (e) e.status = status; renderAdminAnalytics(); }
function updateServiceStatus(id, status) { const r = DB.serviceRequests.find(x => x.id === id); if (r) r.status = status; renderAdminAnalytics(); }

function toggleProductForm() {
  const form = document.getElementById('product-form');
  form.classList.toggle('visible');
  if (!form.classList.contains('visible')) {
    editingProductId = null;
    document.getElementById('product-form-title').textContent = 'Add New Product';
    ['pf-name', 'pf-price', 'pf-original-price', 'pf-stages', 'pf-warranty', 'pf-desc', 'pf-full-desc', 'pf-colors'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  }
}

function editProduct(id) {
  const p = DB.products.find(x => x.id === id);
  if (!p) return;
  editingProductId = id;
  document.getElementById('product-form-title').textContent = 'Edit Product';
  document.getElementById('pf-name').value = p.name;
  document.getElementById('pf-price').value = p.price;
  document.getElementById('pf-original-price').value = p.originalPrice || '';
  document.getElementById('pf-tech').value = p.tech;
  document.getElementById('pf-capacity').value = p.capacity;
  document.getElementById('pf-stages').value = p.stages;
  document.getElementById('pf-warranty').value = p.warranty;
  document.getElementById('pf-badge').value = p.badge || '';
  document.getElementById('pf-desc').value = p.desc;
  document.getElementById('pf-full-desc').value = p.fullDesc || '';
  if (document.getElementById('pf-colors')) {
    document.getElementById('pf-colors').value = (p.colors || []).map(c => c.name).join(', ');
  }
  document.getElementById('product-form').classList.add('visible');
  document.getElementById('product-form').scrollIntoView({ behavior: 'smooth' });
}

function saveProduct() {
  const colorsRaw = document.getElementById('pf-colors')?.value || '';
  const colors = colorsRaw.split(',').map(s => s.trim()).filter(Boolean).map(name => {
    const colorMap = {
      'white': '#FFFFFF', 'black': '#2C2C2C', 'grey': '#A8B2BD', 'gray': '#A8B2BD',
      'blue': '#1A6EA8', 'red': '#C0392B', 'silver': '#C0C0C0', 'gold': '#C5A55A',
      'teal': '#0D9E88', 'copper': '#8C5A3C', 'rose gold': '#B76E79',
    };
    const hex = colorMap[name.toLowerCase()] || '#AAAAAA';
    return { name, hex };
  });
  const data = {
    name: document.getElementById('pf-name').value,
    price: parseInt(document.getElementById('pf-price').value),
    originalPrice: parseInt(document.getElementById('pf-original-price').value) || 0,
    tech: document.getElementById('pf-tech').value,
    capacity: document.getElementById('pf-capacity').value,
    stages: document.getElementById('pf-stages').value,
    warranty: document.getElementById('pf-warranty').value,
    badge: document.getElementById('pf-badge').value,
    desc: document.getElementById('pf-desc').value,
    fullDesc: document.getElementById('pf-full-desc').value,
    colors: colors.length ? colors : [{ name: 'White', hex: '#FFFFFF' }],
    popular: 5,
    image: '', // Set image path here after adding to images/products/
  };
  if (!data.name || !data.price) { alert('Name and Price are required.'); return; }
  if (editingProductId) {
    const idx = DB.products.findIndex(x => x.id === editingProductId);
    DB.products[idx] = { ...DB.products[idx], ...data };
  } else {
    data.id = Math.max(...DB.products.map(x => x.id)) + 1;
    DB.products.push(data);
  }
  renderAdminProducts();
  renderAdminAnalytics();
  toggleProductForm();
}

function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  const idx = DB.products.findIndex(x => x.id === id);
  DB.products.splice(idx, 1);
  renderAdminProducts();
  renderAdminAnalytics();
}

function toggleReviewForm() { document.getElementById('review-form').classList.toggle('visible'); }

function saveReview() {
  const r = {
    id: DB.reviews.length + 1,
    name: document.getElementById('rf-name').value,
    city: document.getElementById('rf-city').value,
    rating: parseInt(document.getElementById('rf-rating').value),
    product: document.getElementById('rf-product').value,
    text: document.getElementById('rf-text').value,
  };
  if (!r.name || !r.text) { alert('Name and review text required.'); return; }
  DB.reviews.unshift(r);
  renderAdminReviews();
  toggleReviewForm();
}

function deleteReview(id) {
  if (!confirm('Delete this review?')) return;
  DB.reviews.splice(DB.reviews.findIndex(x => x.id === id), 1);
  renderAdminReviews();
}

// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════
window.onclick = function (e) {
  const modal = document.getElementById('enquiry-modal');
  if (e.target === modal) closeEnquiry();
};

renderHomePage();
populateModalDropdown();
