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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","9e320921576d5ed97bce2896369444ac"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","30530b12387dbd92632a7a169efe6739"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","fe2cc1a9cc776c7fe0ee6ffe3cf4a480"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","88021602e0359f786103969d80b3dbad"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","876527e761821d9a9f796285e0ba9281"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","efdf1d2bc73c0c14586092ed6c404115"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","f5692267dd60d9ce7470155383389dd9"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e25e43dc275b52253c603a021dbdb659"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","b0ec5493f39c0f7a6da624bb1ebb060a"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","2979e14c6f06d29230dd203804abe26c"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","6cd67ade46c66e705348b464c4d0f7ff"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","6506319a4b35909f80f0adfe69c60aa7"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","7d3c15e937761d01f09a23e3507c94d2"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","84b7612c28b986334778d71c36aea693"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","56ef8864439aa1375214c765d2197f84"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","1186f9dbc77e1bf7d4d0e454f03ef62f"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","12d266adbfdc0f254038157e202f5f2d"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","33f9bad0e0ef1ee798c5df31d0a72e7a"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","ede246aec48f9ae971c710f3a50b0ff1"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","e416f46457f8c4aeaf4722e1384323dc"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","d68d6c7aa168d923466d744a452b391c"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","a0d1902500e34c334d299de9babb6f90"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","410f1d5d45bb5da40754ebf4959f3c42"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","bf60c5103e2940955c726b93346be848"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","743e4f74b10a48b232fd9cbfd8aa93bc"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","c422990d12c7d9e55d6a5279a2cc67ed"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","db29986b5253fbe28d6e1a58c34997a6"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","ec1611eea806f4b742d961dcf308df13"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","c18277a7aa5b8401aa429ae7b16cedf9"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","f5c393de045a55aeebb09c1d6736ca8f"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","61e7f7a188dba4b816bd9fb968691128"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","0eb7aff7284126f43c3818cca0a742c3"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","3cf399f93c4574449b82a1a5b5b6f4bc"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","4b193b63d70b60707bb9605081c77ef7"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","5d1cbbeb7d5e758ad6bc2f66e4111494"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","5b615dc19099d953ca948469801aa355"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","f254a7337376e287f4155ad9689ab904"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","df2f8d29e592009983cfc66397c457e7"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","9cc9193c55805c0b7ef2de94661950fa"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","bc9855b055d056b71dbae59e2eb98bef"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","0975bc6f4e5976569f21fdc691f0f846"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","2b6fc3bb7bc46f86d1f570cd203c6cc8"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","5f3c0abd592d5c82f8bdbbd087edeca9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","24df2fc2531c0e72d48aef1826dc7605"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","622684382fa48eb49e8432b276312e1d"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","9d125efc4e01489043838eabb9384a74"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","0c166ff8541454e55831eecb48f0e214"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","c0ba198269db065a0b743020723c1471"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","a48a8f388be4c64804c35eb2dec19f85"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","88b5859b79cbcf774dc6285fe3dac091"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","042043b7ea0525337afab9e902a7bf8d"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","fa9d3a087039011de56a4962f5c3928c"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","33ad3d91d065ce3c8dc8627b1edfdc2e"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","2b6c3656b0e0be9c32a3e0122c27d7d3"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","0f88bf3256d550cb91bf65482295306f"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","569e751707b6194ce0837a6f6ae6d6d9"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","3046e9bd1e4176485ba9795eaa7a42bf"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","a33ba266e6571ea91e462c03102f5148"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","3b0c7ca0ec16f289b2a44b727fdc8036"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","7f1073dbef4b33ab771b0f51211fa923"],["E:/qinhao/hexo/public/ByteDanceVerify.html","d170a41c852b01999168ab2501afb404"],["E:/qinhao/hexo/public/about/index.html","cc42ca7dfbea6dbb3bf748d3e45ee8d2"],["E:/qinhao/hexo/public/archives/2020/02/index.html","82da8f2507171a39c3a2c7137edb7472"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","be155fc431f0defb87c60268e508dae9"],["E:/qinhao/hexo/public/archives/2020/03/index.html","f6efe74572c5c1783640de74364d19b7"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","2cd5c0967796052bcd8908f28d3ca4ec"],["E:/qinhao/hexo/public/archives/2020/04/index.html","620825d8ee7d00deccac46cf04d911d7"],["E:/qinhao/hexo/public/archives/2020/05/index.html","f3b83edbcab9c59afbb7766d9c72930c"],["E:/qinhao/hexo/public/archives/2020/06/index.html","d7237cf19a9bba491523af984d6b4b2c"],["E:/qinhao/hexo/public/archives/2020/07/index.html","92acbf94e64b90f04a04fdc11a7b1b40"],["E:/qinhao/hexo/public/archives/2020/08/index.html","1764c5275d364e60432579f13afce433"],["E:/qinhao/hexo/public/archives/2020/10/index.html","249244294726fe9a88786bad3564c1a0"],["E:/qinhao/hexo/public/archives/2020/11/index.html","d85f0e6a4b06d120879377b1b37344e4"],["E:/qinhao/hexo/public/archives/2020/12/index.html","44e4fd8c8abeee84f5f2fefe9f6fd6b8"],["E:/qinhao/hexo/public/archives/2020/index.html","66a85024c430fd05fd4ccbd971ec11d9"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","b7a3533cb8e9f46dec60a9ad48ada6e3"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","4ea42a3b99b85f5ab55774df77724b24"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","55ade0fd72e4309dd0cff309973c37dc"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","1432b319a35196ed3dc65caea3a577e9"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","d62c95960eb7438f9b83e48a1560e825"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","5c40b9d2ddab88f3c263437445a7cf52"],["E:/qinhao/hexo/public/archives/index.html","4715c8dbb445eb265d52c8f802c6c8c5"],["E:/qinhao/hexo/public/archives/page/2/index.html","15286765d589b8e4b95a5bfe7271e52e"],["E:/qinhao/hexo/public/archives/page/3/index.html","4715c8dbb445eb265d52c8f802c6c8c5"],["E:/qinhao/hexo/public/archives/page/4/index.html","15286765d589b8e4b95a5bfe7271e52e"],["E:/qinhao/hexo/public/archives/page/5/index.html","15286765d589b8e4b95a5bfe7271e52e"],["E:/qinhao/hexo/public/archives/page/6/index.html","15286765d589b8e4b95a5bfe7271e52e"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","3467c5724d9552a5fdc78ac3051b9905"],["E:/qinhao/hexo/public/categories/Java/index.html","37e2d16a2b6c78755980a8d050364130"],["E:/qinhao/hexo/public/categories/Linux/index.html","69f667a5126146de12b003c09c13ec4c"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","0bd24cec5c01deaae0c5c376e447da18"],["E:/qinhao/hexo/public/categories/Python/index.html","460c465ec2acc79004dff95dabb32845"],["E:/qinhao/hexo/public/categories/交换机/index.html","968292438c736dc63874be982236543d"],["E:/qinhao/hexo/public/categories/华为认证/index.html","7ee85897e04a6e7d27849316d2bfd152"],["E:/qinhao/hexo/public/categories/小技巧/index.html","77fe978cbf32b30905d21037cd492dfd"],["E:/qinhao/hexo/public/categories/数据库/index.html","d12de650675fecc26c3be7562cd989c3"],["E:/qinhao/hexo/public/categories/服务器/index.html","591e264ccb64991cf2008ffc406540ec"],["E:/qinhao/hexo/public/categories/网络安全/index.html","b0414e2aaac7455ba778a8db6096d80c"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","51ebf7b252094bcd5399e8f436ec1edb"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","4215b843665f07a300f9c1757e430b16"],["E:/qinhao/hexo/public/categories/软件破解/index.html","5c03ba309046c090ae65fd88acdab55d"],["E:/qinhao/hexo/public/categories/通信技术/index.html","004ff41f2c6233e8b5d3da699fc180a6"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","e65868d27c330ac76bddbe8b35f29233"],["E:/qinhao/hexo/public/category/index.html","476db8e25773f59f66d8b1c2c02aaf87"],["E:/qinhao/hexo/public/css/style.css","f5e2c67bc8af009b55f92e0cda779c39"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","778b9fcb9d210bf4d5672c8ce2851211"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","785e7760e3075126c7ec586de70207f0"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","0a048569fe2fef6a019f226f14eaf93d"],["E:/qinhao/hexo/public/page/2/index.html","2256069003c6abe85b40a17d32d4b6dd"],["E:/qinhao/hexo/public/page/3/index.html","84d1d2c8ee638da43083716770cd143e"],["E:/qinhao/hexo/public/page/4/index.html","11bdabff40d5ee214c22fa2f59735e5d"],["E:/qinhao/hexo/public/page/5/index.html","c4ac5cd4f78fc2903f0c2138175d246d"],["E:/qinhao/hexo/public/page/6/index.html","45edb15edb839a95edb942d8449b8167"],["E:/qinhao/hexo/public/sw-register.js","05a6378245c5ee0cc8a471825c336993"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","7e3c3185622840ad50a81c9d53e9b1b8"],["E:/qinhao/hexo/public/tags/MySQL/index.html","2e4c4cedd19d7fef0444a58bd043e509"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","f6070717371e67f6fe1c4758c23f6f85"],["E:/qinhao/hexo/public/tags/VPN/index.html","72707b339c50019c83b430e94485fdaf"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","13a8b03ecbdf608bbf4b61262cc63da1"],["E:/qinhao/hexo/public/tags/index.html","5ad304f743aa29b32bd545ca0789261e"],["E:/qinhao/hexo/public/tags/交换机/index.html","22be96caf90374e4792505a723e9ded2"],["E:/qinhao/hexo/public/tags/图像处理/index.html","d1cc08bba6f98542d62ddd671c11a171"],["E:/qinhao/hexo/public/tags/基础网络/index.html","5bc0aa422e63f950d290b76ef1e94199"],["E:/qinhao/hexo/public/tags/思科/index.html","553c8d74f1e2704862d0ee18e5258138"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","35ddf4448b4824b3395569be0f595ef4"],["E:/qinhao/hexo/public/tags/数据库/index.html","61167753c28dceda2b57d5ab0240cd97"],["E:/qinhao/hexo/public/tags/无线技术/index.html","1e248a7e73a6c3a519b7e74b86431eff"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","3b4b03a784059eebf957537663e73d90"],["E:/qinhao/hexo/public/tags/系统安装/index.html","40a84fe72ce7bba8078631744cb15a3a"],["E:/qinhao/hexo/public/tags/网络安全/index.html","2eaec5576475f3b90a6a72bb7c4567ce"],["E:/qinhao/hexo/public/tags/网络技术/index.html","cf635557cc223a5e630a4ae764acac40"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","b0c0eb40eb8d0fd8a3a8805d86e93ad2"],["E:/qinhao/hexo/public/tags/路由器/index.html","80dee41bfe06ffc5d96f5323e6ee82d6"],["E:/qinhao/hexo/public/tags/软考/index.html","29fddf371ab4adedb18335e135659ae3"],["E:/qinhao/hexo/public/tags/通信原理/index.html","ca84269e40ffa71ae347ba097699b651"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","6dd2c1166950f915518b7ea0ea8036ec"],["E:/qinhao/hexo/public/tags/通信技术/index.html","8e6df09edef3ee78d4fd67dc04d8d1d8"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","ca4b8ec3549e4cd57d80d0e5d8302754"]];
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







