let T=`function`,O=`undefined`,W=4,U=`string`,P=`utf-8`,R=0,S=1,N=null,L=128,V=`Object`,K=Array,Q=Error,X=Object,M=undefined;var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:S,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=R;try{return e(c,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var y=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb94753a4a329ac59(c,d,x(e))}finally{b[w++]=M}});var s=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==N){return `${a}`};if(b==U){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==N){return `Symbol`}else{return `Symbol(${b})`}};if(b==T){const b=a.name;if(typeof b==U&&b.length>R){return `Function(${b})`}else{return `Function`}};if(K.isArray(a)){const b=a.length;let c=`[`;if(b>R){c+=s(a[R])};for(let d=S;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>S){d=c[S]}else{return toString.call(a)};if(d==V){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return V}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var j=((a,b)=>{a=a>>>R;return g.decode(i().subarray(a,a+ b))});var u=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf435dce312edb550(b,c)});var p=(a=>a===M||a===N);var I=(b=>{if(a!==M)return a;const c=F();G(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return H(d,b)});var f=(a=>{const b=c(a);e(a);return b});var C=(()=>{if(B===N||B.byteLength===R){B=new Uint32Array(a.memory.buffer)};return B});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:S,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=R}}};g.original=f;return g});var F=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==S){b.a=R;return !0};const c=!1;return c});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>R});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/W+ S]=p(d)?R:d;r()[a/W+ R]=!p(d)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/W+ S]=p(d)?R:d;r()[a/W+ R]=!p(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>R});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/W+ S]=p(d)?R:d;r()[a/W+ R]=!p(d)});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>R});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Q();return k(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ S]=g;r()[b/W+ R]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,S)}});b.wbg.__wbg_setInterval_e227d4d8a9d44d66=function(){return A(((a,b)=>{const d=setInterval(c(a),b);return k(d)}),arguments)};b.wbg.__wbg_queueMicrotask_118eeb525d584d9a=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_26a89c14c53809c0=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===T;return b});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=D(b,c).slice();a.__wbindgen_free(b,c*W,W);console.error(...d)});b.wbg.__wbg_log_7c3433e130418e14=((b,c)=>{var d=D(b,c).slice();a.__wbindgen_free(b,c*W,W);console.log(...d)});b.wbg.__wbg_instanceof_Window_99dc9805eaa2614b=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5257b70811e953c0=(a=>{const b=c(a).document;return p(b)?R:k(b)});b.wbg.__wbg_localStorage_318b1c4f106a46f9=function(){return A((a=>{const b=c(a).localStorage;return p(b)?R:k(b)}),arguments)};b.wbg.__wbg_body_3eb73da919b867a1=(a=>{const b=c(a).body;return p(b)?R:k(b)});b.wbg.__wbg_createElement_1a136faad4101f43=function(){return A(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_createElementNS_d47e0c50fa2904e0=function(){return A(((a,b,d,e,f)=>{const g=c(a).createElementNS(b===R?M:j(b,d),j(e,f));return k(g)}),arguments)};b.wbg.__wbg_createTextNode_dbdd908f92bae1b1=((a,b,d)=>{const e=c(a).createTextNode(j(b,d));return k(e)});b.wbg.__wbg_instanceof_Element_f614cf57d4316979=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_0819c2800784a176=((b,d)=>{const e=c(d).namespaceURI;var f=p(e)?R:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/W+ S]=g;r()[b/W+ R]=f});b.wbg.__wbg_setinnerHTML_99deeacfff0ae4cc=((a,b,d)=>{c(a).innerHTML=j(b,d)});b.wbg.__wbg_outerHTML_69934f9195df65af=((b,d)=>{const e=c(d).outerHTML;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ S]=g;r()[b/W+ R]=f});b.wbg.__wbg_removeAttribute_5c264e727b67dbdb=function(){return A(((a,b,d)=>{c(a).removeAttribute(j(b,d))}),arguments)};b.wbg.__wbg_setAttribute_0918ea45d5a1c663=function(){return A(((a,b,d,e,f)=>{c(a).setAttribute(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_addEventListener_1b158e9e95e0ab00=function(){return A(((a,b,d,e,f)=>{c(a).addEventListener(j(b,d),c(e),c(f))}),arguments)};b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===U?e:M;var g=p(f)?R:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/W+ S]=h;r()[b/W+ R]=g});b.wbg.__wbg_value_ab23a75318ea828f=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ S]=g;r()[b/W+ R]=f});b.wbg.__wbg_setvalue_918a8ae77531a942=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_bubbles_f0783dc095f8e220=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_191799b8e0ab3254=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_d94a39b8c8f6eed1=(a=>{const b=c(a).composedPath();return k(b)});b.wbg.__wbg_setchecked_3b12f3d602a63e47=((a,b)=>{c(a).checked=b!==R});b.wbg.__wbg_value_c93cb4b4d352228e=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ S]=g;r()[b/W+ R]=f});b.wbg.__wbg_setvalue_9bd3f93b3864ddbf=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_parentNode_f3957fdd408a62f7=(a=>{const b=c(a).parentNode;return p(b)?R:k(b)});b.wbg.__wbg_parentElement_86a7612dde875ba9=(a=>{const b=c(a).parentElement;return p(b)?R:k(b)});b.wbg.__wbg_childNodes_75d3da5f3a7bb985=(a=>{const b=c(a).childNodes;return k(b)});b.wbg.__wbg_lastChild_8f7b6f3825115eff=(a=>{const b=c(a).lastChild;return p(b)?R:k(b)});b.wbg.__wbg_nextSibling_13e9454ef5323f1a=(a=>{const b=c(a).nextSibling;return p(b)?R:k(b)});b.wbg.__wbg_setnodeValue_8656e865e9b11bbb=((a,b,d)=>{c(a).nodeValue=b===R?M:j(b,d)});b.wbg.__wbg_textContent_efe8338af53ddf62=((b,d)=>{const e=c(d).textContent;var f=p(e)?R:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/W+ S]=g;r()[b/W+ R]=f});b.wbg.__wbg_cloneNode_80501c66ab115588=function(){return A((a=>{const b=c(a).cloneNode();return k(b)}),arguments)};b.wbg.__wbg_insertBefore_882082ef4c5d7766=function(){return A(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_removeChild_14b08321b677677a=function(){return A(((a,b)=>{const d=c(a).removeChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_cb6366cb0956ce29=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_99e27ed8897850f2=(a=>{const b=c(a).host;return k(b)});b.wbg.__wbg_getItem_f7e7a061bbdabefe=function(){return A(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=p(g)?R:o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=l;r()[b/W+ S]=i;r()[b/W+ R]=h}),arguments)};b.wbg.__wbg_setItem_2b72ddf192083111=function(){return A(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_get_c43534c00f382c8a=((a,b)=>{const d=c(a)[b>>>R];return k(d)});b.wbg.__wbg_length_d99b680fd68bf71b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_5859b6d41c6fe9f7=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_a79f1973a4f07d5e=function(){return A(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_87d841e70661f6e9=(()=>{const a=new X();return k(a)});b.wbg.__wbg_self_086b5302bcafb962=function(){return A((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_132fa5d7546f1de5=function(){return A((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_e5f801a37ad7d07b=function(){return A((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_f9a61fce4af6b7c1=function(){return A((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===M;return b});b.wbg.__wbg_from_a663e01d8dab8e44=(a=>{const b=K.from(c(a));return k(b)});b.wbg.__wbg_instanceof_Error_f5ae6a28929a8190=(a=>{let b;try{b=c(a) instanceof Q}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_message_5dbdf59ed61bbc49=(a=>{const b=c(a).message;return k(b)});b.wbg.__wbg_name_90a0336d27b12317=(a=>{const b=c(a).name;return k(b)});b.wbg.__wbg_toString_5326377607a05bf2=(a=>{const b=c(a).toString();return k(b)});b.wbg.__wbg_is_a5728dbfb61c82cd=((a,b)=>{const d=X.is(c(a),c(b));return d});b.wbg.__wbg_resolve_97ecd55ee839391b=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_7aeb7c5f1536640f=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_set_37a50e901587b477=function(){return A(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=s(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ S]=g;r()[b/W+ R]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(j(a,b))});b.wbg.__wbindgen_closure_wrapper153=((a,b,c)=>{const d=t(a,b,37,u);return k(d)});b.wbg.__wbindgen_closure_wrapper229=((a,b,c)=>{const d=v(a,b,62,y);return k(d)});b.wbg.__wbindgen_closure_wrapper540=((a,b,c)=>{const d=t(a,b,164,z);return k(d)});return b});var E=(async(a,b)=>{if(typeof Response===T&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===T){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var k=(a=>{if(d===b.length)b.push(b.length+ S);const c=d;d=b[c];b[c]=a;return c});var J=(async(b)=>{if(a!==M)return a;if(typeof b===O){b=new URL(`generic-clicker-game-f7870c22cb51b9c7_bg.wasm`,import.meta.url)};const c=F();if(typeof b===U||typeof Request===T&&b instanceof Request||typeof URL===T&&b instanceof URL){b=fetch(b)};G(c);const {instance:d,module:e}=await E(await b,c);return H(d,e)});var o=((a,b,c)=>{if(c===M){const c=m.encode(a);const d=b(c.length,S)>>>R;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,S)>>>R;const f=i();let g=R;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==R){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,S)>>>R;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var e=(a=>{if(a<132)return;b[a]=d;d=a});var G=((a,b)=>{});var i=(()=>{if(h===N||h.byteLength===R){h=new Uint8Array(a.memory.buffer)};return h});var c=(a=>b[a]);var r=(()=>{if(q===N||q.byteLength===R){q=new Int32Array(a.memory.buffer)};return q});var x=(a=>{if(w==S)throw new Q(`out of js stack`);b[--w]=a;return w});var z=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h478f2e256725e5cc(b,c,k(d))});var H=((b,c)=>{a=b.exports;J.__wbindgen_wasm_module=c;q=N;B=N;h=N;a.__wbindgen_start();return a});var D=((a,b)=>{a=a>>>R;const c=C();const d=c.subarray(a/W,a/W+ b);const e=[];for(let a=R;a<d.length;a++){e.push(f(d[a]))};return e});function A(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}let a;const b=new K(L).fill(M);b.push(M,N,!0,!1);let d=b.length;const g=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){g.decode()};let h=N;let l=R;const m=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const n=typeof m.encodeInto===T?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=N;let w=L;let B=N;export default J;export{I as initSync}