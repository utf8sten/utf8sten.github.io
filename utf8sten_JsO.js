
import init, { enSten, enSten2, deSten, deSten2, UTF8_den, v2_encode_valid} from "./UTF8sten_oxidised/UTF8/pkg/UTF8.js";

async function main(){
  
  await init();

}

main();

const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8')

function encode(){
  let content=document.getElementById("original").value;
  let dest=document.getElementById("encoded");
  if (content==""){
    dest.value=content;
  } else {
    dest.value=enSten(encoder.encode(content));
  }
}

function encode2(){
  let content=document.getElementById("original2").value;
  let dest=document.getElementById("encoded2");
  if (content==""){
    dest.value=content;
  } else {
    if (v2_encode_valid(encoder.encode(content))) {
      dest.value=enSten2(encoder.encode(content));
    } else {
      dest.value="message cannot be encoded using v2 encoder, you probably need to remove any unicode symbols and/or ascii characters with code number >127"
    }
  }
}

function decode(){
  let content=document.getElementById("encoded").value;
  let dest=document.getElementById("original");
  if (content==""){
    dest.value=content;
  } else {
    dest.value=decoder.decode(deSten(UTF8_den(content)));
  }
}

function decode2(){
  let content=document.getElementById("encoded").value;
  let dest=document.getElementById("original");
  if (content==""){
    dest.value=content;
  } else {
    dest.value=decoder.decode(deSten(UTF8_den(content)));
  }
}

window.encode=encode;
window.decode=decode;
window.encode2=encode2;
window.decode2=decode2;
