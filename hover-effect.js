var f,v=require("three"),h=(f=require("gsap/TweenMax"))&&"object"==typeof f&&"default"in f?f.default:f;module.exports=function(f){function w(){for(var f=arguments,v=0;v<arguments.length;v++)if(void 0!==f[v])return f[v]}var F=f.parent,l=f.displacementImage,P=f.image1,L=f.image2,M=w(f.intensity1,f.intensity,1),U=w(f.intensity2,f.intensity,1),C=w(f.angle,Math.PI/4),S=w(f.angle1,C),W=w(f.angle2,3*-C),D=w(f.speedIn,f.speed,1.6),_=w(f.speedOut,f.speed,1.2),z=w(f.hover,!0),V=w(f.easing,Expo.easeOut);if(F)if(P&&L&&l){var q=new v.Scene,G=new v.OrthographicCamera(F.offsetWidth/-2,F.offsetWidth/2,F.offsetHeight/2,F.offsetHeight/-2,1,1e3);G.position.z=1;var B=new v.WebGLRenderer({antialias:!1});B.setPixelRatio(window.devicePixelRatio),B.setClearColor(16777215,0),B.setSize(F.offsetWidth,F.offsetHeight),F.appendChild(B.domElement);var k=function(){B.render(q,G)},A=new v.TextureLoader;A.crossOrigin="";var J=A.load(P,k),K=A.load(L,k),N=A.load(l,k);N.wrapS=N.wrapT=v.RepeatWrapping,J.magFilter=K.magFilter=v.LinearFilter,J.minFilter=K.minFilter=v.LinearFilter;var Q=new v.ShaderMaterial({uniforms:{intensity1:{type:"f",value:M},intensity2:{type:"f",value:U},dispFactor:{type:"f",value:0},angle1:{type:"f",value:S},angle2:{type:"f",value:W},texture1:{type:"t",value:J},texture2:{type:"t",value:K},disp:{type:"t",value:N}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",fragmentShader:"\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n  vec2 distortedPosition1 = vUv + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = vUv + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n",transparent:!0,opacity:1}),X=new v.PlaneBufferGeometry(F.offsetWidth,F.offsetHeight,1),Y=new v.Mesh(X,Q);q.add(Y),z&&(F.addEventListener("mouseenter",Z),F.addEventListener("touchstart",Z),F.addEventListener("mouseleave",$),F.addEventListener("touchend",$)),window.addEventListener("resize",function(f){B.setSize(F.offsetWidth,F.offsetHeight)}),this.next=Z,this.previous=$}else console.warn("One or more images are missing");else console.warn("Parent missing");function Z(){h.to(Q.uniforms.dispFactor,D,{value:1,ease:V,onUpdate:k,onComplete:k})}function $(){h.to(Q.uniforms.dispFactor,_,{value:0,ease:V,onUpdate:k,onComplete:k})}};
//# sourceMappingURL=hover-effect.js.map
