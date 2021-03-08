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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","88060e5159d926548f70334dcf3d6f8b"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","46e16af5b3af797b806a31a5d9ff2493"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","65a25f263ecf5e42e8948fd3fa84171f"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","047def6590cea44ba06947e12d6cfa47"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","748b4aff7cf6936c556ebc3b0722b84d"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","e3ea13d33a89d740918c169be2afb0c4"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","d0690c3c9639aed9e9db04601ecebf64"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","913be2413927cfdff6df453487f5c944"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","138573e7af05f905ae0e7499d2ba30af"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","c7548436957df3ebf0e1346e987f7561"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","8da7d3f94b05d8a9b04628b80907c162"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","6eb21710d465f0eea3a83a114d62274e"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","2beb04db1708e9f679eecfe43bc55287"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","a318d70e408be333dc984f1942d30c4e"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","9e6a841fa249a2925941b424824065ba"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","eae619337373b2905481abbd5ae4ab80"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","12445cc389d9badd07862d5162d6a2d5"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","47305bb30da1edccc0808064682584f5"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","7f733983b50b096664c72073560b29b6"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","f66d1e0b1ee44eaafbfdc3427e8ee739"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","d9e155e11172dfecee1e957ac79205ce"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","5ab733794bf78a23f938b69e60c81a67"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","470a4dcc46c59556b6d44debcd68e6d0"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","3233a2fdf73f27a75ccb177831d83724"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","bcf058a40b069a587b1f499999c5d9d8"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","83d99f75fdd56e3e5cb2e70ec713a64a"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","980f507613a9f7bb4ed2347f9c6301b1"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","b7682bcebc4c5ee011f0fa32957ed6c6"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","4b04251bf708a6dff3856760b7078fa7"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","30b4351b4d89088f72135ae9cd03c963"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","2a43e716d6a4cb89ccdbb6f1060ebec6"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","1d7bd506e773103a033cd31b680ee514"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","ada36bb42cbb4b02742c12d199e410e6"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","bff7f146d6f35b975bd55285cc7807eb"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","003ddacff9dc2a51bebcae9f9358cdc8"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","7aa38333ea882bcf52c1c69cd7cde0a4"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","0c4536e9a003ec1ad7c673f195b4bef1"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","005d5b0fc5d111bc2816fdc2af575324"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","b3ef62844f4a5a412b740e6380b62ca4"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","8bea49b774aa0e0b601115b1ac19d26d"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","6f2d745e4e33b8ed5f846e8ff673e563"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","d9bc0a40da3d3f09d6a7abdb587ee8f1"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","0740a95a5e57049611954b63941e73f4"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","d2ff00a7b75cce71c6b7a835687bafdb"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","2b119f6979c4035c4516e83308778b7b"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","63b97d421e236381a3620cb2fe0f7369"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","0977696cecad98aaa43c0d1e4cb5e0da"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","a4bfc6701b87a1a0b9cafbdbd10b27d3"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","961a047cb1fde6d19b223ce9d153b6d2"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","9352a904cdf8c05829a93ededc58880b"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","9c04b800f2e1902eac20f94963f36c02"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","2ba3ebad828c74455d8550298eac4121"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","58fde3638b63837a6f7c2f13fdbcf9ce"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","b61613af7fe7242805c3e33eab854cf7"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","7af616895212d28c1270738d25c98715"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","45d5402bb2c63eefa5d3bd6f1e373d76"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","d54b252da2a42fa7801e4af2e0a3b78d"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","a7d97208acc703b900e5c09af8f5860a"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","9d67e84aa71239ae1132528b396b5cea"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","424d64ef86a4f8b7590109b8a3f08eab"],["E:/qinhao/hexo/public/ByteDanceVerify.html","56b94827a3a6f101353d3df0fe847c7d"],["E:/qinhao/hexo/public/about/index.html","257c13091c502924594482f561faf26e"],["E:/qinhao/hexo/public/archives/2020/02/index.html","a78c54c1f1b2a92b04e5e45cb21ffd21"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","33262f450bbb1e0527400d4f479b9686"],["E:/qinhao/hexo/public/archives/2020/03/index.html","be466fea4cc87c37856dcd952ee4aa02"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","df4e99d70f6192e7aa0df65f867e48b3"],["E:/qinhao/hexo/public/archives/2020/04/index.html","6eaaf9f39b4551642d69fa4a963b0c30"],["E:/qinhao/hexo/public/archives/2020/05/index.html","9cc1720aefba02765d8cd49f8f6be3be"],["E:/qinhao/hexo/public/archives/2020/06/index.html","4760e446d60c91ba5b4b3d226a111edf"],["E:/qinhao/hexo/public/archives/2020/07/index.html","872d4ddd39cd8d7d2399441ac5a33410"],["E:/qinhao/hexo/public/archives/2020/08/index.html","27c05636c1c8bd74f04c706771d161ff"],["E:/qinhao/hexo/public/archives/2020/10/index.html","4ab6e933ee8d978f7000ee1e675a4b48"],["E:/qinhao/hexo/public/archives/2020/11/index.html","b5e020322c0a56605e2e1abb654844f0"],["E:/qinhao/hexo/public/archives/2020/12/index.html","49b9b5bddd7429c515e5be8bc1aef8f4"],["E:/qinhao/hexo/public/archives/2020/index.html","5f9ebd3e6b67a521f30cf83f8ffbb6d5"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","df3a86bae5c7c2fa7a5eb5e02afbb2a0"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","c32345c2fcce616935fc04250fecea63"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","e4e92da7feb70311ad2e4d077b98d886"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","94f0ee7f32d99a67b1e6bcd49ba79d41"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","5d6c781af9cf07492f808db368d29451"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","119a5ed929cbb9d3d1b79ec52786faa5"],["E:/qinhao/hexo/public/archives/index.html","d19c8433c21013475f6ddc05309e561e"],["E:/qinhao/hexo/public/archives/page/2/index.html","56507b6ee00da52b1459da8a880a9048"],["E:/qinhao/hexo/public/archives/page/3/index.html","d19c8433c21013475f6ddc05309e561e"],["E:/qinhao/hexo/public/archives/page/4/index.html","56507b6ee00da52b1459da8a880a9048"],["E:/qinhao/hexo/public/archives/page/5/index.html","56507b6ee00da52b1459da8a880a9048"],["E:/qinhao/hexo/public/archives/page/6/index.html","56507b6ee00da52b1459da8a880a9048"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","0871d7ab9d0c4b9f5fa39f44aac0b9d2"],["E:/qinhao/hexo/public/categories/Java/index.html","f361a59f75c2cc3a6ebc41aea12a74b1"],["E:/qinhao/hexo/public/categories/Linux/index.html","2a3ce664582f435328fc71abbeb8991f"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","f57fd195180b06e26748d4bfd9265077"],["E:/qinhao/hexo/public/categories/Python/index.html","699fba33e710f0cf6df3bb4b9f5711a8"],["E:/qinhao/hexo/public/categories/交换机/index.html","4d71aa87d74fe0f9e7711e91911bd3aa"],["E:/qinhao/hexo/public/categories/华为认证/index.html","007f2885a4be5c1ac8a5874901d79afd"],["E:/qinhao/hexo/public/categories/小技巧/index.html","c995cc6803ce2898233207fc34ba9cbc"],["E:/qinhao/hexo/public/categories/数据库/index.html","054203d6875b6f76b91d48746fd5cdf2"],["E:/qinhao/hexo/public/categories/服务器/index.html","5df99f78d015afd46d3f042cd11f9627"],["E:/qinhao/hexo/public/categories/网络安全/index.html","ac7e50321d2e0620ffa7e429e1e2c8d0"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","b227b486b2187d96917ec846a4902788"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","5f307ac06813d4504b68ef07374c74cb"],["E:/qinhao/hexo/public/categories/软件破解/index.html","e668c33db4a8b7e885b4edfe2e33a4e6"],["E:/qinhao/hexo/public/categories/通信技术/index.html","d28046f48d18ac68b116cd9ba29cc7d5"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","629a414e83f2f031acb1c1b9e51c57bb"],["E:/qinhao/hexo/public/category/index.html","8c420192b96b52782fed79ae74e1c829"],["E:/qinhao/hexo/public/css/style.css","f5e2c67bc8af009b55f92e0cda779c39"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","3717e069be96b4a8cdf89d9cb3f8de27"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","f94318fd5120c0d25f57c30cce83204b"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","5bc261f21f2b901b681f82499b3a30ad"],["E:/qinhao/hexo/public/page/2/index.html","20b99321749a18889986d4b0e5080360"],["E:/qinhao/hexo/public/page/3/index.html","bd3f67abfb7ee3ee42439c5cdb355944"],["E:/qinhao/hexo/public/page/4/index.html","757e76f999036fe261b3762a9d3dbb99"],["E:/qinhao/hexo/public/page/5/index.html","7a303684921918d03c7586f6d5087863"],["E:/qinhao/hexo/public/page/6/index.html","1bb59c243503765e19ac51de1736c305"],["E:/qinhao/hexo/public/sw-register.js","805e785d6effab67fcce1d865c7fcfc0"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","e7a22f609f9b2b74075507866badf017"],["E:/qinhao/hexo/public/tags/MySQL/index.html","e07b49a665e9d8a2b641682464506478"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","a1bd4e8910757278c3bb8d92888cece2"],["E:/qinhao/hexo/public/tags/VPN/index.html","9de2e6a988bb1706982eb9a652a38cfb"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","15b2737712cd2b44111f1c656aabdf01"],["E:/qinhao/hexo/public/tags/index.html","22dd125d6c570e27fd014b749bbd820b"],["E:/qinhao/hexo/public/tags/交换机/index.html","bbf44f5da4db2863cc27f90b64249cc3"],["E:/qinhao/hexo/public/tags/图像处理/index.html","6ecf257e0a88961b976f02754724c342"],["E:/qinhao/hexo/public/tags/基础网络/index.html","ec0383c42db366e11d342e71ef3f2985"],["E:/qinhao/hexo/public/tags/思科/index.html","8eaf245a9227a09065d1e7f693e5eeb9"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","36a51dfe93c1a8f1c5824af9c2a73895"],["E:/qinhao/hexo/public/tags/数据库/index.html","3054147452421aa137bfffdff3a749d8"],["E:/qinhao/hexo/public/tags/无线技术/index.html","e37abec71e024cb9b52eabc6adf03c03"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","92c1bf9ed9a593e7f357fa3b0856a992"],["E:/qinhao/hexo/public/tags/系统安装/index.html","5b5b6522a7669d94faf1b9af271ebd92"],["E:/qinhao/hexo/public/tags/网络安全/index.html","4f35f8d170d80467f30d7184829d9f5e"],["E:/qinhao/hexo/public/tags/网络技术/index.html","8990cfef48389f797db8add6ffc164b1"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","99d50460c9ef5771ce0c909b65d654d8"],["E:/qinhao/hexo/public/tags/路由器/index.html","b257fc867fad046601f627e094018bf3"],["E:/qinhao/hexo/public/tags/软考/index.html","fadcb0056ee893351928fd6f2996c02a"],["E:/qinhao/hexo/public/tags/通信原理/index.html","a944af7d8c0ca3b0da386e22e07c5fe3"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","3ea51ce0368f0dfab191f4f05394dbdb"],["E:/qinhao/hexo/public/tags/通信技术/index.html","50d38a48c5992ead234836e12384abd1"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","42f02867a73fc9e7203c507db0b105cf"]];
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







