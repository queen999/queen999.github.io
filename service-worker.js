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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","ad68281a0eef579dd303004b6ffd4f33"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","142f28f3b5bffeb9d240642b6f64546b"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","2e9ecc76c88d756f21922ac83305e4d5"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","d1eae127bd453c02bfcf9115c168ceac"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","0daad61ccb0c077be75d70369715eeca"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","c45c6df8aca1de28f2e32bf8cb6a959c"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","5c19d89e3a492c52f2bc362d02852217"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","a75aff0db0c7f95b4b05dce41096572e"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","93b978d227a0ba0122146d059a0b5287"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","a31e9cf691b84a5684eb49d441b6ef12"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","51137611c207dc4b43e683e465bfdf2b"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","c5c8f0aaac702cada40a0d42f3caf11c"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","2d37cde52aef9a98768ec7251e7b558a"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","c13cb68e585e9295cc1d5834702398cd"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","b18a2bf40c5fc62442e9f983fb2d86f0"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","4e6de2211811dd0fc3d7200b4cd477cc"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","29a3cc5d3621e68c61c26a7061fb2dbf"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","a0dafedbad74703653f734051d4f5de3"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","741a085dec898b2503bbca38c356cca4"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","802b960116c77ee4966612e53d5472b8"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","023c1fe1224babf40d76589b39ad5e4a"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","a509b2eb6dda68b191668ffedb34cd90"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","b90da0dc58b1d8630651e71b3e1cd424"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","305cd9468f42daa267f1d56e9e915372"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","fad921228a478444411ebbb7591d66e4"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","90c67f1f6a954ff7f7b8f9ad7c291961"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","c2cb0beaaee4135bc3b02860cfe01571"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","a77ddacb53cd26d59fb0ea67c35c2d44"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","411e63e842e5c3d42673f525b3e20584"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","8c994238ef2a2fc4af727ff59e7bcf2b"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","76b224282e7d1f23f0eca97d4ff2bc06"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","42a1454b6acce25a2f3f2db0d158387c"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","cea38f77b661a1a6ed9fdfda3e85bcfc"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","d7f203207adc00c78bb486de3d96d875"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","c8ad84096208a26bf8b0dbf5bdbd1d96"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","35760db4f7cce30975aae3394550b94a"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","994612b88510a1e760e031e5d5a6ff46"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","5d94125ec5f32eb10bf4c15d381a3f4b"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","755ef318b8fdc01c09369986145b5f8a"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","3b799b6b15502954e7a357710fc5db2d"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","15dd6987f20bf7c20705eae890ed34fd"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","640398f664cf2254a399898babd193b9"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","5a3d419e69e6cfdd09c90f0a5375b24a"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","4b9a2270b3fb13119baa605712468ba3"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","02def3f682c5d9bbff876deca87dd591"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","8987c8434452f7056a07699f4ef9f008"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","650eebacafc3084e39046d62573d43ec"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","4c1c53f7a2a23460479608478f1698d7"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","4943cd4e60d1b97dc381af27a41418c1"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","ded6873f43a360c127560025dd9dad40"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","e4b5587f2056cd4f0b737351f129b44f"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","701d9d48bc55d2f3a38d55c06adc758e"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","9e41ea78e283f383a8e9dfcbb3789fad"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","02699986c6bd05d1a1183b3a3d8d85ac"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","b8ba8d110e07d7922b998723a82a5334"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","57d850870159e1d15d70bd942f21f30f"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","2d34e5a07c381386d1c859a1ebec8435"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","1d49fca64e70448bc74a799f1635b9c8"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","510ec90e968a030e62a2b88096b3c8fe"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","cdd4ea8783672bab42a13259f7c70c09"],["E:/qinhao/hexo/public/ByteDanceVerify.html","2a43b5c026658fca8584af2aa069c1bb"],["E:/qinhao/hexo/public/about/index.html","2a9e5551d693d466d527bd991f1c4721"],["E:/qinhao/hexo/public/archives/2020/02/index.html","8f997420e1791fb1ad0401176dc07585"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","c7a137e0d0176c1dd4c681366f44b41b"],["E:/qinhao/hexo/public/archives/2020/03/index.html","89eca3b41bec0a694eeb39e9a502cbb9"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","623dd26119ef9649aaf18ef3c24ca250"],["E:/qinhao/hexo/public/archives/2020/04/index.html","e369bbb8449b3cfb4ebbcfb303185228"],["E:/qinhao/hexo/public/archives/2020/05/index.html","51c3b0f27cc4e8c6e57efcc059cad36e"],["E:/qinhao/hexo/public/archives/2020/06/index.html","021e558a27cc917a9e1c6f3fc2158013"],["E:/qinhao/hexo/public/archives/2020/07/index.html","f02cd6d4d4bd7c5ef5c61ba7b05c1e06"],["E:/qinhao/hexo/public/archives/2020/08/index.html","02899157d54cb9995251cc5cb8dddbe4"],["E:/qinhao/hexo/public/archives/2020/10/index.html","533f9a50b77ac1b1863d1a6f053d9f04"],["E:/qinhao/hexo/public/archives/2020/11/index.html","fa824a9873b83799151748f520107a8a"],["E:/qinhao/hexo/public/archives/2020/12/index.html","c3d1d7b81a34499b327114def45a03d8"],["E:/qinhao/hexo/public/archives/2020/index.html","70a2028a5a7f84d85c88cf21929a3c78"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","93f117dbfa9fc9698a80a50d03c08761"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","09534f7793e0f3e3d70f1495f92c1074"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","aca1addfd42ebf823a89ce7eeb9ac046"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ba73b34b86cc408e143602c3ef359fc3"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","041e356e7c2a421bb35f46e1a0ed4c6d"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","2b5512723fc2c3aeb9fa1dce94dbaa75"],["E:/qinhao/hexo/public/archives/index.html","8a7766b132c66029e6b3065ecc2f56f4"],["E:/qinhao/hexo/public/archives/page/2/index.html","691b2156a97158aabeaa898090dfffe4"],["E:/qinhao/hexo/public/archives/page/3/index.html","8a7766b132c66029e6b3065ecc2f56f4"],["E:/qinhao/hexo/public/archives/page/4/index.html","691b2156a97158aabeaa898090dfffe4"],["E:/qinhao/hexo/public/archives/page/5/index.html","691b2156a97158aabeaa898090dfffe4"],["E:/qinhao/hexo/public/archives/page/6/index.html","691b2156a97158aabeaa898090dfffe4"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","e769c02b23e49cf7804b93049350c295"],["E:/qinhao/hexo/public/categories/Java/index.html","e897e07fc4532c2b96c9ffede3c827df"],["E:/qinhao/hexo/public/categories/Linux/index.html","b416c65ef323cd7497f913a97c542ca5"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","174b595c178f713044dc165a8e723194"],["E:/qinhao/hexo/public/categories/Python/index.html","093d04e3bfb4986479cb63a9c5a82a25"],["E:/qinhao/hexo/public/categories/交换机/index.html","4a89d815427516041e308896426fc2b1"],["E:/qinhao/hexo/public/categories/华为认证/index.html","01e7cc8d6ce599c3f4aa4efc5edfbaf2"],["E:/qinhao/hexo/public/categories/小技巧/index.html","3633a8628a04b30093ec9ca68d7831b8"],["E:/qinhao/hexo/public/categories/数据库/index.html","6805f9f0556480c1d5afc683f5f2ae82"],["E:/qinhao/hexo/public/categories/服务器/index.html","aa6d76597a7a29d40e5acf2564940f20"],["E:/qinhao/hexo/public/categories/网络安全/index.html","c213b842a0f439dc08616c23c4831ede"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","5962d2c1cdf84cc5ab808505b95c1d3f"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","30a912af724a56e78528e69f1cb339b8"],["E:/qinhao/hexo/public/categories/软件破解/index.html","ad3aa5a0efef802373a6ffbd5357b822"],["E:/qinhao/hexo/public/categories/通信技术/index.html","51eb4713f72bcff610ba1cc5b2973ef9"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","4d9ff5c38b4ed51e7c90a8f547ff6b8d"],["E:/qinhao/hexo/public/category/index.html","f0220d6ba2fa3db37348588a0c4731c5"],["E:/qinhao/hexo/public/css/style.css","f5e2c67bc8af009b55f92e0cda779c39"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","ae4cfcefd588503a7251ca469a89d0e8"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","77bf124edaac6f6d499b6c977ac5058d"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","42a950a77a14c685197ad915aed16d79"],["E:/qinhao/hexo/public/page/2/index.html","3efee22e18ddfa58e58a18956bc7d658"],["E:/qinhao/hexo/public/page/3/index.html","e8c8cc996bd03b5748955db84686045f"],["E:/qinhao/hexo/public/page/4/index.html","ed9a194e17fb68830e02e9e912ba6850"],["E:/qinhao/hexo/public/page/5/index.html","55b55087192a3a21dcc294e629c2d8d8"],["E:/qinhao/hexo/public/page/6/index.html","f04017b3112f94c51c8267b97865a583"],["E:/qinhao/hexo/public/sw-register.js","6b11a4d90d317bf12ac7a75cc7149cdb"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","5d1a80e73ad36446b62540e4aeff4dde"],["E:/qinhao/hexo/public/tags/MySQL/index.html","be2bc3b241d317d05f3cacfaf72d37fa"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","cf558155afa7756f3d681a9668ddcf5d"],["E:/qinhao/hexo/public/tags/VPN/index.html","29923b86e3a387af636e1073c8a4c829"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","dd4b792056a5e152f741df828e6922f0"],["E:/qinhao/hexo/public/tags/index.html","8bf41983fe55c0b9e4d44705d8335870"],["E:/qinhao/hexo/public/tags/交换机/index.html","e7ff502cfb1bc2ef1b5d97a96ed83d4f"],["E:/qinhao/hexo/public/tags/图像处理/index.html","bf873c6e5ec11e5e46f17fccd9d5ca0d"],["E:/qinhao/hexo/public/tags/基础网络/index.html","c1c06d82a3364050f12ae64eb1f707d1"],["E:/qinhao/hexo/public/tags/思科/index.html","df2f6a68ecfb52666410c25af78f501a"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","ba41cec791c7d042772d5b9f4e7ee057"],["E:/qinhao/hexo/public/tags/数据库/index.html","8e61235b0ed99df5add3643129b13a52"],["E:/qinhao/hexo/public/tags/无线技术/index.html","d7179e5bf083f9e3afdb9cc2b21be070"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","db7f2bc2c29a47d6a6edf2793c1d9eed"],["E:/qinhao/hexo/public/tags/系统安装/index.html","d5c1f1f394c442246fd2e450737f6eae"],["E:/qinhao/hexo/public/tags/网络安全/index.html","22ab4c95931bc2dfe3d08a394329e146"],["E:/qinhao/hexo/public/tags/网络技术/index.html","8a0f39516657bc59a13b05ec648d3c0b"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","f85991859714088a7f6872ae3b54c269"],["E:/qinhao/hexo/public/tags/路由器/index.html","c3ad9e5ee228044d46cde80fbadeafa8"],["E:/qinhao/hexo/public/tags/软考/index.html","6a48d576742675c6c3fc445f63375c28"],["E:/qinhao/hexo/public/tags/通信原理/index.html","966b08c9dde1632ff5e65d4b1c79407c"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","93093215d4594452aba7f5da0c8a4fa3"],["E:/qinhao/hexo/public/tags/通信技术/index.html","9a26d7106996a7f11da045d6ede3bf28"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","4b1b4dd5ed0ce25332d764c040fa06bb"]];
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







