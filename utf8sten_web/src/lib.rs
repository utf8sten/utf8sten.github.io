


use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[inline(always)]
pub fn enSten_string(src: &[u8]) -> String {
  utf8sten::enSten_to_string(src)
}

#[wasm_bindgen]
#[inline(always)]
pub fn enSten2_string(src: &[u8]) -> String {
  utf8sten::enSten2_to_string(src)
}

#[wasm_bindgen]
#[inline(always)]
pub fn v2_compatible(src: &[u8]) -> bool {
  utf8sten::supports_v2_encode(src)
}

#[wasm_bindgen]
#[inline(always)]
pub fn deSten2(src: &[u32]) -> Vec<u8> {
  utf8sten::deSten2(src).expect("input should be validated")
}

#[wasm_bindgen]
#[inline(always)]
pub fn deSten(src: &[u32]) -> Vec<u8> {
  utf8sten::deSten(src).expect("input should be validated")
}

#[wasm_bindgen]
#[inline(always)]
pub fn is_v1_encoded(src: &[u32]) -> bool {
  utf8sten::valid_en_v1(src)
}

#[wasm_bindgen]
#[inline(always)]
pub fn is_v2_encoded(src: &[u32]) -> bool {
  utf8sten::valid_en_v2(src)
}
