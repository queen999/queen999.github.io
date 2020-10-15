/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["/2020/02/14/RedHat_setup_script/index.html","aa3d286aaa7faf7f27efce36ea621f22"],["/2020/02/14/Windows_Web_build_environment/index.html","0d0816298917516be063d89d195612da"],["/2020/02/14/Windows_Web_build_website/index.html","e654d0e259029cbaa96e61028234f753"],["/2020/02/15/Web_site_SSL/index.html","7f9e54ac9aecb5f3e320125813b00c2a"],["/2020/02/15/Windows_Web_often_use/index.html","225cf6e918eaa969847dbafd0e26e994"],["/2020/02/15/a_server_build_many_webs/index.html","03977f6677c049e20f06de2284afc601"],["/2020/02/24/ssh/index.html","8487f8fecf1fbe2b16fbf2c2e472daa7"],["/2020/02/27/MySQL8_basics/index.html","bac129f98200db71377132a6a97cb2f6"],["/2020/02/27/OLT_command/index.html","578273fdd9d78d0764b91d432dff68f5"],["/2020/02/27/computer_network_basics/index.html","7ff3082f05ab1bd8f280b7cc48bf8313"],["/2020/02/27/switchport-security/index.html","c8737ef248d97faab402e7e84fe6b44e"],["/2020/03/04/acl/index.html","5af5cbc9b5bc358ef3902344b71f9442"],["/2020/03/06/mobile_communication/index.html","9785ce8b0ccfa1bbc28bae8685cd04cc"],["/2020/03/06/wireless_word/index.html","fe4205f0f06e4254946b36d75e3f7f92"],["/2020/03/07/3G/index.html","7eb26db900f6ed9aad89af7bba6c7d54"],["/2020/03/07/GSM/index.html","6e4ca7751771d7b142606ccb5476273b"],["/2020/03/07/IP_Bearer_Network_basic/index.html","4be8b3ca2b0d9eeb9608fded1da08990"],["/2020/03/07/LTE/index.html","26743a03a4793bcf8f8de7f52f2db7c2"],["/2020/03/07/NB-IoT/index.html","46383e478091bcbaec6e2f4736e72ed0"],["/2020/03/07/optical_transport_network_basic/index.html","382848868c6aedc70611e06b9dccd586"],["/2020/03/07/wireless_radio/index.html","12200a9ab5951e0d3567a3b19e658e3f"],["/2020/03/11/Linux_often_use/index.html","27fe7580dd67888348fa705f6ea8b16f"],["/2020/03/11/Python_basic_(1)/index.html","3866c48503d120a48398a9dc187f3071"],["/2020/03/21/GRE-VPN/index.html","8385d9e8a550e185dde70d9e2a80574b"],["/2020/03/25/IPSec_VPN/index.html","9d263b410cfa85e482608a82a30279b7"],["/2020/03/29/FixedTools/index.html","cca5b327fd020abaa91e0ee8b2f5f9f2"],["/2020/03/30/GRE-over-IPSec/index.html","82873560db07546483d306eceee8187a"],["/2020/03/31/bitwarden/index.html","cbea8b0ccfabdaa1172edfbc7ef6cd90"],["/2020/04/03/Layer/index.html","d9c4ea154278d30466e8ec3b0ca8022e"],["/2020/04/04/color/index.html","b9beef9bcbccd4bac64f16950f75f614"],["/2020/04/09/wireless_framework/index.html","dfbcf876f93a720e90b3e639dd5f465c"],["/2020/04/13/manage-MAN-skill/index.html","921f1842cb3dc9d2e344d9043e614c03"],["/2020/04/13/structure-of-MAN/index.html","c534f2057465e1bfdf09cd706f1bc82a"],["/2020/04/20/TD-LTE-System/index.html","69f384fbb6331d70f9034e739c6045c6"],["/2020/04/24/Network_Access/index.html","4ab609242dfeb319d61634979219c54c"],["/2020/04/24/build-MAN-idea/index.html","0795eef7dc144f8b69bc8753db51c4ef"],["/2020/04/25/OFDMA/index.html","27efa5b7012498e4a2410be8a4c81b9b"],["/2020/05/11/MIMO/index.html","d132744ebf023b39f5625dce683dca3c"],["/2020/05/12/ICIC/index.html","b8a0d0db8b29b4f62cf483c82212ba51"],["/2020/05/19/No-module-named-pip/index.html","6a40916e02d7f7d7af96afda26c13c99"],["/2020/05/19/huawei-PCManager/index.html","b5430648b7ce98b4cc5e8fd0ad9e4033"],["/2020/05/19/not-allow-F12/index.html","79453a63ff942d60ea7ffcb86f906a1f"],["/2020/05/20/python-2/index.html","3ba70c27c7c74c97a8366ec66aaf5c1a"],["/2020/05/23/free-get-189vip/index.html","8d0bfe46925a41bf19e4acf0190c8cf1"],["/2020/05/24/Python-3/index.html","ccc2fb20312b14cba12c58e5ad47bf3e"],["/2020/05/25/Python-4/index.html","0a8a25c9028e079e481e8b1ca8478e76"],["/2020/05/29/huawei-exam-application/index.html","bf21eed4e083f0748cbab57a9a40bb6e"],["/2020/06/01/Python-5/index.html","7a45115ad312c4f20d0c208230e5be8a"],["/2020/06/11/lanzous/index.html","f85fdba6b0ae604c07237b9002547a4f"],["/2020/06/13/mysql-install/index.html","f6dc78011c6071a5b80126f199aa0d6d"],["/2020/07/07/Python_cards_manage/index.html","f71bb3dd52143f5347d26489f0df067f"],["/2020/07/07/Python_variable/index.html","a5516bf645efe076ca1b7d6712335b2f"],["/2020/07/17/computer_Internet_1/index.html","2d6dac629e4653628f55bdf3db5b367b"],["/2020/08/13/Files_and_directories/index.html","29ff723b05c2e53fcf7a675d1f34a002"],["/2020/08/13/system_info/index.html","32aa88790cda56655a17148deec9a283"],["/ByteDanceVerify.html","f276c6ff172d400475bc509cbc51e3f0"],["/about/index.html","76d859c939f798d9215ec0503a3e3624"],["/archives/2020/02/index.html","244e0bcee564a1fc440ef44851c8430b"],["/archives/2020/02/page/2/index.html","2725a8bda6eed241f63d08b1841f161b"],["/archives/2020/03/index.html","5fa19ad83a3021855ea4a579f1113bcb"],["/archives/2020/03/page/2/index.html","a247602475be26272b9ecaa5d609dc1e"],["/archives/2020/04/index.html","d138aa85396483605abe9cff0c0725da"],["/archives/2020/05/index.html","b3c2862ebe8aaf3b13067d252472922b"],["/archives/2020/06/index.html","5013d6ca37ae96e09e6f801c898c1788"],["/archives/2020/07/index.html","961bc671217cc41c8b1019c15c8f7c78"],["/archives/2020/08/index.html","0242347b891d3263caf623cf6b53c267"],["/archives/2020/index.html","1f4648a5d5ea07395ce49c1cbde4ca11"],["/archives/2020/page/2/index.html","ce6025b9021a9ae6c56f278a9d21a583"],["/archives/2020/page/3/index.html","74f4047b5cfc745a22d6a5d5a72c120a"],["/archives/2020/page/4/index.html","7ea3cfe81a0a5d9b6b4919368a8fc119"],["/archives/2020/page/5/index.html","8748f3f4820d05df8df35e5965e47e67"],["/archives/2020/page/6/index.html","332285136842d6d2d31005d4346eba30"],["/archives/categories/技术/HP交换机配置.html","d8c147d4c97e2b1739914f47b512a8a5"],["/archives/index.html","6748babb7a07b3e22c133a8f969f57bf"],["/archives/page/2/index.html","6748babb7a07b3e22c133a8f969f57bf"],["/archives/page/3/index.html","6748babb7a07b3e22c133a8f969f57bf"],["/archives/page/4/index.html","8ca63414941f658dcae15e4358ecc774"],["/archives/page/5/index.html","8ca63414941f658dcae15e4358ecc774"],["/archives/page/6/index.html","8ca63414941f658dcae15e4358ecc774"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","8f41c9fce5ea3c00df37ee641b0f3ade"],["/categories/Photoshop/index.html","ef6dd82c7c28ba542cb14272dc9e6b5d"],["/categories/Python/index.html","d77d5413923b045dca0faf620b46fe41"],["/categories/交换机/index.html","21f15eeee093a36d2959d5b1a015b2cb"],["/categories/华为认证/index.html","033d4983aa6f387b5e4a5a2cd2413aa0"],["/categories/小技巧/index.html","17069b248a5d1fee0d66543da65a3e1f"],["/categories/数据库/index.html","50ff7a480076f383b3c6218c47c7bc47"],["/categories/服务器/index.html","8072483a795f2f4e540504e061736c12"],["/categories/网络安全/index.html","b33c522db598e289ce7962cd6d995cad"],["/categories/计算机三级/index.html","05681734a8435a0ea29a23c74f0b3cd4"],["/categories/计算机网络/index.html","3b918b6ccbf56fefa778bf06decfa30b"],["/categories/软件破解/index.html","a217788723dc40089b2b3ea4d061937e"],["/categories/通信技术/index.html","468be132e04636116ba34b3fc81fe2ad"],["/categories/通信技术/page/2/index.html","c1e7f2b734dedf19b2a2c22efc827836"],["/category/index.html","c1b87fc7b0e21c28289174b57d883153"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","f9b468646ad41ebdf5149f8feaf0b29d"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","9683be1fdf8a7b0d88d64168a27d7dbb"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","657cfd5b797fdab003b853d249b5ea6d"],["/page/2/index.html","3998e6168b533a4a4d83465988c31a43"],["/page/3/index.html","1025c9ca45e3a14b56a3b53ce9800278"],["/page/4/index.html","7571d8c9fd6f38c38e7a9f7e82a193f6"],["/page/5/index.html","d6d075997ddaa8135a5848f538e9652c"],["/page/6/index.html","29afd101b4d388bda4b3a4915e572649"],["/sw-register.js","d4b8d58227e4b118936fdf425713ea37"],["/tags/IIS/index.html","f2b8892fc487ee5160a567e0576da553"],["/tags/MySQL/index.html","6842a865d816a127db001c4858308877"],["/tags/Photoshop/index.html","bf570989c2df638135f13cb4ba656cab"],["/tags/VPN/index.html","3ada0fa7482004405302df6cefa74959"],["/tags/Web服务器/index.html","59caa15975d08ec88cfa7b6accc9a84f"],["/tags/index.html","5116209263e47c18319e0a965252c78d"],["/tags/交换机/index.html","e792fea0083f461e64f556bb09c1f59d"],["/tags/图像处理/index.html","79f2cab35f84d20990e99b17f88d6633"],["/tags/基础网络/index.html","ee39770881c768a1da193ff6b0008b4e"],["/tags/思科/index.html","777f5177bf9f463fbe6ab780043f4752"],["/tags/思科GRE/index.html","2a314c4893457f3ce2174f8283d8c483"],["/tags/数据库/index.html","29f04a03ba4d7fc2c5a72b716e9b3bdb"],["/tags/无线技术/index.html","ab24c984d0f1112bf91ddf89c4a6c166"],["/tags/无线技术/page/2/index.html","7547999b5ceb88142684efe3b543ff59"],["/tags/系统安装/index.html","816be61672218521c0f47919a25c0992"],["/tags/网络安全/index.html","80792e4b14cdaec0b824e251b4a68008"],["/tags/网络技术/index.html","e587b98966b6b70497e1865596fc1e50"],["/tags/计算机三级/index.html","114e8b584417d559e96f511cf4475e66"],["/tags/路由器/index.html","53b38cc55ea4d805aeef001c3f2d7ad1"],["/tags/软考/index.html","8e9d64a8509f152013d8e45e2f5eb455"],["/tags/通信原理/index.html","1fcaecb2e30fb48eb192b5d9917d62a5"],["/tags/通信原理/page/2/index.html","ddc635db70980004e183ec62da469563"],["/tags/通信技术/index.html","9a78caf18e037c4f04e671dfa44f9289"],["/tags/通信技术/page/2/index.html","d77804d21487dd9d685581f24c8260b1"]];
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
