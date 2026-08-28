
import init, { enSten_string, enSten2_string, deSten, deSten2, v2_compatible, is_v1_encoded, is_v2_encoded} from "./utf8sten_web/pkg/utf8sten_web.js";

async function main(){
  
  await init();

}

main();

const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8')

function encode(){
  let content=document.getElementById("original").value;
  let dest=document.getElementById("encoded");
  let log=document.getElementById("log_v1");

  if (content==""){
    dest.value=content;
  } else {
    dest.value=enSten_string(encoder.encode(content));
    log.textContent="";
  }
}

function encode2(){
  let content=document.getElementById("original2").value;
  let dest=document.getElementById("encoded2");
  let log=document.getElementById("log_v2");

  if (content==""){
    dest.value=content;
  } else {
    if (v2_compatible(encoder.encode(content))) {
      dest.value=enSten2_string(encoder.encode(content));
      log.textContent="";
    } else {
      log.textContent="message cannot be encoded using v2 encoder, you probably need to remove any unicode symbols and/or ascii characters with code number >166"
    }
  }
}

function decode(){
  let content=document.getElementById("encoded").value;
  let dest=document.getElementById("original");
  let log=document.getElementById("log_v1");

  let cps=[...content].map(c => c.codePointAt(0));
  if (content==""){
    dest.value=content;
  } else if (is_v1_encoded(cps)) {
    dest.value=decoder.decode(deSten(cps));
    log.textContent="";
  } else {
    log.textContent="it cannot be decoded using utf8sten v1, probably because it's either not encoded with it or it contains characters which do not belong to utf8sten v1"
  }
}

function decode2(){
  let content=document.getElementById("encoded2").value;
  let dest=document.getElementById("original2");
  let log=document.getElementById("log_v2");

  let cps=[...content].map(c => c.codePointAt(0));
  if (content==""){
    dest.value=content;
  } else if (is_v2_encoded(cps)) {
    dest.value=decoder.decode(deSten2(cps));
    log.textContent="";
  } else {
    log.textContent="it cannot be decoded using utf8sten v2, probably because it's either not encoded with it or it contains characters which do not belong to utf8sten v2"
  }
}

window.encode=encode;
window.decode=decode;
window.encode2=encode2;
window.decode2=decode2;
