/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/qinhao/hexo/public/178efba485f/images/img_0.png","1d947a1650b2a1dbbf96e4f678e565d6"],["E:/qinhao/hexo/public/178efba485f/images/img_1.jpg","96dc81766dfcbefeaa7983bb36ffa876"],["E:/qinhao/hexo/public/178efba485f/images/img_10.jpg","d9b5f124bb2a1981287005ec14f2059e"],["E:/qinhao/hexo/public/178efba485f/images/img_11.jpg","293834aaec10ae06839beea5206818d2"],["E:/qinhao/hexo/public/178efba485f/images/img_12.jpg","6f488d8ea50181856b6004ff7c7df6cd"],["E:/qinhao/hexo/public/178efba485f/images/img_13.jpg","73347b165694d4aaed7cb947854bbdc4"],["E:/qinhao/hexo/public/178efba485f/images/img_14.jpg","0f8401f491da0b20838d9d3d88f9f622"],["E:/qinhao/hexo/public/178efba485f/images/img_15.jpg","c6cd21408d6af5421b179817fef983b4"],["E:/qinhao/hexo/public/178efba485f/images/img_16.jpg","4c5c64e8f9bbfae0891a2445a09f0e70"],["E:/qinhao/hexo/public/178efba485f/images/img_17.jpg","38c2374155ae5f1f7f137425407800d6"],["E:/qinhao/hexo/public/178efba485f/images/img_18.jpg","95a257e95a35b4a9d670ddf368b00229"],["E:/qinhao/hexo/public/178efba485f/images/img_19.png","61d056645aa25a493d19e2e7b25ec22a"],["E:/qinhao/hexo/public/178efba485f/images/img_2.png","dc29f12ba42cfef867b01bf0d05718b3"],["E:/qinhao/hexo/public/178efba485f/images/img_20.jpg","efd4166a676681e4b54ff9bde77b46e7"],["E:/qinhao/hexo/public/178efba485f/images/img_3.png","8dd39b2a319bbb07d35b25a3934ff8eb"],["E:/qinhao/hexo/public/178efba485f/images/img_4.png","e7a48d361b7055426d17015a0282383b"],["E:/qinhao/hexo/public/178efba485f/images/img_5.png","a4f4f558bfde26b7820ff05ca14a0df5"],["E:/qinhao/hexo/public/178efba485f/images/img_6.png","18ae38ff93c5c41ca50e41e168d1b493"],["E:/qinhao/hexo/public/178efba485f/images/img_7.png","9614d444f1c66d2bad4593ea68e95325"],["E:/qinhao/hexo/public/178efba485f/images/img_8.jpg","7a63cbbec1fed10d02ea0518adc68e2b"],["E:/qinhao/hexo/public/178efba485f/images/img_9.jpg","2ea81e0aa5e0ff6b55d36ebaee574ced"],["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","1ba392a468eeb0153b2b9ebf0cd62113"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","a820012e472d4ee0c6ad1c6b18583793"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","ac2bdfed29d6521691d8cf136e3f304a"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","016f087ca68ade532fdeb1e8c1215174"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","81eb518cb7fccb0a0561d92b975a42a4"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","97e315b44a9dd8921f1f1146a2322d72"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","acc8f1f449d4a07fce63b308f2f31870"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","b65812df805c5a0cf50a18b1abf6e5a2"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","e1fae7b188ed9d7328297df581c9c3fd"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","94f21b18e4c635a8b72b68ec7c774ce5"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","d9c13875757aa4fde369dcee128427a3"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","279b2afc009bfee9a9c6d209100d71d3"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","1ea58cfff609372ccd6bf6a91725e3ca"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","448f6b2c86e04064de83f7faf48b0577"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","83dfb019f52316443bee67d976ced970"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","c9a9821c0a3b78b938690ad7b9008ad4"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","95544e8c99c182c3d5336e5320716a0f"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","85605f41790900420c270cda09a2e75b"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","5232dffc18c677f25d77d2bd47dd3070"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","c3f630c93d7268de06582486e52fb5bc"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","edddada069c32065eea53aee8510bb65"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","21a9d95da879087c8479bbc70958657e"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","df26e30cb43924db38016a044c053986"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","64b059d2f6f56f96954cfd0053292d30"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","786f197031b784f33793adec54ea8192"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","ab2199a3c5c49b63907122359a28777e"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","a478c8ec917125457bb0f6266329b6ac"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","d5d089a6bbd71f0bb7217c550c791ace"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","989b3d40e027cc816c9fb42382db3df7"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","ae9633882208d33044a3c70313570db4"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","1b5f0c5109c90da81066623fc82fc036"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","6044f8b5fea59fe51f1368430c3d372f"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","d3ce588dfba5e9c32a66846378606c91"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","1eea079b5a600775de3f35425df3d1e6"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","876f2cc3a4eeaf911deebcc9cc2e1b14"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","66298c48c72a128145211cc74b730221"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","70a391536de7ccae57cd67fc8d7c188a"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","500fbb3866b721ee4a93916b6dcbedfc"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","6cbc51efb0d0f5a35b54469751e7cadf"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","d089c9b041bd5e461cc393a708ab7b8c"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","e4f2633ed2976defc7414ac133e44b09"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","7e911fbbfeedc6771b48dbf20ce3afdc"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","3c57ce49112220c0b74efafe66e53614"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","78c0b7f527bc379fb25879fe9b8334de"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","474c5c202be1f7fcb878faca9543651e"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","f28c131221dd9b37efeef3b48168d176"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","9d527a21fde04ddc5a73390cebb02f0d"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","81988024102a7044c2c9fd1320aaee9f"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","ba2563d589d72130a1ef7a2ed880617b"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","5308130a6eed8565e0a92c737b1629b7"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","459784636fceeea21cea3d8db5c8a2fa"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","9b94d2096838aa366048a1b5686930a0"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","a700fb2824d73b34ee4727f3e1e8bc9e"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","399c411809156b4951d70779809a06b5"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","178e6ca2e7536bd62f112ef3d6f4e0d1"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","0351ec935edee2c49712ae8e2ec41a3a"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","e0eaa7e1317a28d4cee77712d56df1e0"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","40d285fdefe92f10062645c2dc7faed5"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","e1596e00cc42938b7798b786b4a190cc"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","d52a5fb86edc17ea274511ca36a89499"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","292b0d59c357e0016e47c4291614bfe5"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","7a5688e476b1b57b68f63f1fe499327f"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","8c427d8d86f07e82badf25d567f53cf9"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","d4bac052ef97909f56dc9c16bb380bed"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","711b1403a89913b07264a32177efcec2"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","bdba5939a106dca15741f00f817fbfef"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","3af18aad2815076e76782fab92bd04fc"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","8bedb8834edb7476e6a4ecdbc7eb4128"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","ae9239ce34eea042ee1cb32a09526274"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","01e4a33e7a7768949c352d2be85c44b9"],["E:/qinhao/hexo/public/ByteDanceVerify.html","a42301902b090b8d5b3d19e689b156d0"],["E:/qinhao/hexo/public/about/index.html","917ab6dda1193bf4504bab05187f4f50"],["E:/qinhao/hexo/public/archives/2020/02/index.html","e7e61e9cc4e5688257301aa45b93f8f7"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","55defae5aebd02a7634b3fd58120cc4a"],["E:/qinhao/hexo/public/archives/2020/03/index.html","221f1c4a91e8996c7629c992d95c8a51"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","57b7e0627f887dcd3aa94b781e212af6"],["E:/qinhao/hexo/public/archives/2020/04/index.html","4d37b6fd97adbce60391c176bd878fb5"],["E:/qinhao/hexo/public/archives/2020/05/index.html","b460b1bc68a129f309e7dc4ea563a93f"],["E:/qinhao/hexo/public/archives/2020/06/index.html","81bb7ca087e7f5b04a3476a551726712"],["E:/qinhao/hexo/public/archives/2020/07/index.html","e01987785f0da9e141ae43c9929d977a"],["E:/qinhao/hexo/public/archives/2020/08/index.html","a1fca3c1d89c381dacfbd22fbfc0e031"],["E:/qinhao/hexo/public/archives/2020/10/index.html","aeadeadc50177d9911e4dac465b43c6e"],["E:/qinhao/hexo/public/archives/2020/11/index.html","705144d7a49cb25c31d696fc9f646018"],["E:/qinhao/hexo/public/archives/2020/index.html","7caa8f74c7a5ddea40429530108db47d"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","2b30fbcb2f500c8770fe3bf70bc2cd86"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","415576a1dc0c7d8852ad1e4157f0f52f"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","2620e85b8ae252cf9d53bf6e608473f7"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","837f7dc5cdb74e7e821bc65d348304cd"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","d6189ad61403dc8dd05dc96e3e228640"],["E:/qinhao/hexo/public/archives/2021/03/index.html","44d15e849c30f57306a3c575657cf8b4"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","25db0087cca782f3c24b326cb64fc355"],["E:/qinhao/hexo/public/archives/2021/index.html","37bc12554146aae39d24029c464dfdea"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","50194ccf6962176fa019fafff1335c54"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","e72f667bcd38f185ede2654f07682d68"],["E:/qinhao/hexo/public/archives/index.html","61a29e9f6f8d0b1f79b928ddf939841c"],["E:/qinhao/hexo/public/archives/page/2/index.html","61a29e9f6f8d0b1f79b928ddf939841c"],["E:/qinhao/hexo/public/archives/page/3/index.html","9378d38c5ea77206368b22786b06ab0f"],["E:/qinhao/hexo/public/archives/page/4/index.html","66fa0eaf8986eef5cf95c61485121138"],["E:/qinhao/hexo/public/archives/page/5/index.html","258043c739faf5c3733e1f46f4877485"],["E:/qinhao/hexo/public/archives/page/6/index.html","258043c739faf5c3733e1f46f4877485"],["E:/qinhao/hexo/public/archives/page/7/index.html","258043c739faf5c3733e1f46f4877485"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","65d4a78a81baaa43cbc86eff6a2a9272"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","06845356bfa9d96f0c7a981b65d80e96"],["E:/qinhao/hexo/public/categories/Java/index.html","9330c33bcd54f401dc4a2e610b272600"],["E:/qinhao/hexo/public/categories/Linux/index.html","a474c3871e2c5a1ce1a504f0ea41b24f"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","bb2c254b077ac8f50f03bdf3d5d19f9a"],["E:/qinhao/hexo/public/categories/Python/index.html","efe59ba59630b11e2792b70780e5f16c"],["E:/qinhao/hexo/public/categories/交换机/index.html","bf5dcdc750594bf4766a197bf1567ada"],["E:/qinhao/hexo/public/categories/华为认证/index.html","7fe1564f6c9d94684baf38293824f3d3"],["E:/qinhao/hexo/public/categories/小技巧/index.html","999d6f355c53d6a7f17d24c053d57833"],["E:/qinhao/hexo/public/categories/数据库/index.html","961f294454801f21644562a6a42a2419"],["E:/qinhao/hexo/public/categories/服务器/index.html","5dbdfb6456276e35dd23f1a629dd984b"],["E:/qinhao/hexo/public/categories/网络安全/index.html","c3e6e83ff992a94eeeb55b7fb5f8e1cd"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","4c3e1dca259cfaacd4be1fd7db443748"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","3fc24dd85adc2d0325f897ba35877bdd"],["E:/qinhao/hexo/public/categories/软件破解/index.html","66fbdcd1259eab141732a75423f9a268"],["E:/qinhao/hexo/public/categories/通信技术/index.html","ac05e7def75c1e10353b942ebd346488"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","5d9ed6c56d650ab096d8cb8e73bef826"],["E:/qinhao/hexo/public/category/index.html","433321e3d70e40622c5266e30817b123"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","eb200dec93018819c8daaf76db0bb5f7"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","a86c13bfc44bc47e00c40b07e7acf69e"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","f2a8433caca57144927beae8f8a934a4"],["E:/qinhao/hexo/public/page/2/index.html","0a0f418fc2498b428f77922def713e2c"],["E:/qinhao/hexo/public/page/3/index.html","f0ba8ea69e2bb241b3d624dbbd80f9f7"],["E:/qinhao/hexo/public/page/4/index.html","07342d62ca19666becec7d5b20f9a467"],["E:/qinhao/hexo/public/page/5/index.html","32846be73aff268afd8b7c7ee038a374"],["E:/qinhao/hexo/public/page/6/index.html","603a836d31a772e5b07b67eda6e29d86"],["E:/qinhao/hexo/public/page/7/index.html","664fa2225b5eb20cb170e5c51f1313c9"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","7dda64d0c260b9701b799e34653a75ce"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","d71991e6035c9e55e4ce094a8c3d5ab8"],["E:/qinhao/hexo/public/tags/MySQL/index.html","bc5ed582227c3822f776bb86cb020410"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","40dafabc87cada1e34f42d3dec4d3473"],["E:/qinhao/hexo/public/tags/VPN/index.html","50196b343a887c601bd5c6665be11dc0"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","b6eecb7350232fc3e3dc154f9bb5d0c0"],["E:/qinhao/hexo/public/tags/index.html","9a47a03062a5620d63d41a0a692404e7"],["E:/qinhao/hexo/public/tags/交换机/index.html","7c03cb578851e5e5ecba30e7877f0df8"],["E:/qinhao/hexo/public/tags/图像处理/index.html","4aab2155c2831d2c6056cd09e9d8e5ce"],["E:/qinhao/hexo/public/tags/基础网络/index.html","82b4c758c121ed68cda46a43e588a197"],["E:/qinhao/hexo/public/tags/思科/index.html","05c024611a37633841e68d05b167713a"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","7879d8a808fdc45ba958cb09721ba29f"],["E:/qinhao/hexo/public/tags/数据库/index.html","9b9aab5c1e9551e67d02a7b897c25614"],["E:/qinhao/hexo/public/tags/无线技术/index.html","1e837552817cc1c0f135b0b6a6441d8f"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","4ef1d6d0f21d722670ea91f5387bb555"],["E:/qinhao/hexo/public/tags/系统安装/index.html","84cf5b0e64a6339921239d0b97d5f84a"],["E:/qinhao/hexo/public/tags/网络安全/index.html","d1b887b2d682d050968a62e2db1b5bf7"],["E:/qinhao/hexo/public/tags/网络技术/index.html","52cc7bfdf63e5b24e01757262b2fbefc"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","7fc82fc5f76091c818da2ae0fda64d26"],["E:/qinhao/hexo/public/tags/路由器/index.html","66b16eb881cefe2469b66b73e965603d"],["E:/qinhao/hexo/public/tags/软考/index.html","5cf42ce3d8349c1d94dd20745b943db0"],["E:/qinhao/hexo/public/tags/通信原理/index.html","f3b871f39f1f518496b2833b3d437768"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","7ba142037391d3521dae7cb1a2e09c5a"],["E:/qinhao/hexo/public/tags/通信技术/index.html","4fd200626185daafd3796cf490aa8377"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","cb851332eaab4efc5acf4cd145b5096b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







