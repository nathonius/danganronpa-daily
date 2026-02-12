import { Hajime } from './hajime';
import { Monokuma } from './monokuma';
import { Nagito } from './nagito';
import { CharacterData } from './interfaces';
import { Byakuya } from './byakuya';
import { Celestia } from './celestia';
import { Chihiro } from './chihiro';
import { Hifumi } from './hifumi';
import { Makoto } from './makoto';
import { Akane } from './akane';
import { Angie } from './angie';
import { Fuyuhiko } from './fuyuhiko';
import { Gonta } from './gonta';
import { Gundham } from './gundham';
import { Himiko } from './himiko';
import { Hina } from './hina';
import { Hiyoko } from './hiyoko';
import { Ibuki } from './ibuki';
import { Imposter } from './imposter';
import { Junko } from './junko';
import { Kaede } from './kaede';
import { Kaito } from './kaito';
import { Kazuichi } from './kazuichi';
import { Keebo } from './keebo';
import { Kirumi } from './kirumi';
import { Kokichi } from './kokichi';
import { Korekiyo } from './korekiyo';
import { Kyoko } from './kyoko';
import { Leon } from './leon';
import { Mahiru } from './mahiru';
import { Maki } from './maki';
import { Mikan } from './mikan';
import { Miu } from './miu';
import { Mondo } from './mondo';
import { Monomi } from './monomi';
import { Mukuro } from './mukuro';
import { Nekomaru } from './nekomaru';
import { Peko } from './peko';
import { Rantaro } from './rantaro';
import { Ryoma } from './ryoma';
import { Sakura } from './sakura';
import { Sayaka } from './sayaka';
import { Shuichi } from './shuichi';
import { Sonia } from './sonia';
import { Taka } from './taka';
import { Tenko } from './tenko';
import { Teruteru } from './teruteru';
import { Toko } from './toko';
import { Tsumugi } from './tsumugi';
import { Yasuhiro } from './yasuhiro';
import { Chiaki } from './chiaki';

export const CHARACTERS: Record<string, CharacterData> = {
  [Akane.id]: Akane,
  [Angie.id]: Angie,
  [Byakuya.id]: Byakuya,
  [Celestia.id]: Celestia,
  [Chiaki.id]: Chiaki,
  [Chihiro.id]: Chihiro,
  [Fuyuhiko.id]: Fuyuhiko,
  [Gonta.id]: Gonta,
  [Gundham.id]: Gundham,
  [Hajime.id]: Hajime,
  [Hifumi.id]: Hifumi,
  [Himiko.id]: Himiko,
  [Hina.id]: Hina,
  [Hiyoko.id]: Hiyoko,
  [Ibuki.id]: Ibuki,
  [Imposter.id]: Imposter,
  [Junko.id]: Junko,
  [Kaede.id]: Kaede,
  [Kaito.id]: Kaito,
  [Kazuichi.id]: Kazuichi,
  [Keebo.id]: Keebo,
  [Kirumi.id]: Kirumi,
  [Kokichi.id]: Kokichi,
  [Korekiyo.id]: Korekiyo,
  [Kyoko.id]: Kyoko,
  [Leon.id]: Leon,
  [Mahiru.id]: Mahiru,
  [Maki.id]: Maki,
  [Makoto.id]: Makoto,
  [Mikan.id]: Mikan,
  [Miu.id]: Miu,
  [Mondo.id]: Mondo,
  [Monokuma.id]: Monokuma,
  [Monomi.id]: Monomi,
  [Mukuro.id]: Mukuro,
  [Nagito.id]: Nagito,
  [Nekomaru.id]: Nekomaru,
  [Peko.id]: Peko,
  [Rantaro.id]: Rantaro,
  [Ryoma.id]: Ryoma,
  [Sakura.id]: Sakura,
  [Sayaka.id]: Sayaka,
  [Shuichi.id]: Shuichi,
  [Sonia.id]: Sonia,
  [Taka.id]: Taka,
  [Tenko.id]: Tenko,
  [Teruteru.id]: Teruteru,
  [Toko.id]: Toko,
  [Tsumugi.id]: Tsumugi,
  [Yasuhiro.id]: Yasuhiro,
} as const;

export type CHARACTER = keyof typeof CHARACTERS;
