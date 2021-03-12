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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","a4f037e6626c44f7785dc018ca0c7d77"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","1564ed1d92af703072f75778d47c4b25"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","63a55d4c950468120c9aa001b37daa98"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","e801797bc495b43c5421e642b3b8c1c6"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","0bc3beda6d7f5c1a3660446af5bd4297"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","e59642a3ba4b588fe36a00f873a95930"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","d84e3340ed5e2649207997c54d0f4908"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","9f4b78b670489b127bcd5103d270b174"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","e1f57f43c8c5a150ec1b933cc2f1e88a"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","792f5a912064739bc00583a48b4b5c6e"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","cac784f7d178edbdd4ea770c8d0ca95a"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","377547135dc0338e9cee253db45645db"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","b9508bf967f750fa013cf9924faf5eac"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","8a8f80bac938289a437a4d351bc85da0"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","cf6f1c93fe11f705668a03c447f93166"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","46b1a91c46eac23a0b2dde6e65a08e58"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","38dde53b19aa62195855d81d1abbfcd1"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","10a495f7496739cb3e7613a1cad192b2"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","27b4d3fc49068e2ea99a7f64b62de3fd"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","c4c85fd3e49d6de64de5e8e60599303a"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","c3d8bf630bb62f1c945bf2882b06d54f"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","150e7a4d5c3f53db325190a4c477fbda"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f955282b005b077f779d9034e0a5785b"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","dbdf27f5e5b3d8ca248caa5361f3b0cc"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","7797d22b9248318110c59056281db913"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","abacf9de67e33e09dcc10fca258c7b08"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","33d63f57e38f596426f7c19adf48a9b8"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","211ad6b549205513dc58138e7a32e246"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","26394132be3cf84f3f931c8f2176ac20"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","a6398d51d944e7d0d170a08a9d8eba4c"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","4194dc08537c739778ee9cc1322fe8a1"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","6669530b0713df7ef4fccbd316c285cd"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","110e16965a3e760a654aabdbbbe462e7"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","9e50c85bfb6032d630cff43961a11e08"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","da16b7d3362a7dd083d700f2f090ce0a"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","c90b62a4ead248667822164d2f4f4933"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","f4a23bd4c055e301a7a43522c5ba36f1"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","18e1719b334a3c25d58ffe06eb51c51d"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","d0a181ea19cdae3a3faa6d89c5f05823"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","c79670aa03abbf1065bce752f3702731"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","9aad2580d14a9d257349f371743da9f4"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","ce99631ef2007bdc87e5d4b219d93b4f"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","fbce579089b5c978e8c9496a00048f76"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","33e614056a30afba86ccb4a5117425fd"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","30871750888632066eff9fb5627bcbbd"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","bca6af305cf1e578071b1aeda5b14241"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","0f1f9091a8f48a5b8ee5cc4d35c57393"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","8d39a74f69a823fef8b89bffe7c863a7"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","2a8ad2f1024e1611dfc142559b5ee63c"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","29337242d3329fc4c6ab6d3476b4897d"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","9694f2eddc567f79f1b7cfecc3f2d60a"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","d7a98c0c95688871f6838cf90b63f016"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","4f73cdc177917cbbd99cc25784d2f217"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","0f13e862f9075e3562a6cdbcf8aae636"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","d1989154c6c2c43605b67a009b4df905"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","a5393e828ad272df021730657e1d79b0"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","2520d26ed9bf79803295141af2a817c9"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","337d03efcbc5f691eaf2b294cf220112"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","3bd1ef5e01946d0a8a4f1ece5d6c6068"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","ca2f75123c5fa09caf7bc45f724e4f80"],["E:/qinhao/hexo/public/ByteDanceVerify.html","fa2f4a361b944b552542b1dda3eb004f"],["E:/qinhao/hexo/public/about/index.html","4bdd8e90b3563c1cdaffaf0e54015b1a"],["E:/qinhao/hexo/public/archives/2020/02/index.html","7cb61473c0eeb39b7f92c26227c7c82e"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","279057934adcc2b81ad326db65d24319"],["E:/qinhao/hexo/public/archives/2020/03/index.html","bcac38320d8ff4ec4d797b330029decc"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","58fd4b6c31c610b3e8c50b0d3619f751"],["E:/qinhao/hexo/public/archives/2020/04/index.html","0fd74a0bf8d86381e41a1ef2691fdfb0"],["E:/qinhao/hexo/public/archives/2020/05/index.html","9255351b6040fb410c3177322bcf4f63"],["E:/qinhao/hexo/public/archives/2020/06/index.html","6b59535f19c60c3f8759272eed62a945"],["E:/qinhao/hexo/public/archives/2020/07/index.html","0747c5a9c3ca2d55f0b41bad39df5e68"],["E:/qinhao/hexo/public/archives/2020/08/index.html","8591ae5b290b6f5c92a94614e50f885a"],["E:/qinhao/hexo/public/archives/2020/10/index.html","80170f71153db79e0028c6d48eb96034"],["E:/qinhao/hexo/public/archives/2020/11/index.html","3bbde45aaf382ad49b9078b56d26cf8f"],["E:/qinhao/hexo/public/archives/2020/12/index.html","7fdf195b4cfcc894c5cf4488ac0deb46"],["E:/qinhao/hexo/public/archives/2020/index.html","d38a1ef1b8febff036467a90e086b6ec"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","f34af5bb32d9c535888f27b0764515e4"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","9850be830a538b4e5e6b116d2d73912a"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","1659203bc7a4f069877977213af9d61b"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","a4d7d77752734ca6b56fe5dca00cbf29"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","24de2b03907dad50af511017b3806cf0"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","0853189dccfd242f9ead765a1dee6084"],["E:/qinhao/hexo/public/archives/index.html","8deb3e6e23ab16eabf383b30405c14fc"],["E:/qinhao/hexo/public/archives/page/2/index.html","0aa33a878abd2c831b6870120a48fa5b"],["E:/qinhao/hexo/public/archives/page/3/index.html","ee96e6cc73aaff607b87bc7676606973"],["E:/qinhao/hexo/public/archives/page/4/index.html","0aa33a878abd2c831b6870120a48fa5b"],["E:/qinhao/hexo/public/archives/page/5/index.html","0aa33a878abd2c831b6870120a48fa5b"],["E:/qinhao/hexo/public/archives/page/6/index.html","0aa33a878abd2c831b6870120a48fa5b"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","925201f3d51484e88dfcea694263c077"],["E:/qinhao/hexo/public/categories/Java/index.html","27e412d022e933e9053905659f4bf0b4"],["E:/qinhao/hexo/public/categories/Linux/index.html","956f3384b3955493b0928d67b755596e"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","92ac7c3e98a8ab8a2dea7ed08168d665"],["E:/qinhao/hexo/public/categories/Python/index.html","5efaf93cd2e4d9147ef94221dcc3a527"],["E:/qinhao/hexo/public/categories/交换机/index.html","f3f1614cee71d29934972cad133f3b91"],["E:/qinhao/hexo/public/categories/华为认证/index.html","9efe90ffedcc1481900621993c01efcb"],["E:/qinhao/hexo/public/categories/小技巧/index.html","1e55804c4b453056d546aef3316c140b"],["E:/qinhao/hexo/public/categories/数据库/index.html","416b1a1469a94d2c8ae63856e89b96e6"],["E:/qinhao/hexo/public/categories/服务器/index.html","0b13908dad0b06a75fe7835c9bddf7f3"],["E:/qinhao/hexo/public/categories/网络安全/index.html","37a487daa986371717363550642b8519"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","ed96e3c7170d87612ab41c08bef0a4b0"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","90d0df0f7e13a9c231a1ac874480c969"],["E:/qinhao/hexo/public/categories/软件破解/index.html","cecde0c87fc59d91571334e57eb587be"],["E:/qinhao/hexo/public/categories/通信技术/index.html","cc5f92ea6050a6cfa58ad33aeb7c20f4"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","4295a8996b841adfb05b4e1b7e5f396e"],["E:/qinhao/hexo/public/category/index.html","77190ab48d098b17b44b99beddd9968f"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","9786c6259935de5d6df99a6153669166"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","6971cc49c1e69b79f038bef1a661011e"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","2abcfc34da32ece8552320392d669096"],["E:/qinhao/hexo/public/page/2/index.html","759ad2308c60aebdf75e1a0e9e62e067"],["E:/qinhao/hexo/public/page/3/index.html","5c8130807707e30f1cd71765b4f48575"],["E:/qinhao/hexo/public/page/4/index.html","5d2bf8ca61d4ea8a72d67f29f0eb007b"],["E:/qinhao/hexo/public/page/5/index.html","d545453b071dbcb0f9e1451d36f13eae"],["E:/qinhao/hexo/public/page/6/index.html","a343ad51d14ec04c99e2351cf22389d2"],["E:/qinhao/hexo/public/sw-register.js","67f958a3a072bf7f632ba63e0e744da3"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","80480590d6cb25f6853420c0c38506fb"],["E:/qinhao/hexo/public/tags/MySQL/index.html","2948f240f4b9fc6e30b30ec3e24cb887"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","5be28ec1c89bf90780d35feea13a7fa6"],["E:/qinhao/hexo/public/tags/VPN/index.html","9ab493db06b3b187c3b437c1ebb68eb4"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","17a1d420607863f9e539dee9bb780894"],["E:/qinhao/hexo/public/tags/index.html","258a33443e2d5504cc2a15aa1d2177f7"],["E:/qinhao/hexo/public/tags/交换机/index.html","71ddb0c23ff14f7afdec2ad71d821b2c"],["E:/qinhao/hexo/public/tags/图像处理/index.html","1aa23692a037979dffeb31e4420b3776"],["E:/qinhao/hexo/public/tags/基础网络/index.html","b8831ea33e7ccfc75a9505ac3a405688"],["E:/qinhao/hexo/public/tags/思科/index.html","e03c6769a40917a65042e11656b8bf0f"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","e0d393fdac02fa27ab18f756f15fbc47"],["E:/qinhao/hexo/public/tags/数据库/index.html","89788ee35e88e4c2149e385ca321cc8c"],["E:/qinhao/hexo/public/tags/无线技术/index.html","b737c762f7994a5f0cf216bddcd6a122"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","a40f42c1377e1d8db3c0d20c57fb5371"],["E:/qinhao/hexo/public/tags/系统安装/index.html","d7de879a6b8d502b3f4baa25f9110c6d"],["E:/qinhao/hexo/public/tags/网络安全/index.html","9505ebd9a9e59f921de91e7babec9f92"],["E:/qinhao/hexo/public/tags/网络技术/index.html","9f3e96682fcfa18506e0e0a6b6ccd61e"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","a675b06b9346a52b3b3c003cb104a714"],["E:/qinhao/hexo/public/tags/路由器/index.html","c87b4c20cbe3e9cb7f4cb78c360418b3"],["E:/qinhao/hexo/public/tags/软考/index.html","c43f6b99e6d819dc2be56977d9259872"],["E:/qinhao/hexo/public/tags/通信原理/index.html","2123efd9e195f826a7c6fc5c4172675b"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","9c7d2f03cb22d20ca82afdde86187e38"],["E:/qinhao/hexo/public/tags/通信技术/index.html","553dbe6d8368766fbad5d16a181b1d97"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","dbc7e629118c0be6ada4ee0db1805187"]];
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







