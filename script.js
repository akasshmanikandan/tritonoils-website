const categories = [
  {
    id: "marine-engine-oils",
    name: "Marine Engine Oils",
    image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&w=900&q=80",
    description: "Lubricants formulated for marine diesel engines to support wear protection, cleanliness, and efficient performance.",
    uses: ["Main and auxiliary engines", "Fleet maintenance", "Vessel engine rooms"],
    benefits: ["Wear protection", "Deposit control", "Operational reliability"]
  },
  {
    id: "cylinder-oils",
    name: "Cylinder Oils",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80",
    description: "High-performance cylinder lubrication solutions for large marine engines operating under demanding conditions.",
    uses: ["Large marine engines", "Crosshead engine lubrication", "Long voyage operations"],
    benefits: ["Cylinder protection", "Cleanliness support", "Load-bearing performance"]
  },
  {
    id: "hydraulic-oils",
    name: "Hydraulic Oils",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    description: "Reliable hydraulic fluids designed for marine systems, industrial equipment, and heavy-duty hydraulic applications.",
    uses: ["Hydraulic presses", "Deck machinery", "Heavy equipment"],
    benefits: ["Stable viscosity", "Pump protection", "System cleanliness"]
  },
  {
    id: "gear-oils",
    name: "Gear Oils",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    description: "High-load gear lubrication solutions for marine gearboxes, industrial gear systems, and rotating equipment.",
    uses: ["Gearboxes", "Rotating equipment", "Industrial drives"],
    benefits: ["Load protection", "Reduced wear", "Smooth operation"]
  },
  {
    id: "compressor-oils",
    name: "Compressor Oils",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=900&q=80",
    description: "Lubricants engineered for air compressors and industrial compressor systems requiring dependable thermal stability and performance.",
    uses: ["Air compressors", "Plant utilities", "Industrial systems"],
    benefits: ["Thermal stability", "Oxidation resistance", "Clean operation"]
  },
  {
    id: "turbine-oils",
    name: "Turbine Oils",
    image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=900&q=80",
    description: "High-quality oils developed to support smooth turbine operation and system protection.",
    uses: ["Steam turbines", "Gas turbines", "Power systems"],
    benefits: ["Oxidation control", "Water separation", "Bearing protection"]
  },
  {
    id: "greases",
    name: "Greases",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    description: "Multi-purpose and specialty greases for bearings, joints, marine machinery, and industrial equipment.",
    uses: ["Bearings", "Joints", "Marine machinery"],
    benefits: ["Adhesion", "Load support", "Corrosion resistance"]
  },
  {
    id: "transmission-fluids",
    name: "Transmission Fluids",
    image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&w=900&q=80",
    description: "Fluids designed to support smooth power transmission and operational efficiency.",
    uses: ["Fleet transmissions", "Heavy equipment", "Industrial powertrains"],
    benefits: ["Smooth shifting", "Friction control", "Component protection"]
  },
  {
    id: "heat-transfer-oils",
    name: "Heat Transfer Oils",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80",
    description: "Thermal fluid solutions for industrial heat transfer systems.",
    uses: ["Thermal systems", "Process plants", "Heating circuits"],
    benefits: ["Thermal stability", "Heat transfer efficiency", "Long service support"]
  },
  {
    id: "circulating-oils",
    name: "Circulating Oils",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80",
    description: "Lubricants suitable for continuous circulation systems in industrial and marine applications.",
    uses: ["Circulating systems", "Bearings", "Industrial machinery"],
    benefits: ["Continuous protection", "System cleanliness", "Oxidation resistance"]
  },
  {
    id: "rust-preventive-oils",
    name: "Rust Preventive Oils",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    description: "Protective oils formulated to reduce corrosion and safeguard components during storage and operation.",
    uses: ["Stored components", "Marine spares", "Machined parts"],
    benefits: ["Corrosion protection", "Surface coverage", "Storage reliability"]
  },
  {
    id: "transformer-oils",
    name: "Transformer Oils",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    description: "Insulating and cooling oils for transformer and electrical equipment applications.",
    uses: ["Transformers", "Electrical equipment", "Power distribution"],
    benefits: ["Insulation", "Cooling support", "Electrical stability"]
  },
  {
    id: "refrigeration-oils",
    name: "Refrigeration Oils",
    image: "https://images.unsplash.com/photo-1581091870622-1e7e7f289661?auto=format&fit=crop&w=900&q=80",
    description: "Lubricants for refrigeration and cooling systems requiring stability and system compatibility.",
    uses: ["Refrigeration systems", "Cooling plants", "Compressors"],
    benefits: ["System compatibility", "Low-temperature support", "Stable operation"]
  },
  {
    id: "specialty-lubricants",
    name: "Specialty Lubricants",
    image: "https://images.unsplash.com/photo-1581091012184-7f9f23f49d6d?auto=format&fit=crop&w=900&q=80",
    description: "Tailored solutions for niche operating environments and specialized equipment requirements.",
    uses: ["Special equipment", "Unique operating conditions", "Technical applications"],
    benefits: ["Application fit", "Problem solving", "Technical selection"]
  },
  {
    id: "industrial-lubricants",
    name: "Industrial Lubricants",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
    description: "A broader category covering general industrial oil solutions across sectors.",
    uses: ["Factories", "Construction", "Engineering operations"],
    benefits: ["Broad coverage", "Maintenance support", "Procurement simplicity"]
  }
];

const products = [
  {
    id: "marine-engine-oil-15w40",
    name: "Triton Marine Engine Oil 15W-40",
    category: "Marine Engine Oils",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=900&q=80",
    pack: "20L pail, 210L drum, IBC tote",
    use: "Marine diesel engines, auxiliary engines, fleet maintenance",
    summary: "A dependable marine engine oil designed to support engine cleanliness, wear protection, and operational reliability.",
    features: ["Wear and deposit protection", "Suitable for marine diesel applications", "Commercial pack sizes available"],
    applications: ["Vessel engines", "Fleet maintenance", "Marine workshops"]
  },
  {
    id: "hydraulic-oil-aw-68",
    name: "Triton Hydraulic Oil AW 68",
    category: "Hydraulic Oils",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    pack: "20L pail, 210L drum, bulk",
    use: "Marine hydraulics, industrial machines, heavy equipment",
    summary: "Anti-wear hydraulic oil for systems requiring consistent response, pump protection, and viscosity stability.",
    features: ["Anti-wear protection", "Oxidation stability", "Hydraulic system cleanliness"],
    applications: ["Deck machinery", "Hydraulic presses", "Construction equipment"]
  },
  {
    id: "industrial-gear-oil-220",
    name: "Triton Industrial Gear Oil 220",
    category: "Gear Oils",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    pack: "20L pail, 210L drum",
    use: "Gearboxes, industrial drives, rotating equipment",
    summary: "High-load gear oil for industrial and marine gear systems requiring reliable film strength and component protection.",
    features: ["High-load performance", "Gear tooth protection", "Smooth equipment operation"],
    applications: ["Industrial gearboxes", "Marine gear systems", "Rotating drives"]
  },
  {
    id: "compressor-oil-iso-vg-46",
    name: "Triton Compressor Oil ISO VG 46",
    category: "Compressor Oils",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=900&q=80",
    pack: "20L pail, 210L drum",
    use: "Air compressors and industrial compressor systems",
    summary: "Compressor lubricant engineered for thermal stability and dependable operation in plant utility systems.",
    features: ["Thermal stability", "Oxidation resistance", "Clean compressor operation"],
    applications: ["Air compressors", "Plant utilities", "Workshop systems"]
  },
  {
    id: "multi-purpose-grease-ep2",
    name: "Triton Multi-Purpose Grease EP2",
    category: "Greases",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    pack: "Bucket, pail, drum",
    use: "Bearings, joints, marine machinery, industrial equipment",
    summary: "Multi-purpose EP grease for demanding bearing and joint lubrication across marine and heavy-duty uses.",
    features: ["Load carrying support", "Good adhesion", "Corrosion protection"],
    applications: ["Bearings", "Joints", "Deck equipment"]
  },
  {
    id: "cylinder-oil",
    name: "Triton Cylinder Oil",
    category: "Cylinder Oils",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80",
    pack: "210L drum, IBC tote, bulk",
    use: "Large marine engine cylinder lubrication",
    summary: "Cylinder lubrication solution for large marine engines working under demanding vessel operating conditions.",
    features: ["Cylinder liner protection", "Deposit control support", "Bulk supply options"],
    applications: ["Crosshead engines", "Ocean-going vessels", "Marine maintenance stores"]
  },
  {
    id: "turbine-oil-46",
    name: "Triton Turbine Oil 46",
    category: "Turbine Oils",
    image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=900&q=80",
    pack: "20L pail, 210L drum, IBC tote",
    use: "Turbines, power systems, bearing circulation",
    summary: "Turbine oil developed for smooth operation, oxidation control, and reliable system protection.",
    features: ["Oxidation resistance", "Water separation", "Bearing system protection"],
    applications: ["Steam turbines", "Power plants", "Circulation systems"]
  },
  {
    id: "rust-preventive-oil",
    name: "Triton Rust Preventive Oil",
    category: "Rust Preventive Oils",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
    pack: "20L pail, 210L drum",
    use: "Corrosion protection for components, spares, and stored equipment",
    summary: "Protective oil formulated to help reduce corrosion risk during storage, transit, and operational standby.",
    features: ["Corrosion prevention", "Surface protection", "Storage support"],
    applications: ["Machined parts", "Marine spares", "Warehouse storage"]
  }
];

const faqs = [
  ["What types of lubricants does Triton Marine Lubricants supply?", "We supply marine engine oils, cylinder oils, hydraulic oils, gear oils, compressor oils, turbine oils, greases, transmission fluids, transformer oils, refrigeration oils, rust preventive oils, and specialty industrial lubricants."],
  ["Do you support bulk and contract supply?", "Yes. Triton supports drums, IBC totes, bulk volumes, and recurring commercial supply arrangements for marine, fleet, industrial, and heavy-duty customers."],
  ["Can I request technical guidance before ordering?", "Yes. Share your application, viscosity grade, OEM recommendation, current product, and operating conditions. Our team can help narrow the right product direction."],
  ["Are your products suitable for marine and industrial applications?", "Yes. The catalog is structured around both marine and industrial use cases, including vessels, ports, factories, construction equipment, fleets, and power operations."],
  ["Do you offer drums, pails, and IBC packaging?", "Yes. Common formats include 20L / 25L pails, 210L drums, IBC totes, barrels, bulk supply, and custom commercial order volumes."],
  ["Can international or outstation customers place orders?", "Yes. Enquiries from outstation and international customers can be reviewed based on product availability, order volume, documentation needs, and delivery destination."],
  ["How do I request a commercial quote?", "Use the Request a Quote form with product, viscosity grade, pack size, quantity, delivery location, and timeline. The sales team can then respond with suitable options."]
];

function categoryCard(category) {
  return `<article class="category-card" id="${category.id}">
    <img src="${category.image}" alt="${category.name}">
    <div class="category-card-body">
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <div class="card-actions">
        <a class="btn btn-ghost" href="products.html#${category.id}">View Products</a>
        <a class="btn btn-primary" href="contact.html#quote">Enquire Now</a>
      </div>
    </div>
  </article>`;
}

function productCard(product) {
  return `<article class="product-card">
    <img src="${product.image}" alt="${product.name}">
    <div class="product-card-body">
      <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
      <div class="meta"><span class="pill">${product.category}</span><span class="pill">${product.pack}</span></div>
      <p>${product.use}</p>
      <div class="card-actions">
        <a class="btn btn-ghost" href="contact.html#quote">Request Price</a>
        <button class="btn btn-primary" type="button" data-add-product="${product.id}">Add to Enquiry</button>
      </div>
    </div>
  </article>`;
}

function renderCategories() {
  document.querySelectorAll("[data-category-grid]").forEach((node) => {
    const limit = Number(node.dataset.limit || categories.length);
    node.innerHTML = categories.slice(0, limit).map(categoryCard).join("");
  });

  document.querySelectorAll("[data-category-pages]").forEach((node) => {
    node.innerHTML = categories.map((category) => `<article class="category-detail" id="${category.id}">
      <img src="${category.image}" alt="${category.name}">
      <div class="category-detail-content">
        <p class="eyebrow">${category.name}</p>
        <h2>${category.name}</h2>
        <p>${category.description}</p>
        <p><strong>Use cases:</strong> ${category.uses.join(", ")}.</p>
        <ul>${category.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}<li>Available in pails, drums, IBC totes, barrels, and bulk supply depending on order requirements</li></ul>
        <div class="card-actions"><a class="btn btn-primary" href="contact.html#quote">Request Quote</a><a class="btn btn-ghost" href="shop.html">Browse Products</a></div>
      </div>
    </article>`).join("");
  });
}

function renderProducts() {
  document.querySelectorAll("[data-product-grid]").forEach((node) => {
    const limit = Number(node.dataset.limit || products.length);
    node.innerHTML = products.slice(0, limit).map(productCard).join("");
  });
}

function renderFaqs() {
  document.querySelectorAll("[data-faq-list]").forEach((node) => {
    node.innerHTML = faqs.map(([question, answer], index) => `<article class="faq-item ${index === 0 ? "open" : ""}">
      <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">${question}<span>+</span></button>
      <div class="faq-answer"><p>${answer}</p></div>
    </article>`).join("");
  });
}

function renderProductDetail() {
  const node = document.querySelector("[data-product-detail]");
  if (!node) return;
  const params = new URLSearchParams(window.location.search);
  const product = products.find((item) => item.id === params.get("id")) || products[0];
  document.title = `${product.name} | Triton Marine Lubricants`;
  node.innerHTML = `<img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <span class="category-label">${product.category}</span>
      <h1>${product.name}</h1>
      <p>${product.summary}</p>
      <div class="product-specs">
        <article><h3>Key Features</h3><ul>${product.features.map((item) => `<li>${item}</li>`).join("")}</ul></article>
        <article><h3>Typical Applications</h3><ul>${product.applications.map((item) => `<li>${item}</li>`).join("")}</ul></article>
        <article><h3>Available Pack Sizes</h3><p>${product.pack}</p></article>
        <article><h3>Technical Summary</h3><p>Commercial lubricant supply option for ${product.use.toLowerCase()} with RFQ-based pricing and packaging support.</p></article>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" type="button" data-add-product="${product.id}">Add to Enquiry</button>
        <a class="btn btn-ghost" href="contact.html#quote">Request Price</a>
        <a class="btn btn-ghost" href="https://wa.me/910000000000">WhatsApp Enquiry</a>
      </div>
    </div>`;
}

function setupInteractions() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.addEventListener("click", (event) => {
    const faqButton = event.target.closest(".faq-question");
    if (faqButton) {
      const item = faqButton.closest(".faq-item");
      item.classList.toggle("open");
      faqButton.setAttribute("aria-expanded", String(item.classList.contains("open")));
    }

    const addButton = event.target.closest("[data-add-product]");
    if (addButton) {
      const id = addButton.dataset.addProduct;
      const current = JSON.parse(localStorage.getItem("tritonEnquiry") || "[]");
      if (!current.includes(id)) current.push(id);
      localStorage.setItem("tritonEnquiry", JSON.stringify(current));
      addButton.textContent = "Added to Enquiry";
      updateCartCount();
    }

    if (event.target.closest("[data-clear-cart]")) {
      localStorage.removeItem("tritonEnquiry");
      updateCartCount();
    }
  });

  document.querySelectorAll(".quote-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      button.textContent = "Enquiry Ready to Send";
      button.disabled = true;
    });
  });
}

function updateCartCount() {
  const count = JSON.parse(localStorage.getItem("tritonEnquiry") || "[]").length;
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
  });
}

function scrollToRenderedHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) {
    setTimeout(() => target.scrollIntoView({ block: "start" }), 50);
  }
}

renderCategories();
renderProducts();
renderFaqs();
renderProductDetail();
setupInteractions();
updateCartCount();
scrollToRenderedHash();
