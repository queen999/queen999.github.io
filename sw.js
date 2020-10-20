/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["/2020/02/14/RedHat_setup_script/index.html","ff137a28e9ebf6bdcedec4802917bc8b"],["/2020/02/14/Windows_Web_build_environment/index.html","a9f63ae4295d037e9a9b91b4a3ff0dff"],["/2020/02/14/Windows_Web_build_website/index.html","e2658cbf4b08ac45f932f05ed6b87c35"],["/2020/02/15/Web_site_SSL/index.html","8890b64124a52ac91ba9e7efea95030b"],["/2020/02/15/Windows_Web_often_use/index.html","f93aed80029fa2dec9ef97f9922080ae"],["/2020/02/15/a_server_build_many_webs/index.html","2c26b69374feb89aece6e06de85b398b"],["/2020/02/24/ssh/index.html","587aa236934304c0fb8a48d3a8f1ebf6"],["/2020/02/27/MySQL8_basics/index.html","64d50c238a63a76050ed925a5644455f"],["/2020/02/27/OLT_command/index.html","38ba10d652e8ea2b5e257155dad712ba"],["/2020/02/27/computer_network_basics/index.html","404d197fbdffd2c81e2145008ea0be5a"],["/2020/02/27/switchport-security/index.html","22029480c2edfc4a2fff562f0b2ddb82"],["/2020/03/04/acl/index.html","9681736b086d1ac183f94be54f45e4ab"],["/2020/03/06/mobile_communication/index.html","75af4dfbb24ccf39c952e7d8fd6d038a"],["/2020/03/06/wireless_word/index.html","76698051cc7813837c9b95665c7bb21a"],["/2020/03/07/3G/index.html","aab4955f731b903b7194ab71cd936e7c"],["/2020/03/07/GSM/index.html","a811eae56ffda707282c12301d0c08bc"],["/2020/03/07/IP_Bearer_Network_basic/index.html","16c528edbf6c74ef6be01a1576f5153d"],["/2020/03/07/LTE/index.html","5dd71bef4b8958d838ad90c70ce683dd"],["/2020/03/07/NB-IoT/index.html","0a4b7784aa988e86c1f1ef2d3d1c6061"],["/2020/03/07/optical_transport_network_basic/index.html","6ab97dac2fa77a72076343e074f940ab"],["/2020/03/07/wireless_radio/index.html","731b66dcd52d81c4a5e407dd6484adab"],["/2020/03/11/Linux_often_use/index.html","d7daaf543f74fd0d3d9b42d9a53e2933"],["/2020/03/11/Python_basic_(1)/index.html","bc1a2066b8aa7b8f4aa60a441c5df950"],["/2020/03/21/GRE-VPN/index.html","363530ddf7bc82efd8743c425232eef2"],["/2020/03/25/IPSec_VPN/index.html","1374c540602804e893e74d8bf5703496"],["/2020/03/29/FixedTools/index.html","fa545f186ac7a3f16b6dbfdab7f4f923"],["/2020/03/30/GRE-over-IPSec/index.html","b67b656e44b7e9fce3bf1e94015ccf2d"],["/2020/03/31/bitwarden/index.html","2e76769b5e3371dc5de95020affe1405"],["/2020/04/03/Layer/index.html","b454de8a64e6c18a8222acb377b64e13"],["/2020/04/04/color/index.html","1ff0925f9a6c2ec5104d574ac6051beb"],["/2020/04/09/wireless_framework/index.html","709d04fcc04e680e952ee73784834b1c"],["/2020/04/13/manage-MAN-skill/index.html","1a8d5140b6706693076de2f9f6648250"],["/2020/04/13/structure-of-MAN/index.html","b6cc3bcd0c51e3e7dc5e792951a8b71d"],["/2020/04/20/TD-LTE-System/index.html","a54c75cb8ba33bc748a11b783558318e"],["/2020/04/24/Network_Access/index.html","5e50dda27cc08fe3f6872bde46eb7174"],["/2020/04/24/build-MAN-idea/index.html","dcd8af1e7ab288a8a48ece60bec4345a"],["/2020/04/25/OFDMA/index.html","dc1ce24be8fc1f9abcb8b12766e6f9c5"],["/2020/05/11/MIMO/index.html","b82f150981d58a3f3762a6fb10745aa6"],["/2020/05/12/ICIC/index.html","d86cd1381513490205102fdcf44d43c5"],["/2020/05/19/No-module-named-pip/index.html","70ae06b8242cb4ab4a44ea107f617bd3"],["/2020/05/19/huawei-PCManager/index.html","b23bcfc51c2731520d9eddbba30d4ea1"],["/2020/05/19/not-allow-F12/index.html","5055d9d0fdc1a375717cd698de3a6b49"],["/2020/05/20/python-2/index.html","1446387d5c4b90d8a479fcba12b8a1bb"],["/2020/05/23/free-get-189vip/index.html","b0771112049f496dfaa412bb07a236f4"],["/2020/05/24/Python-3/index.html","3457c4eb8db3700e71de1a6228e8b525"],["/2020/05/25/Python-4/index.html","afc30cd3e77d44afdecb79e519e49a72"],["/2020/05/29/huawei-exam-application/index.html","f1c1dbb9a38e94a50a7f4e1dfc67144e"],["/2020/06/01/Python-5/index.html","1d319527be1b5912fd628127a394bd68"],["/2020/06/11/lanzous/index.html","a0d5ab0c319ce2266a209e629d6e4534"],["/2020/06/13/mysql-install/index.html","388dac8048ddb2767903d1404df0b08b"],["/2020/07/07/Python_cards_manage/index.html","a37a91ead6e3e49655a7ee0b1dfb5867"],["/2020/07/07/Python_variable/index.html","a20b4a023ac5f535ca2c484243571a38"],["/2020/07/17/computer_Internet_1/index.html","ed50468e8de490ced14e3d571697a993"],["/2020/08/13/Files_and_directories/index.html","7d8ec4301e77e94d3ed847dc6a95dc7a"],["/2020/08/13/system_info/index.html","6b9bd66cc8419f00ef007fc016065026"],["/2020/10/01/5G网络优化/index.html","8b1f51d1547dffada58d2cf071897403"],["/2020/10/05/linux/index.html","041c72f8999f41dfd174102d58bc06dd"],["/2020/10/20/Design_patterns_1/index.html","3023cb70eb3438b5a6901e74b03143a1"],["/ByteDanceVerify.html","351b06dcf0f0142437919c76e21b6fc2"],["/about/index.html","92c90f33ac4b46b6ff9af9c59c01fc03"],["/archives/2020/02/index.html","da57370bcf7f8f5fc17a08f4ff02b7e3"],["/archives/2020/02/page/2/index.html","47ee632bee5094819ffaf71906866d38"],["/archives/2020/03/index.html","204b6b448ce754fe90244c0ef882a2f2"],["/archives/2020/03/page/2/index.html","0b155b308de65176c46d12090f247b66"],["/archives/2020/04/index.html","6f59fac073c84f7efad4cff9e139e056"],["/archives/2020/05/index.html","866ffa83ffded4f8e84708b9349df594"],["/archives/2020/06/index.html","deee2ef06f4926d175c5f87147d0a884"],["/archives/2020/07/index.html","c5ea08852d62b550e6377b3636caaf8a"],["/archives/2020/08/index.html","a71772e0c1da16439aeafa7218c06549"],["/archives/2020/10/index.html","eebd7ef09d640ccfd392911987924d1b"],["/archives/2020/index.html","07ee3d8476111a3d58d4eaeb211151ea"],["/archives/2020/page/2/index.html","46f43a085f81ed9ca45b3aa1de49c60f"],["/archives/2020/page/3/index.html","744c89ebd55ed3193a656895c5ace691"],["/archives/2020/page/4/index.html","405809ad2a515809357c727e7f3b8a0a"],["/archives/2020/page/5/index.html","d9613614aa6e37669aba14396703e6ac"],["/archives/2020/page/6/index.html","39fe78dd80073435cdc78db985beebaf"],["/archives/categories/技术/HP交换机配置.html","af81fe45bbbab855ad8703b6d865a1d4"],["/archives/index.html","b790d5d01363f926f85c848cac2cb04d"],["/archives/page/2/index.html","8fa47a1665803075c85dc38531d5d09a"],["/archives/page/3/index.html","b790d5d01363f926f85c848cac2cb04d"],["/archives/page/4/index.html","8fa47a1665803075c85dc38531d5d09a"],["/archives/page/5/index.html","8fa47a1665803075c85dc38531d5d09a"],["/archives/page/6/index.html","8fa47a1665803075c85dc38531d5d09a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Java/index.html","2821c3e8fa061f3ad30b2fd6fd2c650d"],["/categories/Linux/index.html","20a17a653c7413644cdd0a0ead79017e"],["/categories/Photoshop/index.html","5b3f6d5a86c0ca1cdc00a098f13ef0f3"],["/categories/Python/index.html","38d8416576a0784dd3f75e93c7ef2816"],["/categories/交换机/index.html","705981c8cd173b36c27426e74b0a8aa4"],["/categories/华为认证/index.html","3a3f5ef02bfed853ce6876d14cf26b6d"],["/categories/小技巧/index.html","5ce7b514f27c844107907a9cde904ac5"],["/categories/数据库/index.html","2b0089a39941e6ff67e3c879c6213c0b"],["/categories/服务器/index.html","5c25acecd592d03f7c535ecb4a6488a3"],["/categories/网络安全/index.html","3b2a44c37b9ad2b338032384c22b7145"],["/categories/计算机三级/index.html","cd54a2d49744a4643d7ad83e0a69f161"],["/categories/计算机网络/index.html","7ba9c3f2aa5c362a9dcf85c68cc9dde0"],["/categories/软件破解/index.html","f8a18d9f690759ff26d74cd563d575a2"],["/categories/通信技术/index.html","89a00528aaa138ecdc5cdd40f3a43b91"],["/categories/通信技术/page/2/index.html","1b3b8a149cecbc34ec99148771f7a4be"],["/category/index.html","6228727801b70c65df2533119c383ff4"],["/css/style.css","940a599036b2a40f1cda8deba1fa0555"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["/friends/index.html","efcc78ba418aa70117be0d09d902a07d"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","546b4c72f42b97a058afd9ebc1c6f703"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","804e218b8d00f3db3d393a7811cc0f3c"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","a76549e24eaff0f23cfd5d76a46b5b61"],["/page/2/index.html","3ab37a127a2aeae765ca06a14938a5e5"],["/page/3/index.html","2417bd881512d462efd2a2c12d7ca713"],["/page/4/index.html","9d7ce88d64f661f0bcc7a9c1be247ade"],["/page/5/index.html","3a5fcc610bd8d4329b2ea3336f3d89b3"],["/page/6/index.html","f50cfc3e0f302fbee6c56779133ba915"],["/service-worker.js","56517f2995213ca1cdbb49e527b7e254"],["/sw-register.js","bbd42c69820f2d2b48eae26d7d7fecc2"],["/tags/IIS/index.html","9fa549207f91ed5a34997b061a417dbe"],["/tags/MySQL/index.html","90669accd97b2051ecac27bd428d237d"],["/tags/Photoshop/index.html","29c05f5d3b4261626d8a1dea161c58b9"],["/tags/VPN/index.html","a140e06e8c35fdac8058b09c07aa0d88"],["/tags/Web服务器/index.html","a76441bfc53163038dfc262e083ff795"],["/tags/index.html","f616432b1bae12233b42e2780620a4ba"],["/tags/交换机/index.html","a3b3cd1b6f2fff24b9f5a61b652e9cdf"],["/tags/图像处理/index.html","e978ebd8362f0907ada93d055ef6eac4"],["/tags/基础网络/index.html","d7c117ac759f14100f35b2f4321dfc5a"],["/tags/思科/index.html","9c430ceb8cdc6cb2b820fbb6e73b4a0d"],["/tags/思科GRE/index.html","a920d482ae3af3a54a36fbf466e0cb17"],["/tags/数据库/index.html","ac40e4361ebeb31fdf1c1e8cfc8f1ebe"],["/tags/无线技术/index.html","a22167d72408912b27dacaa2d90ed2ee"],["/tags/无线技术/page/2/index.html","39bad52d70ec56dc08c9372f07f62d29"],["/tags/系统安装/index.html","546af2a79a0e969deaed3b21ff13df23"],["/tags/网络安全/index.html","2ba58c8c2803448f3a54238a90ad5abd"],["/tags/网络技术/index.html","d6de94edffcf3ae8862ea77509073517"],["/tags/计算机三级/index.html","efc9f169329824d9343a4e8d6ce47e78"],["/tags/路由器/index.html","8bc02a8335baadcd72adc24e6bfb4b76"],["/tags/软考/index.html","7c03f79dfa35ff75283ba6b6f546d1e0"],["/tags/通信原理/index.html","22a21071765d08303fbc94393f25b67b"],["/tags/通信原理/page/2/index.html","9c46da8f4c51e1e67b2cccd7f8419283"],["/tags/通信技术/index.html","57d202d8fb2f2ad4c35c9d3984876b02"],["/tags/通信技术/page/2/index.html","3b31d35c61401553d41b668ef19b3f4d"]];
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
