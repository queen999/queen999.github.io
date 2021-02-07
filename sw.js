/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["/2020/02/14/RedHat_setup_script/index.html","11918ed31173c802d444b200508b9835"],["/2020/02/14/Windows_Web_build_environment/index.html","cc42f0512a1de747474c204458787c77"],["/2020/02/14/Windows_Web_build_website/index.html","e5f3bc2dd0ea3127605af898fe2f2502"],["/2020/02/15/Web_site_SSL/index.html","a3ed6ec123fd6b40b72ab97f61894a92"],["/2020/02/15/Windows_Web_often_use/index.html","bd47911bc08e29e9144d15c3d6959974"],["/2020/02/15/a_server_build_many_webs/index.html","046f0177222c1869db03f53f0e0c060d"],["/2020/02/24/ssh/index.html","140db66970c5986cff301e3a68507524"],["/2020/02/27/MySQL8_basics/index.html","e88841f3bb6f41a8ca3e8658a3deec88"],["/2020/02/27/OLT_command/index.html","7e90a19e847a5bac58b2851d1bc2fa70"],["/2020/02/27/computer_network_basics/index.html","db096481e0a3cd30ba2156dacfa34f33"],["/2020/02/27/switchport-security/index.html","c6f5df66f6498fe0efd60f1e07b72c35"],["/2020/03/04/acl/index.html","9cc578588b56121d39634db86092b455"],["/2020/03/06/mobile_communication/index.html","d02002c782baac9af3a18ad9cc5ea375"],["/2020/03/06/wireless_word/index.html","f5154529172419f741cd93cea1568f6b"],["/2020/03/07/3G/index.html","e317e86d7a6a4f68b820400f6b26443f"],["/2020/03/07/GSM/index.html","1573e5960256ca490b24db23fb4d69e0"],["/2020/03/07/IP_Bearer_Network_basic/index.html","dec4f4d2a2b845b275adbb53de217c25"],["/2020/03/07/LTE/index.html","5d30c1f452ea3e4885da82badb5983a4"],["/2020/03/07/NB-IoT/index.html","d49d8ae1f59dff50cb3236ecc8714e91"],["/2020/03/07/optical_transport_network_basic/index.html","98ddd4adbdf16c18b574ac6f0ab49c62"],["/2020/03/07/wireless_radio/index.html","4a2a5a700107f20da1ea70191db7a20c"],["/2020/03/11/Linux_often_use/index.html","741afe67642d6a90e2924d18eccd512e"],["/2020/03/11/Python_basic_(1)/index.html","31a63f14018d929132f12fc1e640abd9"],["/2020/03/21/GRE-VPN/index.html","54cda7233d681c6bf9ab03a2256da5d6"],["/2020/03/25/IPSec_VPN/index.html","72bd8d7fb658427e3b766d6ab5d849af"],["/2020/03/29/FixedTools/index.html","923d89f63348d9a3dbc05a8929a0aee6"],["/2020/03/30/GRE-over-IPSec/index.html","b62de96813359647f45e28cc565de491"],["/2020/03/31/bitwarden/index.html","4c578457d79116c12cfe20049d9e39e4"],["/2020/04/03/Layer/index.html","5114c604b6a85ce76b7674e9881b63ef"],["/2020/04/04/color/index.html","ef8d6d0fc0dc93b146999488500b2a3f"],["/2020/04/09/wireless_framework/index.html","64a26d0336c0307716644bb88064967f"],["/2020/04/13/manage-MAN-skill/index.html","f26d1bd8ca31eb0b9456de2f98aa937b"],["/2020/04/13/structure-of-MAN/index.html","420783d6ae0cd6cdd5e664c8e1c12e47"],["/2020/04/20/TD-LTE-System/index.html","97258dd73909b34fd22b451c1bead677"],["/2020/04/24/Network_Access/index.html","08034b07d65aa58b7eda1f333f6480ac"],["/2020/04/24/build-MAN-idea/index.html","ec8824472cef67588d955a0c8fccc89f"],["/2020/04/25/OFDMA/index.html","799d1598062e05f1916fe68e0d1352cb"],["/2020/05/11/MIMO/index.html","e99564f936e90e43af34ff1593861e28"],["/2020/05/12/ICIC/index.html","e242dee6a10c57afe678c2169086b82d"],["/2020/05/19/No-module-named-pip/index.html","cea612ff2fe12517e6dd7e4edde768b4"],["/2020/05/19/huawei-PCManager/index.html","3daeeca56aa3799279b2f55d3f9f32e2"],["/2020/05/19/not-allow-F12/index.html","11b214ea8ad5a8902af96ece69eefcb9"],["/2020/05/20/python-2/index.html","8b3722ba4b2c0b31ef77e8041ef78dd0"],["/2020/05/23/free-get-189vip/index.html","df3bc76437eabab6566ba55f0c4b28fc"],["/2020/05/24/Python-3/index.html","1b1c4a147cd9306e2f5505f5e68acd0f"],["/2020/05/25/Python-4/index.html","2b7e5f931af90f996c4c8492b1113403"],["/2020/05/29/huawei-exam-application/index.html","8f5586116e6fa82bc13366686113f246"],["/2020/06/01/Python-5/index.html","39dcde2f084e6e882d58c870fa872006"],["/2020/06/11/lanzous/index.html","9f646d1ce93f98a17f3f70b95e2af758"],["/2020/06/13/mysql-install/index.html","d8db2b9c4bf97c18692d861e25053aac"],["/2020/07/07/Python_cards_manage/index.html","97dd0a1d228b61393285f8843e11d12c"],["/2020/07/07/Python_variable/index.html","a9993791d40d1e38f9c531f8a62a0374"],["/2020/07/17/computer_Internet_1/index.html","1a064f805e76d25cf4f7017d4665c935"],["/2020/08/13/Files_and_directories/index.html","7771cc3c91b4c1ca0fb47d5d2b20466f"],["/2020/08/13/system_info/index.html","de30cd27ca9825bcfa6aae39be685824"],["/2020/10/01/5G网络优化/index.html","a2c2ee9d47a13493b855ad4c59fd06ea"],["/2020/10/05/linux/index.html","7b5919b840fbe3b99135202ed2b35c8d"],["/2020/10/20/Design_patterns_1/index.html","51077139f40c14dce0322964a88eb0af"],["/2020/11/01/network_security_comprehensive/index.html","f9c7b90c1a0cd781cc6d8e7c93314f49"],["/2020/12/15/C_basic/index.html","ccfb9238818076fc59cad94a4b13bb66"],["/ByteDanceVerify.html","66b87f9d84a61bcc64dd09a91d0a8aeb"],["/about/index.html","db9ef327ddd28ef9ac643ac3d56923cc"],["/archives/2020/02/index.html","fe67004680f9f2e89bc16b60b181448e"],["/archives/2020/02/page/2/index.html","02e75e6aadaca5be50ce5bcc06f1f2ba"],["/archives/2020/03/index.html","dd3d008fb0ef4a4402dfaf876ce1ee44"],["/archives/2020/03/page/2/index.html","6252fa62095effb0b3351c26d0c6ab35"],["/archives/2020/04/index.html","704b1cade641a394013152bbe34a41a7"],["/archives/2020/05/index.html","85b35740fc1a7a9a0a117109e476d491"],["/archives/2020/06/index.html","50d7d19ff107229e02d6ae9bdb24ffd5"],["/archives/2020/07/index.html","260fe08fd0aadb9848941f08d0bb5662"],["/archives/2020/08/index.html","f581bbaf3fe1426600b6202868df91bb"],["/archives/2020/10/index.html","92820290e2e1a60fd51db2ab2d133279"],["/archives/2020/11/index.html","c359b658c142b346a00ec94474ebb9ab"],["/archives/2020/12/index.html","763417b3dde561aa81e97fb06fc82076"],["/archives/2020/index.html","2b0e0d86190fe8992898ac4f96ad5265"],["/archives/2020/page/2/index.html","5b84b70cd9ba026130b946118aa7cb0a"],["/archives/2020/page/3/index.html","ff3f18fe29e7001aec30f8258233c483"],["/archives/2020/page/4/index.html","2e0b39bb236a72bd5b0014973ccba188"],["/archives/2020/page/5/index.html","8c7f9d6fbecb2d90b451c4e8f0bf7b07"],["/archives/2020/page/6/index.html","0805349e331404540c6f46a19adf6e82"],["/archives/categories/技术/HP交换机配置.html","853d4cc5020e7e1b9499fe296fddd68a"],["/archives/index.html","4967e2135dfc6c6f319a5606b810cac2"],["/archives/page/2/index.html","af1e58416f4f1a6179da7c0d36b2ef25"],["/archives/page/3/index.html","4967e2135dfc6c6f319a5606b810cac2"],["/archives/page/4/index.html","af1e58416f4f1a6179da7c0d36b2ef25"],["/archives/page/5/index.html","af1e58416f4f1a6179da7c0d36b2ef25"],["/archives/page/6/index.html","af1e58416f4f1a6179da7c0d36b2ef25"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言/index.html","466ccb05aeab5d606e2bb10ba4b334ec"],["/categories/Java/index.html","25db6d415b320d067eadd604efba5e54"],["/categories/Linux/index.html","ba00ccd3f1964c3bb7d848e1ef248dc1"],["/categories/Photoshop/index.html","0984b24bad2245203377a44ce8e3fbbb"],["/categories/Python/index.html","11ac8ec01f078e3cda80724ee3c6f92c"],["/categories/交换机/index.html","216216bd1379281ba5109b81ac2e41a4"],["/categories/华为认证/index.html","8dd6a071bc5b6be1378718e7a21f4f06"],["/categories/小技巧/index.html","0e87aa0b202fe16536a2967a850ca760"],["/categories/数据库/index.html","5234c9b3cc65867ecf4e7deace8ecb21"],["/categories/服务器/index.html","fe183c2e74329048b798b3bbb0f8063d"],["/categories/网络安全/index.html","ecb67aab7d878ee3c45cbee23ba08654"],["/categories/计算机三级/index.html","62017de57c892b0504d742f808b496a1"],["/categories/计算机网络/index.html","b2bc7da7f8766bf0a704e20e37572f42"],["/categories/软件破解/index.html","87cf719e946f639a75cefbecb866a91a"],["/categories/通信技术/index.html","cf49c8e25f66b8ea06fae83f599ab242"],["/categories/通信技术/page/2/index.html","8cc6c1a2acddf3f359b697121d4e9332"],["/category/index.html","66193db0baec9a3d836f2a900496e1db"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","77a0bbdc0009166c66b29d985760eaa9"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","df4b3eb8d05304642e59dd93188bb076"],["/page/2/index.html","2ece0042424fed2272967aa6af827312"],["/page/3/index.html","412127011b49f9245d4f786735184d08"],["/page/4/index.html","288b64473490c3252891c0f015c26ff0"],["/page/5/index.html","40c8f56f48dfe86336df36b1b6a0a596"],["/page/6/index.html","0f54c1f0d6e18af786fa56b52942a9e8"],["/service-worker.js","cebc3a3ae13af0589985498d0fb81d00"],["/sw-register.js","596644a33f1347f22437b0d3901a9d47"],["/tags/IIS/index.html","2fe83fd34f77ef6c35341a5d1ac0d087"],["/tags/MySQL/index.html","7534137bdd793d3cb544b69776da6e3a"],["/tags/Photoshop/index.html","91630831229ddabe5f0373b464d19501"],["/tags/VPN/index.html","63289c6d04eed313b582d9cfd80e96fd"],["/tags/Web服务器/index.html","66faa195db39bcbdbb8dbf9a40fd3194"],["/tags/index.html","aa3e0a2cbe1a3fcccbe2074cb6bc7345"],["/tags/交换机/index.html","5298df037e7d2b92133fa6bde68bb9a4"],["/tags/图像处理/index.html","3f7b2880a10a2b1cb525130c9ad82ed0"],["/tags/基础网络/index.html","0b7d348a6721b18edad7725273009e0f"],["/tags/思科/index.html","ab8a9fd5ff4abd7d073a194394e33a25"],["/tags/思科GRE/index.html","fcbef9a55c0ab2c34eab5e39f68ecf44"],["/tags/数据库/index.html","57835629f35550fa48db47767ef00551"],["/tags/无线技术/index.html","50314dcd0d4f106ce2ba26ceb563ae35"],["/tags/无线技术/page/2/index.html","b66c1bfd34ee18fe20312e25b2c80de2"],["/tags/系统安装/index.html","151533d0fd74a5604456600bfc634aaa"],["/tags/网络安全/index.html","6a3c298ee3dc41c0a1db578c956e0f96"],["/tags/网络技术/index.html","9d9ffe2f61940ea4e0fe13e2b9ec72d7"],["/tags/计算机三级/index.html","aaf44e3c36d19becf15536f487af1689"],["/tags/路由器/index.html","c0b72c40b5303a718544067be47adb32"],["/tags/软考/index.html","f2a3dec6ff0279a50864351a1846c5d4"],["/tags/通信原理/index.html","a834d9b5688995542b8ebb0c009ecafe"],["/tags/通信原理/page/2/index.html","87cf5b5968e9fb03ff4ae7c56cb26588"],["/tags/通信技术/index.html","f2720085ef1e2933d6b3a750425c12f2"],["/tags/通信技术/page/2/index.html","3ac52c247ddce2217543e5772baf8b22"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
