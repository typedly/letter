// Type.
import { AlphabeticLetter } from "./alphabetic-letter.type";
import { VowelLetter } from "./vowel-letter.type";
/**
 * @description Types for consonant letters, excluding vowels.
 * @export
 */
export type ConsonantLetter = Exclude<AlphabeticLetter, VowelLetter>;
