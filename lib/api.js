// lib/api.js
export async function fetchAPI(path) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${path}`);
    if (!res.ok) {
        console.error(res.statusText);
    }
    const data = await res.json();
    return data;
}
