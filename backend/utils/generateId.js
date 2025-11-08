// utils/generateId.js
const crypto = require('crypto');

function generateBookingId() {
  // Example: BT-20251105-4f3c9a (prefix + YYYYMMDD + random)
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const rand = crypto.randomBytes(3).toString('hex'); // 6 hex chars
  return `BT-${y}${m}${d}-${rand}`;
}

module.exports = generateBookingId;
