var{readdirSync:Q1}=(()=>({}));var{create:G1,defineProperty:g,getOwnPropertyDescriptor:Y1,getOwnPropertyNames:$1,getPrototypeOf:B1}=Object,E1=Object.prototype.hasOwnProperty,J1=(Q,Y)=>()=>(Y||Q((Y={exports:{}}).exports,Y),Y.exports),K1=(Q,Y)=>{for(var H in Y)g(Q,H,{get:Y[H],enumerable:!0})},p=(Q,Y,H,W)=>{if(Y&&typeof Y=="object"||typeof Y=="function")for(let z of $1(Y))!E1.call(Q,z)&&z!==H&&g(Q,z,{get:()=>Y[z],enumerable:!(W=Y1(Y,z))||W.enumerable});return Q},M1=(Q,Y,H)=>(p(Q,Y,"default"),H&&p(H,Y,"default")),o=(Q,Y,H)=>(H=Q!=null?G1(B1(Q)):{},p(Y||!Q||!Q.__esModule?g(H,"default",{value:Q,enumerable:!0}):H,Q)),a=J1((Q,Y)=>{function H(Z){if(typeof Z!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(Z))}function W(Z,X){for(var G="",B=0,K=-1,$=0,J,E=0;E<=Z.length;++E){if(E<Z.length)J=Z.charCodeAt(E);else{if(J===47)break;J=47}if(J===47){if(!(K===E-1||$===1))if(K!==E-1&&$===2){if(G.length<2||B!==2||G.charCodeAt(G.length-1)!==46||G.charCodeAt(G.length-2)!==46){if(G.length>2){var _=G.lastIndexOf("/");if(_!==G.length-1){_===-1?(G="",B=0):(G=G.slice(0,_),B=G.length-1-G.lastIndexOf("/")),K=E,$=0;continue}}else if(G.length===2||G.length===1){G="",B=0,K=E,$=0;continue}}X&&(G.length>0?G+="/..":G="..",B=2)}else G.length>0?G+="/"+Z.slice(K+1,E):G=Z.slice(K+1,E),B=E-K-1;K=E,$=0}else J===46&&$!==-1?++$:$=-1}return G}function z(Z,X){var G=X.dir||X.root,B=X.base||(X.name||"")+(X.ext||"");return G?G===X.root?G+B:G+Z+B:B}var w={resolve:function(){for(var Z="",X=!1,G,B=arguments.length-1;B>=-1&&!X;B--){var K;B>=0?K=arguments[B]:(G===void 0&&(G=process.cwd()),K=G),H(K),K.length!==0&&(Z=K+"/"+Z,X=K.charCodeAt(0)===47)}return Z=W(Z,!X),X?Z.length>0?"/"+Z:"/":Z.length>0?Z:"."},normalize:function(Z){if(H(Z),Z.length===0)return".";var X=Z.charCodeAt(0)===47,G=Z.charCodeAt(Z.length-1)===47;return Z=W(Z,!X),Z.length===0&&!X&&(Z="."),Z.length>0&&G&&(Z+="/"),X?"/"+Z:Z},isAbsolute:function(Z){return H(Z),Z.length>0&&Z.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var Z,X=0;X<arguments.length;++X){var G=arguments[X];H(G),G.length>0&&(Z===void 0?Z=G:Z+="/"+G)}return Z===void 0?".":w.normalize(Z)},relative:function(Z,X){if(H(Z),H(X),Z===X||(Z=w.resolve(Z),X=w.resolve(X),Z===X))return"";for(var G=1;G<Z.length&&Z.charCodeAt(G)===47;++G);for(var B=Z.length,K=B-G,$=1;$<X.length&&X.charCodeAt($)===47;++$);for(var J=X.length,E=J-$,_=K<E?K:E,I=-1,V=0;V<=_;++V){if(V===_){if(E>_){if(X.charCodeAt($+V)===47)return X.slice($+V+1);if(V===0)return X.slice($+V)}else K>_&&(Z.charCodeAt(G+V)===47?I=V:V===0&&(I=0));break}var k=Z.charCodeAt(G+V),M=X.charCodeAt($+V);if(k!==M)break;k===47&&(I=V)}var j="";for(V=G+I+1;V<=B;++V)(V===B||Z.charCodeAt(V)===47)&&(j.length===0?j+="..":j+="/..");return j.length>0?j+X.slice($+I):($+=I,X.charCodeAt($)===47&&++$,X.slice($))},_makeLong:function(Z){return Z},dirname:function(Z){if(H(Z),Z.length===0)return".";for(var X=Z.charCodeAt(0),G=X===47,B=-1,K=!0,$=Z.length-1;$>=1;--$)if(X=Z.charCodeAt($),X===47){if(!K){B=$;break}}else K=!1;return B===-1?G?"/":".":G&&B===1?"//":Z.slice(0,B)},basename:function(Z,X){if(X!==void 0&&typeof X!="string")throw new TypeError('"ext" argument must be a string');H(Z);var G=0,B=-1,K=!0,$;if(X!==void 0&&X.length>0&&X.length<=Z.length){if(X.length===Z.length&&X===Z)return"";var J=X.length-1,E=-1;for($=Z.length-1;$>=0;--$){var _=Z.charCodeAt($);if(_===47){if(!K){G=$+1;break}}else E===-1&&(K=!1,E=$+1),J>=0&&(_===X.charCodeAt(J)?--J===-1&&(B=$):(J=-1,B=E))}return G===B?B=E:B===-1&&(B=Z.length),Z.slice(G,B)}else{for($=Z.length-1;$>=0;--$)if(Z.charCodeAt($)===47){if(!K){G=$+1;break}}else B===-1&&(K=!1,B=$+1);return B===-1?"":Z.slice(G,B)}},extname:function(Z){H(Z);for(var X=-1,G=0,B=-1,K=!0,$=0,J=Z.length-1;J>=0;--J){var E=Z.charCodeAt(J);if(E===47){if(!K){G=J+1;break}continue}B===-1&&(K=!1,B=J+1),E===46?X===-1?X=J:$!==1&&($=1):X!==-1&&($=-1)}return X===-1||B===-1||$===0||$===1&&X===B-1&&X===G+1?"":Z.slice(X,B)},format:function(Z){if(Z===null||typeof Z!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof Z);return z("/",Z)},parse:function(Z){H(Z);var X={root:"",dir:"",base:"",ext:"",name:""};if(Z.length===0)return X;var G=Z.charCodeAt(0),B=G===47,K;B?(X.root="/",K=1):K=0;for(var $=-1,J=0,E=-1,_=!0,I=Z.length-1,V=0;I>=K;--I){if(G=Z.charCodeAt(I),G===47){if(!_){J=I+1;break}continue}E===-1&&(_=!1,E=I+1),G===46?$===-1?$=I:V!==1&&(V=1):$!==-1&&(V=-1)}return $===-1||E===-1||V===0||V===1&&$===E-1&&$===J+1?E!==-1&&(J===0&&B?X.base=X.name=Z.slice(1,E):X.base=X.name=Z.slice(J,E)):(J===0&&B?(X.name=Z.slice(1,$),X.base=Z.slice(1,E)):(X.name=Z.slice(J,$),X.base=Z.slice(J,E)),X.ext=Z.slice($,E)),J>0?X.dir=Z.slice(0,J-1):B&&(X.dir="/"),X},sep:"/",delimiter:":",win32:null,posix:null};w.posix=w,Y.exports=w}),l={};K1(l,{default:()=>L});M1(l,o(a()));var L=o(a());var s=function(Q){return typeof Q=="string"},e=function(Q){return typeof Q=="object"&&Q!==null},P=function(Q){return Q===null},W1=function(Q){return Q==null},U=function(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null},A1=function(Q,Y,H){if(Q&&e(Q)&&Q instanceof U)return Q;var W=new U;return W.parse(Q,Y,H),W};var{URL:V1,URLSearchParams:x1,[Symbol.for("Bun.lazy")]:u}=globalThis,z1=/^([a-z0-9.+-]+:)/i,j1=/:[0-9]*$/,w1=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,_1=["<",">",'"',"`"," ","\r",`
`,"	"],I1=["{","}","|","\\","^","`"].concat(_1),h=["'"].concat(I1),n=["%","/","?",";","#"].concat(h),i=["/","?","#"],T1=255,r=/^[+a-z0-9A-Z_-]{0,63}$/,b1=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,R1={javascript:!0,"javascript:":!0},c={javascript:!0,"javascript:":!0},F={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},f={parse(Q){var Y=decodeURIComponent;return(Q+"").replace(/\+/g," ").split("&").filter(Boolean).reduce(function(H,W,z){var w=W.split("="),Z=Y(w[0]||""),X=Y(w[1]||""),G=H[Z];return H[Z]=G===void 0?X:[].concat(G,X),H},{})},stringify(Q){var Y=encodeURIComponent;return Object.keys(Q||{}).reduce(function(H,W){return[].concat(Q[W]).forEach(function(z){H.push(Y(W)+"="+Y(z))}),H},[]).join("&").replace(/\s/g,"+")}};U.prototype.parse=function(Q,Y,H){if(!s(Q))throw new TypeError("Parameter 'url' must be a string, not "+typeof Q);var W=Q.indexOf("?"),z=W!==-1&&W<Q.indexOf("#")?"?":"#",w=Q.split(z),Z=/\\/g;w[0]=w[0].replace(Z,"/"),Q=w.join(z);var X=Q;if(X=X.trim(),!H&&Q.split("#").length===1){var G=w1.exec(X);if(G)return this.path=X,this.href=X,this.pathname=G[1],G[2]?(this.search=G[2],Y?this.query=f.parse(this.search.substr(1)):this.query=this.search.substr(1)):Y&&(this.search="",this.query={}),this}var B=z1.exec(X);if(B){B=B[0];var K=B.toLowerCase();this.protocol=K,X=X.substr(B.length)}if(H||B||X.match(/^\/\/[^@\/]+@[^@\/]+/)){var $=X.substr(0,2)==="//";$&&!(B&&c[B])&&(X=X.substr(2),this.slashes=!0)}if(!c[B]&&($||B&&!F[B])){for(var J=-1,E=0;E<i.length;E++){var _=X.indexOf(i[E]);_!==-1&&(J===-1||_<J)&&(J=_)}var I,V;J===-1?V=X.lastIndexOf("@"):V=X.lastIndexOf("@",J),V!==-1&&(I=X.slice(0,V),X=X.slice(V+1),this.auth=decodeURIComponent(I)),J=-1;for(var E=0;E<n.length;E++){var _=X.indexOf(n[E]);_!==-1&&(J===-1||_<J)&&(J=_)}J===-1&&(J=X.length),this.host=X.slice(0,J),X=X.slice(J),this.parseHost(),this.hostname=this.hostname||"";var k=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!k)for(var M=this.hostname.split(/\./),E=0,j=M.length;E<j;E++){var R=M[E];if(!!R&&!R.match(r)){for(var T="",b=0,C=R.length;b<C;b++)R.charCodeAt(b)>127?T+="x":T+=R[b];if(!T.match(r)){var q=M.slice(0,E),A=M.slice(E+1),D=R.match(b1);D&&(q.push(D[1]),A.unshift(D[2])),A.length&&(X="/"+A.join(".")+X),this.hostname=q.join(".");break}}}this.hostname.length>T1?this.hostname="":this.hostname=this.hostname.toLowerCase(),k||(this.hostname=new V1(`https://${this.hostname}`).hostname);var y=this.port?":"+this.port:"",X1=this.hostname||"";this.host=X1+y,this.href+=this.host,k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),X[0]!=="/"&&(X="/"+X))}if(!R1[K])for(var E=0,j=h.length;E<j;E++){var N=h[E];if(X.indexOf(N)!==-1){var m=encodeURIComponent(N);m===N&&(m=escape(N)),X=X.split(N).join(m)}}var d=X.indexOf("#");d!==-1&&(this.hash=X.substr(d),X=X.slice(0,d));var x=X.indexOf("?");if(x!==-1?(this.search=X.substr(x),this.query=X.substr(x+1),Y&&(this.query=f.parse(this.query)),X=X.slice(0,x)):Y&&(this.search="",this.query={}),X&&(this.pathname=X),F[K]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var y=this.pathname||"",Z1=this.search||"";this.path=y+Z1}return this.href=this.format(),this};U.prototype.format=function(){var Q=this.auth||"";Q&&(Q=encodeURIComponent(Q),Q=Q.replace(/%3A/i,":"),Q+="@");var Y=this.protocol||"",H=this.pathname||"",W=this.hash||"",z=!1,w="";this.host?z=Q+this.host:this.hostname&&(z=Q+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(z+=":"+this.port)),this.query&&e(this.query)&&Object.keys(this.query).length&&(w=f.stringify(this.query));var Z=this.search||w&&"?"+w||"";return Y&&Y.substr(-1)!==":"&&(Y+=":"),this.slashes||(!Y||F[Y])&&z!==!1?(z="//"+(z||""),H&&H.charAt(0)!=="/"&&(H="/"+H)):z||(z=""),W&&W.charAt(0)!=="#"&&(W="#"+W),Z&&Z.charAt(0)!=="?"&&(Z="?"+Z),H=H.replace(/[?#]/g,function(X){return encodeURIComponent(X)}),Z=Z.replace("#","%23"),Y+z+H+Z+W};U.prototype.resolve=function(Q){return this.resolveObject(A1(Q,!1,!0)).format()};U.prototype.resolveObject=function(Q){if(s(Q)){var Y=new U;Y.parse(Q,!1,!0),Q=Y}for(var H=new U,W=Object.keys(this),z=0;z<W.length;z++){var w=W[z];H[w]=this[w]}if(H.hash=Q.hash,Q.href==="")return H.href=H.format(),H;if(Q.slashes&&!Q.protocol){for(var Z=Object.keys(Q),X=0;X<Z.length;X++){var G=Z[X];G!=="protocol"&&(H[G]=Q[G])}return F[H.protocol]&&H.hostname&&!H.pathname&&(H.path=H.pathname="/"),H.href=H.format(),H}if(Q.protocol&&Q.protocol!==H.protocol){if(!F[Q.protocol]){for(var B=Object.keys(Q),K=0;K<B.length;K++){var $=B[K];H[$]=Q[$]}return H.href=H.format(),H}if(H.protocol=Q.protocol,!Q.host&&!c[Q.protocol]){for(var j=(Q.pathname||"").split("/");j.length&&!(Q.host=j.shift()););Q.host||(Q.host=""),Q.hostname||(Q.hostname=""),j[0]!==""&&j.unshift(""),j.length<2&&j.unshift(""),H.pathname=j.join("/")}else H.pathname=Q.pathname;if(H.search=Q.search,H.query=Q.query,H.host=Q.host||"",H.auth=Q.auth,H.hostname=Q.hostname||Q.host,H.port=Q.port,H.pathname||H.search){var J=H.pathname||"",E=H.search||"";H.path=J+E}return H.slashes=H.slashes||Q.slashes,H.href=H.format(),H}var _=H.pathname&&H.pathname.charAt(0)==="/",I=Q.host||Q.pathname&&Q.pathname.charAt(0)==="/",V=I||_||H.host&&Q.pathname,k=V,M=H.pathname&&H.pathname.split("/")||[],j=Q.pathname&&Q.pathname.split("/")||[],R=H.protocol&&!F[H.protocol];if(R&&(H.hostname="",H.port=null,H.host&&(M[0]===""?M[0]=H.host:M.unshift(H.host)),H.host="",Q.protocol&&(Q.hostname=null,Q.port=null,Q.host&&(j[0]===""?j[0]=Q.host:j.unshift(Q.host)),Q.host=null),V=V&&(j[0]===""||M[0]==="")),I)H.host=Q.host||Q.host===""?Q.host:H.host,H.hostname=Q.hostname||Q.hostname===""?Q.hostname:H.hostname,H.search=Q.search,H.query=Q.query,M=j;else if(j.length)M||(M=[]),M.pop(),M=M.concat(j),H.search=Q.search,H.query=Q.query;else if(!W1(Q.search)){if(R){H.hostname=H.host=M.shift();var T=H.host&&H.host.indexOf("@")>0?H.host.split("@"):!1;T&&(H.auth=T.shift(),H.host=H.hostname=T.shift())}return H.search=Q.search,H.query=Q.query,(!P(H.pathname)||!P(H.search))&&(H.path=(H.pathname?H.pathname:"")+(H.search?H.search:"")),H.href=H.format(),H}if(!M.length)return H.pathname=null,H.search?H.path="/"+H.search:H.path=null,H.href=H.format(),H;for(var b=M.slice(-1)[0],C=(H.host||Q.host||M.length>1)&&(b==="."||b==="..")||b==="",q=0,A=M.length;A>=0;A--)b=M[A],b==="."?M.splice(A,1):b===".."?(M.splice(A,1),q++):q&&(M.splice(A,1),q--);if(!V&&!k)for(;q--;q)M.unshift("..");V&&M[0]!==""&&(!M[0]||M[0].charAt(0)!=="/")&&M.unshift(""),C&&M.join("/").substr(-1)!=="/"&&M.push("");var D=M[0]===""||M[0]&&M[0].charAt(0)==="/";if(R){H.hostname=H.host=D?"":M.length?M.shift():"";var T=H.host&&H.host.indexOf("@")>0?H.host.split("@"):!1;T&&(H.auth=T.shift(),H.host=H.hostname=T.shift())}return V=V||H.host&&M.length,V&&!D&&M.unshift(""),M.length?H.pathname=M.join("/"):(H.pathname=null,H.path=null),(!P(H.pathname)||!P(H.search))&&(H.path=(H.pathname?H.pathname:"")+(H.search?H.search:"")),H.auth=Q.auth||H.auth,H.slashes=H.slashes||Q.slashes,H.href=H.format(),H};U.prototype.parseHost=function(){var Q=this.host,Y=j1.exec(Q);Y&&(Y=Y[0],Y!==":"&&(this.port=Y.substr(1)),Q=Q.substr(0,Q.length-Y.length)),Q&&(this.hostname=Q)};var L1,O;u&&(L1=u("pathToFileURL"),O=u("fileURLToPath"));var{appendFileSync:U1}=(()=>({}));var{readdirSync:y1}=(()=>({}));var t=(Q)=>Q.replace(/^([A-Z])|[\s-_]+(\w)/g,(Y,H,W)=>W?W.toUpperCase():H.toLowerCase());var S=(Q)=>t(Q).charAt(0).toUpperCase()+t(Q).slice(1),v=(Q)=>O(new URL(Q));var k1=(Q,Y="react")=>{const H=v(import.meta.url),W=L.resolve(H,`../../${Y}/icons`),z=`export {default as  ${S(Q)}} from './${S(Q)}';\n`;U1(L.resolve(W,"index.ts"),z,"utf-8")};var{existsSync:q1,mkdirSync:S1,writeFileSync:D1}=(()=>({}));var F1=(Q,Y="react")=>{const H=Object.keys(Q)[0],W=Object.values(Q)[0],z=v(import.meta.url),w=L.resolve(z,`../../${Y}/icons`);if(!q1(w))S1(w);const Z=`
  import createMeisterIcons from '../src/createMeisterIcons';

  const ${S(H)} = createMeisterIcons("${H}", ${JSON.stringify(W)})


  export default ${S(H)}
  `;D1(L.join(w,`${S(H)}.ts`),Z,"utf-8")};var H1=(Q)=>Q.replace(/^([A-Z])|[\s-_]+(\w)/g,(Y,H,W)=>W?W.toUpperCase():H.toLowerCase()),r1=(Q)=>Q.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s1=(Q)=>H1(Q).charAt(0).toUpperCase()+H1(Q).slice(1),e1=(Q)=>O(new URL(Q)),t1=(Q)=>Q1(Q).map((Y)=>Y.replace(/.svg/,"")),N1=async(Q)=>{return await Bun.file(Q).text()},H0=(Q)=>Q1(Q).reduce((Y,H,W)=>{return Y[L.basename(H,".svg")]=N1(H),Y},{});export{s1 as toPascalCase,r1 as toKebabCase,H1 as toCamelCase,N1 as readSvgCode,t1 as readIconFiles,H0 as readAllMetadata,e1 as getCurrentDir,F1 as generateIconFile,k1 as generateExportFile};
