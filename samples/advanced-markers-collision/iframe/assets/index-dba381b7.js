(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let c;async function u(){const{Map:s}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:n}=await google.maps.importLibrary("marker");let i=[],o=google.maps.CollisionBehavior.REQUIRED;c=new s(document.getElementById("map"),{mapId:"6ff586e93e18149f",center:{lat:47.609414458375674,lng:-122.33897030353548},zoom:17});const e=new mdc.select.MDCSelect(document.querySelector(".mdc-select"));e.listen("MDCSelect:change",()=>{o=e.value,i.forEach(r=>{r.collisionBehavior=o})}),e.value=o,[[-122.3402,47.6093],[-122.3402,47.6094],[-122.3403,47.6094],[-122.3384,47.6098],[-122.3389,47.6095],[-122.3396,47.6095],[-122.3379,47.6097],[-122.3378,47.6097],[-122.3396,47.6091],[-122.3383,47.6089],[-122.3379,47.6093],[-122.3381,47.6095],[-122.3378,47.6095]].forEach(([r,l])=>{const a=new n({position:new google.maps.LatLng({lat:l,lng:r}),map:c,collisionBehavior:o});i.push(a)})}u();