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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","0088687ba4d2e1f75774e651d8b685d3"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","725b1fea3e12f857622f8d47cfa6303a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","dce3e69e5c09104aaab5aca4abaadfc3"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","22cbdd86266a3027d3cf496a023e9e32"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","b23bf77503d3656a9c3b67ed86fd5539"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","6954b2a3c20a5a8f43578f75b033bd5e"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","8a54175be40fc9f15d3c2e408e97e782"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","050c754cd1fe7efa8645753eab2223cb"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","d1d5cc6530fbca4571232544d0ca9ccd"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","0eb0864af4583a1252e532316649d86d"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","9778e7412cbf5076ce8b2bfb736c1643"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","fc3e72b0bfd27d74127f8abdf573bd1f"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","cef8a80d16eb4844941ab855335a80a3"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","5fa5b7a9159a08a519d720fa185cd903"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","aea391f3e59e4649f160dce0dc5bb809"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","f6699e8f223890788ac095c7f42b5d47"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","9aa403d7441060954c8dcc1d9c0807f1"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","213ee740921a5917e060d658e4b538b2"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","8331649febf1757eab67ec5ccfc0301e"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","cc05992535c860d65bfb3ce45c68f178"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","876bb55e6979eefcbe6dd3a089cf4710"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","800b10fb83d442bddc4b4d067fa602d5"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","4445c00b7aab193d6e64237ddbf8652e"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","41e814c715424d7abb582f5eb38f2641"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","83430ce0f6383598c6c442e842558570"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","3c0f0f0fd3c2c8013bd944f15fb3a3fd"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","cf7e3376405221e747a1908c60bc7214"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","ff5353b9ee50bb700edf928e662098e0"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","3be422111a74d21497b77217cd556a34"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","5be9b2268833ae87020b1a91114dd94c"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","0347f076fbcf3073029503fdada59156"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","96f4ec85b09d7ae764933650af3d376f"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","ac3a3f07e6c60692702b390eeb53945f"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","e200b8a3efbea831f082c9f91f8ea8a6"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","881057c864593bc2558736bd84b90a55"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","c74619dcbda9d0a210fc65407e6ffd0d"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","e7458c054cbfb7c5ebafc779b463bb89"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1307b582646a75083869c95cd3f6f52a"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","170aafd7db2fe6200807a68f0e4e926b"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a9a4089bc6380adde5d06b6ac2f0307f"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","036bb3eacc40321ee14532cea39fb294"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","8215fe797568d177a7a3c9f7d6f5c2ee"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","675c212efa662a46d5488ad82bb4e9d8"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","394ae96505aa4582c2cbd49adc38d1a9"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","071ceee95bda5fe55c6c52cd0a15bd8a"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","ef5938cf7ea1dce958d8e887595605a8"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","98adb3f9ec7e91513cfe57f0e1b583a3"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","ec02c94e6f3cb2ed5253e403b18e1758"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","a23207f70c784ed198aeea25012d4f04"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","0e6c5441b80c65bd7fa541f6d6065cff"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","9414c1462e376195ea2cb9c074c4f685"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","5b93dabeacc8938efd3e1e02ec263266"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","1d989d77432a68b9fe231e1af764cb33"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","b35ae0196841cda2531b36bfb4dac139"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","3e2a7a5cb4103076283f021402c4e7de"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","33958f6860314049b4d23442c5951ff3"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","c293e6f423a0d4a35b82023951e77dea"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","7c13a3db89f0b7917b2aa53acd601544"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","d55ed856687368152aba9ea28a407e9d"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","ec1523b30ff78db9667b21ec247d07c4"],["E:/qinhao/hexo/public/ByteDanceVerify.html","1f5ed203d566a684146abb077dc87a0b"],["E:/qinhao/hexo/public/about/index.html","dfc5e8b3e8a79249e8a13e68aa9bfbfb"],["E:/qinhao/hexo/public/archives/2020/02/index.html","ef44af72622cd2f178abf3fb5f7ad0c2"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","a7d98d342d31cec5e18ff0bce8e7e9a7"],["E:/qinhao/hexo/public/archives/2020/03/index.html","a1d18bc2f9c4a04d7cfe689796601f84"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","063052e07637ce35b70a82e74fdefa3e"],["E:/qinhao/hexo/public/archives/2020/04/index.html","42dac882765b2a23c54f0f9eb6166206"],["E:/qinhao/hexo/public/archives/2020/05/index.html","e2b297b89f1d20bf9784b048f4abcd48"],["E:/qinhao/hexo/public/archives/2020/06/index.html","78eada75ddc31f6b6373360b62b71a86"],["E:/qinhao/hexo/public/archives/2020/07/index.html","37d0443cfac42f6e4e358c0862bbf766"],["E:/qinhao/hexo/public/archives/2020/08/index.html","aaad0284557f2de0f167dcc2982633aa"],["E:/qinhao/hexo/public/archives/2020/10/index.html","3b95b6c303dc74c86d2e974f5433e3c5"],["E:/qinhao/hexo/public/archives/2020/11/index.html","f76ae627fd6662f63b2cbad7397f568e"],["E:/qinhao/hexo/public/archives/2020/12/index.html","0960ffca5d9105e64bc2db8d3caa149d"],["E:/qinhao/hexo/public/archives/2020/index.html","0dcba415078942bfd88876302f3553e6"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","ccba91f83f27a3db09318f7f8d137b0f"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","54f71bf19833b6f316d67a5e5b88d81b"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","256bc642b1009c0bedef084aa717e7ce"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","739a2642a5084fe70523348bcaeb9ae4"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","3d213e8f91858355c37bb1d36df3977b"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","bb16af7c7b16d1c904e217e3cd5ce982"],["E:/qinhao/hexo/public/archives/index.html","959e71d63fdc95e457caa4937eb839bf"],["E:/qinhao/hexo/public/archives/page/2/index.html","5f5edafa34a850baf9712cb0dded99ea"],["E:/qinhao/hexo/public/archives/page/3/index.html","959e71d63fdc95e457caa4937eb839bf"],["E:/qinhao/hexo/public/archives/page/4/index.html","5f5edafa34a850baf9712cb0dded99ea"],["E:/qinhao/hexo/public/archives/page/5/index.html","5f5edafa34a850baf9712cb0dded99ea"],["E:/qinhao/hexo/public/archives/page/6/index.html","5f5edafa34a850baf9712cb0dded99ea"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","ffa50fbbd041b6b07204cb15f426796b"],["E:/qinhao/hexo/public/categories/Java/index.html","11502b35177fd105980240710628e2dd"],["E:/qinhao/hexo/public/categories/Linux/index.html","a71a1e38c1d9d256a0bc0f40cc028544"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","9b234373f812ddeb043e9e16eddb5994"],["E:/qinhao/hexo/public/categories/Python/index.html","10416b41060f1a2170beb0f86e3d96b8"],["E:/qinhao/hexo/public/categories/交换机/index.html","07f3bdeefaf620fe06552339cac7a0a8"],["E:/qinhao/hexo/public/categories/华为认证/index.html","cb531bf590dca414c64f60262070c967"],["E:/qinhao/hexo/public/categories/小技巧/index.html","56ad0dee33d72a8ced52f70d99d94e0d"],["E:/qinhao/hexo/public/categories/数据库/index.html","cb5ba8eb548d3c2ac8d33e1abfad8609"],["E:/qinhao/hexo/public/categories/服务器/index.html","8657a854442044d9a88f931a9c6358bd"],["E:/qinhao/hexo/public/categories/网络安全/index.html","8afae3349728606c7bc1919d149d682d"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","69f83fd834979c15108b0bc3b9ab0e6f"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","9218aa1d0844746a8dee948ba9ccbf80"],["E:/qinhao/hexo/public/categories/软件破解/index.html","b2aadc27f787108c2432c8664f09bf44"],["E:/qinhao/hexo/public/categories/通信技术/index.html","f36ae6640c9f7692a83cf4129a69d9e2"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","001ece6a8d44eed35bb253a140d3a362"],["E:/qinhao/hexo/public/category/index.html","476db8e25773f59f66d8b1c2c02aaf87"],["E:/qinhao/hexo/public/css/style.css","668813995a9ac143f159e5eec9bd3138"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","c99abd5aa823fdfcf4658ec8b9a78272"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","cc247d1759b6df4389b6dc8359bd09d4"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","85053294b88f672ad6ddd3b82e2c5a01"],["E:/qinhao/hexo/public/page/2/index.html","18e98029eeb53e700f79c5e14a232701"],["E:/qinhao/hexo/public/page/3/index.html","5f2857d86d57b178e8813eadeb813d30"],["E:/qinhao/hexo/public/page/4/index.html","6521b97420a518fb6e9d181ca4f87108"],["E:/qinhao/hexo/public/page/5/index.html","5a1b9a959268c18821c26d90f4d63701"],["E:/qinhao/hexo/public/page/6/index.html","aff803080b4512e7f80d7a8d2feca7ab"],["E:/qinhao/hexo/public/style.css","668813995a9ac143f159e5eec9bd3138"],["E:/qinhao/hexo/public/sw-register.js","f121148d8e81513038b3c7aa36b2dccf"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","fad568673c0bfc5681248285f894a644"],["E:/qinhao/hexo/public/tags/MySQL/index.html","9b45d7201adf73c92149d29dd2056da3"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","6b48da7c3a4cfca596757c3fb827041d"],["E:/qinhao/hexo/public/tags/VPN/index.html","9cc32eaef5371787612d5c89fda5d851"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","24a9229671331c307ed90df1842f0470"],["E:/qinhao/hexo/public/tags/index.html","5ad304f743aa29b32bd545ca0789261e"],["E:/qinhao/hexo/public/tags/交换机/index.html","fae09c85a105e5d23bcb3bb3baace508"],["E:/qinhao/hexo/public/tags/图像处理/index.html","a91cece43dd7966aa226160ae06e0d34"],["E:/qinhao/hexo/public/tags/基础网络/index.html","f31e49435f1a79079a3fb04fcbbd46f2"],["E:/qinhao/hexo/public/tags/思科/index.html","763fbf769eeb854c7a6417d99ed9a335"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","168e8139866677bbb410ef8ea5b8ba60"],["E:/qinhao/hexo/public/tags/数据库/index.html","386dbee8dc4d2ece15292d883e3ee5ec"],["E:/qinhao/hexo/public/tags/无线技术/index.html","27216c25e34fd83836aeb85f2628a117"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","99f2b0362eb69557ac3d7d5023e98071"],["E:/qinhao/hexo/public/tags/系统安装/index.html","773e7ee2da95949cc2aaefd9ed65a158"],["E:/qinhao/hexo/public/tags/网络安全/index.html","e4d878a64804f58755a3f3c110e09eaa"],["E:/qinhao/hexo/public/tags/网络技术/index.html","b404bc80adb0bdb0e14b95a801f83337"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","d5c5003ad7d068f970c820c57b2be8e9"],["E:/qinhao/hexo/public/tags/路由器/index.html","44b313d502a10321ab44913a4cb190e9"],["E:/qinhao/hexo/public/tags/软考/index.html","96aaeb0d055cbd93bbbf56fdb5f76829"],["E:/qinhao/hexo/public/tags/通信原理/index.html","3e81a68ddc81a0a50399181b9fe48df5"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","89018cbbdfbaeaa33b761de9357405fe"],["E:/qinhao/hexo/public/tags/通信技术/index.html","e5d97a50e0b3414a8357769d0e2430b6"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","edef3204ceb28ebfaa264308771926a8"]];
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







