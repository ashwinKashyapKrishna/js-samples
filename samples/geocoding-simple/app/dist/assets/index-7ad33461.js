(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let r,a,m,c,l;function g(){r=new google.maps.Map(document.getElementById("map"),{zoom:8,center:{lat:-34.397,lng:150.644},mapTypeControl:!1}),m=new google.maps.Geocoder;const s=document.createElement("input");s.type="text",s.placeholder="Enter a location";const t=document.createElement("input");t.type="button",t.value="Geocode",t.classList.add("button","button-primary");const o=document.createElement("input");o.type="button",o.value="Clear",o.classList.add("button","button-secondary"),l=document.createElement("pre"),l.id="response",l.innerText="",c=document.createElement("div"),c.id="response-container",c.appendChild(l);const i=document.createElement("p");i.id="instructions",i.innerHTML="<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.",r.controls[google.maps.ControlPosition.TOP_LEFT].push(s),r.controls[google.maps.ControlPosition.TOP_LEFT].push(t),r.controls[google.maps.ControlPosition.TOP_LEFT].push(o),r.controls[google.maps.ControlPosition.LEFT_TOP].push(i),r.controls[google.maps.ControlPosition.LEFT_TOP].push(c),a=new google.maps.Marker({map:r}),r.addListener("click",e=>{p({location:e.latLng})}),t.addEventListener("click",()=>p({address:s.value})),o.addEventListener("click",()=>{d()}),d()}function d(){a.setMap(null),c.style.display="none"}function p(s){d(),m.geocode(s).then(t=>{const{results:o}=t;return r.setCenter(o[0].geometry.location),a.setPosition(o[0].geometry.location),a.setMap(r),c.style.display="block",l.innerText=JSON.stringify(t,null,2),o}).catch(t=>{alert("Geocode was not successful for the following reason: "+t)})}window.initMap=g;