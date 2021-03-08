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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","9e320921576d5ed97bce2896369444ac"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","30530b12387dbd92632a7a169efe6739"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","fe2cc1a9cc776c7fe0ee6ffe3cf4a480"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","88021602e0359f786103969d80b3dbad"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","876527e761821d9a9f796285e0ba9281"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","efdf1d2bc73c0c14586092ed6c404115"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","f5692267dd60d9ce7470155383389dd9"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e25e43dc275b52253c603a021dbdb659"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","b0ec5493f39c0f7a6da624bb1ebb060a"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","2979e14c6f06d29230dd203804abe26c"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","6cd67ade46c66e705348b464c4d0f7ff"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","6506319a4b35909f80f0adfe69c60aa7"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","7d3c15e937761d01f09a23e3507c94d2"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","84b7612c28b986334778d71c36aea693"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","56ef8864439aa1375214c765d2197f84"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","1186f9dbc77e1bf7d4d0e454f03ef62f"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","12d266adbfdc0f254038157e202f5f2d"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","33f9bad0e0ef1ee798c5df31d0a72e7a"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","ede246aec48f9ae971c710f3a50b0ff1"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","e416f46457f8c4aeaf4722e1384323dc"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","d68d6c7aa168d923466d744a452b391c"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","a0d1902500e34c334d299de9babb6f90"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","410f1d5d45bb5da40754ebf4959f3c42"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","bf60c5103e2940955c726b93346be848"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","743e4f74b10a48b232fd9cbfd8aa93bc"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","c422990d12c7d9e55d6a5279a2cc67ed"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","db29986b5253fbe28d6e1a58c34997a6"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","ec1611eea806f4b742d961dcf308df13"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","c18277a7aa5b8401aa429ae7b16cedf9"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","f5c393de045a55aeebb09c1d6736ca8f"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","61e7f7a188dba4b816bd9fb968691128"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","0eb7aff7284126f43c3818cca0a742c3"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","3cf399f93c4574449b82a1a5b5b6f4bc"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","4b193b63d70b60707bb9605081c77ef7"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","5d1cbbeb7d5e758ad6bc2f66e4111494"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","5b615dc19099d953ca948469801aa355"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","f254a7337376e287f4155ad9689ab904"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","df2f8d29e592009983cfc66397c457e7"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","9cc9193c55805c0b7ef2de94661950fa"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","bc9855b055d056b71dbae59e2eb98bef"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","0975bc6f4e5976569f21fdc691f0f846"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","2b6fc3bb7bc46f86d1f570cd203c6cc8"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","5f3c0abd592d5c82f8bdbbd087edeca9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","24df2fc2531c0e72d48aef1826dc7605"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","622684382fa48eb49e8432b276312e1d"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","9d125efc4e01489043838eabb9384a74"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","0c166ff8541454e55831eecb48f0e214"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","c0ba198269db065a0b743020723c1471"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","a48a8f388be4c64804c35eb2dec19f85"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","88b5859b79cbcf774dc6285fe3dac091"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","042043b7ea0525337afab9e902a7bf8d"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","fa9d3a087039011de56a4962f5c3928c"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","33ad3d91d065ce3c8dc8627b1edfdc2e"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","2b6c3656b0e0be9c32a3e0122c27d7d3"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","0f88bf3256d550cb91bf65482295306f"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","569e751707b6194ce0837a6f6ae6d6d9"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","3046e9bd1e4176485ba9795eaa7a42bf"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","a33ba266e6571ea91e462c03102f5148"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","3b0c7ca0ec16f289b2a44b727fdc8036"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","7f1073dbef4b33ab771b0f51211fa923"],["E:/qinhao/hexo/public/ByteDanceVerify.html","d170a41c852b01999168ab2501afb404"],["E:/qinhao/hexo/public/about/index.html","cc42ca7dfbea6dbb3bf748d3e45ee8d2"],["E:/qinhao/hexo/public/archives/2020/02/index.html","258aff600a5425f4dd2c931d70ff5452"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","96ded0baa8927fd6a1cc1cd6f735766a"],["E:/qinhao/hexo/public/archives/2020/03/index.html","b5ebe0e71abd611d4bfa80185a2a308d"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","8f3c1461b69016ccd726ee6d02e7c964"],["E:/qinhao/hexo/public/archives/2020/04/index.html","2e6ab215ecdb7497742d92fbabb5f2bb"],["E:/qinhao/hexo/public/archives/2020/05/index.html","d4e2ce997834ef5e54ca8635ba4038ca"],["E:/qinhao/hexo/public/archives/2020/06/index.html","bc50face65a1e47059d1d7cc81906d4b"],["E:/qinhao/hexo/public/archives/2020/07/index.html","b9f3d7ff4b20f50dab9cd6d425733b15"],["E:/qinhao/hexo/public/archives/2020/08/index.html","9f434c13a8ac9c3bce82f6cbb3c4ca6e"],["E:/qinhao/hexo/public/archives/2020/10/index.html","925e276f0a69494e6e8aed5640af95e0"],["E:/qinhao/hexo/public/archives/2020/11/index.html","b07d8d267a7886a26df3758caaf9d049"],["E:/qinhao/hexo/public/archives/2020/12/index.html","ca976814fd1dc829d68b5d8f321109e6"],["E:/qinhao/hexo/public/archives/2020/index.html","d3f5d4bb26b837b176658104ac527c3d"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","87e3650ba241b1fa573e90b3e2af2a09"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","371ad620b07b3f650e4b65c47c3183ca"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","97fef853f0e22c573a88f612943e05e8"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","a8713ce6df83a4a84b6d127eb10f8131"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","ba97d75c36f40d03c4ddc3e067778405"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","5c40b9d2ddab88f3c263437445a7cf52"],["E:/qinhao/hexo/public/archives/index.html","1735769ef9ca3dea9e99f6bc8590fbc4"],["E:/qinhao/hexo/public/archives/page/2/index.html","cdddaefc3d201c1ce9f332fe6143d28a"],["E:/qinhao/hexo/public/archives/page/3/index.html","1735769ef9ca3dea9e99f6bc8590fbc4"],["E:/qinhao/hexo/public/archives/page/4/index.html","cdddaefc3d201c1ce9f332fe6143d28a"],["E:/qinhao/hexo/public/archives/page/5/index.html","cdddaefc3d201c1ce9f332fe6143d28a"],["E:/qinhao/hexo/public/archives/page/6/index.html","cdddaefc3d201c1ce9f332fe6143d28a"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","f784cd648812b654f177dac7d714303b"],["E:/qinhao/hexo/public/categories/Java/index.html","32e8f933223e389c4986c219c9ca4532"],["E:/qinhao/hexo/public/categories/Linux/index.html","30495a49a6a67f1b1fa29db3eb89b8cc"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","ddbbae8afe6501e27f52be06742db79e"],["E:/qinhao/hexo/public/categories/Python/index.html","cba2e10df7cadc375cc9847b608ea325"],["E:/qinhao/hexo/public/categories/交换机/index.html","8ad1d46c72faf0e6fbfed94f8dd53108"],["E:/qinhao/hexo/public/categories/华为认证/index.html","1204475b45e690263232d8bd20e00829"],["E:/qinhao/hexo/public/categories/小技巧/index.html","7d398049b91bac72c85e5a6e228fa629"],["E:/qinhao/hexo/public/categories/数据库/index.html","02f749c6f7040c57c65f717d7a3fa5d2"],["E:/qinhao/hexo/public/categories/服务器/index.html","c6238528aa1bcee279688e9812e23256"],["E:/qinhao/hexo/public/categories/网络安全/index.html","1187342dd98ad3dd22005722f4191366"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","3253a494043fe7a40da2bfc09b343c79"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","f1b69753bf6b3ccf8f3b76c60192efec"],["E:/qinhao/hexo/public/categories/软件破解/index.html","70aea625871a4e01a294c05777cdeec0"],["E:/qinhao/hexo/public/categories/通信技术/index.html","901ea9ad41477463b53b48d4139b4d4a"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","0e8a089384c8d6cf430d5e907b4d3b42"],["E:/qinhao/hexo/public/category/index.html","476db8e25773f59f66d8b1c2c02aaf87"],["E:/qinhao/hexo/public/css/style.css","668813995a9ac143f159e5eec9bd3138"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","778b9fcb9d210bf4d5672c8ce2851211"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","0c7110d52b4e9fd48660f106c54b3581"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","145a90ec7207e17489c82470057f4150"],["E:/qinhao/hexo/public/page/2/index.html","e7a0984746cb881f982b4a53d9488b03"],["E:/qinhao/hexo/public/page/3/index.html","5193e7bcc73aaaf37236dace49690bc9"],["E:/qinhao/hexo/public/page/4/index.html","9f38b98db253f753105baed6528f2ea7"],["E:/qinhao/hexo/public/page/5/index.html","da5c6cdd6ac303d3a40a8c3c6c6a745d"],["E:/qinhao/hexo/public/page/6/index.html","d7e48fbebf8b0650298d9f79babc4ad2"],["E:/qinhao/hexo/public/style.css","668813995a9ac143f159e5eec9bd3138"],["E:/qinhao/hexo/public/sw-register.js","2f3634a2a5ccd96cddac840cd55b9468"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","aea6fa1407c5c6fbddfbb423e43c9b45"],["E:/qinhao/hexo/public/tags/MySQL/index.html","57b04eac0658c6ed7924c9179cd33e32"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","2e16bd426439deacc025d9d2e842ad6d"],["E:/qinhao/hexo/public/tags/VPN/index.html","3c57039c7571ba9a3c12898a764121d3"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","d46e5f030751ccac4655243b5a2cea61"],["E:/qinhao/hexo/public/tags/index.html","5ad304f743aa29b32bd545ca0789261e"],["E:/qinhao/hexo/public/tags/交换机/index.html","14a01fdd9d347ccef0719f3bbc0554f4"],["E:/qinhao/hexo/public/tags/图像处理/index.html","05e83a88ce0e0f59df820899cc9aa0a7"],["E:/qinhao/hexo/public/tags/基础网络/index.html","3eff3fa6de7b29d61be9b509c4f06409"],["E:/qinhao/hexo/public/tags/思科/index.html","6d97101a776843d3d35ca0e4864ca67b"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","5701e9237b32dea3ece2a5d23df996f1"],["E:/qinhao/hexo/public/tags/数据库/index.html","228b9bcb04ac34de4543879bdffe3e05"],["E:/qinhao/hexo/public/tags/无线技术/index.html","62ff4714449d820b473173f82f3a5c57"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","0d04bedea5e47392c3af32ac15ead721"],["E:/qinhao/hexo/public/tags/系统安装/index.html","6d97f0b7fdd88c306d791ccb233a43cb"],["E:/qinhao/hexo/public/tags/网络安全/index.html","f658fbcac5977f35587d7a3916d68929"],["E:/qinhao/hexo/public/tags/网络技术/index.html","0cadeecba0dbad02ac0687a4eba508e6"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","1939cfc07a0948408e2908fa8670b6f4"],["E:/qinhao/hexo/public/tags/路由器/index.html","d41a45f0937658f56c7e3fc8c875d972"],["E:/qinhao/hexo/public/tags/软考/index.html","ca0479db90e78fe619b319bfaf4f1b14"],["E:/qinhao/hexo/public/tags/通信原理/index.html","fa1accc96c80c7fbe47a5890ad23712f"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","6113036ccc4c2ff9ff767746688df6a0"],["E:/qinhao/hexo/public/tags/通信技术/index.html","04e71d532ccf268a107e9529c9359683"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","d48a5f5b44c1a7f9671f833f851d50ba"]];
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







