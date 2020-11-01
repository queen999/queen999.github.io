/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["/2020/02/14/RedHat_setup_script/index.html","de4376b337d0d41cf4e94e5697c8bc04"],["/2020/02/14/Windows_Web_build_environment/index.html","a765df8fff29d8e5d1ea3891007ea838"],["/2020/02/14/Windows_Web_build_website/index.html","5009660348fe3712853702a5e3789e55"],["/2020/02/15/Web_site_SSL/index.html","35968507356673f8c89584c687fb4c67"],["/2020/02/15/Windows_Web_often_use/index.html","a82056f267d75acb0f67264b0cc151b4"],["/2020/02/15/a_server_build_many_webs/index.html","007fa20ef3cced84fc9bbeca1d5a6022"],["/2020/02/24/ssh/index.html","806c3d99d42964d7c4d6b5645c9d85bd"],["/2020/02/27/MySQL8_basics/index.html","e7f0450bdc725facd6d6348924908415"],["/2020/02/27/OLT_command/index.html","11f121db6eeaa41f9a9f83da53f98741"],["/2020/02/27/computer_network_basics/index.html","f9ad0160380e2c0fe52f863721ce4916"],["/2020/02/27/switchport-security/index.html","586291790a0713ca6c8c579bf06c85cd"],["/2020/03/04/acl/index.html","e0e08784b250df13312a2881317dd11e"],["/2020/03/06/mobile_communication/index.html","761db3ff9316368685861c9a4e9beea7"],["/2020/03/06/wireless_word/index.html","4288dfea0c0b142b951d94b9edeccfe2"],["/2020/03/07/3G/index.html","0e03591cb9ec6bc5b07e07bae8a1dee7"],["/2020/03/07/GSM/index.html","c0d2161c46bbe65afa8da6e6b5e47aff"],["/2020/03/07/IP_Bearer_Network_basic/index.html","3504dd7aa8f45b4311be7df70e3582e4"],["/2020/03/07/LTE/index.html","c58b5e3be06710ba12bade865668b70f"],["/2020/03/07/NB-IoT/index.html","9cbfa16ac4200ff6609a5e12e8d796fb"],["/2020/03/07/optical_transport_network_basic/index.html","781d509484a57b7dfd065ec9b974af7e"],["/2020/03/07/wireless_radio/index.html","67a3a7717571b32b090a8abbfe2caf61"],["/2020/03/11/Linux_often_use/index.html","7f60b3f520a3861f2079cc6dd17c72ea"],["/2020/03/11/Python_basic_(1)/index.html","a0f9b21c2f817c27f872a8fcccea3743"],["/2020/03/21/GRE-VPN/index.html","397fcf9cd72d731ca57137515ec8b70b"],["/2020/03/25/IPSec_VPN/index.html","7886c012c8478d8de520b0492d28257e"],["/2020/03/29/FixedTools/index.html","6ae8bb2b8c8febc24a23799e18ead47e"],["/2020/03/30/GRE-over-IPSec/index.html","11ff52fff11f73845e504db8f44225bf"],["/2020/03/31/bitwarden/index.html","1bbf9bf3ef6f3d8df2d817046e280f8f"],["/2020/04/03/Layer/index.html","18018aed8865a0c0b33e871b002899d7"],["/2020/04/04/color/index.html","edf5b265ca1ebeacee7ef059c3009151"],["/2020/04/09/wireless_framework/index.html","48080f8b855bbfe8846e0b1f3ff5eb2d"],["/2020/04/13/manage-MAN-skill/index.html","0bc255b1ec33e1a7765e9c480da39338"],["/2020/04/13/structure-of-MAN/index.html","ca43805a1aab4a5202f740c4eb5b43a1"],["/2020/04/20/TD-LTE-System/index.html","1b0f13a2b4a5041278ce6f05c02afef0"],["/2020/04/24/Network_Access/index.html","6475378ed94dc3d2a10e3720459eca7c"],["/2020/04/24/build-MAN-idea/index.html","b5a3ee2f8be365c62eaebdbf043b4a8c"],["/2020/04/25/OFDMA/index.html","9d0711dad1fe38a8cf2508b0f1142301"],["/2020/05/11/MIMO/index.html","0bda1a7ca77f4c0d7f20b95b44fa088b"],["/2020/05/12/ICIC/index.html","64ad0774a50a7373a25b1ba350e23e7b"],["/2020/05/19/No-module-named-pip/index.html","a21e9de4c3c2d3d2c177349bce4a5b27"],["/2020/05/19/huawei-PCManager/index.html","10b941b6f66e660e9c6150b33f35bfd1"],["/2020/05/19/not-allow-F12/index.html","c756ac6404db5de5ef0d22268fe39520"],["/2020/05/20/python-2/index.html","86197ab2d9113b3562ed4fb10153a5c7"],["/2020/05/23/free-get-189vip/index.html","8ae7e03cb19ef14bc913d4f4874718a0"],["/2020/05/24/Python-3/index.html","9bd9111865bfaec16abd3b406757201e"],["/2020/05/25/Python-4/index.html","144e228a59ff6a983cec97e1cec79c75"],["/2020/05/29/huawei-exam-application/index.html","35a2d9a85524f5232f12621497a151cd"],["/2020/06/01/Python-5/index.html","97ffbdabbee679b234f6e3c255288577"],["/2020/06/11/lanzous/index.html","ae7f3f7bd222eb4befcbf895e4a25c13"],["/2020/06/13/mysql-install/index.html","7bcab841dd17642b2dfa04cf79d03326"],["/2020/07/07/Python_cards_manage/index.html","76ff3430dad1abb42a6e57307f457a84"],["/2020/07/07/Python_variable/index.html","307cbdd5257c5efa60b35a048b65f531"],["/2020/07/17/computer_Internet_1/index.html","ee1d5a8f82520105015c5758aa30c067"],["/2020/08/13/Files_and_directories/index.html","dfdb70c6f51240f62a4e4f4f29c54e11"],["/2020/08/13/system_info/index.html","3e2d9c2879f4631428acc00382ab9565"],["/2020/10/01/5G网络优化/index.html","96b2b79f37a02a1b22bf9113416ab9af"],["/2020/10/05/linux/index.html","d3b205c0b7319596bf0d0b5e43d46262"],["/2020/10/20/Design_patterns_1/index.html","570b4d07b7a84864c99ca7ed6393e971"],["/2020/11/01/network_security_comprehensive/index.html","91534a0f1c6f6727bd9bc28a54541d99"],["/ByteDanceVerify.html","1b7a44db0fb9e2e6bf014fbf8dd8fa2c"],["/about/index.html","a0f406e347a6844065c992e5cac543c9"],["/archives/2020/02/index.html","64d78c892aeaff3f51b9c2af4a01a012"],["/archives/2020/02/page/2/index.html","0e3b5df3ea30c02fdd0315dff29337bd"],["/archives/2020/03/index.html","17935ac0e46c1cd545f9d051c483f00e"],["/archives/2020/03/page/2/index.html","b7aa151d18ec05d7b516465ec9f9b632"],["/archives/2020/04/index.html","81faf0c23368bef5d5c1fa177de922cc"],["/archives/2020/05/index.html","098e785caa50f724928dc0b67271fd92"],["/archives/2020/06/index.html","368267d5ee0d7bbe1c1d3f99c91e9459"],["/archives/2020/07/index.html","864389a77416ecc6b0e122f88fcb49c5"],["/archives/2020/08/index.html","ef084f117a29cd6bf2b506e25d7cb3b9"],["/archives/2020/10/index.html","8864de00ed5285207c78563d42745bb1"],["/archives/2020/11/index.html","17e39164b0cbd1bd3b0c89888dc9dbab"],["/archives/2020/index.html","d2ea3d7a4bc28d2fc57f781a9170785a"],["/archives/2020/page/2/index.html","951461003221785863381c6624a2e36d"],["/archives/2020/page/3/index.html","511d66e9cf7c4b4992964939c57dbe8f"],["/archives/2020/page/4/index.html","fec1536215ae001ffef7b92360629da0"],["/archives/2020/page/5/index.html","d44fa94bd906cd58317e4e6b144cca0c"],["/archives/2020/page/6/index.html","0c9fc98ae0ec4e180ef7bf7a8b0d1d6a"],["/archives/categories/技术/HP交换机配置.html","dac94a1bd6b73adb87dd711a76697378"],["/archives/index.html","b1a76daea6b02ad00f9fa5a5eaafcefc"],["/archives/page/2/index.html","491ca853777dba6568c8378379c18329"],["/archives/page/3/index.html","b1a76daea6b02ad00f9fa5a5eaafcefc"],["/archives/page/4/index.html","491ca853777dba6568c8378379c18329"],["/archives/page/5/index.html","491ca853777dba6568c8378379c18329"],["/archives/page/6/index.html","491ca853777dba6568c8378379c18329"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Java/index.html","bd1610e77ea28f0649157ffbd689290e"],["/categories/Linux/index.html","c9b189f7eda3d5385b0ef0dbce2e5038"],["/categories/Photoshop/index.html","953374b0bee0d93c4f6b833f0f19f618"],["/categories/Python/index.html","d2f965bd458c0827fb5075f77910804c"],["/categories/交换机/index.html","3e3a9d030820672ebc5c1a329d1b8a07"],["/categories/华为认证/index.html","dcd10465bd6b11f0df76e45b1f577a30"],["/categories/小技巧/index.html","3c10a615bb16787cd32046f0c3dc0a6a"],["/categories/数据库/index.html","1a43cce60764584101696a69bcac6c8b"],["/categories/服务器/index.html","e725205e6ef84fc07bc55b183a4aadb3"],["/categories/网络安全/index.html","900a3bfb81abe21edba15edbeb7ec335"],["/categories/计算机三级/index.html","10fd7c8725c79a576fbc43ac408db90a"],["/categories/计算机网络/index.html","8b27972fba20b5ec16728bf0e463d2ba"],["/categories/软件破解/index.html","1cc7ad0df6a26babed8418fcbd96aa5c"],["/categories/通信技术/index.html","b5e5eeac1aa2f2a102d6505aa82e026a"],["/categories/通信技术/page/2/index.html","99367025c060def65bc108afe346be21"],["/category/index.html","fb290469ee31d8441f9b113eddad9d2e"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","5f3d39edbb51658ef5a81ce71334930b"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","80f08d2a326069be54d4f21de6afed97"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","f7e6adeccd1442a3a06bdcf6f375a19a"],["/page/2/index.html","fb3711ab500e8e0c45486141a0d328da"],["/page/3/index.html","9797e22f6b54b41bd8dfdd8ede1f0b59"],["/page/4/index.html","d70e1b72508c30618cf0771e261b7aa4"],["/page/5/index.html","59b3cdb9b23ba787335e7ed3b8cc270a"],["/page/6/index.html","d555cd235ab6cd6ded51ccb292423d39"],["/service-worker.js","7cf937719a254a083170641ffae4f44f"],["/sw-register.js","75729a7ca1d2678827e6983d02aec124"],["/tags/IIS/index.html","1b91940d788e50543a63dbbd0d839783"],["/tags/MySQL/index.html","e99f052f6ec0b1a833a7be15aec6cf35"],["/tags/Photoshop/index.html","48253b3614e3f09b80475f12ef11c44f"],["/tags/VPN/index.html","cac959a7f7b566063da5817634ad7e82"],["/tags/Web服务器/index.html","bb75f5a500f81d719041f9d1e0d7a933"],["/tags/index.html","9b0c47012b7d82d2b71d3724c194fbee"],["/tags/交换机/index.html","46cbd91274f94df0dd9fdafa5c1b6c89"],["/tags/图像处理/index.html","8e84342eb10a98362f51b5720b5aa85f"],["/tags/基础网络/index.html","f0be1dd2ef51aa0adf1fa97d64ea8b01"],["/tags/思科/index.html","3878466723ae5a1fd170296daef83343"],["/tags/思科GRE/index.html","f45ff0d822db3a1812873c10216794f4"],["/tags/数据库/index.html","c2fb75890d16ffb33459f8a30d266103"],["/tags/无线技术/index.html","932927155f418714c91966b9b4cada22"],["/tags/无线技术/page/2/index.html","3c54884a906875caf67dce456e7c2581"],["/tags/系统安装/index.html","6f4ce8cfe7ff9be74a1e006f4c89aa62"],["/tags/网络安全/index.html","4d2c04d0d575edec5cae4af730a7b2b1"],["/tags/网络技术/index.html","c1c9b7ad182ce2073999d6d0da3991c5"],["/tags/计算机三级/index.html","5b6255fcbbd46d98b7e4c7b409a24cb0"],["/tags/路由器/index.html","fbd44af2fee782b658534b6c7e6e620a"],["/tags/软考/index.html","74bd735c2d488b6dabffa20d9b8f7cb3"],["/tags/通信原理/index.html","4cbecbb637388c3f8a8a5de515559beb"],["/tags/通信原理/page/2/index.html","d80bb2d9e498e528aeae9a0880db89ea"],["/tags/通信技术/index.html","484aa4a51526ce271a37e13f06fe3057"],["/tags/通信技术/page/2/index.html","f0176e81b74b9d6a87733b173e01727f"]];
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
