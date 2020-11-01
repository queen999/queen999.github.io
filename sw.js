/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["/2020/02/14/RedHat_setup_script/index.html","e2c868da9a0ce9c868df95e965913a0f"],["/2020/02/14/Windows_Web_build_environment/index.html","b6b0047398f902bb91348ccb74a48e47"],["/2020/02/14/Windows_Web_build_website/index.html","bc51925a881810b6c4da29ad58eb85d4"],["/2020/02/15/Web_site_SSL/index.html","83a53fcbf3208166e15161d2653a9622"],["/2020/02/15/Windows_Web_often_use/index.html","62b57ffe27b586295df93cbd8a41b809"],["/2020/02/15/a_server_build_many_webs/index.html","88cb85103d6e4e76eefaa2a8c9af5d5c"],["/2020/02/24/ssh/index.html","a50cdee6e9b984cfdb3ea772dec51c68"],["/2020/02/27/MySQL8_basics/index.html","d19ad14a6ccb544cd8de65dad997eccb"],["/2020/02/27/OLT_command/index.html","03c2cdd42721caf4177eb8ac26b5208b"],["/2020/02/27/computer_network_basics/index.html","43e915be59e9f685277811419538717a"],["/2020/02/27/switchport-security/index.html","89c428a940cf8ee56b3930e551e98940"],["/2020/03/04/acl/index.html","a93be6be20161b205864a6c1ac71a958"],["/2020/03/06/mobile_communication/index.html","5d38efd74622d8316f620fb8876d8ad7"],["/2020/03/06/wireless_word/index.html","cd0e04ad723855d13b23f79aee7d449f"],["/2020/03/07/3G/index.html","21ae25f8644c905792393c0756bc2544"],["/2020/03/07/GSM/index.html","cecf80a2201060ce547a7524277689d3"],["/2020/03/07/IP_Bearer_Network_basic/index.html","73f88022567db74f6fea85cac303d666"],["/2020/03/07/LTE/index.html","293fa7d58d98a340e9d6455c6fb5bb4a"],["/2020/03/07/NB-IoT/index.html","e3a56e3228cd36a4f8edc6c1e9ecc9b0"],["/2020/03/07/optical_transport_network_basic/index.html","866381c19b08e1a4a8a25d34b3710f89"],["/2020/03/07/wireless_radio/index.html","80edf4670aff0b41632a4439ed489cff"],["/2020/03/11/Linux_often_use/index.html","5bdd75e99a0a9fd1ae41ad5f6795eb5f"],["/2020/03/11/Python_basic_(1)/index.html","86d0a22c70a162bd501594e903aaa988"],["/2020/03/21/GRE-VPN/index.html","d19d7cb19fbcd563fba855a6aaffae48"],["/2020/03/25/IPSec_VPN/index.html","e60ba40e8aee0a1bc36df31686f907ff"],["/2020/03/29/FixedTools/index.html","77f74bcae45c7786b4c030c45474d5c7"],["/2020/03/30/GRE-over-IPSec/index.html","a009257448bc276c2edb73487ad7b3c8"],["/2020/03/31/bitwarden/index.html","3cc70f77cfbfc6a210f5e640b339e69e"],["/2020/04/03/Layer/index.html","0ab485f21a83864d97723d802fb00415"],["/2020/04/04/color/index.html","8a3f3722bc2551dc394e73e82b10bf82"],["/2020/04/09/wireless_framework/index.html","936aeb49d3dc6989477fc06722c14f48"],["/2020/04/13/manage-MAN-skill/index.html","0ddbd6cff8e1955e4fadcd441f748a54"],["/2020/04/13/structure-of-MAN/index.html","9a5e8386b054bb26abfb7bf963199e36"],["/2020/04/20/TD-LTE-System/index.html","79e2dc6f2b522dc60123a7ec528327e7"],["/2020/04/24/Network_Access/index.html","54bd41366c32a3fd11999da4d3975e22"],["/2020/04/24/build-MAN-idea/index.html","6bd33ccb38967a265799198bab26d4c3"],["/2020/04/25/OFDMA/index.html","4f0d1e0fe0baebfc2a0e36a91e18fcef"],["/2020/05/11/MIMO/index.html","20102f93b34fde75cc980a7070eb063d"],["/2020/05/12/ICIC/index.html","40a862542220ac83c7e4246c2c266bb0"],["/2020/05/19/No-module-named-pip/index.html","8d869af9ebee8c22409412071b88819f"],["/2020/05/19/huawei-PCManager/index.html","4541f3696e4050d430dfbd70fef7b186"],["/2020/05/19/not-allow-F12/index.html","4f8815d1ae612a64baeadf33d8f4c410"],["/2020/05/20/python-2/index.html","a1b4c3e3c673d13eef1518d646105f72"],["/2020/05/23/free-get-189vip/index.html","66f7a1bc705013ca34ffe4a23f4543bb"],["/2020/05/24/Python-3/index.html","8889709e7ccd9c8a2a00a227c635d838"],["/2020/05/25/Python-4/index.html","dcde701a35c1a9b1242850f73f98f89a"],["/2020/05/29/huawei-exam-application/index.html","68f054fe2e709094a161eb18107427c0"],["/2020/06/01/Python-5/index.html","7476249ea2a00aca4e3576a53dfc8555"],["/2020/06/11/lanzous/index.html","cb1662cf964f4587486869fe1ea8f5e2"],["/2020/06/13/mysql-install/index.html","87f015a429be1d7b756fec88ae4eb07f"],["/2020/07/07/Python_cards_manage/index.html","441e7bf809824038e405f121d6ab2826"],["/2020/07/07/Python_variable/index.html","b32ad08d5c9e977d58a1d7e90a5b312f"],["/2020/07/17/computer_Internet_1/index.html","3f49841fda1bce4acd4857d9c1759a4c"],["/2020/08/13/Files_and_directories/index.html","15a8c1ab1df1fc7933f69bd06797c0b5"],["/2020/08/13/system_info/index.html","89d24ff87a994c5e033956377a16cf56"],["/2020/10/01/5G网络优化/index.html","64647a96405a63efccb611c90fdc1c91"],["/2020/10/05/linux/index.html","7d1ff84e1c225059fafc15fcb1e32546"],["/2020/10/20/Design_patterns_1/index.html","570b4d07b7a84864c99ca7ed6393e971"],["/2020/11/01/network_security_comprehensive/index.html","91534a0f1c6f6727bd9bc28a54541d99"],["/ByteDanceVerify.html","05cad938b3a31fd710055b0acd3e23e4"],["/about/index.html","f8dd3685a071111b8dfa0cb741126398"],["/archives/2020/02/index.html","1ab2a543b0713bda14e8e947525f9e89"],["/archives/2020/02/page/2/index.html","2fd9e5d3f3004f0f1a3f6b305a19fadf"],["/archives/2020/03/index.html","48624221fef7b6ba415d39172e201dd3"],["/archives/2020/03/page/2/index.html","730f19508388c66183a52cb1908da8b5"],["/archives/2020/04/index.html","2edb33414bd7470cb3636feda643bcf1"],["/archives/2020/05/index.html","8c52a18d68c68a85b5b4db25c0078143"],["/archives/2020/06/index.html","676fbc247a9c3b219b3528e79c5c42b5"],["/archives/2020/07/index.html","d3d6243f6e999c1eb7e6ec56931077b9"],["/archives/2020/08/index.html","645cc2f60235ef9c418f298e9d7e0528"],["/archives/2020/10/index.html","a95e18b239b0a4960ce77a7f445396bd"],["/archives/2020/11/index.html","5c355b867cbc4f67b54f07a1579419ad"],["/archives/2020/index.html","83a864b7132d05aabfab12382e23c968"],["/archives/2020/page/2/index.html","1e27f34bff0005c1ab7b7ea75685f33c"],["/archives/2020/page/3/index.html","ec65ab4dd4d81ecf8842724820d1a345"],["/archives/2020/page/4/index.html","6f316a97ebefd16ee3dabe8b592a167e"],["/archives/2020/page/5/index.html","52b6583c0e80983144e07ff9b216bdac"],["/archives/2020/page/6/index.html","6c7d5d75ee03d0f6bf5cea12b598513a"],["/archives/categories/技术/HP交换机配置.html","4e993ae4769ec63ee7e489e4ea4d4d02"],["/archives/index.html","3ba5ae90d13816bc490139b4824ffaa0"],["/archives/page/2/index.html","47666af0a19e409858afdbb0f8fefa38"],["/archives/page/3/index.html","3ba5ae90d13816bc490139b4824ffaa0"],["/archives/page/4/index.html","47666af0a19e409858afdbb0f8fefa38"],["/archives/page/5/index.html","47666af0a19e409858afdbb0f8fefa38"],["/archives/page/6/index.html","47666af0a19e409858afdbb0f8fefa38"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Java/index.html","c2b6344fa0935dc1a373fd37119f8bd3"],["/categories/Linux/index.html","004cd7937423ad1f3587fc1e8bb1d4ed"],["/categories/Photoshop/index.html","d2df1a32526691a7278736a784a6614e"],["/categories/Python/index.html","8471cb27805298054a416691cdbc8263"],["/categories/交换机/index.html","5a686d4179e838f3973fd9e949e94a12"],["/categories/华为认证/index.html","e9036db5299bea38ad385d865c62ffb1"],["/categories/小技巧/index.html","ef32f169cb6f3d6a76cf322bc735ba29"],["/categories/数据库/index.html","d4f30a546295fb6e959d70eaea5c975b"],["/categories/服务器/index.html","d101ea7ef422809fd25689e022ca11a0"],["/categories/网络安全/index.html","7b85009b29a706e1c40bbbb5072ffc97"],["/categories/计算机三级/index.html","297211de97751e0e0e583e50dc002b42"],["/categories/计算机网络/index.html","67c3bc233fab27fdad8b6f60285c0d8f"],["/categories/软件破解/index.html","82bdbf3812957c68ea12f8c8f387629e"],["/categories/通信技术/index.html","151cf86602ecc2303849d1296761115d"],["/categories/通信技术/page/2/index.html","f296bd26423baee1912e2d746eeabab2"],["/category/index.html","5e6a98bd85b241a0c2d4f130b6fde5bd"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","9958c64d482fbfe1ec0dcd18dc2f97ed"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","22583c7fef50021ea13c2d2a06068c47"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","905ab770a44e62fa8efeb74c3ec93c71"],["/page/2/index.html","81782b2ff90343b0682de5474556e836"],["/page/3/index.html","a7e204fd47180c3a6232f0b7e33fead6"],["/page/4/index.html","f85a2cda39feadfe2616fedf085a3c08"],["/page/5/index.html","bb6c3c9f32e47423b1c3e44719a2c3d9"],["/page/6/index.html","53e7e0de533a31201627174ecaaab123"],["/service-worker.js","09d06f1df7bdeaa4135e67e4b79f6c2a"],["/sw-register.js","6e77810e52efc981a6e4d08705320efa"],["/tags/IIS/index.html","b30a69e8a49430d35a08e124aaf3e519"],["/tags/MySQL/index.html","0f360cc361247c0ded5d3bcebb5b19f3"],["/tags/Photoshop/index.html","89d672ad0b079d8bec4bc672ce0f7f93"],["/tags/VPN/index.html","04dfe5fe87c04cfab750982e642315f4"],["/tags/Web服务器/index.html","d0ef3f831f543feb3b6b5d3d22a4f8c1"],["/tags/index.html","c6a88e60c7eb5e07fa6cd7dadbf3a1dc"],["/tags/交换机/index.html","de990b81f0d9d060e1d2109ca265009c"],["/tags/图像处理/index.html","0d66844a3eb72017cf36dcc7d97db0a5"],["/tags/基础网络/index.html","000c74e2a04378f70133eae34dbb412b"],["/tags/思科/index.html","59cf18aa1ed21fa0a29660996f64c03f"],["/tags/思科GRE/index.html","c0aa0c8fd8e1740e2f0e7cf5cabb1b58"],["/tags/数据库/index.html","5c12540af896deb7afa69bf5c22ec58b"],["/tags/无线技术/index.html","0b67eabe561a10100bba3bdf6e2ee7bc"],["/tags/无线技术/page/2/index.html","9d6a77821ddfd468283187446b46277e"],["/tags/系统安装/index.html","c6268903ef67eb80fd77de67ee12076d"],["/tags/网络安全/index.html","1e2c40552d86d4abe28a074a003b0ae4"],["/tags/网络技术/index.html","f083b60ecfe595eea5f0381fa1a4a7c0"],["/tags/计算机三级/index.html","58c9a989ca0fb0aa208aa74f059386fa"],["/tags/路由器/index.html","8b9cada0fd358822755366b8420fd06e"],["/tags/软考/index.html","3cf6f5ae45d713095c90cacbdfafeee0"],["/tags/通信原理/index.html","a7cfdb6e02f86124eeca7d32598d372e"],["/tags/通信原理/page/2/index.html","e61c83cfa69fc8fdda14f1cecd0db82b"],["/tags/通信技术/index.html","c7f47d636f2ef72d0dee66c45c0202c1"],["/tags/通信技术/page/2/index.html","35adb3f4e2b8535a3e3f2252e9649eda"]];
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
