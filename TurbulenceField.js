import r from"./snowpack/pkg/ish-utils/PVector.js";import o from"./snowpack/pkg/simplex-noise.js";import{smoothstep as h}from"./snowpack/pkg/ish-utils/math.js";export default class n{constructor(s){Object.assign(this,s),this.simplex=this.simplex||new o(this.seed)}getForce(s,{bound:t,W:i,H:e}={}){const f=s.x*this.scale,p=s.y*this.scale,g=s.z*this.scale;let m=this.simplex.noise3D(s.x*this.scale,s.y*this.scale,s.z*this.scale)*1.1;const l=r.fromAngle(m*Math.PI).mult(this.mult);if(t){let c=i/2-Math.abs(i/2-s.x);c<t&&l.mult(1-h(i/2-t,i/2,c)/t);const a=e/2-Math.abs(e/2-s.x);a<t&&l.mult(1-h(e/2-t,e/2,a)/t)}return l}}
