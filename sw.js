/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["/2020/02/14/RedHat_setup_script/index.html","3e1ffb3bf2b07c5f7d491787893cacc7"],["/2020/02/14/Windows_Web_build_environment/index.html","8b12f4856fa5bc8b70f2a5139e048af3"],["/2020/02/14/Windows_Web_build_website/index.html","9be25bdc4da2de97199ad6d438f5ae2b"],["/2020/02/15/Web_site_SSL/index.html","ffc6a98260e5f49f2fa47746b4f52b39"],["/2020/02/15/Windows_Web_often_use/index.html","9915ffebec01eec6026c40bea3d92ab1"],["/2020/02/15/a_server_build_many_webs/index.html","ceaec37b5e51a81e791af2db24ed7e42"],["/2020/02/24/ssh/index.html","71549113f1620eccf2d0d1d99544cf64"],["/2020/02/27/MySQL8_basics/index.html","496f0caa1aeb9007e43c3295267c37c6"],["/2020/02/27/OLT_command/index.html","ef7f99f6c713ac7c9e1530fce23a951d"],["/2020/02/27/computer_network_basics/index.html","f2b33bbd05806db4cef3cd50546f0f27"],["/2020/02/27/switchport-security/index.html","c6b1a5ea5ec1f86f64626b105289ea9b"],["/2020/03/04/acl/index.html","4a1050cdea8b5098fa0fdaf1d5fb0b45"],["/2020/03/06/mobile_communication/index.html","5d43c7ab785d6826009cfd163ee60b18"],["/2020/03/06/wireless_word/index.html","35a1a7837338918cc09bb0003b6ed4da"],["/2020/03/07/3G/index.html","3a7c563f2447b6f31a9493c9b6492e83"],["/2020/03/07/GSM/index.html","2020d48ea83346faeb6ef274a947fb3d"],["/2020/03/07/IP_Bearer_Network_basic/index.html","c2c1e1e7e22d2ef1299d15de01aa93e6"],["/2020/03/07/LTE/index.html","16bbb9cd6cf405477bd7788bddc9aa39"],["/2020/03/07/NB-IoT/index.html","1f517c116350899b921f797f911526f8"],["/2020/03/07/optical_transport_network_basic/index.html","b45ec166f064a07f531d3218340f714b"],["/2020/03/07/wireless_radio/index.html","b43055f6c33709956f5f8fc2f597dae3"],["/2020/03/11/Linux_often_use/index.html","b808fb230980a0da28ef9e2a818785d1"],["/2020/03/11/Python_basic_(1)/index.html","e3c7883408928cec2569b694e8c864b2"],["/2020/03/21/GRE-VPN/index.html","375a4678068fdebb6035366f207db7d5"],["/2020/03/25/IPSec_VPN/index.html","f2cbe5df7a0cdfaa4b99a888ef4a133c"],["/2020/03/29/FixedTools/index.html","d1e4e66c5dec71002bd427d520b7256b"],["/2020/03/30/GRE-over-IPSec/index.html","7f37212c64efff764b45d3ab5fc95fcb"],["/2020/03/31/bitwarden/index.html","62beba6fb410b0066b9b12e14069cc61"],["/2020/04/03/Layer/index.html","46c43312baaaf651e40790881a86910f"],["/2020/04/04/color/index.html","539b20f1f443106a8e280e4cddd1e3f7"],["/2020/04/09/wireless_framework/index.html","8649b53fac3168c9ac8f3b1e000c7501"],["/2020/04/13/manage-MAN-skill/index.html","946a63bb42342d00a79925858eb4ba9c"],["/2020/04/13/structure-of-MAN/index.html","3914233905e3e6b81b51f3d78f962837"],["/2020/04/20/TD-LTE-System/index.html","ed1b6360c19cdae055e634f08c298d08"],["/2020/04/24/Network_Access/index.html","d597e47f76d025829060360794a9d32e"],["/2020/04/24/build-MAN-idea/index.html","cb4c3e60b641f5f3fd0e5e9d84fb91cd"],["/2020/04/25/OFDMA/index.html","d75735bdb8fb4cc0ff7952945ce10126"],["/2020/05/11/MIMO/index.html","5fd2799331894e851561e68e19d7244b"],["/2020/05/12/ICIC/index.html","1f3e0a6cd2b9ef0ba7cfc34ee0c96819"],["/2020/05/19/No-module-named-pip/index.html","3921566ae872e552228a45d8fbc32ed7"],["/2020/05/19/huawei-PCManager/index.html","cbcb3b3c2f797b13b365edd13e18954c"],["/2020/05/19/not-allow-F12/index.html","2120ac1f86e4540b9d6b81bdcf68d7d7"],["/2020/05/20/python-2/index.html","a478a2ac9c9f2a40902e7c72ca7f68aa"],["/2020/05/23/free-get-189vip/index.html","cefa85722b9769ca44a13b9cf4f59fe8"],["/2020/05/24/Python-3/index.html","8ac3e2329027bbcf7a3b985c8daf9910"],["/2020/05/25/Python-4/index.html","64291b2836cf19aba272b40d635b754d"],["/2020/05/29/huawei-exam-application/index.html","01dbf19c463791a66ba0332df05980b6"],["/2020/06/01/Python-5/index.html","98134ee2a001d0b75f7c30e5cc5fdd5c"],["/2020/06/11/lanzous/index.html","263a2d0e3b86e514974c4cee7b1d56cb"],["/2020/06/13/mysql-install/index.html","fbbbee72285ef8b7f806ea3db10adfbf"],["/2020/07/07/Python_cards_manage/index.html","3c187800a9a40c3c5fc8bb546986a2f4"],["/2020/07/07/Python_variable/index.html","d8cd2b240e7380f158ca40c110c48af7"],["/2020/07/17/computer_Internet_1/index.html","fc0f94fdcab8e3df578d1b097638dbe9"],["/2020/08/13/Files_and_directories/index.html","1c38ffc6f2772f973615c477548621ab"],["/2020/08/13/system_info/index.html","c414f57a07515d35fa5127315102b727"],["/2020/10/01/5G网络优化/index.html","0be47eb66821ec89961d17db502ea113"],["/ByteDanceVerify.html","47c7c83507e059d453bbebe57c26d15f"],["/about/index.html","abd768c135866dd534a6be507de42a01"],["/archives/2020/02/index.html","8f818802615b4318e6ab8844b6a47804"],["/archives/2020/02/page/2/index.html","5e11dafbe1b136f73837c2399f102907"],["/archives/2020/03/index.html","b15c5fb769e56a836eb7b4c4b53f8db7"],["/archives/2020/03/page/2/index.html","3ded7ea4c0987f08fbfa9019826661b5"],["/archives/2020/04/index.html","f16ae8f8a6a446215c5429013a0892cd"],["/archives/2020/05/index.html","9a7c3756bdc71e64563005eca69d1e81"],["/archives/2020/06/index.html","b01391bcdeb09bcd7b9e853e8c3b8efe"],["/archives/2020/07/index.html","31dce51e1d790bde8563af0a51bfed78"],["/archives/2020/08/index.html","95618e6f8ec99c296d305475b0e573c8"],["/archives/2020/10/index.html","3af7102839cd309e30e2185df1f87540"],["/archives/2020/index.html","f4c4d9cb37db776eedfb50c04eebd43d"],["/archives/2020/page/2/index.html","ef5668d427a47618b7dea31497ec32ec"],["/archives/2020/page/3/index.html","8ff14cd3c8d9d129c5017ac1ce6fa455"],["/archives/2020/page/4/index.html","b541c1e1a7eda00dba1bfbbc3a21de56"],["/archives/2020/page/5/index.html","8b59af2f6e1cc507272de9d7ee027e55"],["/archives/2020/page/6/index.html","7d089e84a22b671b42a2560fedcfcf22"],["/archives/categories/技术/HP交换机配置.html","df232b09038afcbcb1758047973658c5"],["/archives/index.html","08b7c3f49bba6bdbed8a50e5192ae055"],["/archives/page/2/index.html","08b7c3f49bba6bdbed8a50e5192ae055"],["/archives/page/3/index.html","08b7c3f49bba6bdbed8a50e5192ae055"],["/archives/page/4/index.html","113ccf62c9fa1409256aa7134e9b3568"],["/archives/page/5/index.html","113ccf62c9fa1409256aa7134e9b3568"],["/archives/page/6/index.html","113ccf62c9fa1409256aa7134e9b3568"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","c43d08b53a111ebbd3715c3b42d8b7fc"],["/categories/Photoshop/index.html","d7984ab1921dfb5e7a6c2096fe74ef15"],["/categories/Python/index.html","012920021a2402355ef63d90378b3f0f"],["/categories/交换机/index.html","02cbc88765e9f7f549b6df65e127edc9"],["/categories/华为认证/index.html","33e3ad6c0bbe06faa9a4c364dfd92bf5"],["/categories/小技巧/index.html","9012488c9070527121d7b09ccafa3fee"],["/categories/数据库/index.html","292e3052ec3d7788f739bd738a35b85e"],["/categories/服务器/index.html","d37633713a65ea7bce116c988417be65"],["/categories/网络安全/index.html","ff545f35966161f7afe0343357f5aa13"],["/categories/计算机三级/index.html","b8d1aa6397662b4393912cbc74cfc734"],["/categories/计算机网络/index.html","af04da9fd65b02110a59f273c06c4622"],["/categories/软件破解/index.html","904905da8f86fc6c1366e8c4ea649021"],["/categories/通信技术/index.html","d9b03ebd3f177816f8ea0b8101759660"],["/categories/通信技术/page/2/index.html","8174793cb6865a91f015a7a512bc5986"],["/category/index.html","7d5a806f2d29c055e0b790807089132b"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","28efddf195fee4ab2592f45a73feba13"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","e7165218896db483f38e4d9f6a3667b2"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","bc04a8554999f0ed04123616d4f78a56"],["/page/2/index.html","63c70dadb7916c7ec82bfab05283ef99"],["/page/3/index.html","4fb5bd5b989d3c41c2c59c588fe6ba79"],["/page/4/index.html","60cb80e7be078639d086a8ed05b5c6e0"],["/page/5/index.html","124d1247a7f45bdcea71d92290febe93"],["/page/6/index.html","10fa6f23e302c2b2824c103a2629eb1d"],["/sw-register.js","8f48fd7c525a97db617d78daa1497a56"],["/tags/IIS/index.html","c21d8cf7c914234035d6d1cc0feccb6e"],["/tags/MySQL/index.html","43c9410666a9bba043cc5efa3788100a"],["/tags/Photoshop/index.html","fedfa4c4eb74457841e078db22b594e7"],["/tags/VPN/index.html","3e1c793ad97893afb1817eff728c6eb5"],["/tags/Web服务器/index.html","95b9e5e12109d725893faffd1ecffdd6"],["/tags/index.html","b683cbc941694b972a8d382cd79bf2cd"],["/tags/交换机/index.html","d258ac61db05fd0db377cf8e52437b69"],["/tags/图像处理/index.html","a7c7a693b4341fab54ee682aa183a699"],["/tags/基础网络/index.html","7ed94a7aab447ada416f3f89f4b1aa7e"],["/tags/思科/index.html","144908551b4dde7465b9d3da865ea5ee"],["/tags/思科GRE/index.html","927e265afdace2dd3d0a034436e6ab36"],["/tags/数据库/index.html","65eb823e2485aba669348b412a2c791d"],["/tags/无线技术/index.html","94575484a5d459eaf3eb9ae8679d88f7"],["/tags/无线技术/page/2/index.html","749faf43835982144dc065b44bb5b857"],["/tags/系统安装/index.html","7982ce8c83f943e007aebf59dfbb3d92"],["/tags/网络安全/index.html","79baf7bfcf25ce7c92b02c9694fb3c3e"],["/tags/网络技术/index.html","064aac96e33b6027f977a9abdf78b94d"],["/tags/计算机三级/index.html","307ced923576d8e693d3df9484fc2f78"],["/tags/路由器/index.html","f4f77d94c0218a032dcc6404e859004f"],["/tags/软考/index.html","31872920e0f0eced7fef7cbc1fb5263b"],["/tags/通信原理/index.html","b2e9831d47a70e624ebe040c493c23b9"],["/tags/通信原理/page/2/index.html","c6be1d117fd4c3303cb600dcaf545886"],["/tags/通信技术/index.html","d1bab8726b40e00ed6ec61647e6a7f64"],["/tags/通信技术/page/2/index.html","d470631c24a135852b4bb3e1197dc2a6"]];
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
