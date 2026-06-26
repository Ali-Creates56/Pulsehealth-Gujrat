/**
 * PulseHealth Gujrat: Live Clinical Portal for Pakistan
 * Pure Vanilla JavaScript Scripting File
 */

// 1. Static Clinic Locations in Gujrat, Punjab, Pakistan
const CLINIC_LOCATIONS = {
  'clin-1': {
    id: 'clin-1',
    name: 'Punjab Medical Complex',
    area: 'Bhimber Road Bypass, Gujrat',
    lat: 32.5852,
    lng: 74.0721,
    phone: '053-3721014',
    specialty: 'PrimaryCare',
    equipment: '3 ICUs, State-of-the-Art CT Scan Ward',
    desc: 'Fully loaded tertiary referral center with modular trauma units in Northern Punjab region.',
    image: './images/PMC.png'
  },
  'clin-2': {
    id: 'clin-2',
    name: 'Katchery Road Specialty Care',
    area: 'District Courts Area, Gujrat',
    lat: 32.5714,
    lng: 74.0812,
    phone: '053-3532091',
    specialty: 'Specialized',
    equipment: 'Nuclear Cardiology Scanner, Pediatric Ward',
    desc: 'Top-tier family specialist clinic situated adjacent to the historical civil block.',
    image: './images/CDL.png'
  },
  'clin-3': {
    id: 'clin-3',
    name: 'Jalalpur Jattan Crossing Clinic',
    area: 'Jalapur Jattan Bypass, Gujrat',
    lat: 32.5921,
    lng: 74.0954,
    phone: '053-3791040',
    specialty: 'Specialized',
    equipment: 'High-Density Fluoroscopy Unit, Dental Lab',
    desc: 'Bustling transit medical clinic serving both rural sub-sectors and metropolitan commuters.',
    image: './images/WPW.png'
  },
  'clin-4': {
    id: 'clin-4',
    name: 'Gujrat Modern Welfare Clinic',
    area: 'GTS Chowk Area, Gujrat City',
    lat: 32.5691,
    lng: 74.0743,
    phone: '053-3652011',
    specialty: 'PrimaryCare',
    equipment: 'Maternity Suites, Neonatal incubators',
    desc: 'Welfare centric facility providing highly subsidized specialist consultation blocks.',
    image: './images/DRT.png'
  },
  'clin-5': {
    id: 'clin-5',
    name: 'Ramtalai Civic Healthcare Sanctuary',
    area: 'Ramtalai Chowk, Gujrat',
    lat: 32.5615,
    lng: 74.0689,
    phone: '053-3511048',
    specialty: 'Specialized',
    equipment: 'Occupational Therapy Gym, Psycho-Counseling Rooms',
    desc: 'Calm sanctuary space focusing on cardiovascular health restoration and pediatric consultation.',
    image: './images/TRG.png'
  }
};

// 2. Specialized Doctors Roster (Punjab Specialist Datastore)
const DOCTOR_ROSTER = [
  {
    id: 'doc-201',
    name: 'Dr. Faisal Mahmood',
    specialty: 'Cardiology',
    clinicId: 'clin-2',
    fee: 2500,
    rating: 4.9,
    hours: '02:00 PM - 07:00 PM',
    ratingCount: 148,
    status: 'High Priority'
  },
  {
    id: 'doc-202',
    name: 'Dr. Amara Naeem',
    specialty: 'Pediatrics',
    clinicId: 'clin-2',
    fee: 1800,
    rating: 4.8,
    hours: '10:00 AM - 02:00 PM',
    ratingCount: 92,
    status: 'Medium Priority'
  },
  {
    id: 'doc-203',
    name: 'Dr. Muhammad Ali Faisal',
    specialty: 'General Medicine',
    clinicId: 'clin-1',
    fee: 1200,
    rating: 4.9,
    hours: '11:30 AM - 05:00 PM',
    ratingCount: 310,
    status: 'Low Priority'
  },
  {
    id: 'doc-204',
    name: 'Dr. Zainab Gilani',
    specialty: 'Dental',
    clinicId: 'clin-3',
    fee: 1500,
    rating: 4.7,
    hours: '03:30 PM - 07:30 PM',
    ratingCount: 64,
    status: 'Medium Priority'
  },
  {
    id: 'doc-205',
    name: 'Dr. Usman Gondal',
    specialty: 'General Medicine',
    clinicId: 'clin-4',
    fee: 1000,
    rating: 4.6,
    hours: '05:00 PM - 09:30 PM',
    ratingCount: 220,
    status: 'Low Priority'
  },
  {
    id: 'doc-206',
    name: 'Dr. Rabia Khalid',
    specialty: 'Cardiology',
    clinicId: 'clin-1',
    fee: 2200,
    rating: 4.8,
    hours: '02:00 PM - 05:00 PM',
    ratingCount: 115,
    status: 'High Priority'
  },
  {
    id: 'doc-207',
    name: 'Dr. Adeel Tariq',
    specialty: 'Mental Health',
    clinicId: 'clin-5',
    fee: 2000,
    rating: 4.9,
    hours: '10:00 AM - 03:00 PM',
    ratingCount: 88,
    status: 'Medium Priority'
  },
  {
    id: 'doc-208',
    name: 'Dr. Hina Cheema',
    specialty: 'Pediatrics',
    clinicId: 'clin-5',
    fee: 1700,
    rating: 4.7,
    hours: '03:30 PM - 07:30 PM',
    ratingCount: 52,
    status: 'Low Priority'
  }
];

// Clinic capacity photo archives for responsive image gallery
const CLINIC_GALLERY = [
  {
    id: 'gal-1',
    category: 'PrimaryCare',
    title: 'Punjab Medical Interceptor Unit',
    description: 'Clean emergency response bay styled with centralized oxygen monitors and high-fidelity trauma beds.',
    imageUrl: './images/PMC.png',
    equipment: 'Triage Oxygen Bays',
    area: 'Bhimber Road Bypass'
  },
  {
    id: 'gal-2',
    category: 'Specialized',
    title: 'Cardiovascular Diagnostic Lab',
    description: 'Cutting edge non-invasive heart monitoring systems capturing rhythmic details for post-stroke treatment under Faisal Mahmood.',
    imageUrl: './images/CDL.png',
    equipment: '3D Echo Scan Node',
    area: 'District Court Rd'
  },
  {
    id: 'gal-3',
    category: 'Specialized',
    title: 'Welfare Pediatrics Wing',
    description: 'Beautiful clinical nursery block painted with toys to ease stress levels during intensive vaccine treatments.',
    imageUrl: './images/WPW.png',
    equipment: 'Sub-Zero Vaccine Vaults',
    area: 'Ramtalai Town'
  },
  {
    id: 'gal-4',
    category: 'PrimaryCare',
    title: 'Dental Restoration Theater',
    description: 'Interactive dental studio comprising panoramic x-ray equipment and high-purity autoclave sterilizers.',
    imageUrl: './images/DRT.png',
    equipment: 'Aseptic Autoclaves',
    area: 'GTS Crossing Center'
  },
  {
    id: 'gal-5',
    category: 'Specialized',
    title: 'Therapeutic Recovery Gym',
    description: 'Physical therapy suite aiding neuromuscular restoration, gait training and post-surgical sports recoveries.',
    imageUrl: './images/TRG.png',
    equipment: 'Motor Rehabilitation Rig',
    area: 'Ramtalai Town'
  },
  {
    id: 'gal-6',
    category: 'PrimaryCare',
    title: 'Welfare Specialized Diagnostic Wing',
    description: 'Advanced laboratory structure handling up to 500 patient blood panel logs per afternoon cycle.',
    imageUrl: './images/WSD.png',
    equipment: 'Automated Hematology Node',
    area: 'GTS Chowk Area'
  }
];

// Active State Variables
let activeBookings = [];
let currentSpecialtyFilter = 'All';
let currentSearchVal = '';
let currentSortField = 'name';
let isCompactDensity = false;
let mapInstance = null;
let currentStyleKey = 'dark-v11';
let currentLightboxIdx = null;
let galleryFilteredItems = [...CLINIC_GALLERY];
let activeMapMarkers = [];

// ── Security: Read API token from gitignored config.js ──
// The token is loaded via <script src="config.js"> in index.html.
// config.js is gitignored. See config.example.js for setup instructions.
const mapboxToken = (window.__CONFIG__ && window.__CONFIG__.MAPBOX_TOKEN)
  ? window.__CONFIG__.MAPBOX_TOKEN
  : null;

/**
 * Show a warning banner when the Mapbox token is missing or still
 * set to the placeholder value from config.example.js.
 */
function showMissingConfigWarning() {
  const banner = document.createElement('div');
  banner.id = 'config-warning-banner';
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#7f1d1d;color:#fecaca;text-align:center;padding:10px 16px;font-family:monospace;font-size:12px;border-bottom:2px solid #ef4444;';
  banner.innerHTML = '⚠️ <strong>Mapbox token not configured.</strong> Copy <code>config.example.js</code> → <code>config.js</code> and add your token. <a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener" style="color:#93c5fd;text-decoration:underline;margin-left:6px;">Get a free token</a>';
  document.body.prepend(banner);
}

/**
 * Sanitize a string for safe insertion into innerHTML.
 * Prevents XSS by escaping HTML special characters.
 */
function sanitizeHTML(str) {
  if (typeof str !== 'string') return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// 3. Initiate Mapbox GL Instance Centered on Gujrat, Punjab, Pakistan
function initMapbox() {
  const mapboxgl = window.mapboxgl;
  if (!mapboxgl) return;

  // Guard: abort gracefully if token is missing or placeholder
  if (!mapboxToken || mapboxToken === 'your_mapbox_token_here') {
    showMissingConfigWarning();
    // Hide the map loader and show a helpful message instead
    const loader = document.getElementById('map-loading-indicator');
    if (loader) {
      loader.innerHTML = '<span style="font-family:monospace;font-size:11px;color:#f87171;text-align:center;padding:20px;">⚠️ Map disabled — Mapbox token not configured.<br>See config.example.js for setup.</span>';
    }
    return;
  }

  mapboxgl.accessToken = mapboxToken;

  mapInstance = new mapboxgl.Map({
    container: 'mapbox-canvas',
    style: `mapbox://styles/mapbox/${currentStyleKey}`,
    center: [74.0754, 32.5742], // Gujrat, Punjab
    zoom: 12.2,
    pitch: 20,
    bearing: 5
  });

  // Controls UI
  mapInstance.addControl(new mapboxgl.NavigationControl({ showCompass: true }), 'top-right');

  mapInstance.on('load', () => {
    // Hide map loader
    document.getElementById('map-loading-indicator').classList.add('opacity-0');
    setTimeout(() => {
      document.getElementById('map-loading-indicator').style.display = 'none';
    }, 300);

    // Initial Marker Placements
    refreshMapMarkers();
  });

  // Clicking anywhere on map captures and updates the coordinates target
  mapInstance.on('click', (e) => {
    const { lat, lng } = e.lngLat;
    document.getElementById('selected-coord-indicator').innerHTML = `G-Target: Lng ${lng.toFixed(4)}, Lat ${lat.toFixed(4)}`;
    
    // Highlight coordinate effect
    const coordBox = document.getElementById('selected-coord-indicator');
    coordBox.classList.add('text-emerald-400');
    setTimeout(() => coordBox.classList.remove('text-emerald-400'), 1000);
  });
}

// 4. Refresh Map Markers for All clinics dynamically styled by specialty
function refreshMapMarkers() {
  const mapboxgl = window.mapboxgl;
  if (!mapboxgl || !mapInstance) return;

  // Clear stale markers
  activeMapMarkers.forEach(m => m.remove());
  activeMapMarkers = [];

  // Place markers
  Object.values(CLINIC_LOCATIONS).forEach((clinic) => {
    // Determine color codes
    let badgeColor = '#38bdf8'; // Blue (Primary Care)
    if (clinic.specialty === 'Specialized') badgeColor = '#f43f5e'; // Red (Specialist Care)

    // Build responsive popups
    const popupContent = `
      <div style="font-family: 'Space Grotesk', sans-serif; min-width: 160px; line-height: 1.4;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
          <span style="font-size: 8px; text-transform:uppercase; font-weight:700; background:rgba(14, 165, 233, 0.1); color:#0ea5e9; border:1px solid rgba(14, 165, 233, 0.2); padding: 1px 4px; border-radius:3px;">
            ${clinic.specialty}
          </span>
          <span style="font-size: 8px; color:#94a3b8; font-family:monospace;">
            PKR
          </span>
        </div>
        <h4 style="font-size:12px; font-weight:700; margin:0 0 3px 0; color:#f8fafc;">${clinic.name}</h4>
        <p style="font-size:10px; color:#94a3b8; margin:0 0 6px 0;">📍 ${clinic.area}</p>
        <p style="font-size:9.5px; color:#cbd5e1; margin:0; line-height: 1.3;">${clinic.desc}</p>
        <div style="margin-top:7px; padding-top:5px; border-top:1px solid #1e293b; display:flex; justify-content:space-between; align-items:center; font-size:9px;">
          <span style="color:#10b981; font-weight:700;">📞 Call: ${clinic.phone}</span>
          <button onclick="autoSelectClinicForm('${clinic.id}')" style="background:#0ea5e9; color:#0f172a; border:none; padding:2px 6px; border-radius:3.5px; font-weight:700; cursor:pointer; font-size:8.5px;">Book</button>
        </div>
      </div>
    `;

    const popup = new mapboxgl.Popup({ offset: 25, closeButton: false }).setHTML(popupContent);

    // Build custom dot elements with interactive pulse rings
    const el = document.createElement('div');
    el.className = 'w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:scale-135 transition-transform duration-300 relative shadow-lg';
    el.style.backgroundColor = '#0b0f19';
    el.style.border = `2.5px solid ${badgeColor}`;
    el.style.boxShadow = `0 0 12px ${badgeColor}60`;

    const pulseRing = document.createElement('div');
    pulseRing.className = 'absolute -inset-1 rounded-full animate-ping opacity-25';
    pulseRing.style.border = `1.5px solid ${badgeColor}`;
    el.appendChild(pulseRing);

    const coreDot = document.createElement('div');
    coreDot.className = 'w-1.5 h-1.5 rounded-full';
    coreDot.style.backgroundColor = badgeColor;
    el.appendChild(coreDot);

    const marker = new mapboxgl.Marker(el)
      .setLngLat([clinic.lng, clinic.lat])
      .setPopup(popup)
      .addTo(mapInstance);

    activeMapMarkers.push(marker);
  });
}

// 5. Auto Select clinic directly into the secure reservation form
window.autoSelectClinicForm = function(clinicId) {
  const selectElem = document.getElementById('p-clinic');
  if (selectElem) {
    selectElem.value = clinicId;
    syncDoctorsDropdown();
    // highlight form section
    document.getElementById('booking-and-patient-section').scrollIntoView({ behavior: 'smooth' });
    
    // validation refresh trigger
    validateAllFormFields();
  }
};

// 6. Map Themes/Skin toggle behavior
window.setMapSkin = function(styleKey) {
  currentStyleKey = styleKey;
  
  // Highlight active button color
  const skins = ['streets-v12', 'dark-v11', 'satellite-v9'];
  skins.forEach(s => {
    const btn = document.getElementById(`btn-theme-${s.split('-')[0]}`);
    if (btn) {
      if (s === styleKey) {
        btn.className = "px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-sky-500 text-slate-950 font-semibold cursor-pointer transition-colors";
      } else {
        btn.className = "px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-slate-900 text-slate-400 hover:text-white cursor-pointer transition-colors";
      }
    }
  });

  if (mapInstance) {
    mapInstance.setStyle(`mapbox://styles/mapbox/${styleKey}`);
  }
};

// 7. Render dynamic doctors table with complex layout support (Comfortable vs Compact)
function renderDoctorsTable() {
  const tableBody = document.getElementById('doctors-table-body');
  if (!tableBody) return;

  // Apply filters on the list
  let results = DOCTOR_ROSTER.filter((doc) => {
    // Specialty filter match
    const matchesSpecialty = currentSpecialtyFilter === 'All' || doc.specialty === currentSpecialtyFilter;
    
    // Keyword search match
    const clinicName = CLINIC_LOCATIONS[doc.clinicId]?.name || '';
    const area = CLINIC_LOCATIONS[doc.clinicId]?.area || '';
    const query = currentSearchVal.toLowerCase();
    
    const matchesKeyword = 
      doc.name.toLowerCase().includes(query) ||
      doc.specialty.toLowerCase().includes(query) ||
      clinicName.toLowerCase().includes(query) ||
      area.toLowerCase().includes(query);

    return matchesSpecialty && matchesKeyword;
  });

  // Apply sort matches
  results.sort((a, b) => {
    if (currentSortField === 'name') {
      return a.name.localeCompare(b.name);
    } else if (currentSortField === 'rating') {
      return b.rating - a.rating; // Highest rating first
    } else if (currentSortField === 'fee-low') {
      return a.fee - b.fee; // Cheapest first
    } else if (currentSortField === 'fee-high') {
      return b.fee - a.fee; // Most expensive first
    }
    return 0;
  });

  // Render HTML structure
  tableBody.innerHTML = '';
  if (results.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 30px; color:#64748b;" class="font-mono text-[11px]">
          <span style="font-size:16px; margin-bottom:5px; display:block;">⚠️</span> No specialist matches detected in current search.
        </td>
      </tr>
    `;
    document.getElementById('showing-records-text').innerHTML = `SHOWING 0 OF ${DOCTOR_ROSTER.length} SPECIALISTS`;
    return;
  }

  results.forEach((doc) => {
    const clinic = CLINIC_LOCATIONS[doc.clinicId];
    
    // Styling states
    const cellClass = isCompactDensity ? "px-4 py-1.5" : "px-4 py-3.5";
    const hideDescClass = isCompactDensity ? "hidden" : "text-[10px] text-gray-500 mt-0.5 font-sans leading-relaxed block max-w-sm truncate";

    const ratingStars = '★'.repeat(Math.round(doc.rating)) + '☆'.repeat(5 - Math.round(doc.rating));

    const tr = document.createElement('tr');
    tr.className = "transition-all duration-300 group hover:bg-sky-500/5 cursor-pointer hover:border-l-2 hover:border-sky-500";
    tr.onclick = () => focusMapOnClinic(doc.clinicId);

    tr.innerHTML = `
      <td class="${cellClass}">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center font-display font-bold text-[10px] text-sky-400 group-hover:scale-108 transition-all">
            ${doc.name.split(' ').pop().charAt(0)}
          </div>
          <div>
            <span class="font-display font-semibold text-slate-100 group-hover:text-sky-450 transition-colors block">
              ${doc.name}
            </span>
            <span class="${hideDescClass}">
              Practice clinic: <strong class="text-sky-400">${clinic.name}</strong> (${clinic.area})
            </span>
          </div>
        </div>
      </td>
      <td class="${cellClass} whitespace-nowrap">
        <span class="px-2 py-0.5 rounded text-[10px] font-mono tracking-wide ${
          doc.specialty === 'Cardiology' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
          doc.specialty === 'Pediatrics' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
          doc.specialty === 'Dental' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
          doc.specialty === 'Mental Health' ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' :
          'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
        }">
          ${doc.specialty}
        </span>
      </td>
      <td class="${cellClass} font-mono font-medium text-slate-200 text-xs whitespace-nowrap">
        PKR ${doc.fee.toLocaleString()}
      </td>
      <td class="${cellClass} text-center whitespace-nowrap">
        <span class="text-amber-400 font-bold block">${ratingStars}</span>
        <span class="text-[9px] text-gray-500 font-mono">(${doc.ratingCount} reviews)</span>
      </td>
      <td class="${cellClass} text-right whitespace-nowrap">
        <button type="button" class="px-2.5 py-1 bg-slate-950 hover:bg-sky-500 border border-slate-850 hover:border-sky-400 text-sky-450 hover:text-slate-950 font-mono text-[9px] rounded-lg transition-transform hover:scale-102">
          ${clinic.lat.toFixed(3)}, ${clinic.lng.toFixed(3)}
        </button>
      </td>
    `;

    tableBody.appendChild(tr);
  });

  // Update counter
  document.getElementById('showing-records-text').innerHTML = `SHOWING ${results.length} OF ${DOCTOR_ROSTER.length} SPECIALISTS`;

  // Re-render icons if present
  if (window.lucide) window.lucide.createIcons();
}

// Focus live mapbox engine directly to a clean clinic coordinates
function focusMapOnClinic(clinicId) {
  const clinic = CLINIC_LOCATIONS[clinicId];
  if (!clinic || !mapInstance) return;

  mapInstance.flyTo({
    center: [clinic.lng, clinic.lat],
    zoom: 14.5,
    speed: 1.2,
    essential: true
  });

  // Display popups indicator programmatically
  // Find correct marker reference from active list
  const idx = Object.keys(CLINIC_LOCATIONS).indexOf(clinicId);
  if (idx !== -1 && activeMapMarkers[idx]) {
    activeMapMarkers[idx].togglePopup();
  }
}

// 8. Density state adjustments Comfort vs Compact
window.toggleDensityView = function() {
  isCompactDensity = !isCompactDensity;
  const button = document.getElementById('toggle-list-view');
  if (button) {
    button.innerHTML = `
      <i data-lucide="stretch-horizontal" class="w-3 h-3 text-sky-400"></i>
      <span>Density: ${isCompactDensity ? 'Compact' : 'Comfortable'}</span>
    `;
  }
  renderDoctorsTable();
};

// Search handling function
window.handleSearchDoctors = function() {
  currentSearchVal = document.getElementById('doctor-search').value;
  renderDoctorsTable();
};

// Sort triggers selector
window.handleSortDoctors = function() {
  currentSortField = document.getElementById('doctor-sort').value;
  renderDoctorsTable();
};

// Specialty filtering mechanism
window.filterBySpecialty = function(specialty) {
  currentSpecialtyFilter = specialty;

  // Toggle visual states of tabs
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach((p) => {
    if (p.textContent.includes(specialty === 'All' ? 'All' : specialty)) {
      p.className = "category-pill active-pill px-3 py-1 rounded-full text-[10px] font-semibold transition-colors bg-sky-500/15 text-sky-400 border border-sky-500/30 cursor-pointer";
    } else {
      p.className = "category-pill px-3 py-1 rounded-full text-[10px] font-medium transition-colors bg-slate-950 text-gray-400 hover:text-white border border-slate-850 hover:border-slate-800 cursor-pointer";
    }
  });

  renderDoctorsTable();
};

// 9. Synchronise doctors list dropdown based on chosen clinic
window.syncDoctorsDropdown = function() {
  const clinicId = document.getElementById('p-clinic').value;
  const doctorSelect = document.getElementById('p-doctor');
  if (!doctorSelect) return;

  // Find doctors working there
  const filteredDocs = DOCTOR_ROSTER.filter(d => d.clinicId === clinicId);

  doctorSelect.innerHTML = '';
  filteredDocs.forEach((doc) => {
    const opt = document.createElement('option');
    opt.value = doc.id;
    opt.textContent = `${doc.name} - ${doc.specialty} (PKR ${doc.fee})`;
    doctorSelect.appendChild(opt);
  });
};

// 10. Forms Validation Rules Engine
let isValName = false;
let isValPhone = false;
let isValEmail = false;
let isValDate = false;
let isValDesc = false;

window.validateFieldName = function() {
  const name = document.getElementById('p-name').value.trim();
  isValName = name.length >= 3;
  
  toggleInputStyles('p-name', 'error-name', isValName, 'val-icon-name');
  validateAllFormFields();
};

window.validateFieldPhone = function() {
  const phone = document.getElementById('p-phone').value.trim();
  // Validates Pakistani mobile pattern: e.g. 0300-1234567 or matching 11 digit numbers with hyphen formats
  const pattern = /^03\d{2}-\d{7}$|^\d{11}$/;
  isValPhone = pattern.test(phone);

  toggleInputStyles('p-phone', 'error-phone', isValPhone, 'val-icon-phone');
  validateAllFormFields();
};

window.validateFieldEmail = function() {
  const email = document.getElementById('p-email').value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isValEmail = pattern.test(email);

  toggleInputStyles('p-email', 'error-email', isValEmail, 'val-icon-email');
  validateAllFormFields();
};

window.validateFieldDate = function() {
  const dateVal = document.getElementById('p-date').value;
  if (!dateVal) {
    isValDate = false;
  } else {
    const selectedDate = new Date(dateVal);
    const today = new Date();
    today.setHours(0,0,0,0);
    // appointment must be today or in the future
    isValDate = selectedDate >= today;
  }

  toggleInputStyles('p-date', 'error-date', isValDate);
  validateAllFormFields();
};

window.validateFieldDesc = function() {
  const desc = document.getElementById('p-desc').value.trim();
  isValDesc = desc.length >= 10;

  // character count UI
  document.getElementById('char-counter').textContent = `${desc.length} / 250 characters`;

  toggleInputStyles('p-desc', 'error-desc', isValDesc);
  validateAllFormFields();
};

// Dynamic helper utility for changing CSS styles and error outputs
function toggleInputStyles(elemId, errorId, isValid, iconId = null) {
  const inputEl = document.getElementById(elemId);
  const errEl = document.getElementById(errorId);
  const iconEl = iconId ? document.getElementById(iconId) : null;

  if (inputEl.value.trim() === '') {
    // idle state default border styling
    inputEl.style.borderColor = '#1e293b';
    if (errEl) errEl.classList.add('hidden');
    if (iconEl) iconEl.innerHTML = '';
    return;
  }

  if (isValid) {
    inputEl.style.borderColor = 'rgba(16, 185, 129, 0.6)'; // Emerald
    if (errEl) errEl.classList.add('hidden');
    if (iconEl) {
      iconEl.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>';
      if (window.lucide) window.lucide.createIcons();
    }
  } else {
    inputEl.style.borderColor = 'rgba(239, 68, 68, 0.6)'; // Rose
    if (errEl) errEl.classList.remove('hidden');
    if (iconEl) {
      iconEl.innerHTML = '<i data-lucide="alert-triangle" class="w-4 h-4 text-rose-500"></i>';
      if (window.lucide) window.lucide.createIcons();
    }
  }
}

// Form Validation core check to disable/enable submission
function validateAllFormFields() {
  const submitBtn = document.getElementById('form-submit-btn');
  if (!submitBtn) return;

  const valid = isValName && isValPhone && isValEmail && isValDate && isValDesc;
  if (valid) {
    submitBtn.disabled = false;
    submitBtn.className = "w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-950 font-display font-semibold py-2.5 rounded-lg text-xs cursor-pointer shadow-lg shadow-sky-500/15 hover:scale-101 border border-sky-400 font-bold transition-all duration-300";
  } else {
    submitBtn.disabled = true;
    submitBtn.className = "w-full bg-slate-800 text-gray-500 border border-slate-900 font-display font-semibold py-2.5 rounded-lg text-xs cursor-not-allowed transition-all duration-300";
  }
}

// Form Autofill demo values generator
window.triggerFormAutofill = function() {
  document.getElementById('p-name').value = 'Muhammad Ali Faisal';
  document.getElementById('p-phone').value = '0300-8419014';
  document.getElementById('p-email').value = 'ali.creates56@gmail.com';
  document.getElementById('p-clinic').value = 'clin-1';
  
  // Set date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById('p-date').value = tomorrow.toISOString().split('T')[0];
  
  document.getElementById('p-time').value = '02:00 PM';
  document.getElementById('p-desc').value = 'Experiencing persistent acute chest tightness when undergoing cardiovascular stress loops.';

  // Sync and trigger rules validation checks
  syncDoctorsDropdown();
  
  isValName = true;
  isValPhone = true;
  isValEmail = true;
  isValDate = true;
  isValDesc = true;

  // re-apply styles
  toggleInputStyles('p-name', 'error-name', true, 'val-icon-name');
  toggleInputStyles('p-phone', 'error-phone', true, 'val-icon-phone');
  toggleInputStyles('p-email', 'error-email', true, 'val-icon-email');
  toggleInputStyles('p-date', 'error-date', true);
  toggleInputStyles('p-desc', 'error-desc', true);

  // Counter
  document.getElementById('char-counter').textContent = `${document.getElementById('p-desc').value.length} / 250 characters`;

  validateAllFormFields();
};

// 11. Handle Submission Event of Patient Appointment
window.handleAppointmentSubmit = function(event) {
  event.preventDefault();

  const valid = isValName && isValPhone && isValEmail && isValDate && isValDesc;
  if (!valid) return;

  // Get field values
  const name = document.getElementById('p-name').value.trim();
  const phone = document.getElementById('p-phone').value.trim();
  const email = document.getElementById('p-email').value.trim();
  const clinicId = document.getElementById('p-clinic').value;
  const doctorId = document.getElementById('p-doctor').value;
  const slotDate = document.getElementById('p-date').value;
  const slotTime = document.getElementById('p-time').value;
  const description = document.getElementById('p-desc').value.trim();

  // Find objects
  const doctor = DOCTOR_ROSTER.find(d => d.id === doctorId);
  const clinic = CLINIC_LOCATIONS[clinicId];

  // Create booking object
  const booking = {
    id: `PHG-${Math.floor(1000 + Math.random() * 9000)}`,
    patientName: name,
    patientPhone: phone,
    patientEmail: email,
    doctorName: doctor.name,
    specialty: doctor.specialty,
    clinicName: clinic.name,
    clinicArea: clinic.area,
    fee: doctor.fee,
    date: slotDate,
    time: slotTime,
    desc: description,
    clinicId: clinicId
  };

  // Push into state
  activeBookings.unshift(booking);

  // Update Statistics metrics counter UI
  document.getElementById('metric-total-bookings').textContent = activeBookings.length;

  // Refresh Journal UI
  renderBookedAppointments();

  // Clear form safely
  document.getElementById('appointment-booking-form').reset();
  
  // Clean valid validations
  isValName = false;
  isValPhone = false;
  isValEmail = false;
  isValDate = false;
  isValDesc = false;

  // Clear visual borders
  document.getElementById('p-name').style.borderColor = '#1e293b';
  document.getElementById('p-phone').style.borderColor = '#1e293b';
  document.getElementById('p-email').style.borderColor = '#1e293b';
  document.getElementById('p-date').style.borderColor = '#1e293b';
  document.getElementById('p-desc').style.borderColor = '#1e293b';
  document.getElementById('char-counter').textContent = `0 / 250 characters`;

  document.getElementById('val-icon-name').innerHTML = '';
  document.getElementById('val-icon-phone').innerHTML = '';
  document.getElementById('val-icon-email').innerHTML = '';

  validateAllFormFields();

  // Scroll smoothly to newly scheduled slot ticket
  document.getElementById('booking-journal-tag').scrollIntoView({ behavior: 'smooth' });

  // Fly mapping to targeted clinic
  focusMapOnClinic(clinicId);
};

// 12. Render Registered Reservations Journal Tickets
function renderBookedAppointments() {
  const emptyState = document.getElementById('no-booking-state');
  const listContainer = document.getElementById('booking-list-container');

  if (activeBookings.length === 0) {
    emptyState.classList.remove('hidden');
    listContainer.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  listContainer.classList.remove('hidden');

  listContainer.innerHTML = '';
  activeBookings.forEach((book) => {
    const div = document.createElement('div');
    div.className = "bg-slate-950/70 border border-slate-850 rounded-xl p-4 space-y-3 hover:border-sky-500/20 hover:shadow-lg transition-all relative overflow-hidden group hover:scale-[1.01]";
    
    // Tiny vertical decoration bar
    div.innerHTML = `
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 to-indigo-500"></div>
      
      <div class="flex items-start justify-between">
        <div>
          <span class="text-[9px] font-mono text-gray-500 block">RESERVATION CODE</span>
          <h4 class="font-display font-bold text-slate-100 text-sm">${sanitizeHTML(book.id)}</h4>
        </div>
        <span class="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 font-mono tracking-wider font-semibold uppercase">Scheduled</span>
      </div>

      <div class="grid grid-cols-2 gap-3 pb-2 border-b border-slate-900 text-xs">
        <div>
          <p class="text-[9px] text-gray-500 uppercase font-mono mb-0.5">Patient Details</p>
          <p class="text-slate-200 font-medium truncate">${sanitizeHTML(book.patientName)}</p>
          <span class="text-[10px] text-gray-400 block font-mono">${sanitizeHTML(book.patientPhone)}</span>
        </div>
        <div>
          <p class="text-[9px] text-gray-500 uppercase font-mono mb-0.5">Assigned Specialist</p>
          <p class="text-slate-200 font-medium">${sanitizeHTML(book.doctorName)}</p>
          <span class="text-[9px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-1 py-0.5 rounded uppercase font-mono inline-block mt-0.5">${sanitizeHTML(book.specialty)}</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 text-xs">
        <div>
          <p class="text-[9px] text-gray-500 uppercase font-mono mb-0.5">Clinic Center Hub</p>
          <p class="text-slate-200 font-medium truncate">${sanitizeHTML(book.clinicName)}</p>
          <span class="text-[10px] text-gray-400 font-mono block">${sanitizeHTML(book.clinicArea)}</span>
        </div>
        <div>
          <p class="text-[9px] text-gray-500 uppercase font-mono mb-0.5">Schedule Slot Hour</p>
          <p class="text-sky-450 font-medium font-mono">${sanitizeHTML(book.date)}</p>
          <span class="text-[10px] text-slate-350 block font-mono">⏱️ ${sanitizeHTML(book.time)}</span>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex items-center justify-between border-t border-slate-900 pt-3">
        <span class="text-xs text-emerald-400 font-mono font-medium">Fee Due: PKR ${sanitizeHTML(String(book.fee))}</span>
        <div class="flex items-center gap-2">
          <button onclick="focusMapOnClinic('${sanitizeHTML(book.clinicId)}')" type="button" class="px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-705 text-slate-300 font-mono text-[9px] rounded cursor-pointer leading-none">Map Lock</button>
          <button onclick="handleCancelAppointment('${sanitizeHTML(book.id)}')" type="button" class="px-2 py-1 bg-rose-950/40 hover:bg-rose-600 border border-rose-900 hover:border-rose-500 text-rose-400 hover:text-slate-950 font-mono text-[9px] rounded cursor-pointer leading-none transition-all">Cancel Slot</button>
        </div>
      </div>
    `;

    listContainer.appendChild(div);
  });

  if (window.lucide) window.lucide.createIcons();
}

// Appointment cancellation workflow
window.handleCancelAppointment = function(id) {
  activeBookings = activeBookings.filter(b => b.id !== id);
  document.getElementById('metric-total-bookings').textContent = activeBookings.length;
  renderBookedAppointments();
};

// 13. Dynamic Image Gallery Loader & Category filters
function renderClinicGallery() {
  const container = document.getElementById('clinic-gallery-grid');
  if (!container) return;

  container.innerHTML = '';
  galleryFilteredItems.forEach((item) => {
    // Dynamic index within filtered set to reference during Lightbox navigations
    const div = document.createElement('div');
    div.className = "group cursor-pointer";
    div.onclick = () => openLightboxModal(item.id);

    div.innerHTML = `
      <figure class="relative bg-slate-950 border border-slate-850 rounded-xl overflow-hidden aspect-video group">
        <img
          src="${item.imageUrl}"
          alt="${item.title}"
          referrerPolicy="no-referrer"
          class="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
        />
        
        <!-- Morphing hover overlay revealing hidden captions dynamically -->
        <div class="absolute inset-0 bg-slate-950/80 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="flex items-center gap-1 text-[9px] font-mono bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded border border-sky-500/30">
              <i data-lucide="tag" class="w-2.5 h-2.5"></i>
              ${item.category === 'PrimaryCare' ? 'Primary / Dental' : 'Specialized / Heart'}
            </span>
            <span class="text-gray-400 hover:text-sky-400 transition-colors">
              <i data-lucide="eye" class="w-4 h-4"></i>
            </span>
          </div>

          <div class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="font-display font-medium text-slate-100 text-sm mb-1 leading-snug">
              ${item.title}
            </h3>
            
            <figcaption class="text-[9.5px] text-gray-400 flex flex-wrap gap-2 items-center">
              <span class="flex items-center gap-0.5">
                <i data-lucide="shield-check" class="w-2.5 h-2.5 text-slate-500"></i>
                Verified
              </span>
              <span class="text-slate-600">•</span>
              <span class="flex items-center gap-0.5">
                <i data-lucide="map-pin" class="w-2.5 h-2.5 text-slate-500"></i>
                ${item.area}
              </span>
            </figcaption>
          </div>
        </div>
      </figure>
    `;

    container.appendChild(div);
  });

  if (window.lucide) window.lucide.createIcons();
}

// Filter gallery tabs
window.filterGallery = function(category) {
  // Highlight chosen pill button
  const pills = document.querySelectorAll('.gallery-category-pill');
  pills.forEach((p) => {
    if (p.textContent.includes(category === 'All' ? 'All' : (category === 'PrimaryCare' ? 'Primary' : 'Pediatrics'))) {
      p.className = "gallery-category-pill active-gallery-pill px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer bg-sky-500 text-slate-950 transition-all";
    } else {
      p.className = "gallery-category-pill px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer bg-slate-950 text-gray-405 hover:text-slate-100 border border-slate-850 hover:border-slate-800 transition-all";
    }
  });

  if (category === 'All') {
    galleryFilteredItems = [...CLINIC_GALLERY];
  } else {
    galleryFilteredItems = CLINIC_GALLERY.filter(c => c.category === category);
  }

  renderClinicGallery();
};

// 14. Lightbox Interactive Modal Core Functionalities 
window.openLightboxModal = function(itemId) {
  const itemIndex = galleryFilteredItems.findIndex(i => i.id === itemId);
  if (itemIndex === -1) return;

  currentLightboxIdx = itemIndex;
  const item = galleryFilteredItems[itemIndex];

  document.getElementById('lightbox-img').src = item.imageUrl;
  document.getElementById('lightbox-title').textContent = item.title;
  document.getElementById('lightbox-id').textContent = `ID CORE: ${item.id.toUpperCase()}`;
  document.getElementById('lightbox-desc').textContent = item.description;
  document.getElementById('lightbox-category-badge').textContent = item.category === 'PrimaryCare' ? 'Primary Care' : 'Specialized heart unit';
  document.getElementById('lightbox-equipment').textContent = item.equipment;
  document.getElementById('lightbox-area').textContent = item.area;

  // Reveal modal with display block class
  document.getElementById('lightbox-modal').classList.remove('hidden');
};

window.closeLightbox = function() {
  document.getElementById('lightbox-modal').classList.add('hidden');
  currentLightboxIdx = null;
};

window.nextLightboxImage = function() {
  if (currentLightboxIdx === null) return;
  currentLightboxIdx = (currentLightboxIdx + 1) % galleryFilteredItems.length;
  refreshLightboxContent();
};

window.prevLightboxImage = function() {
  if (currentLightboxIdx === null) return;
  currentLightboxIdx = (currentLightboxIdx - 1 + galleryFilteredItems.length) % galleryFilteredItems.length;
  refreshLightboxContent();
};

function refreshLightboxContent() {
  const item = galleryFilteredItems[currentLightboxIdx];
  if (!item) return;

  document.getElementById('lightbox-img').src = item.imageUrl;
  document.getElementById('lightbox-title').textContent = item.title;
  document.getElementById('lightbox-id').textContent = `ID CORE: ${item.id.toUpperCase()}`;
  document.getElementById('lightbox-desc').textContent = item.description;
  document.getElementById('lightbox-category-badge').textContent = item.category === 'PrimaryCare' ? 'Primary Care' : 'Specialized heart unit';
  document.getElementById('lightbox-equipment').textContent = item.equipment;
  document.getElementById('lightbox-area').textContent = item.area;
}

// 16. Initialize everything upon Dom Ready State
document.addEventListener("DOMContentLoaded", () => {
  // Sync select options
  syncDoctorsDropdown();

  // Render doctors table
  renderDoctorsTable();

  // Populate image gallery
  renderClinicGallery();

  // Load Mapbox
  initMapbox();
});
