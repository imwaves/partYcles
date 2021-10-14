const q1=.5*(Math.sqrt(3)-1),s1=(3-Math.sqrt(3))/6,y1=1/3,E=1/6,U1=(Math.sqrt(5)-1)/4,d=(5-Math.sqrt(5))/20,u=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),a=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);class D1{constructor(n=Math.random){const e=typeof n=="function"?n:w1(n);this.p=g1(e),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let o=0;o<512;o++)this.perm[o]=this.p[o&255],this.permMod12[o]=this.perm[o]%12}noise2D(n,e){const o=this.permMod12,m=this.perm;let t=0,g=0,b=0;const j=(n+e)*q1,x=Math.floor(n+j),F=Math.floor(e+j),C=(x+F)*s1,Z=x-C,v=F-C,D=n-Z,w=e-v;let S,H;D>w?(S=1,H=0):(S=0,H=1);const y=D-S+s1,U=w-H+s1,q=D-1+2*s1,r=w-1+2*s1,c=x&255,i=F&255;let s=.5-D*D-w*w;if(s>=0){const M=o[c+m[i]]*3;s*=s,t=s*s*(u[M]*D+u[M+1]*w)}let f=.5-y*y-U*U;if(f>=0){const M=o[c+S+m[i+H]]*3;f*=f,g=f*f*(u[M]*y+u[M+1]*U)}let h=.5-q*q-r*r;if(h>=0){const M=o[c+1+m[i+1]]*3;h*=h,b=h*h*(u[M]*q+u[M+1]*r)}return 70*(t+g+b)}noise3D(n,e,o){const m=this.permMod12,t=this.perm;let g,b,j,x;const F=(n+e+o)*y1,C=Math.floor(n+F),Z=Math.floor(e+F),v=Math.floor(o+F),D=(C+Z+v)*E,w=C-D,S=Z-D,H=v-D,y=n-w,U=e-S,q=o-H;let r,c,i,s,f,h;y>=U?U>=q?(r=1,c=0,i=0,s=1,f=1,h=0):y>=q?(r=1,c=0,i=0,s=1,f=0,h=1):(r=0,c=0,i=1,s=1,f=0,h=1):U<q?(r=0,c=0,i=1,s=0,f=1,h=1):y<q?(r=0,c=1,i=0,s=0,f=1,h=1):(r=0,c=1,i=0,s=1,f=1,h=0);const M=y-r+E,k=U-c+E,O=q-i+E,Q=y-s+2*E,R=U-f+2*E,T=q-h+2*E,W=y-1+3*E,X=U-1+3*E,G=q-1+3*E,K=C&255,L=Z&255,N=v&255;let I=.6-y*y-U*U-q*q;if(I<0)g=0;else{const p=m[K+t[L+t[N]]]*3;I*=I,g=I*I*(u[p]*y+u[p+1]*U+u[p+2]*q)}let J=.6-M*M-k*k-O*O;if(J<0)b=0;else{const p=m[K+r+t[L+c+t[N+i]]]*3;J*=J,b=J*J*(u[p]*M+u[p+1]*k+u[p+2]*O)}let z=.6-Q*Q-R*R-T*T;if(z<0)j=0;else{const p=m[K+s+t[L+f+t[N+h]]]*3;z*=z,j=z*z*(u[p]*Q+u[p+1]*R+u[p+2]*T)}let B=.6-W*W-X*X-G*G;if(B<0)x=0;else{const p=m[K+1+t[L+1+t[N+1]]]*3;B*=B,x=B*B*(u[p]*W+u[p+1]*X+u[p+2]*G)}return 32*(g+b+j+x)}noise4D(n,e,o,m){const t=this.perm;let g,b,j,x,F;const C=(n+e+o+m)*U1,Z=Math.floor(n+C),v=Math.floor(e+C),D=Math.floor(o+C),w=Math.floor(m+C),S=(Z+v+D+w)*d,H=Z-S,y=v-S,U=D-S,q=w-S,r=n-H,c=e-y,i=o-U,s=m-q;let f=0,h=0,M=0,k=0;r>c?f++:h++,r>i?f++:M++,r>s?f++:k++,c>i?h++:M++,c>s?h++:k++,i>s?M++:k++;const O=f>=3?1:0,Q=h>=3?1:0,R=M>=3?1:0,T=k>=3?1:0,W=f>=2?1:0,X=h>=2?1:0,G=M>=2?1:0,K=k>=2?1:0,L=f>=1?1:0,N=h>=1?1:0,I=M>=1?1:0,J=k>=1?1:0,z=r-O+d,B=c-Q+d,p=i-R+d,l1=s-T+d,r1=r-W+2*d,c1=c-X+2*d,i1=i-G+2*d,f1=s-K+2*d,h1=r-L+3*d,a1=c-N+3*d,M1=i-I+3*d,p1=s-J+3*d,u1=r-1+4*d,m1=c-1+4*d,d1=i-1+4*d,A1=s-1+4*d,P=Z&255,V=v&255,Y=D&255,_=w&255;let $=.6-r*r-c*c-i*i-s*s;if($<0)g=0;else{const l=t[P+t[V+t[Y+t[_]]]]%32*4;$*=$,g=$*$*(a[l]*r+a[l+1]*c+a[l+2]*i+a[l+3]*s)}let t1=.6-z*z-B*B-p*p-l1*l1;if(t1<0)b=0;else{const l=t[P+O+t[V+Q+t[Y+R+t[_+T]]]]%32*4;t1*=t1,b=t1*t1*(a[l]*z+a[l+1]*B+a[l+2]*p+a[l+3]*l1)}let e1=.6-r1*r1-c1*c1-i1*i1-f1*f1;if(e1<0)j=0;else{const l=t[P+W+t[V+X+t[Y+G+t[_+K]]]]%32*4;e1*=e1,j=e1*e1*(a[l]*r1+a[l+1]*c1+a[l+2]*i1+a[l+3]*f1)}let o1=.6-h1*h1-a1*a1-M1*M1-p1*p1;if(o1<0)x=0;else{const l=t[P+L+t[V+N+t[Y+I+t[_+J]]]]%32*4;o1*=o1,x=o1*o1*(a[l]*h1+a[l+1]*a1+a[l+2]*M1+a[l+3]*p1)}let n1=.6-u1*u1-m1*m1-d1*d1-A1*A1;if(n1<0)F=0;else{const l=t[P+1+t[V+1+t[Y+1+t[_+1]]]]%32*4;n1*=n1,F=n1*n1*(a[l]*u1+a[l+1]*m1+a[l+2]*d1+a[l+3]*A1)}return 27*(g+b+j+x+F)}}function g1(A){const n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=0;e<255;e++){const o=e+~~(A()*(256-e)),m=n[e];n[e]=n[o],n[o]=m}return n}function w1(A){let n=0,e=0,o=0,m=1;const t=x1();return n=t(" "),e=t(" "),o=t(" "),n-=t(A),n<0&&(n+=1),e-=t(A),e<0&&(e+=1),o-=t(A),o<0&&(o+=1),function(){const g=2091639*n+m*23283064365386963e-26;return n=e,e=o,o=g-(m=g|0)}}function x1(){let A=4022871197;return function(n){n=n.toString();for(let e=0;e<n.length;e++){A+=n.charCodeAt(e);let o=.02519603282416938*A;A=o>>>0,o-=A,o*=A,A=o>>>0,o-=A,A+=o*4294967296}return(A>>>0)*23283064365386963e-26}}export default D1;
