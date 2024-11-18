import { WalletContractV3R1 } from "@ton/ton";
import { mnemonicNew, mnemonicToPrivateKey } from "@ton/crypto";
import { createWriteStream } from 'fs';

let addresses = [];
for (let i = 0; i < 2; i++) {
  let mnemonics = await mnemonicNew();
  let keyPair = await mnemonicToPrivateKey(mnemonics);

  let workchain = 0;
  let wallet = WalletContractV3R1.create({ workchain, publicKey: keyPair.publicKey });

  let address0 = wallet.address;

  let address = address0.toString({urlSafe: true, bounceable: false, testOnly: false});

  addresses.push(address);

  address

  console.log("address is ", address);
}
