//instead of typing getElementById every time I have this helper function
export const $ = id => document.getElementById( id );

export const random = n => Math.floor(Math.random() * n);