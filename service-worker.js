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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","e2c868da9a0ce9c868df95e965913a0f"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","b6b0047398f902bb91348ccb74a48e47"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","bc51925a881810b6c4da29ad58eb85d4"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","83a53fcbf3208166e15161d2653a9622"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","62b57ffe27b586295df93cbd8a41b809"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","88cb85103d6e4e76eefaa2a8c9af5d5c"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a50cdee6e9b984cfdb3ea772dec51c68"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","d19ad14a6ccb544cd8de65dad997eccb"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","03c2cdd42721caf4177eb8ac26b5208b"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","43e915be59e9f685277811419538717a"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","89c428a940cf8ee56b3930e551e98940"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","a93be6be20161b205864a6c1ac71a958"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","5d38efd74622d8316f620fb8876d8ad7"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","cd0e04ad723855d13b23f79aee7d449f"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","21ae25f8644c905792393c0756bc2544"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","cecf80a2201060ce547a7524277689d3"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","73f88022567db74f6fea85cac303d666"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","293fa7d58d98a340e9d6455c6fb5bb4a"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","e3a56e3228cd36a4f8edc6c1e9ecc9b0"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","866381c19b08e1a4a8a25d34b3710f89"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","80edf4670aff0b41632a4439ed489cff"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","5bdd75e99a0a9fd1ae41ad5f6795eb5f"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","86d0a22c70a162bd501594e903aaa988"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","d19d7cb19fbcd563fba855a6aaffae48"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","e60ba40e8aee0a1bc36df31686f907ff"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","77f74bcae45c7786b4c030c45474d5c7"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","a009257448bc276c2edb73487ad7b3c8"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","3cc70f77cfbfc6a210f5e640b339e69e"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","0ab485f21a83864d97723d802fb00415"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","8a3f3722bc2551dc394e73e82b10bf82"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","936aeb49d3dc6989477fc06722c14f48"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","0ddbd6cff8e1955e4fadcd441f748a54"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","9a5e8386b054bb26abfb7bf963199e36"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","79e2dc6f2b522dc60123a7ec528327e7"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","54bd41366c32a3fd11999da4d3975e22"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","6bd33ccb38967a265799198bab26d4c3"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","4f0d1e0fe0baebfc2a0e36a91e18fcef"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","20102f93b34fde75cc980a7070eb063d"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","40a862542220ac83c7e4246c2c266bb0"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","8d869af9ebee8c22409412071b88819f"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","4541f3696e4050d430dfbd70fef7b186"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","4f8815d1ae612a64baeadf33d8f4c410"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","a1b4c3e3c673d13eef1518d646105f72"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","66f7a1bc705013ca34ffe4a23f4543bb"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","8889709e7ccd9c8a2a00a227c635d838"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","dcde701a35c1a9b1242850f73f98f89a"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","68f054fe2e709094a161eb18107427c0"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7476249ea2a00aca4e3576a53dfc8555"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","cb1662cf964f4587486869fe1ea8f5e2"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","87f015a429be1d7b756fec88ae4eb07f"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","441e7bf809824038e405f121d6ab2826"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","b32ad08d5c9e977d58a1d7e90a5b312f"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","3f49841fda1bce4acd4857d9c1759a4c"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","15a8c1ab1df1fc7933f69bd06797c0b5"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","89d24ff87a994c5e033956377a16cf56"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","64647a96405a63efccb611c90fdc1c91"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","7d1ff84e1c225059fafc15fcb1e32546"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","e0fb055c841a5be25a6a9d9ca18bed11"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","f708640839ee5e5c679157d14d8947f3"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","28c50cb32abd1830118102fea517603a"],["E:/qinhao/hexo/public/ByteDanceVerify.html","05cad938b3a31fd710055b0acd3e23e4"],["E:/qinhao/hexo/public/about/index.html","f8dd3685a071111b8dfa0cb741126398"],["E:/qinhao/hexo/public/archives/2020/02/index.html","f29a337e6c5080d032e7efd824a58c68"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c52d385af44c7ee6a902216b9ee52847"],["E:/qinhao/hexo/public/archives/2020/03/index.html","4c19416ae159d90bc1975dfab87d490c"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","392a5930756f91d62034106130f62af7"],["E:/qinhao/hexo/public/archives/2020/04/index.html","1f67692fb3835cb060fedd40660feb3f"],["E:/qinhao/hexo/public/archives/2020/05/index.html","fcdfd6ae8f387b5623dd86a66acef766"],["E:/qinhao/hexo/public/archives/2020/06/index.html","230afb8170f4c8b141a198cb515a0584"],["E:/qinhao/hexo/public/archives/2020/07/index.html","75340236d6aaa2d213977cbaa3d0896b"],["E:/qinhao/hexo/public/archives/2020/08/index.html","a49526c755ff02987c702e7b375554a8"],["E:/qinhao/hexo/public/archives/2020/10/index.html","e2884c1cd15315a4cde341241919b6c0"],["E:/qinhao/hexo/public/archives/2020/11/index.html","85d4259b277c55d590b960edfeea49f0"],["E:/qinhao/hexo/public/archives/2020/12/index.html","175fae4e881fce48e7c3b584c8591574"],["E:/qinhao/hexo/public/archives/2020/index.html","bbdc083ac71d039f1a0f25e31ca6ea2f"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","f6f0a576abe5feae2de15b80e582c28b"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","7bbf255d7c3d0c2820f554cc7f1c2944"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","09b9e44ff96b32d9e260924437a4a4ba"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","c3784a1fe4910db54601b658cc9aff3e"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","e3fcc89a11f7668476bf93ad0e45f66d"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","4e993ae4769ec63ee7e489e4ea4d4d02"],["E:/qinhao/hexo/public/archives/index.html","04f6cedcf3b5fbd3a85cf268dd913af6"],["E:/qinhao/hexo/public/archives/page/2/index.html","7882df1ed3efe4560283c9d95a4be763"],["E:/qinhao/hexo/public/archives/page/3/index.html","04f6cedcf3b5fbd3a85cf268dd913af6"],["E:/qinhao/hexo/public/archives/page/4/index.html","7882df1ed3efe4560283c9d95a4be763"],["E:/qinhao/hexo/public/archives/page/5/index.html","7882df1ed3efe4560283c9d95a4be763"],["E:/qinhao/hexo/public/archives/page/6/index.html","7882df1ed3efe4560283c9d95a4be763"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","06719fe6d823e0f84d3ab6ccd62cf084"],["E:/qinhao/hexo/public/categories/Java/index.html","dceb0b308276635986da844512bc9651"],["E:/qinhao/hexo/public/categories/Linux/index.html","ea751391f5cdf21ab051326ee3d2adb4"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","f5b4ba21f3789469485404f967b02b38"],["E:/qinhao/hexo/public/categories/Python/index.html","6bc4d0c1e398b1d03ad305ad7afbe30e"],["E:/qinhao/hexo/public/categories/交换机/index.html","9a5627ad23b09d8804b574cc48f8ed48"],["E:/qinhao/hexo/public/categories/华为认证/index.html","168414e12d415c3d81c6782f57861bd4"],["E:/qinhao/hexo/public/categories/小技巧/index.html","34e91381cdde10182f82b82400a3135c"],["E:/qinhao/hexo/public/categories/数据库/index.html","79e586f502ea50467047062c74d4648c"],["E:/qinhao/hexo/public/categories/服务器/index.html","13cf680a112b200158163c9437ce7ff2"],["E:/qinhao/hexo/public/categories/网络安全/index.html","833953e20aa9cf4361805c5ec81a7b17"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","a7636e2666b6d62817654ee9652b0393"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","b5653778c2b1afb9c308dc4623ffe3a6"],["E:/qinhao/hexo/public/categories/软件破解/index.html","4da63bf7a388349b468fa44cb86ecdef"],["E:/qinhao/hexo/public/categories/通信技术/index.html","bd96b6ffcf58c4bc475c2ac6d5d7d7a6"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","1bbce715a890f7af53e63f847aec8faf"],["E:/qinhao/hexo/public/category/index.html","34f7cbc036bdf1ab5cf7bfb63a6739c6"],["E:/qinhao/hexo/public/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","9958c64d482fbfe1ec0dcd18dc2f97ed"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","fe7750239ed7d66c8130a88f962a85a2"],["E:/qinhao/hexo/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["E:/qinhao/hexo/public/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","52fe228d6cb67fa7827dea589f31c592"],["E:/qinhao/hexo/public/page/2/index.html","965402eab45c0cff9dddda4c7c864a3c"],["E:/qinhao/hexo/public/page/3/index.html","67cd83dc8071491c721b03d2cdeba32e"],["E:/qinhao/hexo/public/page/4/index.html","5c46be672934aef0cd16b93ced13f91c"],["E:/qinhao/hexo/public/page/5/index.html","ea5b238a2ba7a7184052081e18de3900"],["E:/qinhao/hexo/public/page/6/index.html","3a5a8a57049b89c3bb54866f0db09c98"],["E:/qinhao/hexo/public/sw-register.js","2c9550708633089c84c9f6f7a53aac42"],["E:/qinhao/hexo/public/sw.js","bc7b0dd3ebe1c950529b9993b2bc0645"],["E:/qinhao/hexo/public/tags/IIS/index.html","e315b20a77ae996fe190b53581c3cadd"],["E:/qinhao/hexo/public/tags/MySQL/index.html","858402c5b857bd791b8b23f2b07aaad9"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","53817d6b8f02044241ff004cf0a0011a"],["E:/qinhao/hexo/public/tags/VPN/index.html","a4a93f8ccb961d108d6db8c1eb7811b6"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","741a9bd8d52e62cb23fae9247ce6cb9c"],["E:/qinhao/hexo/public/tags/index.html","c6a88e60c7eb5e07fa6cd7dadbf3a1dc"],["E:/qinhao/hexo/public/tags/交换机/index.html","621d151e7880f771462ecb74869c9568"],["E:/qinhao/hexo/public/tags/图像处理/index.html","a637d31788ced10b573c72826378902f"],["E:/qinhao/hexo/public/tags/基础网络/index.html","a89a0793f15bb8041bdc9223023f02c4"],["E:/qinhao/hexo/public/tags/思科/index.html","4ac287cfffd8edc351aacf678948c4e8"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","630841effa224e87e58466beece7c8f6"],["E:/qinhao/hexo/public/tags/数据库/index.html","5cc5d4d93cfae5e9fc990cb12d92ae39"],["E:/qinhao/hexo/public/tags/无线技术/index.html","51c2d6067a5a16612097bcc779fa5044"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","f75779fb9d2acb97e586b9b6244c27b1"],["E:/qinhao/hexo/public/tags/系统安装/index.html","8310b37e62b0b3574eafb49965453a9b"],["E:/qinhao/hexo/public/tags/网络安全/index.html","948035c9017028e6d2aff04a629e48fe"],["E:/qinhao/hexo/public/tags/网络技术/index.html","bef61290261e67a10f7457ddd1209504"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","979597f662156be4f3b4256b9a583ffb"],["E:/qinhao/hexo/public/tags/路由器/index.html","8d0a275cbe63fe960923e9b067c4d9b4"],["E:/qinhao/hexo/public/tags/软考/index.html","a6bf654281f1c2510642633d9328ed86"],["E:/qinhao/hexo/public/tags/通信原理/index.html","00f1a9552fb1a5e6ded99674baab6cfe"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","bf6821b6f9cdffbb84c15eabf4d20345"],["E:/qinhao/hexo/public/tags/通信技术/index.html","c94d0b3ce913b6758c79d499b8b37899"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","03a10f8a640bc828b72bd120049b89c3"]];
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







