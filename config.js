// URL pública da API, sem /api. Vazio = mesma origem (deploy institucional).
window.LAB_API = location.hostname === 'localhost' || location.hostname === '127.0.0.1' ? 'http://127.0.0.1:8000' : '';
